import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'
import { Reveal } from '../components/Reveal'
import { AnchorLink } from '../components/AnchorLink'

const services = [
  { key: 'complete', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80' },
  { key: 'interior', img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80' },
  { key: 'decoration', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80' },
  { key: 'layout', img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80' },
  { key: 'kitchen', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80' },
  { key: 'bathroom', img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80' },
  { key: 'paint', img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80' },
  { key: 'support', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80' },
] as const

export function Services() {
  const { t } = useI18n()

  return (
    <section id="services" className="section bg-bone-50">
      <div className="container-x">
        <div className="max-w-3xl mb-16 md:mb-24">
          <Reveal>
            <p className="eyebrow mb-6">{t('services.eyebrow')}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="h-display-lg mb-6">{t('services.title')}</h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="text-stone-500 text-lg leading-relaxed max-w-2xl">{t('services.subtitle')}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <Reveal key={s.key} delay={i * 60} className="group">
              <article className="relative bg-bone-100 rounded-sm overflow-hidden h-full flex flex-col">
                <div className="image-frame aspect-[4/5]">
                  <img
                    src={s.img}
                    alt={t(`services.items.${s.key}.title` as Parameters<typeof t>[0])}
                    loading="lazy"
                    className="img"
                  />
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display text-xl md:text-[22px] text-ink-900 leading-tight">
                      {t(`services.items.${s.key}.title` as Parameters<typeof t>[0])}
                    </h3>
                    <span className="font-editorial text-stone-400 text-sm mt-1">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="text-sm text-stone-500 leading-relaxed mb-5 flex-1">
                    {t(`services.items.${s.key}.desc` as Parameters<typeof t>[0])}
                  </p>
                  <AnchorLink id="quote" className="btn-link">
                    {t('services.cta')}
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </AnchorLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
