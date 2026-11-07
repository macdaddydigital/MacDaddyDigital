import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { Outfit, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { site } from "@/lib/site"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#070707",
  colorScheme: "dark",
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mac Daddy Digital | Better than boring",
    template: "%s | Mac Daddy Digital",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.owner }],
  creator: site.owner,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: site.name,
    title: "Mac Daddy Digital | Better than boring",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mac Daddy Digital | Better than boring",
    description: site.description,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  image: `${site.url}/logo.png`,
  description: site.description,
  founder: {
    "@type": "Person",
    name: site.owner,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: "PE",
    addressCountry: "CA",
  },
  areaServed: "Worldwide",
  knowsAbout: ["Websites", "Web applications", "Custom web projects"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en-CA" className={`${outfit.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === "production" ? <Analytics /> : null}
      </body>
    </html>
  )
}
