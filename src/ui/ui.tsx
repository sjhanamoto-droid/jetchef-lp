import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import type { ReactNode } from 'react'

export type PanelKind = 'order' | 'contact' | null

interface UIContextValue {
  panel: PanelKind
  open: (panel: Exclude<PanelKind, null>) => void
  close: () => void
}

const UIContext = createContext<UIContextValue | null>(null)

export function UIProvider({ children }: { children: ReactNode }) {
  const [panel, setPanel] = useState<PanelKind>(null)

  const open = useCallback((p: Exclude<PanelKind, null>) => setPanel(p), [])
  const close = useCallback(() => setPanel(null), [])

  // Lock body scroll while a panel is open
  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = panel ? 'hidden' : original
    return () => {
      document.body.style.overflow = original
    }
  }, [panel])

  // Close on Escape
  useEffect(() => {
    if (!panel) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [panel, close])

  return <UIContext.Provider value={{ panel, open, close }}>{children}</UIContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUI() {
  const ctx = useContext(UIContext)
  if (!ctx) throw new Error('useUI must be used within <UIProvider>')
  return ctx
}
