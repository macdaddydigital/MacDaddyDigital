import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { Fraunces, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { site } from "@/lib/site"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#070707",
  colorScheme: "dark",
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mac Daddy Digital | Websites and web apps",
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
    title: "Mac Daddy Digital | Websites and web apps",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mac Daddy Digital | Websites and web apps",
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
    <html lang="en-CA" className={`${outfit.variable} ${fraunces.variable}`}>
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
