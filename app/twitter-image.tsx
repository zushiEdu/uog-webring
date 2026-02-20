import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "56px",
          background: "linear-gradient(140deg, #f4f8f6 0%, #e2efe7 100%)",
          color: "#123726",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 74, fontWeight: 700, lineHeight: 1 }}>uoguelph.network</div>
        <div style={{ fontSize: 32, marginTop: 18 }}>
          University of Guelph student webring
        </div>
      </div>
    ),
    { ...size },
  );
}
