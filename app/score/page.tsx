import { Suspense } from "react"
import ScorePageClient from "./ScorePageClient"

export default function ScorePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <div className="text-4xl mb-4">Loading...</div>
            <p className="text-muted-foreground">Preparing your experience</p>
          </div>
        </div>
      }
    >
      <ScorePageClient />
    </Suspense>
  )
}