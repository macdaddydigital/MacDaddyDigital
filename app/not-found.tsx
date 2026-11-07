import Link from "next/link"
import { Shell } from "@/components/shell"

export default function NotFound() {
  return (
    <Shell>
      <section className="wrap py-24 sm:py-32">
        <p className="kicker">404</p>
        <h1 className="mt-4 font-display text-5xl sm:text-6xl">That page isn’t here.</h1>
        <p className="mt-4 max-w-md text-lg text-muted">
          The link may be old. The studio is still here.
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          Back home
        </Link>
      </section>
    </Shell>
  )
}
