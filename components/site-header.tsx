"use client"

import { useEffect, useId, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { localNav, mainNav } from "@/lib/site"
import { projects } from "@/lib/work"

const links = projects.length
  ? [{ href: "/#work", label: "Work" }, ...mainNav, ...localNav]
  : [...mainNav, ...localNav]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled || open ? "border-gold/25 bg-night/90 backdrop-blur-md" : "border-transparent bg-transparent"
        }`}
      >
        <div className="wrap flex min-h-[5.5rem] items-center justify-between gap-4 py-3 lg:min-h-24">
          <Link href="/" className="group shrink-0 leading-none" onClick={() => setOpen(false)}>
            <span className="block font-display text-[2rem] leading-none font-bold tracking-tight text-[#e8b84a] sm:text-[2.35rem] lg:text-[2.75rem]">
              MacDaddy
            </span>
            <span className="mt-1.5 block text-[0.72rem] font-semibold tracking-[0.46em] text-[#e8b84a] uppercase sm:text-sm">
              Digital
            </span>
          </Link>

          <nav className="hidden flex-wrap items-center justify-end gap-x-3 gap-y-1 lg:flex" aria-label="Primary">
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm transition-colors hover:text-gold ${active ? "text-gold" : "text-muted"}`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link href="/contact" className="btn btn-primary ml-2 min-h-12 px-7 text-base">
              Let’s talk
            </Link>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <Link href="/contact" className="btn btn-primary min-h-11 shrink-0 px-4 text-sm" onClick={() => setOpen(false)}>
              Let’s talk
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/35 text-gold"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                {open ? (
                  <path d="M4 4 L14 14 M14 4 L4 14" stroke="currentColor" strokeWidth="1.6" />
                ) : (
                  <path d="M3 5 H15 M3 9 H15 M3 13 H15" stroke="currentColor" strokeWidth="1.6" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div id={menuId} role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-40 overflow-y-auto bg-night px-6 pt-28 pb-16 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-gold/15 py-4 font-display text-4xl text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="border-b border-gold/15 py-4 font-display text-4xl text-ink" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  )
}
