import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'
import type { Lang } from '../i18n/translations'
import { legalDocs, type LegalDoc } from '../data/legal'
import { usePageMeta } from '../hooks/usePageMeta'

export function LegalPage({ type }: { type: 'legal' | 'privacy' }) {
  const { t, lang } = useI18n()
  // Les documents légaux n'existent pas encore en ourdou → repli sur la version française
  const doc: LegalDoc =
    (legalDocs[type] as Partial<Record<Lang, LegalDoc>>)[lang] ?? legalDocs[type].fr

  usePageMeta(`${doc.title} | Hayal Rénovation Décoration`, doc.intro)

  return (
    <article className="bg-bone-100 pt-32 md:pt-40 pb-24">
      <div className="container-x max-w-3xl">
        <p className="eyebrow mb-6">{t('brand.name')}</p>
        <h1 className="h-display-md mb-4">{doc.title}</h1>
        <p className="text-xs text-stone-400 mb-8">{doc.updated}</p>
        <p className="text-stone-500 text-lg leading-relaxed mb-12">{doc.intro}</p>

        <div className="space-y-10">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl md:text-2xl text-ink-900 mb-4">{section.heading}</h2>
              <div className="space-y-3 border-l-2 border-ink-900/10 pl-5">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-ink-900/80 leading-relaxed">{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <Link to="/" className="btn-ghost mt-16">
          <ArrowLeft size={16} />
          {t('legal.backHome')}
        </Link>
      </div>
    </article>
  )
}