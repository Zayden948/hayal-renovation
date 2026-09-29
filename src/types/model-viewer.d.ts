// Augmentation JSX pour le web component <model-viewer> (React 18 :
// l'espace de noms JSX est global). Les attributs sont en kebab-case
// (attributs HTML), d'où l'interface explicite.

import type { DetailedHTMLProps, HTMLAttributes } from 'react'

type ModelViewerAttributes = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  src?: string
  alt?: string
  poster?: string
  'camera-controls'?: boolean | 'true'
  'auto-rotate'?: boolean | 'true'
  'auto-rotate-delay'?: number
  'rotation-per-second'?: string
  'field-of-view'?: string
  'interaction-prompt'?: string
  'environment-image'?: string
  'shadow-intensity'?: number
  exposure?: number
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerAttributes
    }
  }
}

export {}