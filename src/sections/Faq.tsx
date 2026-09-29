import { useEffect } from 'react'
import { Plus } from 'lucide-react'
import { useI18n, type TranslationKey } from '../i18n/I18nProvider'
import { Reveal } from '../components/Reveal'

const FAQ_ITEMS = 5

/**
 * FAQ accessible (details/summary) + données structurées FAQPage injectées
 * dynamiquement pour le SEO (rich results Google).
 */
export function Faq() {
  const { t, lang } = useI18n()

  // Données structurées FAQPage — régénérées à chaque changement de langue
  useEffect(() => {
    const id = 'faq-jsonld'
    document.getElementById(id)?.remove()
    const script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: Array.from({ length: FAQ_ITEMS }, (_, i) => {
        const q = t(`faq.q${i + 1}` as TranslationKey)
        const a = t(`faq.a${i + 1}` as TranslationKey)
        return {
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        }
      }),
    })
    document.head.appendChild(script)
    return () => {
      document.getElementById(id)?.remove()
    }
  }, [lang, t])

  return (
    <section id="faq" className="section bg-bone-100">
      <div className="container-x max-w-3xl">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <p className="eyebrow mb-6">{t('faq.eyebrow')}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="h-display-lg mb-5">{t('faq.title')}</h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="text-stone-500 text-lg">{t('faq.subtitle')}</p>
          </Reveal>
        </div>

        <div className="divide-y divide-ink-900/10 border-y border-ink-900/10">
          {Array.from({ length: FAQ_ITEMS }, (_, i) => {
            const q = t(`faq.q${i + 1}` as TranslationKey)
            const a = t(`faq.a${i + 1}` as TranslationKey)
            return (
              <Reveal key={i} delay={i * 60}>
                <details className="group">
                  <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="font-display text-lg md:text-xl text-ink-900 leading-snug">{q}</span>
                    <span className="grid place-items-center h-8 w-8 shrink-0 rounded-full border border-ink-900/15 text-ink-900 transition-transform duration-300 group-open:rotate-45">
                      <Plus size={14} />
                    </span>
                  </summary>
                  <p className="pb-5 pr-10 text-stone-500 leading-relaxed">{a}</p>
                </details>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}