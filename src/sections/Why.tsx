import { useI18n } from '../i18n/I18nProvider'
import { Reveal } from '../components/Reveal'

const points = [1, 2, 3, 4, 5, 6, 7] as const

export function Why() {
  const { t } = useI18n()

  return (
    <section className="section bg-ink-900 text-bone-100 grain">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow !text-bone-100/60 mb-6">{t('why.eyebrow')}</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="h-display-lg text-bone-50 mb-6">{t('why.title')}</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-bone-100/70 text-lg leading-relaxed max-w-md">
                {t('about.lede')}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-bone-100/10">
              {points.map((p, i) => (
                <Reveal as="li" key={p} delay={i * 60} className="py-6 md:py-7 grid grid-cols-12 gap-4 items-baseline">
                  <span className="col-span-2 md:col-span-1 font-editorial italic text-bone-100/40 text-lg">
                    0{p}
                  </span>
                  <h3 className="col-span-10 md:col-span-4 font-display text-xl md:text-[22px] text-bone-50">
                    {t(`why.${p}.title` as Parameters<typeof t>[0])}
                  </h3>
                  <p className="col-span-12 md:col-span-7 text-bone-100/65 leading-relaxed md:pl-4">
                    {t(`why.${p}.desc` as Parameters<typeof t>[0])}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
