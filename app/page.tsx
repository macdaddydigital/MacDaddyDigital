import { HomePage } from "@/components/home-page"
import { Shell } from "@/components/shell"
import { pageMetadata, pageSeo } from "@/lib/seo"

export const metadata = pageMetadata(pageSeo.home)

export default function Page() {
  return (
    <Shell>
      <HomePage />
    </Shell>
  )
}
