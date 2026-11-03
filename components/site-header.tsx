"use client"

import { useEffect, useId, useState } from "react"
import Link from "next/link"
import { nav } from "@/lib/site"
import { projects } from "@/lib/work"

const links = projects.length
  ? [{ href: "/#work", label: "Work" }, ...nav]
  : [...nav]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()

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
        scrolled || open
          ? "border-gold/25 bg-night/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" className="group leading-none" onClick={() => setOpen(false)}>
          <span className="block font-display text-xl tracking-tight text-gold sm:text-[1.35rem]">
            Mac Daddy
          </span>
          <span className="mt-1 block text-[0.62rem] font-semibold tracking-[0.32em] text-faint uppercase">
            Digital
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn btn-primary px-5">
            Let’s talk
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/#contact" className="btn btn-primary min-h-11 shrink-0 px-3 text-sm" onClick={() => setOpen(false)}>
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
      <div
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className="fixed inset-0 z-40 bg-night px-6 pt-24 lg:hidden"
      >
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
        </nav>
        <p className="mt-10 text-sm text-faint">Charlottetown, Prince Edward Island</p>
      </div>
    ) : null}
    </>
  )
}
