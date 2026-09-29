import { useCallback, useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { Reveal } from '../components/Reveal'
import { beforeAfters } from '../data/projects'

function BeforeAfterSlider({
  before,
  after,
  label,
}: {
  before: string
  after: string
  label: string
}) {
  const { t } = useI18n()
  const [pos, setPos] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const move = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width)
    setPos((x / rect.width) * 100)
  }, [])

  useEffect(() => {
    if (!dragging) return
    const onMove = (e: PointerEvent) => move(e.clientX)
    const onUp = () => setDragging(false)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [dragging, move])

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4))
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4))
  }

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full overflow-hidden rounded-sm select-none touch-none"
        onPointerDown={(e) => {
          setDragging(true)
          move(e.clientX)
        }}
      >
        {/* After (full) */}
        <img
          src={after}
          alt={label + ' — after'}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={before}
            alt={label + ' — before'}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Labels */}
        <span className="absolute top-4 left-4 chip bg-bone-50/90 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-ink-900" />
          {t('beforeAfter.before')}
        </span>
        <span className="absolute top-4 right-4 chip bg-bone-50/90 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
          {t('beforeAfter.after')}
        </span>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-bone-50 pointer-events-none"
          style={{ left: `${pos}%` }}
          aria-hidden
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 grid place-items-center h-12 w-12 rounded-full bg-bone-50 text-ink-900 shadow-elev border border-ink-900/10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 6L4 12l5 6M15 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-label="Before / After"
        tabIndex={0}
        onKeyDown={onKey}
        className="sr-only"
      />
    </div>
  )
}

export function BeforeAfter() {
  const { t } = useI18n()
  return (
    <section id="before-after" className="section bg-bone-100">
      <div className="container-x">
        <div className="max-w-3xl mb-16 md:mb-24">
          <Reveal>
            <p className="eyebrow mb-6">{t('beforeAfter.eyebrow')}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="h-display-lg mb-6">{t('beforeAfter.title')}</h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="text-stone-500 text-lg">{t('beforeAfter.subtitle')}</p>
          </Reveal>
        </div>

        <div className="space-y-16 md:space-y-24">
          {beforeAfters.map((ba, i) => (
            <Reveal key={ba.id} delay={i * 80}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className={`lg:col-span-8 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <BeforeAfterSlider
                    before={ba.before}
                    after={ba.after}
                    label={ba.type}
                  />
                </div>
                <div className={`lg:col-span-4 ${i % 2 === 1 ? 'lg:order-1 lg:pr-8' : 'lg:pl-8'}`}>
                  <p className="eyebrow !text-ink-900 mb-4">
                    0{i + 1}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-ink-900 mb-4">{ba.type}</h3>
                  <p className="text-stone-500 leading-relaxed">{ba.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
