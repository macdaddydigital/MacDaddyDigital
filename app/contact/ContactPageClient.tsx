"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { VibeToggle } from "@/components/vibe-toggle"
import { vibeContent, type VibeMode } from "@/lib/vibe-content"
import { sendContactForm } from "@/app/actions/send-contact"

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
  if (isLarge) {
    return `${base} bg-[#1e3a5f] text-white border-2 border-[#1e3a5f] hover:bg-[#16304d]`
  }
  return `${base} bg-[#722F37] text-white border-2 border-[#722F37] hover:bg-[#5c262d]`
}

export default function ContactPageClient() {
  const searchParams = useSearchParams()
  const vibeParam = searchParams.get("vibe") as VibeMode | null

  const [vibe, setVibe] = useState<VibeMode>("gold")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const content = vibeContent[vibe]

  // Sync vibe from URL param
  useEffect(() => {
    if (vibeParam && ["gold", "neon", "prestige"].includes(vibeParam)) {
      setVibe(vibeParam)
    }
  }, [vibeParam])

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", vibe)
  }, [vibe])

  const contactCopy = {
    gold: {
      heading: "Let's Build Something Legendary.",
      subheading: "Drop your details below. If we see potential in your project, we'll be in touch. We don’t do average, and we don’t take every project.",
      button: "APPLY TO BUILD",
      successTitle: "Application Received",
      successMessage: "Thank you. We've received your details. If your project shows real potential, someone from our team will reach out within the next few days.",
    },
    neon: {
      heading: "Time To Level Up",
      subheading: "DM the deets. If your vision matches our vibe, you’ll hear from us. We only back winners.",
      button: "INITIATE TRANSMISSION",
      successTitle: "Transmission Received",
      successMessage: "Message received. If it hits right, we'll be in touch soon.",
    },
    prestige: {
      heading: "Commission Your Digital Legacy.",
      subheading: "Entry into our development queue is highly restricted. Leave your details below to begin the vetting process. We don’t chase market leaders. We create them.",
      button: "REQUEST COMMISSION",
      successTitle: "Request Logged",
      successMessage: "Your details have been received. Due to limited capacity, we only proceed with select projects. We will contact you directly if your work meets our standards.",
    },
  }

  const currentCopy = contactCopy[vibe]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    const result = await sendContactForm({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      vibe: vibe,
    })

    if (result.success) {
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => {
        setIsSubmitted(false)
      }, 4000)
    } else {
      setSubmitError(result.error || "Something went wrong. Please try again.")
    }

    setIsSubmitting(false)
  }

  const handleInputChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
  }

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
          <Link href="/" className="block">
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
          </Link>
          <VibeToggle currentVibe={vibe} onChange={setVibe} />
        </div>
      </header>

      {/* Contact Content */}
      <div className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="text-primary">{currentCopy.heading}</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto">
              {currentCopy.subheading}
            </p>
          </div>

          {/* Premium Themed Contact Card */}
          <div 
            className={`
              relative rounded-2xl p-8 sm:p-12 shadow-2xl border
              ${vibe === "gold" 
                ? "bg-card/90 border-primary/30" 
                : vibe === "neon" 
                ? "bg-card/80 border-pink-500/30" 
                : "bg-card border-border"
              }
            `}
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">✓</div>
                <h3 
                  className="text-3xl mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {currentCopy.successTitle}
                </h3>
                <p className="text-muted-foreground">
                  {currentCopy.successMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground tracking-widest uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    className={`
                      w-full rounded-lg px-4 py-3 text-base transition-all
                      bg-background border focus:outline-none focus:ring-2
                      ${vibe === "gold" 
                        ? "border-primary/40 focus:border-primary focus:ring-primary/30" 
                        : vibe === "neon" 
                        ? "border-pink-500/40 focus:border-pink-500 focus:ring-pink-500/30" 
                        : "border-border focus:border-primary focus:ring-primary/30"
                      }
                    `}
                    placeholder="Alex Rivera"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground tracking-widest uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    className={`
                      w-full rounded-lg px-4 py-3 text-base transition-all
                      bg-background border focus:outline-none focus:ring-2
                      ${vibe === "gold" 
                        ? "border-primary/40 focus:border-primary focus:ring-primary/30" 
                        : vibe === "neon" 
                        ? "border-pink-500/40 focus:border-pink-500 focus:ring-pink-500/30" 
                        : "border-border focus:border-primary focus:ring-primary/30"
                      }
                    `}
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground tracking-widest uppercase">
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={handleInputChange("message")}
                    rows={6}
                    className={`
                      w-full rounded-lg px-4 py-3 text-base transition-all resize-y min-h-[140px]
                      bg-background border focus:outline-none focus:ring-2
                      ${vibe === "gold" 
                        ? "border-primary/40 focus:border-primary focus:ring-primary/30" 
                        : vibe === "neon" 
                        ? "border-pink-500/40 focus:border-pink-500 focus:ring-pink-500/30" 
                        : "border-border focus:border-primary focus:ring-primary/30"
                      }
                    `}
                    placeholder="Tell us about your project or the system you're ready to build..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={getVibeButtonClasses(vibe, "lg") + " w-full disabled:opacity-70 disabled:cursor-not-allowed"}
                  >
                    {isSubmitting ? "SENDING..." : currentCopy.button}
                  </button>

                  {submitError && (
                    <p className="text-sm text-red-500 text-center mt-2">
                      {submitError}
                    </p>
                  )}
                  <p className="text-center text-xs text-muted-foreground mt-4">
                    We respect your time. No spam, ever.
                  </p>
                </div>
              </form>
            )}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Back to the mainframe
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
