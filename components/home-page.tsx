import Image from "next/image"
import Link from "next/link"
import { ContactSection } from "@/components/contact-section"
import { FaqList } from "@/components/site-page"
import { JsonLd } from "@/components/json-ld"
import { faqs } from "@/lib/site"
import { faqSchema } from "@/lib/seo"

const offers = [
  {
    title: "Business Websites",
    href: "/website-design",
    link: "Website design",
    items: ["Mobile-first", "Google-ready", "Fast loading", "Contact forms", "Google Maps", "Analytics"],
  },
  {
    title: "Redesigns",
    href: "/website-design",
    link: "Refresh a site",
    items: ["Clearer structure", "Mobile layout", "A stronger first impression", "Keep what already works", "An honest call if a rebuild is wiser"],
  },
  {
    title: "Landing Pages",
    href: "/website-design",
    link: "Website design",
    items: ["One offer, one page", "A headline that says what you do", "One clear way to get in touch", "Fast on a phone", "Easy to share"],
  },
  {
    title: "Logos and Branding",
    href: "/logo-design",
    link: "Logo design",
    items: ["A mark that holds up small", "Colour and type direction", "Files you can actually use", "Notes on how to use it"],
  },
  {
    title: "Site Care",
    href: "/website-maintenance",
    link: "Website care",
    items: ["Updates when the business changes", "Fixes when a page breaks", "Someone who knows the site", "We don’t disappear after launch"],
  },
  {
    title: "Social",
    href: "/social-media-management",
    link: "Social media",
    items: ["A posting rhythm you can keep", "Captions in your voice", "A look that stays consistent", "A plain check on what’s worth repeating"],
  },
] as const

const missing = [
  "Facebook page only",
  "Slow website",
  "Gmail address",
  "No SEO",
  "No Google Business optimization",
]

const included = [
  "Professional website",
  "Custom domain email",
  "Google optimized",
  "Mobile optimized",
  "Fast hosting",
  "Built to rank locally",
]

const facebook = ["Limited branding", "Easy to forget", "Owned by Meta", "Hard to find on Google"]
const website = ["Your brand", "Memorable", "You own it", "Google searchable"]

const steps = [
  "Tell us about your business",
  "We design your site",
  "Review and revisions",
  "Launch",
  "Ongoing support",
]

