import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'
import { usePageMeta } from '../hooks/usePageMeta'

export function NotFound() {
  const { t } = useI18n()
  usePageMeta(`${t('notFound.title')} | Hayal Rénovation Décoration`, t('notFound.desc'))

  return (
    <section className="min-h-[80vh] flex items-center bg-bone-100 pt-24">
      <div className="container-x">
        <p className="eyebrow mb-6">404</p>
        <h1 className="h-display-lg mb-6">{t('notFound.title')}</h1>
        <p className="text-stone-500 text-lg leading-relaxed max-w-xl mb-10">
          {t('notFound.desc')}
        </p>
        <Link to="/" className="btn-primary">
          <ArrowLeft size={16} />
          {t('notFound.cta')}
        </Link>
      </div>
    </section>
  )
}