export type VibeMode = "gold" | "neon" | "prestige"

export const vibeContent: Record<VibeMode, {
  logo: string
  headline: string
  subheadline: string
  body: string
  cta: string
  ctaBottom: string
  ctaHeadline: string
  ctaBody: string
  services: Array<{ title: string; desc: string }>
  stats?: Array<{ value: string; label: string }>
}> = {
  gold: {
    logo: "/assets/gold-cutout.png",
    headline: "Smooth Process. Sharp Results.",
    subheadline: "We build elite digital identities for businesses who refuse to blend in.",
    body: "Relying on a Facebook page isn't a digital strategy—it's a hostage situation. The second a customer clicks your link and hits a forced login wall, you lose the lead. MacDaddy Digital builds high-performance, independent web platforms that give you total control over your business. Fuck Facebook. Write your own story.",
    cta: "OWN YOUR PLATFORM",
    ctaBottom: "GET YOUR FREE SCORE",
    ctaHeadline: "How Does Your Site Actually Stack Up?",
    ctaBody: "Before you invest in a rebuild, find out where you stand. Get a free, objective Lighthouse score on performance, accessibility, SEO, and best practices — no fluff, just real data.",
    services: [
      { title: "Web Development", desc: "We don't do basic templates. We build custom, lightning-fast digital headquarters that look spectacular, convert traffic into cash, and belong entirely to you." },
      { title: "Custom Applications", desc: "Stop fighting with broken software and messy spreadsheets. We build bespoke digital tools and smooth automated systems that run your business on autopilot." },
      { title: "Graphic & Brand Design", desc: "Banish low-res smartphone pictures and amateur logos. We engineer ultra-premium visual assets, crisp digital branding, and high-end aesthetics that demand respect." },
      { title: "Social Media Management", desc: "Quit wasting hours cooking up posts that the algorithm chokes anyway. We deploy automated content pipelines that capture local attention while you focus on scaling." },
    ],
  },
  neon: {
    logo: "/assets/neon-cutout.png",
    headline: "INITIALIZE / COMPILE / DEPLOY",
    subheadline: "Code the impossible. Ship without mercy.",
    body: "Relying on a social platform isn't a digital presence—it’s an isolated sector under a hostile protocol. The nanosecond a user clicks your link and hits a forced login wall they don’t initiate the sequence, they terminate the connection. MacDaddy Digital compiles sovereign, independent systems that break you out of the collective mainframe. Delete the simulation. Own your source code.",
    cta: "INITIATE PROTOCOL",
    ctaBottom: "RUN LIGHTHOUSE SCAN",
    ctaHeadline: "HOW HARD IS YOUR STACK RUNNING?",
    ctaBody: `Your site is broadcasting signals whether you read them or not.
Performance. Accessibility. SEO. Best practices.
We pull the raw Lighthouse data — no AI hallucinations, no guesswork.
See exactly where your digital node is bleeding out before you commit to a full rebuild.`,
    services: [
      { title: "Sovereign Code Nodes", desc: "Zero templates. We forge standalone, custom web frameworks built from scratch. High-velocity systems engineered to convert traffic into cold cash." },
      { title: "Bespoke Automation", desc: "Kill the spreadsheets. We build custom applications and localized digital protocols that run your daily operations flawlessly on autopilot." },
      { title: "Visual Overrides", desc: "Delete low-res, generic assets. We design ultra-premium vector branding, high-voltage digital graphics, and cyberpunk-grade aesthetics that shatter the noise." },
      { title: "Matrix Management", desc: "Complete hijacking of your local digital footprint. We deploy automated content streams that force the local algorithm to showcase your brand." },
    ],
    stats: [
      { value: "∞", label: "Realities Shattered" },
      { value: "666", label: "Systems Hacked" },
      { value: "24/7", label: "Always Online" },
    ],
  },
  prestige: {
    logo: "/assets/prestige-cutout.png",
    headline: "Established Excellence. Unwavering Standards.",
    subheadline: "A premier digital consultancy for enterprises requiring absolute market distinction.",
    body: "To restrict an enterprise's digital presence exclusively to a social media network is to incur a severe liability. When prospective patrons encounter mandatory authentication barriers, engagement is abandoned. MacDaddy Digital engineers sovereign, high-performance web architecture ensuring absolute accessibility. Relinquish temporary digital tenancies. Establish your permanent estate.",
    cta: "ESTABLISH YOUR PLATFORM",
    ctaBottom: "REQUEST YOUR SCORE",
    ctaHeadline: "What Is Your Digital Standing?",
    ctaBody: "Distinguished enterprises demand objective benchmarks. Receive a complimentary Lighthouse assessment covering performance, accessibility, SEO, and best practices — precise metrics, rendered without embellishment.",
    services: [
      { title: "Institutional Platforms", desc: "Bespoke, high-velocity digital architecture engineered from inception. Distinguished designs curated to transform market traffic into premier capitalization." },
      { title: "Enterprise Solutions", desc: "We synthesize complex operational workflows into seamless, highly sophisticated digital instruments and automated internal frameworks." },
      { title: "Aesthetic Asset Architecture", desc: "Comprehensive refinement of your visual legacy. We design elite corporate iconography and high-fidelity assets that command immediate institutional authority." },
      { title: "Media Management", desc: "Regulated administration of your public footprint. Automated distribution architectures designed to capture local market attention with flawless execution." },
    ],
  },
}
