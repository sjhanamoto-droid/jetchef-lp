import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import './PanelShell.css'

interface PanelShellProps {
  open: boolean
  onClose: () => void
  title: string
  subtitle?: string
  children: ReactNode
}

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

/** A right-side slide-over with backdrop, focus trap, and focus restore. */
export default function PanelShell({ open, onClose, title, subtitle, children }: PanelShellProps) {
  const panelRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (open) {
      triggerRef.current = document.activeElement as HTMLElement | null
      requestAnimationFrame(() => {
        panelRef.current?.querySelector<HTMLElement>('.panel__close')?.focus()
      })
    } else if (triggerRef.current?.focus) {
      triggerRef.current.focus()
      triggerRef.current = null
    }
  }, [open])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !panelRef.current) return
    const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE))
    if (items.length === 0) return
    const first = items[0]
    const last = items[items.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="panel-root">
          <motion.div
            className="panel-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.aside
            ref={panelRef}
            className="panel"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onKeyDown={onKeyDown}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 320 }}
          >
            <header className="panel__head">
              <div>
                <p className="panel__kicker">JET CHEF</p>
                <h2 className="panel__title">{title}</h2>
                {subtitle && <p className="panel__sub">{subtitle}</p>}
              </div>
              <button className="panel__close" onClick={onClose} aria-label="閉じる">
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </header>
            <div className="panel__scroll">{children}</div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  )
}
