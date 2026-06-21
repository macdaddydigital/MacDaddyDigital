"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { toast } from "sonner";

// ============================================
// VIBE TYPES & CONTENT
// ============================================
type Vibe = "macdaddy" | "neon" | "marble";

interface VibeContent {
  name: string;
  logo: string;
  heroHeadline: string;
  heroSub: string;
  ctaPrimary: string;
  ctaSecondary: string;
  servicesTitle: string;
  servicesIntro: string;
  services: Array<{ title: string; desc: string }>;
  workTitle: string;
  workIntro: string;
  work: Array<{ title: string; category: string; desc: string; result: string }>;
  testimonials: Array<{ quote: string; name: string; role: string }>;
  processTitle: string;
  processIntro: string;
  process: Array<{ num: string; title: string; desc: string }>;
  contactTitle: string;
  contactIntro: string;
  formCta: string;
}

const vibeContent: Record<Vibe, VibeContent> = {
  macdaddy: {
    name: "MAC DADDY",
    logo: "/images/leatherlogo.png",
    heroHeadline: "THE KING OF DIGITAL.",
    heroSub: "We don’t build websites. We build empires. The ultimate digital agency for guys who move different and win bigger.",
    ctaPrimary: "LET’S BUILD YOUR EMPIRE",
    ctaSecondary: "SEE THE WORK",
    servicesTitle: "THE FULL PLAYBOOK",
    servicesIntro: "Everything you need to dominate your space. No fluff. Just results.",
    services: [
      { title: "Custom Websites & Web Apps", desc: "We build the kind of sites that make your competition sweat. Fast, sharp, and built to convert." },
      { title: "Mobile App Development", desc: "Native and cross-platform apps that actually feel premium in the hand. No janky bullshit." },
      { title: "Web Hosting & Domain Management", desc: "Enterprise-grade hosting with white-glove service. Your shit stays up and looks expensive." },
      { title: "Social Media Management & Growth", desc: "We don’t just post. We engineer attention and turn it into real influence and revenue." },
      { title: "Search Engine Optimization", desc: "We get you to the top and keep you there. No black-hat games — just dominant, sustainable positioning." },
      { title: "Digital Maintenance & Retainers", desc: "Ongoing partnership for the ones who actually want to stay on top. Priority access. Constant upgrades." },
    ],
    workTitle: "RECENT WINS",
    workIntro: "Real brands. Real results. No participation trophies.",
    work: [
      { title: "The Atlantic Reserve", category: "Luxury Hospitality", desc: "Complete digital overhaul for one of the most exclusive coastal resorts. Booking engine, cinematic storytelling, members portal.", result: "340% increase in direct bookings" },
      { title: "Maritime Capital Partners", category: "Private Wealth", desc: "Ultra-discreet wealth platform with secure client portals and serious financial tooling.", result: "$92M in new mandates closed" },
      { title: "Oyster & Crown Collective", category: "Fine Dining", desc: "Digital identity and reservation system for a group of the country’s most respected restaurants.", result: "11-week waitlists" },
      { title: "Forge & Valor", category: "Premium Apparel", desc: "E-commerce platform and digital experience for a rising menswear brand quietly taking over.", result: "8.2x ROAS in first 90 days" },
    ],
    testimonials: [
      { quote: "These guys don’t fuck around. They understood exactly who we are and built something that feels more like us than we do.", name: "Marcus Hale", role: "Founder, Forge & Valor" },
      { quote: "They made us look like the biggest player in the room. Our close rate went stupid after the new site dropped.", name: "Jonathan Vale", role: "Managing Partner, Maritime Capital" },
      { quote: "Finally a digital agency that gets it. No corporate bullshit. Just elite work and straight talk.", name: "Damien Cross", role: "CEO, The Atlantic Reserve" },
    ],
    processTitle: "HOW WE MOVE",
    processIntro: "Five steps. Zero wasted motion.",
    process: [
      { num: "01", title: "THE SIT-DOWN", desc: "We get in the room and figure out who you really are and what you’re actually trying to do." },
      { num: "02", title: "THE BLUEPRINT", desc: "Strategy, architecture, positioning. We map out exactly how we’re going to make you look unstoppable." },
      { num: "03", title: "THE BUILD", desc: "Design and development at the highest level. Everything feels expensive because it is." },
      { num: "04", title: "THE LAUNCH", desc: "We don’t drop it and disappear. We make sure it actually performs from day one." },
      { num: "05", title: "THE RELATIONSHIP", desc: "Most of our clients stay with us for years. Once you win with us, you don’t go back to average." },
    ],
    contactTitle: "READY TO BECOME UNIGNORABLE?",
    contactIntro: "Tell us what you’re building. We’ll tell you how we’re going to make it legendary.",
    formCta: "LET’S TALK",
  },

  neon: {
    name: "NEON NIGHTMARE",
    logo: "/images/neonlogo2.png",
    heroHeadline: "WELCOME TO THE UNDERGROUND.",
    heroSub: "We don’t do safe. We build digital experiences that feel illegal. For brands that live in the shadows and still steal the light.",
    ctaPrimary: "ENTER THE GRID",
    ctaSecondary: "BREACH THE ARCHIVE",
    servicesTitle: "WEAPONS SYSTEM",
    servicesIntro: "High-voltage tools for those who operate outside the system.",
    services: [
      { title: "Custom Websites & Web Apps", desc: "Glitch-free, high-performance sites with dangerous levels of visual impact. Built to survive the net." },
      { title: "Mobile App Development", desc: "Dark-mode native apps that feel like they were never meant to be in the App Store." },
      { title: "Web Hosting & Domain Management", desc: "Off-grid hosting that doesn’t go down when the lights do." },
      { title: "Social Media Management & Growth", desc: "We don’t chase algorithms. We hijack attention and turn it into cult-level followings." },
      { title: "Search Engine Optimization", desc: "We don’t rank. We infiltrate. Technical tactics that actually work in 2025." },
      { title: "Digital Maintenance & Retainers", desc: "Constant upgrades, security patches, and 3am emergency response. We never sleep." },
    ],
    workTitle: "BREACHED PROJECTS",
    workIntro: "Classified work for clients who prefer to stay in the shadows.",
    work: [
      { title: "KRAKEN", category: "Underground Tech", desc: "Encrypted platform for a privacy-first communications network operating in 14 countries.", result: "Still untraceable" },
      { title: "VOID CLUB", category: "Nightlife Empire", desc: "Full digital takeover for the most notorious after-hours collective in the city.", result: "47k members in 11 weeks" },
      { title: "BLACKOUT", category: "Streetwear", desc: "Dystopian e-commerce experience for a brand that only drops at 3am.", result: "Sold out in 4 minutes" },
      { title: "SIGNAL LOST", category: "Electronic Label", desc: "Immersive experience for an underground techno movement that refuses to be mainstream.", result: "Sold out 3 tours in 48hrs" },
    ],
    testimonials: [
      { quote: "They built something that actually feels like the future. Dangerous. Beautiful. Untraceable. Exactly what we needed.", name: "Z", role: "Founder, KRAKEN" },
      { quote: "The site crashes when too many people try to get in. That’s how we know it works.", name: "NOIR", role: "Creative Director, VOID CLUB" },
      { quote: "They don’t ask for moodboards. They just understand the vibe and make it hurt in the best way.", name: "VEX", role: "Signal Lost" },
    ],
    processTitle: "THE PROTOCOL",
    processIntro: "We don’t follow processes. We run operations.",
    process: [
      { num: "01", title: "THE DROP", desc: "You tell us what you’re really trying to do. We listen. We don’t judge. We get it." },
      { num: "02", title: "THE BREACH", desc: "We map the terrain and decide exactly how we’re going to break in." },
      { num: "03", title: "THE BUILD", desc: "We construct the weapon. Design and code that feels like it was never supposed to exist." },
      { num: "04", title: "THE DEPLOY", desc: "We launch hard. Fast. Loud. Then we disappear into the night." },
      { num: "05", title: "THE WATCH", desc: "We stay in the shadows. Monitoring. Upgrading. Ready when shit hits the fan." },
    ],
    contactTitle: "READY TO GO OFF-GRID?",
    contactIntro: "If you’re looking for something safe and corporate, you’re in the wrong place.",
    formCta: "INITIATE CONTACT",
  },

  marble: {
    name: "MARBLE DYNASTY",
    logo: "/images/premiumlogo.png",
    heroHeadline: "A LEGACY IN STONE.",
    heroSub: "For those who build not for today, but for the centuries that follow. Timeless digital craftsmanship for the houses that will outlast us all.",
    ctaPrimary: "BEGIN THE CONVERSATION",
    ctaSecondary: "VIEW THE ARCHIVE",
    servicesTitle: "THE DISCIPLINES",
    servicesIntro: "Services rendered with the patience and precision of master craftsmen.",
    services: [
      { title: "Custom Websites & Web Apps", desc: "Digital estates of enduring quality. Built with restraint, proportion, and the kind of detail that reveals itself over years." },
      { title: "Mobile App Development", desc: "Private, refined applications for those who understand that true luxury is quiet." },
      { title: "Web Hosting & Domain Management", desc: "Discreet, secure, and impeccably maintained infrastructure worthy of the names we protect." },
      { title: "Social Media Management & Growth", desc: "We do not chase virality. We cultivate quiet influence among the right circles." },
      { title: "Search Engine Optimization", desc: "Thoughtful, authoritative positioning that compounds over time. We become the standard." },
      { title: "Digital Maintenance & Retainers", desc: "Perpetual stewardship. The same care applied to your properties is applied to your digital presence." },
    ],
    workTitle: "THE ARCHIVE",
    workIntro: "A selection of commissions for families and institutions of consequence.",
    work: [
      { title: "The Ashford Estate", category: "Private Family Office", desc: "A private digital sanctuary and generational wealth platform for one of Europe’s oldest industrial families.", result: "Preserved across three generations" },
      { title: "Maison de Valois", category: "Heritage Hospitality", desc: "Digital presence for a collection of private residences turned ultra-exclusive hotels.", result: "Waitlist now exceeds 18 months" },
      { title: "The Clarendon Trust", category: "Philanthropic Institution", desc: "A refined platform for one of the continent’s most respected private foundations.", result: "Major capital commitments increased 4x" },
      { title: "Rothschild & Sons, Private", category: "Private Banking", desc: "Discreet client experience for a centuries-old private bank that still believes in quiet power.", result: "By invitation only" },
    ],
    testimonials: [
      { quote: "They understood that some things should feel as though they have always existed. The work is quiet, permanent, and correct.", name: "The Hon. Edward Ashford", role: "Ashford Family Office" },
      { quote: "In a world of noise and novelty, they delivered something that feels like it will still be here long after we are gone.", name: "Comtesse Isabelle de Valois", role: "Maison de Valois" },
      { quote: "They do not seek attention. They create presence. That is the difference.", name: "Lord Clarendon", role: "The Clarendon Trust" },
    ],
    processTitle: "THE METHOD",
    processIntro: "We do not rush. We do not trend. We build what endures.",
    process: [
      { num: "I", title: "THE AUDIENCE", desc: "We sit with the family, the trustees, or the principals. We listen. We take notes by hand." },
      { num: "II", title: "THE PROPORTION", desc: "We study the lineage, the values, the quiet details that actually matter." },
      { num: "III", title: "THE CRAFT", desc: "Every decision is made with the assumption that it will be judged one hundred years from now." },
      { num: "IV", title: "THE HANDOVER", desc: "We deliver the work with the same care one would deliver a family heirloom." },
      { num: "V", title: "THE STEWARDSHIP", desc: "We remain available, discreetly, for generations. This is not a project. It is a responsibility." },
    ],
    contactTitle: "FOR THOSE WHO BUILD TO LAST",
    contactIntro: "We are selective. If your ambition is to create something that will still matter long after you are gone, we would be honoured to hear from you.",
    formCta: "REQUEST AN AUDIENCE",
  },
};

