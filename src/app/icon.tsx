import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Favicon gerado: monograma "dm" sobre a base escura do site. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0f17",
          color: "#ff8a3d",
          borderRadius: 6,
          fontSize: 15,
          fontWeight: 700,
          fontFamily: "monospace",
        }}
      >
        dm
      </div>
    ),
    { ...size },
  );
}
