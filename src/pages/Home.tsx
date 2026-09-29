import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Services } from '../sections/Services'
import { Projects } from '../sections/Projects'
import { BeforeAfter } from '../sections/BeforeAfter'
import { Process } from '../sections/Process'
import { Why } from '../sections/Why'
import { Audiences } from '../sections/Audiences'
import { Zones } from '../sections/Zones'
import { Testimonials } from '../sections/Testimonials'
import { Faq } from '../sections/Faq'
import { Quote } from '../sections/Quote'
import { Contact } from '../sections/Contact'
import { useI18n } from '../i18n/I18nProvider'
import { usePageMeta } from '../hooks/usePageMeta'

export function Home() {
  const { t } = useI18n()
  usePageMeta(t('meta.home.title'), t('meta.home.description'))

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <BeforeAfter />
      <Process />
      <Why />
      <Audiences />
      <Zones />
      <Testimonials />
      <Faq />
      <Quote />
      <Contact />
    </>
  )
}