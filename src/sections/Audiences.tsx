import { Home, Building2 } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'
import { Reveal } from '../components/Reveal'
import { AnchorLink } from '../components/AnchorLink'

/** Deux parcours distincts : particuliers et professionnels (bureaux, commerces). */
export function Audiences() {
  const { t } = useI18n()

  return (
    <section id="audiences" className="section bg-bone-50">
      <div className="container-x">
        <div className="max-w-2xl mb-12 md:mb-16">
          <Reveal>
            <p className="eyebrow mb-6">{t('audiences.eyebrow')}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="h-display-lg">{t('audiences.title')}</h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Particuliers */}
          <Reveal>
            <article className="h-full flex flex-col bg-bone-100 border border-ink-900/10 p-8 md:p-10 rounded-sm transition-colors duration-300 hover:border-ink-900/25">
              <span className="grid place-items-center h-12 w-12 rounded-full border border-ink-900/15 text-ink-900 mb-6">
                <Home size={18} />
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-ink-900 mb-4">
                {t('audiences.ind.title')}
              </h3>
              <p className="text-stone-500 leading-relaxed flex-1">{t('audiences.ind.desc')}</p>
              <AnchorLink id="quote" className="btn-link mt-8">
                {t('audiences.ind.cta')}
              </AnchorLink>
            </article>
          </Reveal>

          {/* Professionnels */}
          <Reveal delay={140}>
            <article className="h-full flex flex-col bg-ink-900 text-bone-100 p-8 md:p-10 rounded-sm grain">
              <span className="grid place-items-center h-12 w-12 rounded-full border border-bone-100/25 text-bone-100 mb-6">
                <Building2 size={18} />
              </span>
              <h3 className="font-display text-2xl md:text-3xl mb-4">
                {t('audiences.pro.title')}
              </h3>
              <p className="text-bone-100/70 leading-relaxed flex-1">{t('audiences.pro.desc')}</p>
              <AnchorLink id="quote" className="btn-link mt-8 text-bone-100">
                {t('audiences.pro.cta')}
              </AnchorLink>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}