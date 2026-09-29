import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { translations, type Lang, type TranslationKey } from './translations'

type Dict = Record<string, string>

const I18nContext = createContext<{
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  t: (key: TranslationKey) => string
  dict: Dict
} | null>(null)

function applyLangToDocument(lang: Lang) {
  const root = document.documentElement
  root.lang = lang
  // L'ourdou s'écrit de droite à gauche
  root.dir = lang === 'ur' ? 'rtl' : 'ltr'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'fr'
    const saved = window.localStorage.getItem('hayal.lang') as Lang | null
    if (saved === 'fr' || saved === 'en' || saved === 'ur') return saved
    const browser = window.navigator.language.toLowerCase()
    return browser.startsWith('fr') ? 'fr' : 'fr' // default to French
  })

  useEffect(() => {
    applyLangToDocument(lang)
    try {
      window.localStorage.setItem('hayal.lang', lang)
    } catch {
      // ignore storage errors (private mode, etc.)
    }
  }, [lang])

  const setLang = useCallback((l: Lang) => setLangState(l), [])
  const toggle = useCallback(() => setLangState((prev) => (prev === 'fr' ? 'en' : 'fr')), [])

  const t = useCallback(
    (key: TranslationKey): string => {
      const dict = translations[lang] as Dict
      return dict[key as string] ?? (translations.fr as Dict)[key as string] ?? String(key)
    },
    [lang],
  )

  const value = useMemo(
    () => ({ lang, setLang, toggle, t, dict: translations[lang] as Dict }),
    [lang, setLang, toggle, t],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider')
  return ctx
}

export type { TranslationKey } from './translations'
