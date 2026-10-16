import { useI18n } from '../i18n/I18nProvider'
import { Reveal } from '../components/Reveal'
import { testimonials } from '../data/testimonials'
import { Star } from 'lucide-react'

export function Testimonials() {
  const { t, lang } = useI18n()

  return (
    <section className="section bg-bone-50">
      <div className="container-x">
        <div className="max-w-3xl mb-16 md:mb-20">
          <Reveal>
            <p className="eyebrow mb-6">{t('testimonials.eyebrow')}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="h-display-lg mb-6">{t('testimonials.title')}</h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="text-stone-500 text-lg">{t('testimonials.subtitle')}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((tm, i) => (
            <Reveal key={tm.id} delay={i * 80}>
              <figure className="bg-bone-100 p-8 md:p-10 rounded-sm h-full flex flex-col">
                <div className="flex items-center gap-1 mb-6" aria-label={`${tm.rating}/5`}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={14}
                      className={idx < tm.rating ? 'fill-accent-500 text-accent-500' : 'text-stone-300'}
                    />
                  ))}
                </div>
                <blockquote className="font-display text-xl md:text-2xl text-ink-900 leading-snug mb-8 flex-1">
                  <span className="font-editorial italic text-3xl text-accent-500 mr-1">“</span>
                  {tm.quote[lang]}
                  <span className="font-editorial italic text-3xl text-accent-500 ml-1">”</span>
                </blockquote>
                <figcaption className="pt-6 border-t border-ink-900/10 flex items-center justify-between text-sm">
                  <span className="font-medium text-ink-900">{tm.name}</span>
                  <span className="text-stone-400">{tm.project}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="text-xs text-stone-400 mt-10 max-w-md">
            {t('testimonials.placeholder.note')}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
