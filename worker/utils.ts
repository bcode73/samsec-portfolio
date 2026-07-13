export function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export function isValidEmail(email: unknown): email is string {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function verifyTurnstile(token: unknown, secret: string | undefined, ip: string | null): Promise<boolean> {
  // Turnstile is optional until NEXT_PUBLIC_TURNSTILE_SITE_KEY / TURNSTILE_SECRET_KEY are configured.
  // See CONTENT_TODO.md. Once both are set, the contact form should send a token and this becomes required.
  if (!secret) return true;
  if (typeof token !== "string" || !token) return false;

  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
  });
  const outcome = (await res.json()) as { success: boolean };
  return outcome.success;
}
