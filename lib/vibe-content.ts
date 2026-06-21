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
    ctaBottom: "TAKE THE THRONE",
    ctaHeadline: "Ready to Claim the Throne?",
    ctaBody: "Every business profile on a social feed looks exactly the same. You didn't build a business to blend in with a template. Stop renting a cookie-cutter layout. Put a crown on your brand and stand out.",
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
    ctaBottom: "DELETE THE DEPENDENCY",
    ctaHeadline: "READY TO BREACH THE FIREWALL?",
    ctaBody: `The algorithm isn’t your ally.
Social media is rented territory.
Every follower, click, and customer exists behind someone else’s firewall.
It decides who sees you, when they see you, and whether you exist tomorrow.

Build your own domain. Control your own ecosystem. Create a system that works for you instead of the platform..`,
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
    ctaBottom: "SECURE YOUR LEGACY",
    ctaHeadline: "Shall We Secure Your Legacy?",
    ctaBody: "The contemporary market rewards absolute distinction. Do not permit your enterprise to fade into a generic template. Discard the commonplace layouts of the masses. Adorn your brand with the crown of distinction.",
    services: [
      { title: "Institutional Platforms", desc: "Bespoke, high-velocity digital architecture engineered from inception. Distinguished designs curated to transform market traffic into premier capitalization." },
      { title: "Enterprise Solutions", desc: "We synthesize complex operational workflows into seamless, highly sophisticated digital instruments and automated internal frameworks." },
      { title: "Aesthetic Asset Architecture", desc: "Comprehensive refinement of your visual legacy. We design elite corporate iconography and high-fidelity assets that command immediate institutional authority." },
      { title: "Media Management", desc: "Regulated administration of your public footprint. Automated distribution architectures designed to capture local market attention with flawless execution." },
    ],
  },
}
