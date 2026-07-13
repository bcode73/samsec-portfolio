import { json, isValidEmail, verifyTurnstile } from "../_utils/response";

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  TURNSTILE_SECRET_KEY?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid request body" }, 400);
  }

  const { name, email, reason, message, turnstileToken, company } = payload;

  // Honeypot field — if filled, silently accept without sending.
  if (typeof company === "string" && company.length > 0) {
    return json({ ok: true });
  }

  if (typeof name !== "string" || !name.trim() || !isValidEmail(email) || typeof message !== "string" || !message.trim()) {
    return json({ error: "Missing or invalid fields" }, 400);
  }

  const verified = await verifyTurnstile(turnstileToken, env.TURNSTILE_SECRET_KEY, request.headers.get("CF-Connecting-IP"));
  if (!verified) {
    return json({ error: "Verification failed" }, 403);
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL) {
    // Not yet configured — see CONTENT_TODO.md for setting RESEND_API_KEY / CONTACT_TO_EMAIL.
    return json({ error: "Contact form is not yet configured" }, 501);
  }

  const emailRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "SamSec Website <notifications@samsec.com.ng>",
      to: env.CONTACT_TO_EMAIL,
      reply_to: email,
      subject: `[SamSec Contact] ${typeof reason === "string" && reason ? reason : "General Inquiry"} — ${name}`,
      text: `From: ${name} <${email}>\nReason: ${reason ?? "General Inquiry"}\n\n${message}`,
    }),
  });

  if (!emailRes.ok) {
    return json({ error: "Failed to send message" }, 502);
  }

  return json({ ok: true });
};
