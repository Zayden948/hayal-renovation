import { Link } from 'react-router-dom'
import { ArrowUpRight, Instagram, Facebook, Linkedin } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'
import { company } from '../data/company'
import { Logo } from './Logo'
import { AnchorLink } from './AnchorLink'

export function Footer() {
  const { t } = useI18n()

  const services = [
    { key: 'services.items.complete.title', id: 'services' },
    { key: 'services.items.decoration.title', id: 'services' },
    { key: 'services.items.layout.title', id: 'services' },
    { key: 'services.items.kitchen.title', id: 'services' },
    { key: 'services.items.bathroom.title', id: 'services' },
  ] as const

  const nav = [
    { key: 'nav.home', id: 'top' },
    { key: 'nav.about', id: 'about' },
    { key: 'nav.services', id: 'services' },
    { key: 'nav.projects', id: 'projects' },
    { key: 'nav.contact', id: 'contact' },
  ] as const

  return (
    <footer className="bg-ink-900 text-bone-100 grain">
      <div className="container-x py-24 md:py-32">
        {/* Top: large statement + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-20 border-b border-bone-100/10">
          <div className="lg:col-span-7">
            <p className="text-[11px] tracking-[0.22em] uppercase text-bone-100/50 mb-6">
              {t('brand.tagline')}
            </p>
            <p className="font-display text-[32px] sm:text-[44px] md:text-[60px] lg:text-[72px] leading-[1.05] tracking-tight">
              {t('footer.tagline')}
            </p>
          </div>
          <div className="lg:col-span-5 lg:pl-8 flex flex-col justify-end gap-6">
            <p className="text-bone-100/70 max-w-md leading-relaxed">{t('brand.description')}</p>
            <AnchorLink
              id="quote"
              className="btn bg-bone-100 text-ink-900 px-6 py-4 hover:bg-bone-50 w-fit"
            >
              {t('nav.cta')}
              <ArrowUpRight size={16} />
            </AnchorLink>
          </div>
        </div>

        {/* Middle columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 py-16">
          <div className="col-span-2 md:col-span-4">
            <Logo inverted />
            <p className="mt-6 text-bone-100/60 text-sm max-w-xs leading-relaxed">{t('footer.description')}</p>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-[11px] tracking-[0.22em] uppercase text-bone-100/50 mb-5">{t('footer.navigation')}</h4>
            <ul className="space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.key}>
                  <AnchorLink id={item.id} className="text-bone-100/80 hover:text-bone-50 transition-colors">
                    {t(item.key)}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h4 className="text-[11px] tracking-[0.22em] uppercase text-bone-100/50 mb-5">{t('footer.services')}</h4>
            <ul className="space-y-3 text-sm">
              {services.map((item) => (
                <li key={item.key}>
                  <AnchorLink
                    id={item.id}
                    className="text-bone-100/80 hover:text-bone-50 transition-colors"
                  >
                    {t(item.key as Parameters<typeof t>[0])}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3">
            <h4 className="text-[11px] tracking-[0.22em] uppercase text-bone-100/50 mb-5">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-sm text-bone-100/80">
              <li>{company.address.fr}</li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-bone-50 transition-colors">
                  {company.email}
                </a>
              </li>
              <li>
                <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-bone-50 transition-colors">
                  {company.phone}
                </a>
              </li>
            </ul>

            {(company.social.instagram || company.social.facebook || company.social.linkedin) && (
              <div className="mt-8">
                <h4 className="text-[11px] tracking-[0.22em] uppercase text-bone-100/50 mb-4">
                  {t('footer.social')}
                </h4>
                <div className="flex items-center gap-3">
                  {company.social.instagram && (
                    <a
                      href={company.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="grid place-items-center h-10 w-10 rounded-full border border-bone-100/15 text-bone-100/80 hover:text-bone-50 hover:border-bone-100/40 transition-colors"
                    >
                      <Instagram size={16} />
                    </a>
                  )}
                  {company.social.facebook && (
                    <a
                      href={company.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="grid place-items-center h-10 w-10 rounded-full border border-bone-100/15 text-bone-100/80 hover:text-bone-50 hover:border-bone-100/40 transition-colors"
                    >
                      <Facebook size={16} />
                    </a>
                  )}
                  {company.social.linkedin && (
                    <a
                      href={company.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="grid place-items-center h-10 w-10 rounded-full border border-bone-100/15 text-bone-100/80 hover:text-bone-50 hover:border-bone-100/40 transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-bone-100/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-xs text-bone-100/50">
          <p>{t('footer.copyright')}</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/mentions-legales" className="hover:text-bone-100 transition-colors">{t('footer.legal')}</Link>
            <Link to="/confidentialite" className="hover:text-bone-100 transition-colors">{t('footer.privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}