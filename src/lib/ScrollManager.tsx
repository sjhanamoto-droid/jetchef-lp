import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to top on navigation, or to a target section when navigated with
 *  state `{ scrollTo: id }` (used by the header nav from non-home pages). */
export default function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    if (state?.scrollTo) {
      requestAnimationFrame(() => {
        const el = document.getElementById(state.scrollTo!)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }
  }, [location])

  return null
}
