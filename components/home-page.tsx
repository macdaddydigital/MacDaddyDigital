import Image from "next/image"
import { ContactSection } from "@/components/contact-section"
import { faqs, portrait, reasons, services, site, steps } from "@/lib/site"
import { projects } from "@/lib/work"

export function HomePage() {
  return (
    <>
      <section className="wrap grid gap-8 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-x-10 lg:py-24">
        <p className="hero-rise kicker lg:col-start-1">
          {site.city}, PEI
        </p>
        <h1 className="hero-rise hero-rise-2 max-w-3xl font-display text-[2.65rem] leading-[0.96] tracking-tight text-balance sm:text-6xl lg:col-start-1 lg:text-7xl">
          Websites and web apps, built by the person who <em className="text-gold italic">makes them.</em>
        </h1>
        <div className="hero-rise relative mx-auto w-full max-w-56 sm:max-w-xs lg:col-start-2 lg:row-span-6 lg:row-start-1 lg:mx-0 lg:max-w-none">
          <div className="absolute inset-[18%] -z-10 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
          <Image
            src="/logo.png"
            alt="Mac Daddy Digital logo, a gold crown above the name"
            width={772}
            height={523}
            priority
            sizes="(min-width: 1024px) 40vw, 280px"
            className="h-auto w-full"
          />
        </div>
        <p className="hero-rise hero-rise-3 max-w-xl text-lg leading-relaxed text-muted sm:text-xl lg:col-start-1">
          I’m {site.owner}. {site.name} is my studio. I build sites and custom web projects for small businesses, creators, and local organizations. Fast turnaround, a modern result, and help after it goes live.
        </p>
        <div className="hero-rise hero-rise-3 flex flex-col gap-3 sm:flex-row lg:col-start-1">
          <a href="#contact" className="btn btn-primary">
            Let’s talk
          </a>
          <a href="#services" className="btn btn-secondary">
            What I build
          </a>
        </div>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-faint sm:flex sm:flex-wrap sm:gap-x-6 lg:col-start-1">
          {["Direct contact", "Fast turnaround", "Help after launch", "PEI and remote"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="services" className="scroll-mt-28 border-t border-gold/15 py-20 sm:py-28">
        <div className="wrap">
          <p className="kicker">Services</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight text-balance sm:text-5xl">
            What I build
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-gold/20 bg-panel/60 p-7 sm:p-9">
                <p className="font-display text-sm tracking-[0.18em] text-gold">{service.index}</p>
                <h3 className="mt-4 font-display text-3xl">{service.title}</h3>
                <p className="mt-3 max-w-md text-muted">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-28 border-t border-gold/15 py-20 sm:py-28">
        <div className="wrap">
          <p className="kicker">Process</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight text-balance sm:text-5xl">
            How it works
          </h2>
          <ol className="relative mt-14 grid gap-10 lg:grid-cols-4">
            <div
              className="absolute top-5 left-5 hidden h-px bg-gold/30 lg:right-[calc(25%-1.25rem)] lg:block"
              aria-hidden="true"
            />
            {steps.map((step) => (
              <li key={step.index} className="relative">
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold bg-night font-display text-sm text-gold">
                  {step.index}
                </span>
                <h3 className="mt-5 font-display text-2xl">{step.title}</h3>
                <p className="mt-2 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="why" className="scroll-mt-28 border-t border-gold/15 py-20 sm:py-28">
        <div className="wrap">
          <p className="kicker">Why me</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight text-balance sm:text-5xl">
            Why work with me
          </h2>
          <ul className="mt-12 divide-y divide-gold/15 border-y border-gold/15">
            {reasons.map((reason) => (
              <li key={reason.title} className="grid gap-2 py-6 md:grid-cols-[16rem_1fr] md:items-baseline md:gap-10">
                <h3 className="font-display text-2xl text-gold">{reason.title}</h3>
                <p className="text-muted">{reason.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="about" className="scroll-mt-28 border-t border-gold/15 py-20 sm:py-28">
        <div className={`wrap grid items-center gap-10 ${portrait.src ? "lg:grid-cols-[18rem_1fr]" : ""}`}>
          {portrait.src ? (
            <Image
              src={portrait.src}
              alt={portrait.alt}
              width={720}
              height={900}
              className="h-auto w-full rounded-3xl border border-gold/20 object-cover"
            />
          ) : null}
          <div>
            <p className="kicker">About</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">A studio of one</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {site.name} is {site.owner}, working from {site.city}, {site.region}, Canada. Small businesses, creators, and local organizations hire me when they want a modern site or a custom web project and would rather talk to the person building it.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink">
              The name’s got a little swagger. The work is careful.
            </p>
          </div>
        </div>
      </section>

      {projects.length > 0 ? (
        <section id="work" className="scroll-mt-28 border-t border-gold/15 py-20 sm:py-28">
          <div className="wrap">
            <p className="kicker">Work</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Selected work</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {projects.map((project) => {
                const body = (
                  <>
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        width={1200}
                        height={800}
                        className="mb-5 h-52 w-full rounded-2xl object-cover"
                      />
                    ) : null}
                    <h3 className="font-display text-3xl">{project.title}</h3>
                    <p className="mt-2 text-muted">{project.summary}</p>
                  </>
                )

                return project.href ? (
                  <a
                    key={project.title}
                    href={project.href}
                    className="rounded-3xl border border-gold/20 bg-panel/60 p-6 transition-colors hover:border-gold/50"
                  >
                    {body}
                  </a>
                ) : (
                  <article key={project.title} className="rounded-3xl border border-gold/20 bg-panel/60 p-6">
                    {body}
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section id="faq" className="scroll-mt-28 border-t border-gold/15 py-20 sm:py-28">
        <div className="wrap grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="kicker">FAQ</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Questions, answered</h2>
          </div>
          <div className="border-t border-gold/15">
            {faqs.map((item) => (
              <details key={item.question} className="group border-b border-gold/15">
                <summary className="flex items-center justify-between gap-6 py-5 font-display text-2xl">
                  {item.question}
                  <span className="faq-plus shrink-0 text-3xl leading-none text-gold transition-transform" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
