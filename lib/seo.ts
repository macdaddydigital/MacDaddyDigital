import type { Metadata } from "next"
import { site } from "@/lib/site"

export const businessId = `${site.url}/#business`

export const pageSeo = {
  home: {
    path: "/",
    title: "MacDaddy Digital | Websites and Brands for Small Businesses",
    description:
      "Professional websites, brands, and digital work for small businesses in Charlottetown and across PEI. Websites start at $799.",
    absoluteTitle: true,
    changeFrequency: "monthly",
    priority: 1,
  },
  websiteDesign: {
    path: "/website-design",
    title: "Website Design for Small Businesses",
    description:
      "Custom website design for small businesses that need to look professional and earn trust. Charlottetown, PEI. Sites start at $799.",
    absoluteTitle: false,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  logoDesign: {
    path: "/logo-design",
    title: "Logo Design PEI",
    description:
      "Logo design PEI for businesses that need a recognizable mark, not a forgettable file. Brand direction included. Custom quote.",
    absoluteTitle: false,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  social: {
    path: "/social-media-management",
    title: "Social Media Management for Local Businesses",
    description:
      "Social media management for local businesses in Charlottetown and PEI. Steady content that looks polished and sounds like you. Custom quote.",
    absoluteTitle: false,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  maintenance: {
    path: "/website-maintenance",
    title: "Website Maintenance and Support",
    description:
      "Website maintenance after launch: updates, fixes, and support so the site stays current. Charlottetown, PEI. Care plans are a custom quote.",
    absoluteTitle: false,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  about: {
    path: "/about",
    title: "About MacDaddy Digital | Charlottetown, PEI",
    description:
      "MacDaddy Digital helps small businesses stand out with careful websites, brands, and digital work. Based in Charlottetown, Prince Edward Island.",
    absoluteTitle: true,
    changeFrequency: "yearly",
    priority: 0.6,
  },
  contact: {
    path: "/contact",
    title: "Contact MacDaddy Digital | Charlottetown, PEI",
    description:
      "Start a project with MacDaddy Digital. A direct reply from the person building it. Websites from $799. Charlottetown, Prince Edward Island.",
    absoluteTitle: true,
    changeFrequency: "yearly",
    priority: 0.7,
  },
  charlottetown: {
    path: "/website-design-charlottetown",
    title: "Website Design in Charlottetown",
    description:
      "Website design for Charlottetown businesses that want to look as capable as the work they do. Prince Edward Island. Sites start at $799.",
    absoluteTitle: false,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  pei: {
    path: "/web-design-pei",
    title: "Web Design PEI",
    description:
      "Web design PEI for businesses in Charlottetown, Summerside, Stratford, Cornwall, Montague, and across the Island. Sites start at $799.",
    absoluteTitle: false,
    changeFrequency: "monthly",
    priority: 0.7,
  },
} as const

export type PageSeo = (typeof pageSeo)[keyof typeof pageSeo]

export function pageMetadata(page: PageSeo): Metadata {
  const branded = page.absoluteTitle ? page.title : `${page.title} | ${site.name}`

  return {
    title: page.absoluteTitle ? { absolute: page.title } : page.title,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      title: branded,
      description: page.description,
      url: page.path,
      siteName: site.name,
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: branded,
      description: page.description,
    },
  }
}

type Faq = { question: string; answer: string }

export function faqSchema(faqs: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? site.url : `${site.url}${item.path}`,
    })),
  }
}

export function serviceSchema(input: {
  name: string
  serviceType: string
  description: string
  path: string
  area: "pei" | "charlottetown" | "both"
  priceFrom?: number
}) {
  const areaServed =
    input.area === "charlottetown"
      ? [{ "@type": "City", name: "Charlottetown" }]
      : input.area === "pei"
        ? [{ "@type": "AdministrativeArea", name: "Prince Edward Island" }]
        : [
            { "@type": "City", name: "Charlottetown" },
            { "@type": "AdministrativeArea", name: "Prince Edward Island" },
          ]

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    url: `${site.url}${input.path}`,
    provider: { "@id": businessId },
    areaServed,
    ...(input.priceFrom
      ? {
          offers: {
            "@type": "Offer",
            price: String(input.priceFrom),
            priceCurrency: "CAD",
            description: "Professional websites starting at $799. Larger builds are a custom quote.",
            url: `${site.url}${input.path}`,
          },
        }
      : {}),
  }
}

export function businessGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        email: site.email,
        logo: `${site.url}/icon.png`,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: site.url,
        inLanguage: "en-CA",
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": businessId,
        name: site.name,
        url: site.url,
        email: site.email,
        image: `${site.url}/og-logo.jpg`,
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
        areaServed: [
          { "@type": "City", name: "Charlottetown" },
          { "@type": "AdministrativeArea", name: "Prince Edward Island" },
        ],
        knowsAbout: [
          "Website design",
          "Logo design",
          "Brand identity",
          "Social media management",
          "Website maintenance",
          "Custom digital projects",
        ],
      },
    ],
  }
}
