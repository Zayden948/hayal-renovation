import { useI18n } from '../i18n/I18nProvider'
import { Reveal } from '../components/Reveal'

const values = [
  { key: 'quality', icon: '◆' },
  { key: 'custom', icon: '◇' },
  { key: 'transparency', icon: '◈' },
  { key: 'engagement', icon: '◉' },
] as const

export function About() {
  const { t } = useI18n()

  return (
    <section id="about" className="section bg-bone-100">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <Reveal className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              <div className="image-frame aspect-[4/5] rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=80"
                  alt="Atelier de rénovation Hayal"
                  loading="lazy"
                  className="img"
                />
              </div>
              <div className="hidden md:block absolute -bottom-10 -right-10 w-48 aspect-square image-frame rounded-sm shadow-elev">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80"
                  alt=""
                  loading="lazy"
                  className="img"
                />
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div className="lg:col-span-6 order-1 lg:order-2 lg:pl-8">
            <Reveal>
              <p className="eyebrow mb-6">{t('about.eyebrow')}</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="h-display-lg mb-8">
                {t('about.title')}
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-stone-500 text-lg leading-relaxed mb-6">{t('about.lede')}</p>
            </Reveal>
            <Reveal delay={260}>
              <div className="border-t border-ink-900/10 pt-8">
                <p className="eyebrow !text-ink-900 mb-3">{t('about.mission.title')}</p>
                <p className="text-ink-900/80 leading-relaxed">{t('about.mission.body')}</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Values */}
        <Reveal delay={120}>
          <div className="mt-24 md:mt-32">
            <p className="eyebrow !text-ink-900 mb-10">{t('about.values.title')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-900/10">
              {values.map((v, i) => (
                <div
                  key={v.key}
                  className="bg-bone-100 p-8 lg:p-10 group hover:bg-bone-50 transition-colors"
                  style={{ ['--i' as never]: i }}
                >
                  <span className="block text-2xl text-accent-500 mb-6" aria-hidden>
                    {v.icon}
                  </span>
                  <h3 className="font-display text-2xl text-ink-900 mb-3">
                    {t(`about.values.${v.key}.title` as Parameters<typeof t>[0])}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    {t(`about.values.${v.key}.body` as Parameters<typeof t>[0])}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
