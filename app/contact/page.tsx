import { JsonLd } from "@/components/json-ld"
import { Shell } from "@/components/shell"
import { ContactSection } from "@/components/contact-section"
import { Breadcrumbs, FaqList } from "@/components/site-page"
import { breadcrumbSchema, faqSchema, pageMetadata, pageSeo } from "@/lib/seo"

export const metadata = pageMetadata(pageSeo.contact)

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
] as const

const faqs = [
  {
    question: "How soon will you reply?",
    answer:
      "You’ll get a direct reply from the person on the project, usually within a couple of business days. If we can’t take it on, we’ll say so.",
  },
  {
    question: "What should I send?",
    answer:
      "What the business does, what you need, and any timing that matters. A polished brief is optional. If something important is missing, we’ll ask.",
  },
  {
    question: "Will you tell me the price before you start?",
    answer:
      "Yes. Professional websites start at $799. Logo, social, care, and larger builds are a custom quote. We confirm the price before any work starts.",
  },
] as const

export default function ContactPage() {
  return (
    <Shell>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={faqSchema(faqs)} />
      <div className="wrap pt-10 sm:pt-14">
        <Breadcrumbs items={crumbs} />
      </div>
      <ContactSection as="h1" standalone />
      <section className="border-t border-gold/15 py-16 sm:py-20">
        <div className="wrap grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <h2 className="font-display text-4xl leading-[0.95] font-bold text-[#f7f2ea] sm:text-5xl">Before you write</h2>
          <FaqList items={faqs} />
        </div>
      </section>
    </Shell>
  )
}
