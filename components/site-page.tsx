import type { ReactNode } from "react"
import Link from "next/link"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbSchema } from "@/lib/seo"

export type Crumb = { name: string; path: string }

const textLink = "text-[#e8b84a] hover:text-[#f6e2ad]"

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={textLink}>
      {children}
    </Link>
  )
}

export function ContentPage({
  crumbs,
  eyebrow,
  title,
  lede,
  children,
}: {
  crumbs: readonly Crumb[]
  eyebrow: string
  title: ReactNode
  lede: ReactNode
  children: ReactNode
}) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <article>
        <header className="border-b border-gold/15">
          <div className="wrap py-14 sm:py-20">
            <Breadcrumbs items={crumbs} />
            <p className="kicker mt-8">{eyebrow}</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] font-bold text-balance text-[#f7f2ea] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <div className="mt-6 max-w-2xl text-xl leading-relaxed text-muted">{lede}</div>
          </div>
        </header>
        {children}
      </article>
    </>
  )
}

export function Breadcrumbs({ items }: { items: readonly Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-faint">
        {items.map((item, index) => {
          const last = index === items.length - 1
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {last ? (
                <span aria-current="page" className="text-muted">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-gold">
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export function Block({
  title,
  children,
}: {
  title: ReactNode
  children: ReactNode
}) {
  return (
    <section className="border-b border-gold/15 py-16 sm:py-20">
      <div className="wrap grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <h2 className="font-display text-4xl leading-[0.95] font-bold text-balance text-[#f7f2ea] sm:text-5xl">
          {title}
        </h2>
        <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-muted">{children}</div>
      </div>
    </section>
  )
}

export function PointList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="border-l-2 border-[#e8b84a] pl-4 text-[#f4efe6]">
          {item}
        </li>
      ))}
    </ul>
  )
}

export function FaqList({ items }: { items: readonly { question: string; answer: string }[] }) {
  return (
    <div className="border-t border-gold/15">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-gold/15">
          <summary className="flex items-center justify-between gap-6 py-6 font-display text-2xl text-[#f7f2ea] sm:text-3xl">
            {item.question}
            <span className="faq-plus shrink-0 text-3xl leading-none text-gold transition-transform" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="max-w-2xl pb-6 text-lg text-muted">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

export function PageCta({
  title,
  text,
  action = "Get a Free Quote",
}: {
  title: string
  text: string
  action?: string
}) {
  return (
    <section className="py-16 sm:py-24">
      <div className="wrap">
        <h2 className="max-w-3xl font-display text-5xl leading-[0.95] font-bold text-balance text-[#f7f2ea] sm:text-6xl">
          {title}
        </h2>
        <p className="mt-5 max-w-xl text-xl text-muted">{text}</p>
        <Link href="/contact" className="btn btn-primary btn-lg mt-8">
          {action}
        </Link>
      </div>
    </section>
  )
}

export function RelatedLinks({
  links,
}: {
  links: readonly { href: string; label: string; text: string }[]
}) {
  return (
    <section className="border-b border-gold/15 py-16 sm:py-20">
      <div className="wrap">
        <h2 className="font-display text-4xl font-bold text-[#f7f2ea] sm:text-5xl">While you’re here</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block h-full rounded-3xl border border-gold/25 bg-black/40 p-6 transition-colors hover:border-gold/50"
              >
                <span className="font-display text-2xl text-[#f7f2ea]">{link.label}</span>
                <span className="mt-2 block text-muted">{link.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
