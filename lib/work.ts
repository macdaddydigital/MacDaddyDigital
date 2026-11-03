export type Project = {
  title: string
  summary: string
  href?: string
  image?: string
  imageAlt?: string
}

/**
 * Real projects only. An empty list hides the Work section and the nav link.
 * Example:
 * { title: "Harbour Cafe", summary: "A new site for a Charlottetown cafe.", href: "https://example.com", image: "/work/harbour.jpg", imageAlt: "Harbour Cafe homepage" }
 */
export const projects: Project[] = []