// ============================================
// MAIN COMPONENT
// ============================================
export default function MacDaddyDigital() {
  const [vibe, setVibe] = useState<Vibe>("macdaddy");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [formData, setFormData] = useState({ name: "", email: "", organization: "", phone: "", vision: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const content = vibeContent[vibe];
  const logoSrc = content.logo;

  // Sync vibe to document
  useEffect(() => {
    document.documentElement.setAttribute("data-vibe", vibe);
  }, [vibe]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }),
      { threshold: 0.25, rootMargin: "-100px 0px -40% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.vision) {
      toast.error("Please fill out the required fields.");
      return;
    }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1100));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Inquiry received", { description: "We will contact you within 48 hours." });
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", organization: "", phone: "", vision: "" });
  };

  const navItems = [
    { label: "Services", id: "services" },
    { label: "Work", id: "work" },
    { label: "Process", id: "process" },
    { label: "Contact", id: "contact" },
  ];

  const vibeOptions: { key: Vibe; label: string }[] = [
    { key: "macdaddy", label: "MAC DADDY" },
    { key: "neon", label: "NEON NIGHTMARE" },
    { key: "marble", label: "MARBLE DYNASTY" },
  ];

  return (
    <div className="min-h-screen leather-bg overflow-x-hidden transition-colors duration-500">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/95 backdrop-blur-xl border-b border-[var(--border-subtle)]" style={{ height: "var(--nav-height)" }}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 group">
            <img src={logoSrc} alt={content.name} className="h-9 w-auto transition-transform duration-500 group-hover:scale-[1.02]" />
          </button>

          <div className="hidden md:flex items-center gap-9 text-sm">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className={`nav-link text-xs uppercase tracking-[2px] font-medium ${activeSection === item.id ? "active" : ""}`}>
                {item.label}
              </button>
            ))}
            <a href={`/score?vibe=${vibe}`} className="text-xs uppercase tracking-[2px] font-medium text-[var(--accent)] hover:text-white transition">
              FREE SCORE
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col items-end mr-2">
              <div className="text-[9px] tracking-[2px] text-[var(--text-muted)] mb-1">SELECT VIBE</div>
              <div className="flex border border-[var(--border-subtle)] rounded-full overflow-hidden text-xs">
                {vibeOptions.map((opt) => (
                  <button key={opt.key} onClick={() => setVibe(opt.key)} className={`px-4 py-1.5 transition-all ${vibe === opt.key ? "bg-[var(--accent)] text-[var(--bg-deep)] font-medium" : "hover:bg-[var(--bg-elevated)]"}`}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={() => scrollTo("contact")} className="vibe-btn-primary px-8 py-2.5 text-xs tracking-[2.5px] uppercase">
              {content.ctaPrimary}
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[var(--accent)]">
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--bg)] px-6 py-8">
              <div className="flex flex-col gap-5 text-sm">
                {navItems.map((item) => (
                  <button key={item.id} onClick={() => scrollTo(item.id)} className="text-left uppercase tracking-[2px] text-xs">{item.label}</button>
                ))}
                <a href={`/score?vibe=${vibe}`} className="text-left uppercase tracking-[2px] text-xs text-[var(--accent)]">FREE WEBSITE SCORE</a>
                <div className="pt-4 border-t border-[var(--border-subtle)]">
                  <div className="text-[9px] tracking-[2px] text-[var(--text-muted)] mb-2">SELECT VIBE</div>
                  <div className="flex flex-col gap-2">
                    {vibeOptions.map((opt) => (
                      <button key={opt.key} onClick={() => { setVibe(opt.key); setMobileMenuOpen(false); }} className={`text-left py-2 text-xs uppercase tracking-widest ${vibe === opt.key ? "text-[var(--accent)]" : ""}`}>{opt.label}</button>
                    ))}
                  </div>
                </div>
                <button onClick={() => scrollTo("contact")} className="vibe-btn-primary w-full py-3 text-xs tracking-[2.5px] mt-2">{content.ctaPrimary}</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section id="hero" className="min-h-[100dvh] flex items-center justify-center pt-20 px-6 relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-10 flex justify-center">
            <motion.img 
              key={vibe} 
              initial={{ opacity: 0, scale: 0.92, y: 40 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              transition={{ duration: 1.15, ease: [0.23, 1, 0.32, 1] }} 
              src={logoSrc} 
              alt={content.name} 
              className="w-[240px] sm:w-[300px] md:w-[340px] h-auto drop-shadow-2xl" 
            />
          </div>

          <h1 className="section-title font-semibold tracking-[-2.5px] mb-6">{content.heroHeadline}</h1>
          <p className="max-w-[620px] mx-auto text-xl md:text-2xl text-[var(--text-secondary)] tracking-[-0.2px] leading-tight mb-10">{content.heroSub}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollTo("contact")} className="vibe-btn-primary px-10 h-14 text-sm tracking-[2.5px] uppercase flex items-center justify-center gap-3 group">
              {content.ctaPrimary} <ArrowRight className="group-hover:translate-x-0.5 transition" />
            </button>
            <button onClick={() => scrollTo("work")} className="border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg-deep)] px-9 h-14 text-sm tracking-[2.5px] uppercase transition">
              {content.ctaSecondary}
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6" style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}>
        <div className="text-center mb-14">
          <div className="uppercase tracking-[4px] text-xs text-[var(--accent)] mb-3">{content.name} DISCIPLINES</div>
          <h2 className="section-title">{content.servicesTitle}</h2>
          <p className="max-w-md mx-auto mt-4 text-[var(--text-secondary)]">{content.servicesIntro}</p>
        </div>

        {/* Free Website Score Teaser - Revenue Stream Tool */}
        <div className="mt-8 text-center">
          <a 
            href={`/score?vibe=${vibe}`} 
            className="inline-flex items-center gap-2 text-sm tracking-[2px] border-b border-[var(--accent)] pb-1 hover:text-[var(--accent)] transition"
          >
            GET YOUR FREE WEBSITE SCORE → SEE HOW YOU RANK
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.services.map((service, i) => (
            <div key={i} className="vibe-card rounded-2xl">
              <div className="text-[var(--accent)] mb-8 text-2xl">◆</div>
              <h3 className="text-2xl font-semibold tracking-[-0.4px] mb-4 leading-tight">{service.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-20 border-y border-[var(--border-subtle)]" style={{ background: "var(--bg-elevated)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="uppercase tracking-[3px] text-xs text-[var(--accent)] mb-2">THE ARCHIVE</div>
              <h2 className="section-title">{content.workTitle}</h2>
            </div>
            <p className="max-w-sm text-[var(--text-secondary)]">{content.workIntro}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {content.work.map((project, i) => (
              <div key={i} className="vibe-card rounded-3xl">
                <div className="text-[var(--accent)] text-xs tracking-[3px] mb-2">{project.category}</div>
                <h3 className="text-3xl tracking-[-0.8px] font-semibold mb-4">{project.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-8">{project.desc}</p>
                <div className="text-sm font-medium text-[var(--accent)]">{project.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="max-w-6xl mx-auto px-6" style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}>
        <div className="text-center mb-14">
          <div className="uppercase tracking-[3px] text-xs text-[var(--accent)] mb-2">{content.name} METHOD</div>
          <h2 className="section-title">{content.processTitle}</h2>
          <p className="text-[var(--text-secondary)] mt-3">{content.processIntro}</p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {content.process.map((step, i) => (
            <div key={i} className="vibe-card rounded-2xl">
              <div className="font-mono text-[var(--accent)] text-sm tracking-[3px] mb-4">{step.num}</div>
              <div className="text-xl font-semibold tracking-tight mb-3">{step.title}</div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[3px] text-xs text-[var(--accent)] mb-2">WHAT THEY SAY IN PRIVATE</div>
          <h2 className="section-title">Testimonials</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {content.testimonials.map((t, i) => (
            <div key={i} className="vibe-card rounded-2xl">
              <div className="text-[var(--accent)] text-6xl leading-none mb-4 opacity-40">“</div>
              <p className="text-[15px] leading-relaxed mb-8 text-[var(--text-primary)]">“{t.quote}”</p>
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-[var(--text-muted)]">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-[var(--border-subtle)] py-20" style={{ background: "var(--bg-elevated)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="uppercase tracking-[3px] text-xs text-[var(--accent)] mb-2">NEXT CHAPTER</div>
            <h2 className="section-title">{content.contactTitle}</h2>
            <p className="text-[var(--text-secondary)] mt-4 max-w-md mx-auto">{content.contactIntro}</p>
          </div>

          <div className="vibe-card rounded-3xl p-10 md:p-14">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} placeholder="Full Name" className="form-input" required />
                  <input name="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} placeholder="Email Address" className="form-input" required />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input name="organization" value={formData.organization} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} placeholder="Organization" className="form-input" />
                  <input name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} placeholder="Phone" className="form-input" />
                </div>
                <textarea name="vision" value={formData.vision} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} rows={6} placeholder="Tell us what you are building..." className="form-input w-full" required />
                <button type="submit" disabled={isSubmitting} className="vibe-btn-primary w-full h-14 text-sm tracking-[3px] uppercase mt-2">
                  {isSubmitting ? "TRANSMITTING..." : content.formCta}
                </button>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="text-[var(--accent)] mb-6 text-5xl">◆</div>
                <h3 className="text-4xl tracking-tight mb-4">Thank You.</h3>
                <p className="text-[var(--text-secondary)] max-w-sm mx-auto">We have received your message. A member of the team will contact you personally within 48 hours.</p>
                <button onClick={resetForm} className="mt-8 text-sm tracking-[2px] border-b border-[var(--accent)] pb-px">Submit Another Inquiry</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--border-subtle)] py-10 text-sm text-[var(--text-muted)]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-y-4 items-center">
          <div>© {new Date().getFullYear()} MacDaddy Digital</div>
          <div className="flex gap-8 text-xs tracking-[1.5px] uppercase">
            {navItems.map((item) => <button key={item.id} onClick={() => scrollTo(item.id)}>{item.label}</button>)}
          </div>
        </div>
      </footer>
    </div>
  );
}
