import Image from "next/image"
import { ContactSection } from "@/components/contact-section"
import { faqs, portrait, reasons, services, site, steps } from "@/lib/site"
import { projects } from "@/lib/work"

export function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[calc(100svh-5.5rem)] items-center overflow-hidden lg:min-h-[calc(100svh-6rem)]">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block" aria-hidden="true">
          <div className="absolute top-1/2 right-[calc(40px-10.7vw)] w-[59.9vw] -translate-y-1/2">
            <div className="absolute top-[42%] left-1/2 h-[55%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e8b84a]/25 blur-3xl" />
            <Image
              src="/hero-stage-v2.webp"
              alt=""
              width={945}
              height={1040}
              priority
              className="hero-stage relative h-auto w-full"
            />
          </div>
        </div>
        <div className="wrap relative z-10 w-full py-10 lg:py-8">
          <div className="max-w-[calc(100%-1rem)] lg:max-w-[46rem]">
            <p className="hero-rise kicker text-base tracking-[0.32em] lg:text-lg">Charlottetown, PEI</p>
            <h1 className="hero-rise hero-rise-2 mt-6 font-display text-[2.85rem] leading-[0.88] font-bold tracking-[-0.03em] text-[#f7f2ea] sm:text-[3.75rem] lg:text-[min(6.35rem,calc(44vw/6.15))]">
              <span className="block">Your Business</span>
              <span className="block">Deserves Better</span>
              <span className="block">
                Than{" "}
                <span className="relative inline-block italic text-[#e8b84a]">
                  Boring.
                  <svg
                    viewBox="0 0 280 40"
                    className="pointer-events-none absolute -bottom-[0.22em] left-[-3%] h-[0.38em] w-[110%]"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 22 C 30 8, 55 30, 95 16 C 130 4, 165 26, 210 14 C 235 8, 255 16, 274 12 C 250 24, 210 28, 165 22 C 120 16, 70 32, 28 22 C 16 18, 8 20, 6 22 Z"
                      fill="#e6b23a"
                    />
                    <path
                      d="M18 24 C 70 30, 140 12, 230 20"
                      fill="none"
                      stroke="#f6d98a"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>
            <p className="hero-rise hero-rise-3 mt-8 max-w-[34ch] text-xl leading-relaxed text-[#e6ddd0] lg:text-[1.375rem]">
              Forget forgettable. We create bold websites, distinctive brands, and clever digital solutions that bring smart thinking with{" "}
              <em className="font-display text-[1.15em] text-[#e8b84a] italic">standout style</em>.
            </p>
            <div className="hero-rise hero-rise-3 mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href="#contact" className="btn btn-primary btn-lg">
                Let’s Make Some Noise
              </a>
              <a href="#services" className="btn btn-secondary btn-lg">
                Explore Our Services
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:hidden">
            <div className="absolute inset-[12%] -z-10 rounded-full bg-[#e8b84a]/25 blur-3xl" aria-hidden="true" />
            <Image
              src="/hero-stage-v2.webp"
              alt="Mac Daddy Digital logo, a gold crown above the name"
              width={945}
              height={1040}
              priority
              sizes="(max-width: 1024px) 80vw, 0px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 border-t border-gold/15 py-20 sm:py-28">
        <div className="wrap">
          <p className="kicker">Services</p>
          <h2 className="mt-4 max-w-xl font-display text-5xl leading-[0.95] font-bold text-balance text-[#f7f2ea] sm:text-6xl lg:text-7xl">
            What we <em className="text-[#e8b84a] italic">build</em>
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
                <article key={service.title} className="rounded-3xl border border-gold/25 bg-black/40 p-7 shadow-[0_0_40px_rgba(226,178,58,0.04)] sm:p-9">
                <p className="font-display text-sm tracking-[0.18em] text-gold">{service.index}</p>
                <h3 className="mt-4 font-display text-4xl">{service.title}</h3>
                <p className="mt-3 max-w-md text-muted">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-28 border-t border-gold/15 py-20 sm:py-28">
        <div className="wrap">
          <p className="kicker">Process</p>
          <h2 className="mt-4 max-w-xl font-display text-5xl leading-[0.95] font-bold text-balance text-[#f7f2ea] sm:text-6xl lg:text-7xl">
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
                <h3 className="mt-5 font-display text-3xl">{step.title}</h3>
                <p className="mt-2 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="why" className="scroll-mt-28 border-t border-gold/15 py-20 sm:py-28">
        <div className="wrap">
          <p className="kicker">Why us</p>
          <h2 className="mt-4 max-w-xl font-display text-5xl leading-[0.95] font-bold text-balance text-[#f7f2ea] sm:text-6xl lg:text-7xl">
            Why work with <em className="text-[#e8b84a] italic">us</em>
          </h2>
          <ul className="mt-12 divide-y divide-gold/15 border-y border-gold/15">
            {reasons.map((reason) => (
              <li key={reason.title} className="grid gap-2 py-6 md:grid-cols-[16rem_1fr] md:items-baseline md:gap-10">
                <h3 className="font-display text-3xl text-gold">{reason.title}</h3>
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
            <h2 className="mt-4 font-display text-5xl leading-[0.95] font-bold text-[#f7f2ea] sm:text-6xl lg:text-7xl">
              A studio of <em className="text-[#e8b84a] italic">one</em>
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
              {site.name} is {site.owner}, working from {site.city}, {site.region}, Canada. Small businesses, creators, and local groups come here when they want a site or a web app with some swagger, and a careful build behind it.
            </p>
            <p className="mt-5 max-w-2xl font-display text-3xl text-[#f7f2ea] italic sm:text-4xl">
              The name’s loud. The work is careful.
            </p>
          </div>
        </div>
      </section>

      {projects.length > 0 ? (
        <section id="work" className="scroll-mt-28 border-t border-gold/15 py-20 sm:py-28">
          <div className="wrap">
            <p className="kicker">Work</p>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] font-bold text-[#f7f2ea] sm:text-6xl lg:text-7xl">Selected work</h2>
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
            <h2 className="mt-4 font-display text-5xl leading-[0.95] font-bold text-[#f7f2ea] sm:text-6xl lg:text-7xl">
              Questions, <em className="text-[#e8b84a] italic">answered</em>
            </h2>
          </div>
          <div className="border-t border-gold/15">
            {faqs.map((item) => (
              <details key={item.question} className="group border-b border-gold/15">
                <summary className="flex items-center justify-between gap-6 py-6 font-display text-2xl sm:text-3xl">
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
