import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site.config";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0A0A0B",
          color: "#FCFCFB",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              backgroundColor: "#FCFCFB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0A0A0B",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 28, letterSpacing: -0.5 }}>{siteConfig.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 56, lineHeight: 1.15, maxWidth: 920, letterSpacing: -1 }}>
            Building AI-powered infrastructure and security products, starting with SamSec Ops.
          </div>
          <div style={{ fontSize: 22, color: "#a3a3ac" }}>Samuel Omobusuyi, AI Security Engineer &amp; Founder</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
