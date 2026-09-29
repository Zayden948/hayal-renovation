import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

export function Logo({ inverted = false, compact = false }: { inverted?: boolean; compact?: boolean }) {
  const { t } = useI18n()
  const color = inverted ? 'text-bone-50' : 'text-ink-900'
  const sub = inverted ? 'text-bone-50/60' : 'text-stone-500'

  return (
    <Link to="/" className={`group inline-flex items-center gap-3 ${color}`} aria-label="Hayal Rénovation Décoration">
      <span
        className={`relative grid place-items-center font-display text-[20px] leading-none ${
          compact ? 'h-9 w-9' : 'h-11 w-11'
        }`}
      >
        <span
          aria-hidden
          className="absolute inset-0 rounded-md border border-current opacity-30 transition-opacity duration-300 group-hover:opacity-100"
        />
        <span className="relative">H</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] tracking-[0.18em]">{t('brand.name')}</span>
        <span className={`mt-1 text-[10px] tracking-[0.22em] uppercase ${sub}`}>{t('brand.tagline')}</span>
      </span>
    </Link>
  )
}