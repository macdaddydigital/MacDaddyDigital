import Link from "next/link"
import { footerNav, site } from "@/lib/site"
import { projects } from "@/lib/work"

const groups = [
  {
    title: "Services",
    links: projects.length ? [{ href: "/#work", label: "Work" }, ...footerNav.services] : footerNav.services,
  },
  { title: "Company", links: footerNav.company },
  { title: "Places", links: footerNav.places },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gold/20">
      <div className="wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          <p className="font-display text-3xl font-bold text-[#e8b84a]">MacDaddy</p>
          <p className="mt-1 text-[0.68rem] font-semibold tracking-[0.32em] text-[#c6a36a] uppercase">Digital</p>
          <p className="mt-4 max-w-xs text-sm text-muted">Bold websites for businesses that refuse to be boring.</p>
          <p className="mt-4 text-sm text-faint">
            <a className="hover:text-gold" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <span className="mt-1 block">
              {site.city}, {site.region}
            </span>
          </p>
        </div>
        {groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#c6a36a] uppercase">{group.title}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="wrap border-t border-gold/15 py-5 text-xs text-faint">© {year} {site.name}.</div>
    </footer>
  )
}
