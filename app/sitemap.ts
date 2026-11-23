import type { MetadataRoute } from "next"
import { site } from "@/lib/site"
import { pageSeo } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return Object.values(pageSeo).map((page) => ({
    url: page.path === "/" ? site.url : `${site.url}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
