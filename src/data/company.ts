// Centralised company configuration. Replace placeholders with real values.

export const company = {
  name: 'HAYAL RÉNOVATION DÉCORATION',
  shortName: 'HAYAL',
  // Endpoint d'envoi des formulaires (ex: Formspree — voir README.md).
  // Vide = les formulaires sont simulés (aucun envoi réel).
  formEndpoint: '',
  tagline: {
    fr: 'Rénovation & Décoration',
    en: 'Renovation & Decoration',
  },
  email: 'contact@hayal-renovation.fr', // placeholder
  phone: '+33 0 00 00 00 00', // placeholder
  whatsapp: '+33 0 00 00 00 00', // placeholder
  address: {
    fr: 'Paris, France',
    en: 'Paris, France',
  },
  hours: {
    weekdays: { fr: 'Lundi — Vendredi : 9h00 — 18h00', en: 'Monday — Friday: 9:00 — 18:00' },
    saturday: { fr: 'Samedi : sur rendez-vous', en: 'Saturday: by appointment' },
    sunday: { fr: 'Dimanche : fermé', en: 'Sunday: closed' },
  },
  // Social — leave empty until real URLs are provided
  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
  },
  // Zones d'intervention — PLACEHOLDER : remplacer par les villes réellement
  // desservies. La carte (hexagone stylisé) s'adapte automatiquement.
  zones: ['Paris', 'Île-de-France', '[Villes à compléter]'],
}
