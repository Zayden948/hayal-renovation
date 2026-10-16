import { useI18n } from '../i18n/I18nProvider'
import type { Lang } from '../i18n/translations'

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang } = useI18n()
  const set = (next: Lang) => () => setLang(next)

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.18em] uppercase select-none ${className}`}
    >
      <button
        type="button"
        onClick={set('fr')}
        aria-pressed={lang === 'fr'}
        className={`transition-all duration-300 px-1.5 py-0.5 ${
          lang === 'fr'
            ? 'text-ink-900'
            : 'text-stone-500 hover:text-ink-900'
        }`}
      >
        FR
      </button>
      <span aria-hidden className="text-stone-400/70">/</span>
      <button
        type="button"
        onClick={set('en')}
        aria-pressed={lang === 'en'}
        className={`transition-all duration-300 px-1.5 py-0.5 ${
          lang === 'en'
            ? 'text-ink-900'
            : 'text-stone-500 hover:text-ink-900'
        }`}
      >
        EN
      </button>
    </div>
  )
}
