import { useI18n } from '../i18n/I18nProvider'
import { Reveal } from '../components/Reveal'

const steps = [1, 2, 3, 4, 5] as const

export function Process() {
  const { t } = useI18n()

  return (
    <section id="process" className="section bg-bone-50">
      <div className="container-x">
        <div className="max-w-3xl mb-16 md:mb-24">
          <Reveal>
            <p className="eyebrow mb-6">{t('process.eyebrow')}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="h-display-lg mb-6">{t('process.title')}</h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="text-stone-500 text-lg">{t('process.subtitle')}</p>
          </Reveal>
        </div>

        <div className="relative">
          {/* Vertical connecting line (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-ink-900/10"
          />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative">
            {steps.map((step, i) => (
              <Reveal key={step} delay={i * 90}>
                <li className="relative">
                  <div className="grid place-items-center h-12 w-12 rounded-full bg-bone-100 border border-ink-900/15 mb-6">
                    <span className="font-editorial italic text-ink-900">
                      0{step}
                    </span>
                  </div>
                  <h3 className="font-display text-xl md:text-[22px] text-ink-900 mb-3 leading-snug">
                    {t(`process.${step}.title` as Parameters<typeof t>[0])}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    {t(`process.${step}.desc` as Parameters<typeof t>[0])}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
