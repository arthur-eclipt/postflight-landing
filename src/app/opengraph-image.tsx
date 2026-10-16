import { ImageResponse } from "next/og";

export const alt = "PostAirborne — The pilot logbook that proves itself.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          backgroundColor: "#0A0A0B",
          backgroundImage:
            "radial-gradient(ellipse 1200px 400px at 50% 110%, rgba(201, 169, 97, 0.18), transparent 70%)",
          fontFamily: "Georgia, serif",
          color: "#F5F1E8",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: -0.5,
          }}
        >
          <span>Post</span>
          <span style={{ color: "#C9A961", margin: "0 4px" }}>·</span>
          <span>Flight</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: -2.5,
          }}
        >
          <div style={{ display: "flex" }}>The pilot logbook</div>
          <div style={{ display: "flex" }}>that proves itself.</div>
          <div
            style={{
              display: "flex",
              color: "#C9A961",
              fontStyle: "italic",
              marginTop: 8,
            }}
          >
            Founding 500 — limited.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#9A9690",
          }}
        >
          <div style={{ display: "flex" }}>
            ADS-B verified · EASA · UK CAA · FAA
          </div>
          <div style={{ display: "flex" }}>postairborne.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
