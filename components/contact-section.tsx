import { ContactForm } from "@/components/contact-form"
import { site } from "@/lib/site"

export function ContactSection({
  as = "h2",
  standalone = false,
}: {
  as?: "h1" | "h2"
  standalone?: boolean
}) {
  const Title = as

  return (
    <section id="contact" className={`scroll-mt-28 border-t border-gold/15 ${standalone ? "py-16 sm:py-24" : "py-20 sm:py-28"}`}>
      <div className="wrap grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <Title className="font-display text-5xl leading-[0.95] font-bold text-balance text-[#f7f2ea] sm:text-6xl lg:text-7xl">
            Let’s make some <em className="text-[#e8b84a] italic">noise.</em>
          </Title>
          <p className="mt-5 max-w-md text-xl text-muted">
            A rough idea is enough. We’ll come back with questions, a quote, or an honest no.
          </p>
          <p className="mt-8 text-sm text-faint">
            {site.city}, {site.region}
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
