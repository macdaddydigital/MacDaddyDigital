export const site = {
  name: "MacDaddy Digital",
  owner: "Cody Mac",
  city: "Charlottetown",
  region: "Prince Edward Island",
  email: "projects@macdaddydigital.ca",
  url: "https://www.macdaddydigital.ca",
  description:
    "High-quality websites, brands, and digital experiences for small businesses, without the agency headaches. Professional websites starting at $799. Charlottetown, PEI.",
} as const

/**
 * Drop a real photo in /public and set src, for example "/cody.jpg".
 * An empty src hides the photo. Nothing placeholder is shown.
 */
export const portrait: { src: string; alt: string } = {
  src: "",
  alt: "Cody Mac",
}

export const projectTypes = [
  { value: "website", label: "New website" },
  { value: "logo", label: "Logo and brand" },
  { value: "social", label: "Social media" },
  { value: "care", label: "Website care" },
  { value: "web-app", label: "Web app" },
  { value: "custom", label: "Custom project" },
  { value: "refresh", label: "Refresh or upkeep" },
  { value: "unsure", label: "Not sure yet" },
] as const

export type ProjectType = (typeof projectTypes)[number]["value"]

export const services = [
  {
    title: "Business Websites",
    text: "Modern websites designed to showcase your business, build trust, and turn visitors into customers. From simple landing pages to complete business websites.",
    links: [{ href: "/website-design", label: "Website design" }],
  },
  {
    title: "Custom Digital Projects",
    text: "Need something beyond a website? We create custom digital solutions, tools, and experiences built around your business needs.",
    links: [
      { href: "/logo-design", label: "Logo design" },
      { href: "/social-media-management", label: "Social media" },
    ],
  },
  {
    title: "Website Care & Support",
    text: "We don’t disappear after launch. We help keep your website updated, running smoothly, and improving over time.",
    links: [{ href: "/website-maintenance", label: "Website care" }],
  },
] as const

export const mainNav = [
  { href: "/website-design", label: "Websites" },
  { href: "/logo-design", label: "Logos" },
  { href: "/social-media-management", label: "Social" },
  { href: "/website-maintenance", label: "Care" },
  { href: "/about", label: "About" },
] as const

export const localNav = [
  { href: "/website-design-charlottetown", label: "Charlottetown" },
  { href: "/web-design-pei", label: "PEI" },
] as const

export const footerNav = {
  services: [
    { href: "/website-design", label: "Website design" },
    { href: "/logo-design", label: "Logo design" },
    { href: "/social-media-management", label: "Social media" },
    { href: "/website-maintenance", label: "Website care" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/#faq", label: "Questions" },
  ],
  places: [
    { href: "/website-design-charlottetown", label: "Website design in Charlottetown" },
    { href: "/web-design-pei", label: "Web design PEI" },
  ],
} as const

export const reasons = [
  {
    title: "Direct Communication",
    text: "No middleman. You work directly with the person building your project.",
  },
  {
    title: "Fast Turnaround",
    text: "Efficient process. Clear communication. No unnecessary delays.",
  },
  {
    title: "Design That Stands Out",
    text: "Your business should not look like everyone else’s.",
  },
  {
    title: "Support After Launch",
    text: "A website is only the beginning. We’re here when you need updates, improvements, or changes.",
  },
] as const

export const faqs = [
  {
    question: "Why choose MacDaddy Digital?",
    answer:
      "You work directly with the person creating your project. No account managers, no confusing handoffs, and no getting lost in a big agency system.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A straightforward website is often a few weeks from the day we start to the day it goes live. A custom project takes longer. You’ll get a timeline based on the actual work. We don’t promise a date before we know it.",
  },
  {
    question: "What do you need from me?",
    answer:
      "What the project is for, who it’s for, and anything you already have: words, photos, a logo, or logins for a site you want updated. A polished brief is optional. If something’s missing, we sort that out before building.",
  },
  {
    question: "Can we work together if I’m not in PEI?",
    answer:
      "Yes. Most projects run remotely: calls, shared previews, and written notes. Where you live doesn’t decide whether we can work together.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. We offer website maintenance and support packages to keep your site updated and performing well.",
  },
  {
    question: "Can you refresh a site I already have?",
    answer:
      "Often, yes. We’ll look at what you have and say whether a refresh is enough or a rebuild is the better spend.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Professional websites start at $799. Custom digital projects and larger builds are quoted for the work itself. We’ll confirm that price before anything starts.",
  },
  {
    question: "What if you can’t take it on?",
    answer:
      "We’ll say so. A clear no is kinder than a project that sits.",
  },
] as const

