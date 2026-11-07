import Image from "next/image"
import { ContactSection } from "@/components/contact-section"
import { faqs, portrait, reasons, services, site, steps } from "@/lib/site"
import { projects } from "@/lib/work"

export function HomePage() {
  return (
    <>
      <section className="wrap grid items-center gap-8 pb-16 pt-4 sm:pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-20 lg:pt-2">
        <div>
          <p className="hero-rise kicker">Charlottetown, PEI</p>
          <h1 className="hero-rise hero-rise-2 mt-5 font-display text-[2.55rem] leading-[0.92] font-bold tracking-[-0.02em] text-[#f7f2ea] sm:text-6xl lg:text-[4.05rem]">
            <span className="block">Your Business</span>
            <span className="block">Deserves Better</span>
            <span className="block">
              Than{" "}
              <span className="relative inline-block italic text-[#e8b84a]">
                Boring.
                <svg
                  viewBox="0 0 240 28"
                  className="pointer-events-none absolute -bottom-[0.05em] left-[-2%] h-[0.34em] w-[108%]"
                  aria-hidden="true"
                >
                  <path
                    d="M4 14 C 28 8, 48 18, 86 12 C 124 6, 150 16, 190 11 C 210 8, 224 12, 236 10 C 220 16, 190 18, 150 16 C 110 14, 70 20, 28 16 C 16 15, 8 16, 4 15 Z"
                    fill="#e6b23a"
                  />
                </svg>
              </span>
            </span>
          </h1>
          <p className="hero-rise hero-rise-3 mt-7 max-w-xl text-base leading-relaxed text-[#ddd4c6] sm:text-lg">
            Forget forgettable. We create bold websites, distinctive brands, and clever digital solutions that bring smart thinking with{" "}
            <em className="font-display text-[#e8b84a] italic">standout style</em>.
          </p>
          <div className="hero-rise hero-rise-3 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#contact" className="btn btn-primary">
              Let’s Make Some Noise
            </a>
            <a href="#services" className="btn btn-secondary">
              Explore Our Services
            </a>
          </div>
        </div>
        <div className="hero-rise relative mx-auto w-full max-w-[17rem] sm:max-w-sm lg:mx-0 lg:max-w-none">
          <Image
            src="/hero-logo.webp"
            alt="Mac Daddy Digital logo, a gold crown above the name"
            width={700}
            height={777}
            priority
            sizes="(min-width: 1024px) 46vw, 272px"
            className="h-auto w-full"
          />
        </div>
      </section>

      <section id="services" className="scroll-mt-28 border-t border-gold/15 py-20 sm:py-28">
        <div className="wrap">
          <p className="kicker">Services</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight font-semibold text-balance text-[#f7f2ea] sm:text-5xl">
            What we <em className="text-[#e8b84a] italic">build</em>
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
                <article key={service.title} className="rounded-3xl border border-gold/25 bg-black/40 p-7 shadow-[0_0_40px_rgba(226,178,58,0.04)] sm:p-9">
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
          <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight font-semibold text-balance text-[#f7f2ea] sm:text-5xl">
            How it <em className="text-[#e8b84a] italic">works</em>
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
          <p className="kicker">Why us</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight font-semibold text-balance text-[#f7f2ea] sm:text-5xl">
            Why work with <em className="text-[#e8b84a] italic">us</em>
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
            <h2 className="mt-4 font-display text-4xl leading-tight font-semibold text-[#f7f2ea] sm:text-5xl">
              A studio of <em className="text-[#e8b84a] italic">one</em>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {site.name} is {site.owner}, working from {site.city}, {site.region}, Canada. Small businesses, creators, and local groups come here when they want a site or a web app with some swagger, and a careful build behind it.
            </p>
            <p className="mt-5 max-w-2xl font-display text-2xl text-[#f7f2ea] italic">
              The name’s loud. The work is careful.
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
            <h2 className="mt-4 font-display text-4xl leading-tight font-semibold text-[#f7f2ea] sm:text-5xl">
              Questions, <em className="text-[#e8b84a] italic">answered</em>
            </h2>
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
