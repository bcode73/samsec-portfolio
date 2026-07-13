import { json, isValidEmail } from "../_utils/response";

interface Env {
  RESEND_API_KEY?: string;
  RESEND_AUDIENCE_ID?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid request body" }, 400);
  }

  const { email } = payload;
  if (!isValidEmail(email)) {
    return json({ error: "Invalid email" }, 400);
  }

  if (!env.RESEND_API_KEY || !env.RESEND_AUDIENCE_ID) {
    // Not yet configured — see CONTENT_TODO.md for setting RESEND_API_KEY / RESEND_AUDIENCE_ID.
    return json({ error: "Newsletter is not yet configured" }, 501);
  }

  const res = await fetch(`https://api.resend.com/audiences/${env.RESEND_AUDIENCE_ID}/contacts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, unsubscribed: false }),
  });

  if (!res.ok && res.status !== 409) {
    return json({ error: "Failed to subscribe" }, 502);
  }

  return json({ ok: true });
};
