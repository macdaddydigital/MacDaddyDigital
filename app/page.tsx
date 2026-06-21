"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { VibeToggle } from "@/components/vibe-toggle"
import { vibeContent, type VibeMode } from "@/lib/vibe-content"

function NeonScanlines() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 neon-grid" />
      <div 
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-scanline"
      />
      <div 
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent animate-scanline"
        style={{ animationDelay: '2s' }}
      />
    </div>
  )
}

function GoldBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a18] via-[#121210] to-[#0a0a08]" />
      <div className="absolute inset-0 leather-texture opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-900/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-900/10 rounded-full blur-[120px]" />
    </div>
  )
}

function NeonBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0014] via-[#050010] to-[#000008]" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[180px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-400/10 rounded-full blur-[120px]" />
    </div>
  )
}

function PrestigeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf8f5] via-[#f5f3f0] to-[#ebe8e3]" />
      <div className="absolute inset-0 marble-texture opacity-50" />
    </div>
  )
}

function getVibeButtonClasses(vibe: VibeMode, size: "sm" | "lg" = "sm") {
  const isLarge = size === "lg"
  const sizing = isLarge
    ? "px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg"
    : "px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
  const base = `font-bold tracking-wider uppercase transition-all duration-300 active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${sizing}`

  if (vibe === "gold") {
    return `${base} bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-black border-2 border-yellow-400/50 shadow-lg shadow-yellow-500/20 hover:brightness-105`
  }
  if (vibe === "neon") {
    if (isLarge) {
      return `${base} bg-cyan-400 text-black border-2 border-cyan-400 shadow-lg shadow-cyan-400/50 hover:bg-pink-500 hover:border-pink-500 hover:shadow-pink-500/50`
    }
    return `${base} bg-transparent border-2 border-pink-500 text-pink-500 shadow-lg shadow-pink-500/50 hover:bg-pink-500 hover:text-black`
  }
  // prestige
  if (isLarge) {
    return `${base} bg-[#1e3a5f] text-white border-2 border-[#1e3a5f] hover:bg-[#16304d]`
  }
  return `${base} bg-[#722F37] text-white border-2 border-[#722F37] hover:bg-[#5c262d]`
}

export default function LandingPage() {
  const [vibe, setVibe] = useState<VibeMode>("gold")
  const content = vibeContent[vibe]

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", vibe)
  }, [vibe])

  return (
    <div className="min-h-screen transition-colors duration-700">
      <AnimatePresence mode="wait">
        {vibe === "gold" && <GoldBackground key="gold-bg" />}
        {vibe === "neon" && <NeonBackground key="neon-bg" />}
        {vibe === "prestige" && <PrestigeBackground key="prestige-bg" />}
      </AnimatePresence>
      
      {vibe === "neon" && <NeonScanlines />}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <motion.div
            key={vibe + "-logo-header"}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={content.logo} 
              alt="MacDaddy Digital"
              className={`logo-cutout w-auto object-contain transition-all duration-300 ${
                vibe === "gold" 
                  ? "h-9 sm:h-12 scale-[1.05] drop-shadow-[0_4px_20px_rgba(245,158,11,0.35)]" 
                  : vibe === "neon" 
                  ? "h-8 sm:h-11 neon-logo-glow" 
                  : "h-9 sm:h-11 drop-shadow-[0_3px_12px_rgba(114,47,55,0.25)]"
              }`}
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          <VibeToggle currentVibe={vibe} onChange={setVibe} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              key={vibe + "-hero-text"}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            >
              <h1 
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-balance ${
                  vibe === "neon" ? "font-normal tracking-[0.02em]" : ""
                }`}
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span className="text-primary">{content.headline}</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light">
                {content.subheadline}
              </p>
              
              <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed max-w-xl">
                {content.body}
              </p>
              
              <Link href={`/contact?vibe=${vibe}`}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.985 }}
                  className={getVibeButtonClasses(vibe, "sm")}
                >
                  {content.cta}
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              key={vibe + "-hero-logo"}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex items-center justify-center order-1 lg:order-2"
            >
              <img 
                src={content.logo} 
                alt="MacDaddy Digital"
                className={`logo-cutout w-full max-w-xs sm:max-w-md h-auto object-contain ${vibe === "neon" ? "neon-logo-glow" : ""}`}
                loading="eager"
                fetchPriority="high"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <motion.div
            key={vibe + "-services-header"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl text-primary mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {vibe === "gold" ? "Our Expertise" : vibe === "neon" ? "SYSTEM CAPABILITIES" : "Our Distinguished Services"}
            </h2>
            <div className={`w-24 h-0.5 mx-auto ${vibe === "neon" ? "bg-cyan-400" : vibe === "prestige" ? "bg-[#722F37]" : "bg-primary"}`} />
          </motion.div>

          <div
            key={vibe + "-services"}
            className={`grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4`}
          >
            {content.services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                whileHover={{ y: -5 }}
                className={`
                  p-6 sm:p-8 transition-all duration-300
                  ${vibe === "gold" 
                    ? "bg-card/50 border border-primary/20 hover:border-primary/50" 
                    : vibe === "neon"
                    ? "bg-card/30 border border-pink-500/30 hover:border-cyan-400/80 hover:shadow-lg hover:shadow-cyan-400/20"
                    : "bg-card border border-border hover:shadow-xl"
                  }
                `}
              >
                <h3 
                  className={`text-lg sm:text-xl mb-3 ${
                    vibe === "neon" ? "text-pink-500" : "text-primary"
                  }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 sm:py-24 px-4 sm:px-6 ${vibe === "gold" ? "bg-card/50" : vibe === "neon" ? "bg-card/20" : "bg-muted"}`}>
        <div className="container mx-auto text-center">
          <motion.div
            key={vibe + "-cta"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 
              className={`text-2xl sm:text-3xl md:text-5xl mb-6 ${vibe === "neon" ? "font-normal tracking-[0.02em]" : ""}`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="text-primary">
                {content.ctaHeadline}
              </span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-2xl mx-auto px-4 whitespace-pre-line">
              {content.ctaBody}
            </p>
            <Link href={`/contact?vibe=${vibe}`}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.985 }}
                className={getVibeButtonClasses(vibe, "lg")}
              >
                {content.ctaBottom}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-border/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img 
              src={content.logo} 
              alt="MacDaddy Digital"
              className={`logo-cutout h-6 sm:h-8 w-auto object-contain ${vibe === "neon" ? "neon-logo-glow" : ""}`}
              loading="lazy"
              decoding="async"
            />
            <div className="flex items-center gap-6 sm:gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Work</a>
              <a href="#" className="hover:text-primary transition-colors">About</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <p className="text-xs text-muted-foreground text-center md:text-right">
              {vibe === "gold" 
                ? "© 2026 MacDaddy Digital // All Rights Reserved"
                : vibe === "neon"
                ? "© 2026 MacDaddy.exe // ALL RIGHTS VIOLATED"
                : "© MMXXVI MacDaddy Digital. All Rights Reserved."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
