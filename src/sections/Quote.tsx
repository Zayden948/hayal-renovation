import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'
import { Reveal } from '../components/Reveal'
import { ArrowUpRight, CheckCircle2, AlertCircle, Upload } from 'lucide-react'
import { company } from '../data/company'
import { submitForm } from '../lib/forms'

type FormState = {
  lastName: string
  firstName: string
  email: string
  phone: string
  type: string
  budget: string
  location: string
  description: string
  consent: boolean
  files: FileList | null
}

const initial: FormState = {
  lastName: '',
  firstName: '',
  email: '',
  phone: '',
  type: '',
  budget: '',
  location: '',
  description: '',
  consent: false,
  files: null,
}

export function Quote() {
  const { t } = useI18n()
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((f) => ({ ...f, [k]: v }))
    setErrors((e) => ({ ...e, [k]: undefined }))
  }

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (!form.lastName.trim()) e.lastName = t('quote.required')
    if (!form.firstName.trim()) e.firstName = t('quote.required')
    if (!form.email.trim()) e.email = t('quote.required')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t('quote.emailInvalid')
    if (!form.phone.trim()) e.phone = t('quote.required')
    else if (!/^[+\d\s().-]{6,}$/.test(form.phone)) e.phone = t('quote.phoneInvalid')
    if (!form.type) e.type = t('quote.required')
    if (!form.description.trim()) e.description = t('quote.required')
    if (!form.consent) e.consent = t('quote.required')
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    setStatus('sending')
    const payload = {
      nom: form.lastName,
      prenom: form.firstName,
      email: form.email,
      telephone: form.phone,
      type_projet: form.type,
      budget: form.budget,
      localisation: form.location,
      description: form.description,
    }
    if (company.formEndpoint) {
      // Envoi réel vers l'endpoint configuré (ex: Formspree)
      submitForm(company.formEndpoint, payload, form.files)
        .then(() => {
          setStatus('success')
          setForm(initial)
        })
        .catch(() => setStatus('error'))
    } else {
      // Simulation tant qu'aucun endpoint n'est configuré dans src/data/company.ts
      setTimeout(() => {
        setStatus('success')
        setForm(initial)
      }, 900)
    }
  }

  const projectTypes = ['complete', 'interior', 'kitchen', 'bathroom', 'decoration', 'layout', 'other'] as const
  const budgetKeys = ['1', '2', '3', '4', 'flex'] as const

  return (
    <section id="quote" className="section bg-bone-100">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: editorial intro */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">{t('quote.eyebrow')}</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="h-display-lg mb-6">{t('quote.title')}</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-stone-500 text-lg leading-relaxed mb-10">{t('quote.subtitle')}</p>
            </Reveal>
            <Reveal delay={260}>
              <ul className="space-y-4 text-sm text-stone-500">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500 shrink-0" />
                  {t('hero.cred.1')}
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500 shrink-0" />
                  {t('hero.cred.2')}
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-500 shrink-0" />
                  {t('hero.cred.3')}
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              {status === 'success' ? (
                <div className="bg-bone-50 border border-ink-900/10 p-10 rounded-sm" role="status" aria-live="polite">
                  <div className="grid place-items-center h-12 w-12 rounded-full bg-ink-900 text-bone-50 mb-6">
                    <CheckCircle2 size={20} />
                  </div>
                  <h3 className="h-display-md mb-3">{t('quote.success.title')}</h3>
                  <p className="text-stone-500 leading-relaxed mb-8">{t('quote.success.body')}</p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="btn-ghost"
                  >
                    {t('common.learnMore')}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  noValidate
                  className="bg-bone-50 border border-ink-900/10 p-6 md:p-10 rounded-sm space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field
                      id="lastName"
                      label={t('quote.field.lastName')}
                      value={form.lastName}
                      error={errors.lastName}
                      onChange={(v) => update('lastName', v)}
                      autoComplete="family-name"
                    />
                    <Field
                      id="firstName"
                      label={t('quote.field.firstName')}
                      value={form.firstName}
                      error={errors.firstName}
                      onChange={(v) => update('firstName', v)}
                      autoComplete="given-name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field
                      id="email"
                      type="email"
                      label={t('quote.field.email')}
                      value={form.email}
                      error={errors.email}
                      onChange={(v) => update('email', v)}
                      autoComplete="email"
                    />
                    <Field
                      id="phone"
                      type="tel"
                      label={t('quote.field.phone')}
                      value={form.phone}
                      error={errors.phone}
                      onChange={(v) => update('phone', v)}
                      autoComplete="tel"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <SelectField
                      id="type"
                      label={t('quote.field.type')}
                      value={form.type}
                      error={errors.type}
                      onChange={(v) => update('type', v)}
                      options={projectTypes.map((k) => ({ value: k, label: t(`quote.type.${k}` as Parameters<typeof t>[0]) }))}
                    />
                    <SelectField
                      id="budget"
                      label={t('quote.field.budget')}
                      value={form.budget}
                      error={errors.budget}
                      placeholder={t('quote.budget.placeholder')}
                      onChange={(v) => update('budget', v)}
                      options={budgetKeys.map((k) => ({ value: k, label: t(`quote.budget.${k}` as Parameters<typeof t>[0]) }))}
                    />
                  </div>

                  <Field
                    id="location"
                    label={t('quote.field.location')}
                    value={form.location}
                    onChange={(v) => update('location', v)}
                    autoComplete="address-level2"
                  />

                  <TextAreaField
                    id="description"
                    label={t('quote.field.description')}
                    value={form.description}
                    error={errors.description}
                    onChange={(v) => update('description', v)}
                    rows={5}
                  />

                  <div>
                    <label
                      htmlFor="files"
                      className="flex items-center gap-3 px-4 py-3 border border-dashed border-ink-900/20 rounded-sm cursor-pointer hover:border-ink-900/40 transition-colors text-sm text-stone-500"
                    >
                      <Upload size={16} />
                      <span>{t('quote.field.files')}</span>
                      <span className="ml-auto text-stone-400 text-xs">
                        {form.files && form.files.length > 0
                          ? `${form.files.length} fichier(s)`
                          : ''}
                      </span>
                    </label>
                    <input
                      id="files"
                      type="file"
                      multiple
                      accept="image/*,application/pdf"
                      className="sr-only"
                      onChange={(e) => update('files', e.target.files)}
                    />
                  </div>

                  <div>
                    <label htmlFor="consent" className="flex items-start gap-3 text-sm text-ink-900/80 cursor-pointer">
                      <input
                        id="consent"
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => update('consent', e.target.checked)}
                        aria-invalid={!!errors.consent}
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
                    {errors.consent && (
                      <p className="mt-2 text-xs text-red-600">{errors.consent}</p>
                    )}
                  </div>

                  <p className="text-xs text-stone-400 leading-relaxed">{t('quote.privacy')}</p>

                  {status === 'error' && (
                    <div role="alert" className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-sm text-sm text-red-900">
                      <AlertCircle size={16} className="mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium">{t('quote.error.title')}</p>
                        <p className="text-red-900/80">{t('quote.error.body')}</p>
                      </div>
                    </div>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary disabled:opacity-60"
                    >
                      {status === 'sending' ? t('quote.sending') : t('quote.submit')}
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  value,
  onChange,
  type = 'text',
  error,
  autoComplete,
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  type?: string
  error?: string
  autoComplete?: string
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
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className={`w-full bg-transparent border-b ${
          error ? 'border-red-500' : 'border-ink-900/15 focus:border-ink-900'
        } py-3 text-ink-900 text-base outline-none transition-colors`}
      />
      {error && (
        <p id={`${id}-err`} className="mt-2 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

function SelectField({
  id,
  label,
  value,
  onChange,
  options,
  error,
  placeholder,
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
  error?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] tracking-[0.18em] uppercase text-stone-500 mb-2">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        className={`w-full bg-transparent border-b ${
          error ? 'border-red-500' : 'border-ink-900/15 focus:border-ink-900'
        } py-3 text-ink-900 text-base outline-none transition-colors appearance-none`}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-2 text-xs text-red-600">{error}</p>
      )}
    </div>
  )
}

function TextAreaField({
  id,
  label,
  value,
  onChange,
  rows = 4,
  error,
}: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
  rows?: number
  error?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] tracking-[0.18em] uppercase text-stone-500 mb-2">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        className={`w-full bg-transparent border-b ${
          error ? 'border-red-500' : 'border-ink-900/15 focus:border-ink-900'
        } py-3 text-ink-900 text-base outline-none transition-colors resize-none`}
      />
      {error && (
        <p className="mt-2 text-xs text-red-600">{error}</p>
      )}
    </div>
  )
}
