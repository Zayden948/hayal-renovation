import { MapPin } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'
import { Reveal } from '../components/Reveal'
import { company } from '../data/company'

/**
 * Zones d'intervention — hexagone stylisé ("l'Hexagone" = la France)
 * avec points positionnés manuellement, + badges des villes desservies.
 * Les villes viennent de src/data/company.ts (placeholder à compléter).
 */
export function Zones() {
  const { t } = useI18n()
  const zones = company.zones

  return (
    <section className="section bg-ink-900 text-bone-100 grain">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texte */}
          <div>
            <Reveal>
              <p className="eyebrow mb-6 text-bone-100/60">{t('zones.eyebrow')}</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="h-display-lg mb-6">{t('zones.title')}</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-bone-100/70 text-lg leading-relaxed mb-8">{t('zones.subtitle')}</p>
            </Reveal>
            <Reveal delay={260}>
              <ul className="flex flex-wrap gap-3">
                {zones.map((zone) => (
                  <li
                    key={zone}
                    className="flex items-center gap-2 px-4 py-2 border border-bone-100/20 rounded-full text-sm tracking-[0.14em] uppercase"
                  >
                    <MapPin size={13} className="text-accent-500" />
                    {zone}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-bone-100/40">{t('zones.note')}</p>
            </Reveal>
          </div>

          {/* Carte : hexagone stylisé de la France avec points */}
          <Reveal delay={180}>
            <svg
              viewBox="0 0 200 200"
              role="img"
              aria-label={t('zones.eyebrow')}
              className="w-full max-w-md mx-auto"
            >
              <defs>
                <radialGradient id="zones-glow" cx="50%" cy="50%" r="65%">
                  <stop offset="0%" stopColor="rgba(168,137,106,0.12)" />
                  <stop offset="100%" stopColor="rgba(168,137,106,0)" />
                </radialGradient>
              </defs>
              <polygon points="100,14 178,60 178,140 122,190 44,168 24,84" fill="url(#zones-glow)" />
              <polygon
                points="100,14 178,60 178,140 122,190 44,168 24,84"
                fill="none"
                stroke="rgba(176,143,120,0.5)"
                strokeWidth="1.5"
              />
              {/* Points de présence */}
              {[
                [96, 38], [126, 44], [146, 78], [138, 112], [110, 128],
                [78, 116], [56, 96], [64, 58], [156, 96], [100, 88], [82, 72], [120, 158],
              ].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="3" fill="#A8896A" opacity="0.85">
                  <animate
                    attributeName="opacity"
                    values="0.35;0.85;0.35"
                    dur={`${3 + (i % 4)}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </svg>
          </Reveal>
        </div>
      </div>
    </section>
  )
}