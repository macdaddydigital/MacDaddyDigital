"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { AnimatePresence } from "framer-motion"
import Link from "next/link"
import { VibeToggle } from "@/components/vibe-toggle"
import { vibeContent, type VibeMode } from "@/lib/vibe-content"

interface LighthouseCategory {
  name: string
  score: number
}

interface BasicResult {
  url: string
  overallScore: number
  categories: LighthouseCategory[]
  summary: string
}

function NeonScanlines() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 neon-grid" />
      <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-scanline" />
      <div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent animate-scanline"
        style={{ animationDelay: "2s" }}
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
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />
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

function getInputClasses(vibe: VibeMode) {
  return `
    w-full rounded-lg px-4 py-3 text-base transition-all
    bg-background border focus:outline-none focus:ring-2
    ${vibe === "gold"
      ? "border-primary/40 focus:border-primary focus:ring-primary/30"
      : vibe === "neon"
      ? "border-pink-500/40 focus:border-pink-500 focus:ring-pink-500/30"
      : "border-border focus:border-primary focus:ring-primary/30"
    }
  `
}

function getCardClasses(vibe: VibeMode) {
  return `
    relative rounded-2xl p-8 sm:p-12 shadow-2xl border
    ${vibe === "gold"
      ? "bg-card/90 border-primary/30"
      : vibe === "neon"
      ? "bg-card/80 border-pink-500/30"
      : "bg-card border-border"
    }
  `
}

function parseVibeParam(param: string | null): VibeMode | null {
  if (!param) return null
  if (["gold", "neon", "prestige"].includes(param)) return param as VibeMode
  if (param === "macdaddy") return "gold"
  if (param === "marble") return "prestige"
  return null
}

export default function ScorePageClient() {
  const searchParams = useSearchParams()
  const vibeParam = parseVibeParam(searchParams.get("vibe"))

  const [vibe, setVibe] = useState<VibeMode>("gold")
  const [url, setUrl] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [phone, setPhone] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<BasicResult | null>(null)
  const [error, setError] = useState("")

  const content = vibeContent[vibe]

  useEffect(() => {
    if (vibeParam) setVibe(vibeParam)
  }, [vibeParam])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", vibe)
  }, [vibe])

  const analyzeAndSubmit = async () => {
    if (!url || !name || !email) {
      setError("Please enter your website URL, name, and email")
      return
    }

    let processedUrl = url.trim()
    if (!processedUrl.startsWith("http")) {
      processedUrl = `https://${processedUrl}`
    }

    setIsAnalyzing(true)
    setError("")
    setResult(null)

    try {
      const response = await fetch(`/api/analyze-site?url=${encodeURIComponent(processedUrl)}`)

      const data = await response.json()

      if (!response.ok || data.error || !data.scores) {
        if (data.code === "quota_exceeded") {
          throw new Error(
            "The scoring service is temporarily at capacity. We're fixing this — please try again in a few hours."
          )
        }
        throw new Error(data.error || "Lighthouse analysis failed")
      }

      const { scores, overall } = data

      const basic: BasicResult = {
        url: processedUrl,
        overallScore: overall,
        categories: [
          { name: "Performance", score: scores.performance },
          { name: "Accessibility", score: scores.accessibility },
          { name: "Best Practices", score: scores.bestPractices },
          { name: "SEO", score: scores.seo },
        ],
        summary:
          "This is your free technical score from Google Lighthouse. These are objective performance and quality metrics. The full AI-powered strategic analysis is only performed after a consultation call is booked.",
      }

      setResult(basic)

      fetch("/api/submit-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: processedUrl,
          name,
          email,
          company: company || undefined,
          phone: phone || undefined,
          vibe,
          basicResult: basic,
        }),
      }).catch(() => {})
    } catch (err) {
      console.error(err)
      setError("Could not analyze the site. Please check the URL and try again.")
    } finally {
      setIsAnalyzing(false)
    }
  }

  const reset = () => {
    setResult(null)
    setUrl("")
    setName("")
    setEmail("")
    setCompany("")
    setPhone("")
    setError("")
  }

  return (
    <div className="min-h-screen transition-colors duration-700">
      <AnimatePresence mode="wait">
        {vibe === "gold" && <GoldBackground key="gold-bg" />}
        {vibe === "neon" && <NeonBackground key="neon-bg" />}
        {vibe === "prestige" && <PrestigeBackground key="prestige-bg" />}
      </AnimatePresence>

      {vibe === "neon" && <NeonScanlines />}

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

      <div className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Free Instant Analysis
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="text-primary">Get Your Website Score</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Pure Google Lighthouse technical score. Full AI analysis after you book a call.
            </p>
          </div>

          {!result ? (
            <div className={getCardClasses(vibe)}>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground tracking-widest uppercase">
                    Your Website URL *
                  </label>
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className={getInputClasses(vibe)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground tracking-widest uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Rivera"
                      className={getInputClasses(vibe)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground tracking-widest uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className={getInputClasses(vibe)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground tracking-widest uppercase">
                      Company
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Optional"
                      className={getInputClasses(vibe)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-muted-foreground tracking-widest uppercase">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Optional"
                      className={getInputClasses(vibe)}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={analyzeAndSubmit}
                  disabled={isAnalyzing || !url || !name || !email}
                  className={getVibeButtonClasses(vibe, "lg") + " w-full disabled:opacity-70 disabled:cursor-not-allowed"}
                >
                  {isAnalyzing ? "ANALYZING WITH LIGHTHOUSE..." : "GET MY FREE LIGHTHOUSE SCORE"}
                </button>

                {error && <p className="text-sm text-red-500 text-center mt-3">{error}</p>}

                <p className="text-center text-xs text-muted-foreground mt-4">
                  Uses real Google Lighthouse data. No AI. The detailed AI report is sent after you book a call.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-1">
                    Free Lighthouse Score
                  </p>
                  <p className="text-2xl font-semibold break-all">{result.url}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Overall Average</p>
                  <p className="text-5xl sm:text-6xl font-semibold tabular-nums text-primary">
                    {result.overallScore}
                    <span className="text-2xl sm:text-3xl">/100</span>
                  </p>
                </div>
              </div>

              <div className={getCardClasses(vibe)}>
                <p className="text-base sm:text-lg leading-relaxed">{result.summary}</p>
              </div>

              <div className="space-y-4">
                {result.categories.map((cat) => (
                  <div key={cat.name} className={getCardClasses(vibe) + " p-6 sm:p-8"}>
                    <div className="flex justify-between items-baseline mb-3">
                      <p className="font-medium text-lg">{cat.name}</p>
                      <p className="font-semibold text-2xl text-primary tabular-nums">{cat.score}/100</p>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${cat.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className={getCardClasses(vibe) + " text-center"}>
                <h3 className="text-2xl sm:text-3xl mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  This is the free Lighthouse score.
                </h3>
                <p className="text-muted-foreground max-w-lg mx-auto mb-6">
                  The full AI-powered strategic analysis is only performed after a consultation call is booked.
                </p>
                <Link href={`/contact?vibe=${vibe}`}>
                  <button type="button" className={getVibeButtonClasses(vibe, "lg")}>
                    Book a Consultation Call
                  </button>
                </Link>
                <p className="text-xs text-muted-foreground mt-5">
                  The complete Lighthouse report and your details have been sent to us.
                </p>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={reset}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors underline"
                >
                  Analyze another site
                </button>
              </div>
            </div>
          )}

          <div className="text-center mt-8">
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Back to the mainframe
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}