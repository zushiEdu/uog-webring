import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(135deg, #f8f4e9 0%, #e9f4ec 45%, #d6eadf 100%)",
          color: "#113726",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 34, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>
          University of Guelph
        </div>
        <div style={{ fontSize: 88, lineHeight: 1, fontWeight: 700 }}>uoguelph.network</div>
        <div style={{ fontSize: 36, marginTop: 20 }}>
          A student webring for projects, portfolios, and personal websites.
        </div>
      </div>
    ),
    { ...size },
  );
}
