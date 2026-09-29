import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'
import { usePageMeta } from '../hooks/usePageMeta'
import { projects } from '../data/projects'
import { ModelViewer } from '../components/ModelViewer'
import { NotFound } from './NotFound'

export function ProjectPage() {
  const { id } = useParams()
  const { t } = useI18n()
  const project = projects.find((p) => p.id === id)

  // 3 autres projets, même catégorie en priorité
  const related = useMemo(() => {
    if (!project) return []
    const sameCat = projects.filter((p) => p.id !== project.id && p.category === project.category)
    const others = projects.filter((p) => p.id !== project.id && p.category !== project.category)
    return [...sameCat, ...others].slice(0, 3)
  }, [project])

  usePageMeta(
    project
      ? `${project.name} | ${t('brand.name')}`
      : `${t('project.notFound.title')} | ${t('brand.name')}`,
    project?.description,
  )

  if (!project) return <NotFound />

  return (
    <article className="bg-bone-100 pt-32 md:pt-40 pb-24">
      <div className="container-x max-w-4xl">
        {/* Fil d'Ariane */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-stone-500">
          <Link to="/" className="hover:text-accent-600 transition-colors">
            {t('nav.home')}
          </Link>
          <span className="mx-2 text-stone-300" aria-hidden="true">/</span>
          <Link to="/#projects" className="hover:text-accent-600 transition-colors">
            {t('nav.projects')}
          </Link>
          <span className="mx-2 text-stone-300" aria-hidden="true">/</span>
          <span className="text-ink-900">{project.name}</span>
        </nav>

        <h1 className="h-display-lg mb-8">{project.name}</h1>

        {/* Visionneuse 3D si un modèle est fourni, sinon grande image */}
        {project.model3d ? (
          <>
            <ModelViewer src={project.model3d} alt={project.name} poster={project.image} />
            <p className="mt-3 text-xs text-stone-400 italic">{t('project.model3d.note')}</p>
          </>
        ) : (
          <img
            src={project.image}
            alt={project.name}
            className="aspect-[4/3] w-full rounded-sm object-cover"
          />
        )}

        {/* Métadonnées */}
        <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-ink-900/10 py-8 sm:grid-cols-4">
          <div>
            <dt className="eyebrow mb-1">{t('projectModal.category')}</dt>
            <dd className="text-ink-900">{t(`projects.filter.${project.category}`)}</dd>
          </div>
          <div>
            <dt className="eyebrow mb-1">{t('projectModal.location')}</dt>
            <dd className="text-ink-900">{project.location}</dd>
          </div>
          <div>
            <dt className="eyebrow mb-1">{t('projectModal.year')}</dt>
            <dd className="text-ink-900">{project.year}</dd>
          </div>
          <div>
            <dt className="eyebrow mb-1">{t('project.surface')}</dt>
            <dd className="text-ink-900">{project.surface ?? '—'}</dd>
          </div>
        </dl>

        <p className="mt-10 text-stone-500 text-lg leading-relaxed">{project.description}</p>

        {/* Sections par pièce / zone du chantier */}
        {project.rooms && (
          <div className="mt-14 space-y-12">
            {project.rooms.map((room, i) => (
              <section key={i} className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <p className="eyebrow mb-3">{String(i + 1).padStart(2, '0')}</p>
                  <h2 className="font-display text-2xl md:text-3xl text-ink-900 mb-4">{room.title}</h2>
                  <p className="text-stone-500 leading-relaxed">{room.text}</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {room.images.map((src, j) => (
                    <img
                      key={j}
                      src={src}
                      alt={`${room.title} — ${project.name}`}
                      loading="lazy"
                      className="aspect-[16/10] w-full rounded-sm object-cover"
                    />
                  ))}
                </div>
              </section>
            ))}
            <p className="text-xs text-stone-400 italic">{t('project.rooms.note')}</p>
          </div>
        )}

        {project.gallery && (
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.name} — ${i + 1}`}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-sm object-cover"
              />
            ))}
          </div>
        )}

        {/* Projets liés : 3 autres réalisations (même catégorie en priorité) */}
        {related.length > 0 && (
          <section className="mt-20 border-t border-ink-900/10 pt-12">
            <h2 className="h-display-md mb-8">{t('project.related')}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <Link key={p.id} to={`/projets/${p.id}`} className="group">
                  <div className="image-frame aspect-[4/3] overflow-hidden rounded-sm">
                    <img src={p.image} alt={p.name} loading="lazy" className="img" />
                  </div>
                  <p className="mt-3 font-display text-lg text-ink-900 leading-snug group-hover:text-accent-600 transition-colors">
                    {p.name}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <Link to="/#projects" className="btn-ghost mt-16">
          <ArrowLeft size={16} />
          {t('project.back')}
        </Link>
      </div>
    </article>
  )
}