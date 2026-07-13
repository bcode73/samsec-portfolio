import { handleContact } from "./contact";
import { handleSubscribe } from "./subscribe";
import { json } from "./utils";
import type { Env } from "./env";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "POST" && url.pathname === "/api/contact") {
      return handleContact(request, env);
    }

    if (request.method === "POST" && url.pathname === "/api/subscribe") {
      return handleSubscribe(request, env);
    }

    if (url.pathname.startsWith("/api/")) {
      return json({ error: "Not found" }, 404);
    }

    return env.ASSETS.fetch(request);
  },
};
