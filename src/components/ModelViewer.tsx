import { createElement, useEffect, useRef, useState } from 'react'
import { loadModelViewer } from '../lib/modelViewerLoader'

type Status = 'idle' | 'loading' | 'ready' | 'failed'

/**
 * Visionneuse 3D paresseuse basée sur <model-viewer>.
 * Le chunk (~250 Ko) n'est téléchargé que lorsque le composant entre
 * dans le viewport (rootMargin 200 px).
 */
export function ModelViewer({ src, alt, poster }: { src: string; alt: string; poster?: string }) {
  const hostRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  // StrictMode : le montage est déclenché deux fois — on garde une marque
  // par instance pour éviter deux observers/inits inutiles.
  const startedRef = useRef(false)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    let observer: IntersectionObserver | null = null

    const start = () => {
      if (startedRef.current) return
      startedRef.current = true
      setStatus('loading')
      loadModelViewer().then(
        () => setStatus('ready'),
        () => setStatus('failed'),
      )
    }

    if (startedRef.current) {
      // Déjà démarré (remontage StrictMode) : repasser par le loader mémoïsé.
      start()
    } else if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            observer?.disconnect()
            start()
          }
        },
        { rootMargin: '200px' },
      )
      observer.observe(host)
    } else {
      start()
    }

    return () => observer?.disconnect()
  }, [])

  if (status === 'failed') {
    // Repli : affiche l'image fixe si la visionneuse 3D ne peut pas charger.
    return (
      <figure className="relative aspect-[4/3] overflow-hidden rounded-sm bg-bone-200">
        <img src={poster ?? src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </figure>
    )
  }

  return (
    <div ref={hostRef} className="relative aspect-[4/3] overflow-hidden rounded-sm bg-bone-200">
      {status === 'ready' &&
        createElement('model-viewer', {
          src,
          alt,
          poster,
          'camera-controls': true,
          'auto-rotate': true,
          'auto-rotate-delay': 3000,
          'rotation-per-second': '12deg',
          style: { width: '100%', height: '100%' },
        })}
      {(status === 'idle' || status === 'loading') && (
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <span className="block h-10 w-10 animate-spin rounded-full border-2 border-ink-900/15 border-t-accent-600" />
        </div>
      )}
      <span className="sr-only">{alt}</span>
    </div>
  )
}