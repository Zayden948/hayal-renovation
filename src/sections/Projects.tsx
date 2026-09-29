import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useI18n, type TranslationKey } from '../i18n/I18nProvider'
import { Reveal } from '../components/Reveal'
import { projects, type ProjectCategory } from '../data/projects'

const categories: ('all' | ProjectCategory)[] = [
  'all',
  'renovation',
  'kitchen',
  'bathroom',
  'decoration',
  'layout',
  'design3d',
]

export function Projects() {
  const { t } = useI18n()
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all')

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="projects" className="section bg-bone-50">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-6">{t('projects.eyebrow')}</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="h-display-lg">{t('projects.title')}</h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-stone-500 text-lg">{t('projects.subtitle')}</p>
            </Reveal>
          </div>
          <Reveal delay={240}>
            <p className="text-xs text-stone-400 max-w-xs md:text-right">
              {t('projects.placeholder.note')}
            </p>
          </Reveal>
        </div>

        {/* Filters */}
        <Reveal>
          <div className="flex flex-wrap items-center gap-2 mb-10 md:mb-14">
            {categories.map((c) => {
              const isActive = filter === c
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  aria-pressed={isActive}
                  className={`px-4 py-2 text-xs tracking-[0.16em] uppercase rounded-full border transition-all duration-300 ${
                    isActive
                      ? 'bg-ink-900 text-bone-50 border-ink-900'
                      : 'border-ink-900/15 text-ink-900/70 hover:border-ink-900 hover:text-ink-900'
                  }`}
                >
                  {t(`projects.filter.${c}` as TranslationKey)}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-stone-500 text-center py-20">{t('projects.empty')}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((project, i) => (
              <Reveal
                key={project.id}
                delay={(i % 3) * 80}
                className={`group ${i % 5 === 0 ? 'md:row-span-2' : ''}`}
              >
                {/* Chaque carte est un lien vers la page projet dédiée */}
                <Link to={`/projets/${project.id}`} className="block w-full">
                  <div
                    className={`image-frame rounded-sm overflow-hidden ${
                      i % 5 === 0 ? 'aspect-[3/4] md:aspect-[3/4]' : 'aspect-[4/5]'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      loading="lazy"
                      className="img"
                    />
                  </div>
                  <div className="pt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] tracking-[0.22em] uppercase text-stone-400 mb-2">
                        {t(`projects.filter.${project.category}` as TranslationKey)} · {project.location}
                      </p>
                      <h3 className="font-display text-xl md:text-[22px] text-ink-900 leading-snug">
                        {project.name}
                      </h3>
                    </div>
                    <span className="mt-1 grid place-items-center h-9 w-9 rounded-full border border-ink-900/15 text-ink-900 transition-all duration-300 group-hover:bg-ink-900 group-hover:text-bone-50 group-hover:border-ink-900">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}