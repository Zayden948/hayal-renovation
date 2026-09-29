import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'
import { AnchorLink } from '../components/AnchorLink'

export function Hero() {
  const { t } = useI18n()

  return (
    <section
      aria-label="Hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink-900 text-bone-100"
    >
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="h-full w-full object-cover opacity-80 scale-105"
          loading="eager"
          fetchPriority="high"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/20 to-ink-900/80"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-ink-900/60 via-transparent to-transparent"
        />
      </div>

      <div className="relative container-x flex min-h-[100svh] flex-col pt-32 md:pt-40 pb-12">
        {/* Top eyebrow */}
        <div className="flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-bone-100/70">
          <span className="h-px w-10 bg-bone-100/40" />
          {t('hero.eyebrow')}
        </div>

        {/* Main content */}
        <div className="mt-12 md:mt-20 max-w-5xl">
          <h1 className="h-display-xl text-bone-50">
            <span className="block">{t('hero.title').split(' ').slice(0, -3).join(' ')}</span>
            <span className="block italic editorial text-bone-100/90 font-normal">
              {t('hero.title').split(' ').slice(-3).join(' ')}
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-bone-100/80">
            {t('hero.subtitle')}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <AnchorLink
              id="projects"
              className="btn bg-bone-50 text-ink-900 px-7 py-4 hover:bg-white"
            >
              {t('hero.ctaPrimary')}
              <ArrowUpRight size={16} />
            </AnchorLink>
            <AnchorLink
              id="quote"
              className="btn border border-bone-100/30 text-bone-50 px-7 py-4 hover:bg-bone-50 hover:text-ink-900"
            >
              {t('hero.ctaSecondary')}
            </AnchorLink>
          </div>
        </div>

        {/* Bottom row: credibility + scroll hint */}
        <div className="mt-auto pt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <ul className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-bone-100/80">
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              {t('hero.cred.1')}
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              {t('hero.cred.2')}
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              {t('hero.cred.3')}
            </li>
          </ul>

          <AnchorLink
            id="about"
            className="group inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-bone-100/60 hover:text-bone-50"
          >
            <span>{t('hero.scroll')}</span>
            <span className="grid place-items-center h-10 w-10 rounded-full border border-bone-100/30 animate-scroll-hint">
              <ArrowDown size={14} />
            </span>
          </AnchorLink>
        </div>
      </div>
    </section>
  )
}
