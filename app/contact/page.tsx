import type { Metadata } from "next"
import { ContactSection } from "@/components/contact-section"
import { Shell } from "@/components/shell"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your website or the project you have in mind. Professional websites start at $799. Custom work is quoted for the job. Charlottetown, PEI.",
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <Shell>
      <ContactSection as="h1" standalone />
    </Shell>
  )
}
