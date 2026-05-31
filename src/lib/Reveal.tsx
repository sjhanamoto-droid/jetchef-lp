import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  /** delay in seconds (use for stagger) */
  delay?: number
  /** initial vertical offset in px */
  y?: number
  /** initial horizontal offset in px */
  x?: number
}

/**
 * Scroll-triggered entrance animation. Fades + slides children into view once.
 * Reduced motion: handled app-wide by <MotionConfig reducedMotion="user"> in main.tsx
 * (transform offsets are dropped for users who request reduced motion).
 * VITE_STATIC_REVEAL=1 disables the effect entirely at build time (used for screenshots).
 */
const STATIC = (import.meta as { env?: Record<string, string> }).env?.VITE_STATIC_REVEAL === '1'

export default function Reveal({ children, className, delay = 0, y = 28, x = 0 }: RevealProps) {
  if (STATIC) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