function Mark({ kind }: { kind: "yes" | "no" }) {
  const yes = kind === "yes"
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className={`mt-0.5 shrink-0 ${yes ? "text-[#e8b84a]" : "text-[#a45a52]"}`}>
      {yes ? (
        <path d="M3.5 9.2 L7.2 13 L14.5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M4.5 4.5 L13.5 13.5 M13.5 4.5 L4.5 13.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      )}
    </svg>
  )
}

function CheckList({ items, kind }: { items: readonly string[]; kind: "yes" | "no" }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[#f4efe6]">
          <Mark kind={kind} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

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
              className="hero-stage hero-drift relative h-auto w-full"
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
            <p className="hero-rise hero-rise-3 mt-8 max-w-[28ch] text-xl leading-snug text-[#e6ddd0] lg:text-[1.375rem]">
              We build websites that earn trust before you ever answer the phone.
            </p>
            <p className="hero-rise hero-rise-3 mt-5 text-lg font-semibold text-[#e8b84a]">Websites starting at $799</p>
            <div className="hero-rise hero-rise-3 mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get a Free Quote
              </Link>
              <a href="#services" className="text-base font-semibold text-[#e8b84a] hover:text-[#f6e2ad]">
                See what we do
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
              className="hero-drift h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="reveal border-t border-gold/15 py-20 sm:py-28">
        <div className="wrap max-w-4xl">
          <h2 className="font-display text-5xl leading-[0.95] font-bold text-balance text-[#f7f2ea] sm:text-6xl lg:text-7xl">
            We help small businesses look like the <em className="text-[#e8b84a] italic">obvious choice.</em>
          </h2>
          <p className="mt-8 max-w-3xl font-display text-2xl leading-snug text-[#f7f2ea] sm:text-3xl">
            We don’t build pretty online brochures. We build websites that convince people to call you instead of your competitor.
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
      </section>

      <section id="services" className="reveal scroll-mt-28 border-t border-gold/15 py-20 sm:py-28">
        <div className="wrap">
          <h2 className="max-w-xl font-display text-5xl leading-[0.95] font-bold text-balance text-[#f7f2ea] sm:text-6xl lg:text-7xl">
            What we <em className="text-[#e8b84a] italic">do</em>
          </h2>
          <p className="mt-4 text-sm tracking-[0.12em] text-[#c6a36a] uppercase">Professional websites starting at $799.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => (
              <article key={offer.title} className="lift rounded-3xl border border-gold/25 bg-black/40 p-7 sm:p-8">
                <h3 className="font-display text-3xl text-[#f7f2ea] sm:text-4xl">
                  <Link href={offer.href} className="hover:text-[#e8b84a]">
                    {offer.title}
                  </Link>
                </h3>
                <CheckList items={offer.items} kind="yes" />
                <p className="mt-5 text-sm">
                  <Link href={offer.href} className="text-[#e8b84a] hover:text-[#f6e2ad]">
                    {offer.link}
                  </Link>
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            <Link href="/website-design-charlottetown" className="text-[#e8b84a] hover:text-[#f6e2ad]">
              Charlottetown
            </Link>
            {" · "}
            <Link href="/web-design-pei" className="text-[#e8b84a] hover:text-[#f6e2ad]">
              Prince Edward Island
            </Link>
          </p>
        </div>
      </section>

      <section className="reveal border-t border-gold/15 py-20 sm:py-28">
        <div className="wrap">
          <h2 className="max-w-3xl font-display text-5xl leading-[0.95] font-bold text-balance text-[#f7f2ea] sm:text-6xl">
            What changes when the site is <em className="text-[#e8b84a] italic">done properly</em>
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <article className="lift rounded-3xl border border-white/10 bg-black/40 p-7 sm:p-9">
              <h3 className="font-display text-3xl text-[#f7f2ea]">Most local businesses have</h3>
              <CheckList items={missing} kind="no" />
            </article>
            <article className="lift rounded-3xl border border-gold/35 bg-black/40 p-7 shadow-[0_0_40px_rgba(226,178,58,0.06)] sm:p-9">
              <h3 className="font-display text-3xl text-[#e8b84a]">Our clients get</h3>
              <CheckList items={included} kind="yes" />
            </article>
          </div>
        </div>
      </section>

      <section className="reveal border-t border-gold/15 py-20 sm:py-28">
        <div className="wrap">
          <h2 className="max-w-3xl font-display text-5xl leading-[0.95] font-bold text-balance text-[#f7f2ea] sm:text-6xl">
            Why not just <em className="text-[#e8b84a] italic">Facebook?</em>
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <article className="lift rounded-3xl border border-white/10 bg-black/40 p-7 sm:p-9">
              <h3 className="font-display text-3xl text-[#f7f2ea]">Facebook Page</h3>
              <CheckList items={facebook} kind="no" />
            </article>
            <article className="lift rounded-3xl border border-gold/35 bg-black/40 p-7 sm:p-9">
              <h3 className="font-display text-3xl text-[#e8b84a]">Professional Website</h3>
              <CheckList items={website} kind="yes" />
            </article>
          </div>
        </div>
      </section>

      <section className="reveal border-t border-gold/15 py-20 sm:py-28">
        <div className="wrap">
          <h2 className="max-w-xl font-display text-5xl leading-[0.95] font-bold text-balance text-[#f7f2ea] sm:text-6xl lg:text-7xl">
            How it <em className="text-[#e8b84a] italic">works</em>
          </h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <li key={step} className="lift rounded-3xl border border-gold/25 bg-black/40 p-6">
                <span className="font-display text-3xl text-[#e8b84a]">{index + 1}</span>
                <p className="mt-3 text-lg leading-snug text-[#f7f2ea]">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="faq" className="reveal scroll-mt-28 border-t border-gold/15 py-20 sm:py-28">
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
