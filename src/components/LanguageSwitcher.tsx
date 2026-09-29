import { useI18n } from '../i18n/I18nProvider'
import type { Lang } from '../i18n/translations'

// Labels natifs — l'ourdou s'affiche en écriture locale (arabo-ourdou),
// FR / EN en latin pour rester cohérent avec le brand.
const OPTIONS: { lang: Lang; label: string }[] = [
  { lang: 'fr', label: 'FR' },
  { lang: 'en', label: 'EN' },
  { lang: 'ur', label: 'اردو' },
]

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang } = useI18n()
  const set = (next: Lang) => () => setLang(next)

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase select-none ${className}`}
    >
      {OPTIONS.map((o, i) => (
        <span key={o.lang} className="inline-flex items-center gap-1.5">
          {i > 0 && (
            <span aria-hidden className="text-stone-400/70">
              /
            </span>
          )}
          <button
            type="button"
            onClick={set(o.lang)}
            aria-pressed={lang === o.lang}
            className={`transition-all duration-300 px-1.5 py-0.5 ${
              lang === o.lang ? 'text-ink-900' : 'text-stone-500 hover:text-ink-900'
            }`}
          >
            {o.label}
          </button>
        </span>
      ))}
    </div>
  )
}