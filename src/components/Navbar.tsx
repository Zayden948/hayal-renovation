import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'
import { useScrollPosition } from '../hooks/useScroll'
import { Logo } from './Logo'
import { LanguageSwitcher } from './LanguageSwitcher'
import { AnchorLink } from './AnchorLink'

const navItems = [
  { key: 'nav.home', id: 'top' },
  { key: 'nav.about', id: 'about' },
  { key: 'nav.services', id: 'services' },
  { key: 'nav.projects', id: 'projects' },
  { key: 'nav.beforeAfter', id: 'before-after' },
  { key: 'nav.process', id: 'process' },
  { key: 'nav.contact', id: 'contact' },
] as const

export function Navbar() {
  const { t } = useI18n()
  const scrollY = useScrollPosition()
  const [open, setOpen] = useState(false)
  const scrolled = scrollY > 32

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-bone-100/95 backdrop-blur-md border-b border-ink-900/10 shadow-soft'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-x flex h-20 md:h-24 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <AnchorLink key={item.key} id={item.id} className="nav-link">
              {t(item.key)}
            </AnchorLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <LanguageSwitcher />
          <AnchorLink id="quote" className="btn-primary !px-5 !py-3">
            {t('nav.cta')}
          </AnchorLink>
        </div>

        <button
          type="button"
          aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/25 bg-bone-50 text-ink-900 hover:bg-bone-200"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-bone-100 transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-x py-10 flex flex-col gap-8 h-full">
          <nav className="flex flex-col gap-5">
            {navItems.map((item, i) => (
              <AnchorLink
                key={item.key}
                id={item.id}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-ink-900"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {t(item.key)}
              </AnchorLink>
            ))}
          </nav>
          <div className="mt-auto flex items-center justify-between pt-6 border-t border-ink-900/10">
            <LanguageSwitcher />
            <AnchorLink id="quote" onClick={() => setOpen(false)} className="btn-primary !px-5 !py-3">
              {t('nav.cta')}
            </AnchorLink>
          </div>
        </div>
      </div>
    </header>
  )
}