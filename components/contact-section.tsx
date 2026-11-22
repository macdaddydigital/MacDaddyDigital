import { ContactForm } from "@/components/contact-form"

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
            Let’s Build Something <em className="text-[#e8b84a] italic">Worth Showing Off.</em>
          </Title>
          <p className="mt-5 max-w-md text-xl text-muted">
            Have an idea, an outdated website, or just know your business needs something better? Tell us what you’re thinking. We’ll help figure out the next step.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
