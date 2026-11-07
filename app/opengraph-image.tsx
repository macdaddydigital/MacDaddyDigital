import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

export const alt = "Mac Daddy Digital. Your business deserves better than boring."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/og-logo.jpg"))
  const src = `data:image/jpeg;base64,${logo.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#000000",
          color: "#f7f2ea",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "58%",
            padding: "64px 36px 64px 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: 4,
              color: "#e8b84a",
              textTransform: "uppercase",
            }}
          >
            Charlottetown, PEI
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              lineHeight: 0.95,
              marginTop: 24,
              letterSpacing: -1,
            }}
          >
            Your business deserves better than boring.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 24, color: "#ddd4c6" }}>
            Bold websites. Standout style.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "42%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={src} width={460} height={510} alt="" />
        </div>
      </div>
    ),
    { ...size },
  )
}
