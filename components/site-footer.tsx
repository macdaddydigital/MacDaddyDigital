import Link from "next/link"
import { nav, site } from "@/lib/site"
import { projects } from "@/lib/work"

const links = projects.length
  ? [{ href: "/#work", label: "Work" }, ...nav, { href: "/#contact", label: "Contact" }]
  : [...nav, { href: "/#contact", label: "Contact" }]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gold/20">
      <div className="wrap flex flex-col gap-8 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl text-gold">Mac Daddy</p>
          <p className="mt-1 text-[0.68rem] font-semibold tracking-[0.32em] text-faint uppercase">
            Digital
          </p>
          <p className="mt-4 max-w-xs text-sm text-muted">
            Websites and web apps from {site.city}, {site.region}.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted" aria-label="Footer">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gold">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="wrap border-t border-gold/15 py-5 text-xs text-faint">
        © {year} {site.name}. {site.owner}.
      </div>
    </footer>
  )
}
