import { type CSSProperties, type MouseEvent, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 * Lien d'ancre (#services, #quote…) qui fonctionne partout :
 * - sur la home : scroll natif fluide + mise à jour du hash sans re-render ;
 * - depuis une sous-page : navigation vers la home avec un état { anchor },
 *   que ScrollManager consomme pour scroller après le rendu.
 */
export function AnchorLink({
  id,
  className,
  style,
  children,
  onClick,
}: {
  id: string
  className?: string
  style?: CSSProperties
  children: ReactNode
  onClick?: () => void
}) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.()
    if (pathname !== '/') {
      e.preventDefault()
      navigate('/', { state: { anchor: id } })
      return
    }
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <a href={`#${id}`} onClick={handle} className={className} style={style}>
      {children}
    </a>
  )
}