export const site = {
  name: "Mac Daddy Digital",
  owner: "Cody Mac",
  city: "Charlottetown",
  region: "Prince Edward Island",
  url: "https://www.macdaddydigital.ca",
  description:
    "Cody Mac builds websites, web apps, and custom web projects from Charlottetown, PEI. Direct contact, fast turnaround, and help after launch.",
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
    index: "01",
    title: "Websites",
    text: "Business sites, landing pages, and rebuilds of something that’s gone stale. Clear pages, a fast load, and a design that feels like the business.",
  },
  {
    index: "02",
    title: "Web apps",
    text: "When a brochure site isn’t enough. Booking, member areas, dashboards, and other tools that live in the browser.",
  },
  {
    index: "03",
    title: "Custom projects",
    text: "A one-off that doesn’t fit a package. If it belongs on the web, tell me what you’re trying to do. I’ll tell you straight if I can build it.",
  },
  {
    index: "04",
    title: "Care and refreshes",
    text: "Hosting help, upkeep, and updates to a site you already have. Launch day is the start. I’m still around after it.",
  },
] as const

export const steps = [
  {
    index: "01",
    title: "Tell me about it",
    text: "A note or a short call. What you need, who it’s for, and any deadline on the horizon.",
  },
  {
    index: "02",
    title: "Get a quote",
    text: "I reply with a scope, a timeline, and a price. Work starts after you say yes.",
  },
  {
    index: "03",
    title: "Watch it come together",
    text: "You see the work while it’s happening and you can steer it. One person. One conversation.",
  },
  {
    index: "04",
    title: "Launch, then stay in touch",
    text: "We put it live and walk through how to use it. Updates and upkeep are there if you want them.",
  },
] as const

export const reasons = [
  {
    title: "You reach the builder",
    text: "Questions go to the person writing the code and shaping the pages. That’s me.",
  },
  {
    title: "It moves",
    text: "A studio of one doesn’t wait on a chain of approvals. Straightforward work gets a fast turnaround.",
  },
  {
    title: "Sharp, and quick to load",
    text: "A handsome site that crawls is a miss. Looks and speed are both part of the job.",
  },
  {
    title: "After launch counts",
    text: "Fixes, small changes, and a refresh later. You still have someone to call.",
  },
  {
    title: "Here, or anywhere",
    text: "Based in Charlottetown. Glad to meet on the Island, and just as glad to work remotely.",
  },
] as const

export const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "A straightforward website is often a few weeks from the day we start to the day it goes live. A web app or a more custom build takes longer. You’ll get a timeline with your quote, based on the actual project. I don’t promise a date before I know the work.",
  },
  {
    question: "What do you need from me?",
    answer:
      "What the project is for, who it’s for, and anything you already have: words, photos, a logo, or logins for a site you want updated. A polished brief is optional. If something’s missing, we sort that out before building.",
  },
  {
    question: "Can we work together if I’m not in PEI?",
    answer:
      "Yes. I’m in Charlottetown and happy to meet on the Island when that’s useful. Most projects run remotely: calls, shared previews, and written notes. Where you live doesn’t decide whether we can work together.",
  },
  {
    question: "What happens after launch?",
    answer:
      "You get a walkthrough and access to the site. Hosting help, small edits, or a later refresh can be part of the arrangement. You can also take the site and run it yourself.",
  },
  {
    question: "Can you refresh a site I already have?",
    answer:
      "Often, yes. I’ll look at what you have and say whether a refresh is enough or a rebuild is the better spend.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Every project is quoted on its own. There’s no public rate card. Send a few details and I’ll reply with a price before any work starts.",
  },
  {
    question: "What if you can’t take it on?",
    answer:
      "I’ll say so. A clear no is kinder than a project that sits.",
  },
] as const

export const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
] as const
