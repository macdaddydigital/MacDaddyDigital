import { ImageResponse } from "next/og"

export const alt = "Mac Daddy Digital. Websites and web apps from Charlottetown, PEI."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070707",
          color: "#f4efe6",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 6,
            color: "#e4c06a",
            textTransform: "uppercase",
          }}
        >
          Mac Daddy Digital
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            lineHeight: 1.05,
            letterSpacing: -1,
            maxWidth: 920,
          }}
        >
          Websites and web apps, built by the person who makes them.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#c9c0b1" }}>
          Charlottetown, Prince Edward Island
        </div>
      </div>
    ),
    { ...size },
  )
}
