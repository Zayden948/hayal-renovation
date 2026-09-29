import { useEffect } from 'react'

/**
 * Met à jour le titre de la page et la meta description par route.
 * Les valeurs par défaut de index.html servent de repli pour la home.
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title
    if (description) {
      const el = document.querySelector('meta[name="description"]')
      el?.setAttribute('content', description)
    }
  }, [title, description])
}