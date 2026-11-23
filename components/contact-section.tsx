import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { site } from "@/lib/site"

const steps = [
  "Tell us what the business needs. A polished brief is optional.",
  "We read it and write back, usually within a couple of business days. You get a direct reply from the person on the project.",
  "If it’s a fit, we confirm the scope and the price before anything starts. Professional websites start at $799. Other work is a custom quote.",
  "Then we build it with you, review it, and launch.",
]

export function ContactSection({
  as = "h2",
  standalone = false,
}: {
  as?: "h1" | "h2"
  standalone?: boolean
}) {
  const Title = as

  return (
    <section id="contact" className={`scroll-mt-28 border-t border-gold/15 ${standalone ? "py-12 sm:py-20" : "py-20 sm:py-28"}`}>
      <div className="wrap grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <Title className="font-display text-5xl leading-[0.95] font-bold text-balance text-[#f7f2ea] sm:text-6xl lg:text-7xl">
            Let’s Build Something <em className="text-[#e8b84a] italic">Worth Showing Off.</em>
          </Title>
          <p className="mt-5 max-w-md text-xl text-muted">
            Have an idea, an outdated website, or just know your business needs something better? Tell us what you’re thinking. We’ll help figure out the next step.
          </p>
          {standalone ? (
            <>
              <h2 className="mt-10 font-display text-3xl text-[#f7f2ea]">What happens next</h2>
              <ol className="mt-4 max-w-md list-decimal space-y-3 pl-5 text-muted">
                {steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </>
          ) : (
            <p className="mt-6">
              <Link href="/contact" className="text-[#e8b84a] hover:text-[#f6e2ad]">
                Open the contact page
              </Link>
            </p>
          )}
          <p className="mt-6 text-sm text-faint">
            Or email{" "}
            <a className="text-[#e8b84a] hover:text-[#f6e2ad]" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
