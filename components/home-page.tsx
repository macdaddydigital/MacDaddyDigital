import Image from "next/image"
import Link from "next/link"
import { ContactSection } from "@/components/contact-section"
import { FaqList } from "@/components/site-page"
import { JsonLd } from "@/components/json-ld"
import { faqs, portrait, reasons, services } from "@/lib/site"
import { faqSchema } from "@/lib/seo"
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
                  <span
                    aria-hidden="true"
                    className="boring-rule pointer-events-none absolute inset-x-[0.02em] -bottom-[0.2em] h-[max(2px,0.04em)] rounded-full bg-[#e8b84a]"
                  />
                </span>
              </span>
            </h1>
            <p className="hero-rise hero-rise-3 mt-8 max-w-[34ch] text-xl leading-relaxed text-[#e6ddd0] lg:text-[1.375rem]">
              We build websites, brands, and digital experiences that help small businesses look professional, earn trust, and{" "}
              <em className="font-display text-[1.15em] text-[#e8b84a] italic">stand out online</em>.
            </p>
            <div className="hero-rise hero-rise-3 mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href="#contact" className="btn btn-primary btn-lg">
                Let’s Make Some Noise
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:hidden">
            <div className="absolute inset-[12%] -z-10 rounded-full bg-[#e8b84a]/25 blur-3xl" aria-hidden="true" />
            <Image
              src="/hero-stage-v2.webp"
              alt="MacDaddy Digital logo, a gold crown above the name"
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
          <h2 className="max-w-xl font-display text-5xl leading-[0.95] font-bold text-balance text-[#f7f2ea] sm:text-6xl lg:text-7xl">
            What we <em className="text-[#e8b84a] italic">do</em>
          </h2>
          <p className="mt-4 text-sm tracking-[0.12em] text-[#c6a36a] uppercase">
            Professional websites starting at $799.
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-gold/25 bg-black/40 p-7 shadow-[0_0_40px_rgba(226,178,58,0.04)] sm:p-9">
                <h3 className="font-display text-4xl">{service.title}</h3>
                <p className="mt-3 text-muted">{service.text}</p>
                <p className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#e8b84a]">
                  {service.links.map((link) => (
                    <Link key={link.href} href={link.href} className="hover:text-[#f6e2ad]">
                      {link.label}
                    </Link>
                  ))}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-muted">
            <Link href="/website-design" className="text-[#e8b84a] hover:text-[#f6e2ad]">
              Website design
            </Link>{" "}
            for small businesses,{" "}
            <Link href="/logo-design" className="text-[#e8b84a] hover:text-[#f6e2ad]">
              logo design
            </Link>
            ,{" "}
            <Link href="/social-media-management" className="text-[#e8b84a] hover:text-[#f6e2ad]">
              social media
            </Link>
            , and{" "}
            <Link href="/website-maintenance" className="text-[#e8b84a] hover:text-[#f6e2ad]">
              care after launch
            </Link>
            . We work with businesses in{" "}
            <Link href="/website-design-charlottetown" className="text-[#e8b84a] hover:text-[#f6e2ad]">
              Charlottetown
            </Link>{" "}
            and{" "}
            <Link href="/web-design-pei" className="text-[#e8b84a] hover:text-[#f6e2ad]">
              across PEI
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="why" className="scroll-mt-28 border-t border-gold/15 py-20 sm:py-28">
        <div className="wrap">
          <h2 className="max-w-xl font-display text-5xl leading-[0.95] font-bold text-balance text-[#f7f2ea] sm:text-6xl lg:text-7xl">
            Why work with <em className="text-[#e8b84a] italic">us</em>
          </h2>
          <ul className="mt-10 divide-y divide-gold/15 border-y border-gold/15">
            {reasons.map((reason) => (
              <li key={reason.title} className="grid gap-2 py-6 md:grid-cols-[20rem_1fr] md:items-baseline md:gap-10">
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
            <h2 className="font-display text-5xl leading-[0.95] font-bold text-[#f7f2ea] sm:text-6xl lg:text-7xl">
              Built <em className="text-[#e8b84a] italic">different</em>
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">
              MacDaddy Digital was built for businesses that deserve better than cookie-cutter websites. Whether you’re starting from scratch or replacing an outdated online presence, we create digital experiences that actually represent your business.
            </p>
            <p className="mt-8 max-w-2xl border-l-2 border-[#e8b84a] pl-5 font-display text-3xl leading-tight text-[#e8b84a] italic sm:text-5xl">
              The name’s loud. The work is careful.
            </p>
            <p className="mt-6">
              <Link href="/about" className="text-[#e8b84a] hover:text-[#f6e2ad]">
                More about MacDaddy Digital
              </Link>
            </p>
          </div>
        </div>
      </section>

      {projects.length > 0 ? (
        <section id="work" className="scroll-mt-28 border-t border-gold/15 py-20 sm:py-28">
          <div className="wrap">
            <h2 className="font-display text-5xl leading-[0.95] font-bold text-[#f7f2ea] sm:text-6xl lg:text-7xl">Selected work</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
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
        <JsonLd data={faqSchema(faqs)} />
        <div className="wrap grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="font-display text-5xl leading-[0.95] font-bold text-[#f7f2ea] sm:text-6xl lg:text-7xl">
              Questions, <em className="text-[#e8b84a] italic">answered</em>
            </h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <ContactSection />
    </>
  )
}
