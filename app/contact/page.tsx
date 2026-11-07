import type { Metadata } from "next"
import { ContactSection } from "@/components/contact-section"
import { Shell } from "@/components/shell"

export const metadata: Metadata = {
  title: "Get a quote",
  description:
    "Tell Cody Mac about your website, web app, or custom project. You’ll get a reply with questions or a quote. Based in Charlottetown, PEI, working remotely too.",
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
