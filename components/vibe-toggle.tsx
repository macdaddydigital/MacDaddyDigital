"use client"

import { motion } from "framer-motion"

type VibeMode = "gold" | "neon" | "prestige"

interface VibeToggleProps {
  currentVibe: VibeMode
  onChange: (vibe: VibeMode) => void
}

export function VibeToggle({ currentVibe, onChange }: VibeToggleProps) {
  const vibes: VibeMode[] = ["gold", "neon", "prestige"]
  
  return (
    <div className="flex items-center gap-4 relative z-50">
      <span className="hidden sm:block text-xs font-bold tracking-[0.3em] text-muted-foreground">VIBE CHECK</span>
      <div 
        className="relative flex rounded-full border border-border bg-card/80 backdrop-blur-sm p-1"
        role="tablist"
        aria-label="Select vibe mode"
      >
        {vibes.map((vibe) => {
          const isActive = currentVibe === vibe
          return (
            <button
              key={vibe}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(vibe)}
              className={`
                relative px-3 sm:px-4 py-1.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer select-none rounded-full
                ${isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}
                ${isActive && currentVibe === "neon" ? "shadow-[0_0_8px_rgba(0,255,255,0.3)]" : ""}
              `}
              style={{ isolation: 'isolate' }}
            >
              <span className="relative z-20 pointer-events-none">{vibe}</span>
              {isActive && (
                <motion.div
                  layoutId="vibe-indicator"
                  className="absolute inset-0 rounded-full bg-primary z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
