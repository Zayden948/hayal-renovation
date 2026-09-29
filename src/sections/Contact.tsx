import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'
import { Reveal } from '../components/Reveal'
import { company } from '../data/company'
import { submitForm } from '../lib/forms'

export function Contact() {
  const { t } = useI18n()
  const [form, setForm] = useState({ name: '', email: '', message: '', consent: false })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message || !form.consent) return
    setStatus('sending')
    const payload = {
      nom: form.name,
      email: form.email,
      message: form.message,
      formulaire: 'contact',
    }
    if (company.formEndpoint) {
      submitForm(company.formEndpoint, payload)
        .then(() => {
          setStatus('sent')
          setForm({ name: '', email: '', message: '', consent: false })
        })
        .catch(() => setStatus('error'))
    } else {
      // Simulation tant qu'aucun endpoint n'est configuré dans src/data/company.ts
      setTimeout(() => {
        setStatus('sent')
        setForm({ name: '', email: '', message: '', consent: false })
      }, 600)
    }
  }

  return (
    <section id="contact" className="section bg-bone-50">
      <div className="container-x">
        <div className="max-w-3xl mb-16 md:mb-20">
          <Reveal>
            <p className="eyebrow mb-6">{t('contact.eyebrow')}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="h-display-lg mb-6">{t('contact.title')}</h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="text-stone-500 text-lg">{t('contact.subtitle')}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Info */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal>
              <div className="flex items-start gap-4">
                <span className="grid place-items-center h-11 w-11 rounded-full border border-ink-900/15 text-ink-900 shrink-0">
                  <Phone size={16} />
                </span>
                <div>
                  <p className="text-[11px] tracking-[0.22em] uppercase text-stone-400 mb-1">
                    {t('contact.call')}
                  </p>
                  <a
                    href={`tel:${company.phone.replace(/\s/g, '')}`}
                    className="text-ink-900 hover:text-accent-600 transition-colors"
                  >
                    {company.phone}
                  </a>
                  <p className="text-xs text-stone-400 mt-1">{t('contact.phone.placeholder')}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="flex items-start gap-4">
                <span className="grid place-items-center h-11 w-11 rounded-full border border-ink-900/15 text-ink-900 shrink-0">
                  <Mail size={16} />
                </span>
                <div>
                  <p className="text-[11px] tracking-[0.22em] uppercase text-stone-400 mb-1">
                    {t('contact.email')}
                  </p>
                  <a href={`mailto:${company.email}`} className="text-ink-900 hover:text-accent-600 transition-colors">
                    {company.email}
                  </a>
                  <p className="text-xs text-stone-400 mt-1">{t('contact.email.placeholder')}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="flex items-start gap-4">
                <span className="grid place-items-center h-11 w-11 rounded-full border border-ink-900/15 text-ink-900 shrink-0">
                  <MessageCircle size={16} />
                </span>
                <div>
                  <p className="text-[11px] tracking-[0.22em] uppercase text-stone-400 mb-1">
                    {t('contact.whatsapp')}
                  </p>
                  <a
                    href={`https://wa.me/${company.whatsapp.replace(/[^\d]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-900 hover:text-accent-600 transition-colors"
                  >
                    {company.whatsapp}
                  </a>
                  <p className="text-xs text-stone-400 mt-1">{t('contact.whatsapp.placeholder')}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="pt-8 border-t border-ink-900/10 space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin size={16} className="text-stone-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[11px] tracking-[0.22em] uppercase text-stone-400 mb-1">
                      {t('contact.address.label')}
                    </p>
                    <p className="text-ink-900">{t('contact.address.value')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Clock size={16} className="text-stone-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[11px] tracking-[0.22em] uppercase text-stone-400 mb-1">
                      {t('contact.hours.label')}
                    </p>
                    <p className="text-ink-900">{t('contact.hours.weekdays')}</p>
                    <p className="text-ink-900">{t('contact.hours.saturday')}</p>
                    <p className="text-stone-500">{t('contact.hours.sunday')}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Map placeholder */}
            <Reveal delay={320}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-bone-200 border border-ink-900/10">
                <div className="absolute inset-0 grain" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <MapPin size={28} className="text-stone-400 mb-3" />
                  <p className="text-[11px] tracking-[0.22em] uppercase text-stone-500">
                    Google Maps
                  </p>
                  <p className="text-xs text-stone-400 mt-2 max-w-xs">
                    {t('contact.address.value')}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <h3 className="font-display text-2xl md:text-3xl text-ink-900 mb-8">
                {t('contact.form.title')}
              </h3>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    id="c-name"
                    label={t('contact.form.name')}
                    value={form.name}
                    onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  />
                  <Input
                    id="c-email"
                    type="email"
                    label={t('contact.form.email')}
                    value={form.email}
                    onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                  />
                </div>
                <div>
                  <label
                    htmlFor="c-message"
                    className="block text-[11px] tracking-[0.18em] uppercase text-stone-500 mb-2"
                  >
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="c-message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    required
                    className="w-full bg-transparent border-b border-ink-900/15 focus:border-ink-900 py-3 text-ink-900 text-base outline-none transition-colors resize-none"
                  />
                </div>

                <label htmlFor="c-consent" className="flex items-start gap-3 text-sm text-ink-900/80 cursor-pointer">
                  <input
                    id="c-consent"
                    type="checkbox"
                    required
                    checked={form.consent}
                    onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-accent-600 cursor-pointer"
                  />
                  <span>
                    {t('quote.consent')}{' '}
                    <Link
                      to="/confidentialite"
                      className="text-accent-600 underline underline-offset-2 hover:text-ink-900"
                    >
                      {t('footer.privacy')}
                    </Link>
                  </span>
                </label>

                {status === 'sent' && (
                  <p role="status" className="text-sm text-ink-900 bg-bone-100 border border-ink-900/10 rounded-sm p-4">
                    {t('contact.form.success')}
                  </p>
                )}
                {status === 'error' && (
                  <p role="alert" className="text-sm text-red-900 bg-red-50 border border-red-200 rounded-sm p-4">
                    {t('quote.error.body')}
                  </p>
                )}

                <button type="submit" className="btn-primary disabled:opacity-60" disabled={status === 'sending'}>
                  {status === 'sending' ? t('quote.sending') : t('contact.form.submit')}
                  <Send size={16} />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Input({
  id,
  label,
  value,
  onChange,
  type = 'text',
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  type?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] tracking-[0.18em] uppercase text-stone-500 mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="w-full bg-transparent border-b border-ink-900/15 focus:border-ink-900 py-3 text-ink-900 text-base outline-none transition-colors"
      />
    </div>
  )
}
