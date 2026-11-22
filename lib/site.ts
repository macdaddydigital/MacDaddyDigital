export const site = {
  name: "Mac Daddy Digital",
  owner: "Cody Mac",
  city: "Charlottetown",
  region: "Prince Edward Island",
  url: "https://www.macdaddydigital.ca",
  description:
    "Forget forgettable. Bold websites, distinctive brands, and clever digital solutions from Charlottetown, PEI.",
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
  { value: "web-app", label: "Web app" },
  { value: "custom", label: "Custom project" },
  { value: "refresh", label: "Refresh or upkeep" },
  { value: "unsure", label: "Not sure yet" },
] as const

export type ProjectType = (typeof projectTypes)[number]["value"]

export const services = [
  {
    title: "Websites",
    text: "Bold sites that load fast and feel like the business. Landing pages, full sites, and rebuilds of anything that’s gone dull.",
  },
  {
    title: "Web apps",
    text: "When a page isn’t enough. Booking, member areas, dashboards, and other tools with a little nerve.",
  },
  {
    title: "Custom projects",
    text: "The one that doesn’t fit a package. If it lives on the web, tell us. We’ll say straight if we can build it.",
  },
  {
    title: "Care and refreshes",
    text: "We don’t disappear after launch. Updates, fixes, and help as the business grows.",
  },
] as const

export const reasons = [
  {
    title: "A direct line",
    text: "You get a direct line to the person building the project.",
  },
  {
    title: "It moves",
    text: "Straightforward work gets a fast turnaround.",
  },
  {
    title: "Sharp, and quick",
    text: "A handsome site that crawls is still a miss. Looks and speed are both part of the job.",
  },
  {
    title: "After launch counts",
    text: "We don’t disappear after launch. Updates, fixes, and help as the business grows.",
  },
  {
    title: "Here, or anywhere",
    text: "Based in Charlottetown. Happy to meet on the Island, and just as glad to work remotely.",
  },
] as const

export const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "A straightforward website is often a few weeks from the day we start to the day it goes live. A web app or a more custom build takes longer. You’ll get a timeline with your quote, based on the actual project. We don’t promise a date before we know the work.",
  },
  {
    question: "What do you need from me?",
    answer:
      "What the project is for, who it’s for, and anything you already have: words, photos, a logo, or logins for a site you want updated. A polished brief is optional. If something’s missing, we sort that out before building.",
  },
  {
    question: "Can we work together if I’m not in PEI?",
    answer:
      "Yes. We’re in Charlottetown and happy to meet on the Island when that’s useful. Most projects run remotely: calls, shared previews, and written notes. Where you live doesn’t decide whether we can work together.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We don’t disappear after launch. You get a walkthrough and access to the site, then updates, fixes, and help as the business grows.",
  },
  {
    question: "Can you refresh a site I already have?",
    answer:
      "Often, yes. We’ll look at what you have and say whether a refresh is enough or a rebuild is the better spend.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Every project is quoted on its own. There’s no public rate card. Send a few details and we’ll reply with a price before any work starts.",
  },
  {
    question: "What if you can’t take it on?",
    answer:
      "We’ll say so. A clear no is kinder than a project that sits.",
  },
] as const

export const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
] as const
