import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070707",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 64 64">
          <path fill="#e4c06a" d="M6 46 L16 18 L26 32 L32 10 L38 32 L48 18 L58 46 Z" />
          <rect x="8" y="46" width="48" height="8" rx="1" fill="#e4c06a" />
        </svg>
      </div>
    ),
    { ...size },
  )
}
