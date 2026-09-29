import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Gère le scroll au changement de route :
 * - si un état { anchor } est présent (navigation AnchorLink depuis une sous-page),
 *   scrolle vers l'ancre après le premier rendu de la home ;
 * - sinon remet la page en haut.
 * La location.key change à chaque navigation (même vers la même URL),
 * ce qui garantit le déclenchement — y compris sous StrictMode.
 */
export function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const state = location.state as { anchor?: string } | null
    const anchor = state?.anchor ?? (location.hash ? location.hash.slice(1) : null)

    if (anchor) {
      // Double rAF : attend que la page cible soit peinte avant de scroller
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          const el = document.getElementById(anchor)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
          else window.scrollTo(0, 0)
        }),
      )
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.key])

  return null
}