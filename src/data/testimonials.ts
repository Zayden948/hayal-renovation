// Placeholder testimonials. Replace with real client reviews.

export interface Testimonial {
  id: string
  name: string
  project: string
  quote: { fr: string; en: string; ur?: string }
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'C. Martin',
    project: 'Rénovation appartement — Paris',
    rating: 5,
    quote: {
      fr: "L'équipe a su comprendre notre vision et la traduire avec finesse. Le résultat est à la hauteur de nos attentes, avec une vraie attention portée aux détails.",
      en: 'The team understood our vision and translated it with finesse. The result matches our expectations, with real attention to detail.',
    },
  },
  {
    id: 't-2',
    name: 'L. Bernard',
    project: 'Cuisine & salle de bain',
    rating: 5,
    quote: {
      fr: "Un accompagnement clair, des délais respectés et un résultat impeccable. Nous apprécions particulièrement la qualité des finitions et la communication tout au long du chantier.",
      en: 'Clear guidance, respected deadlines and an impeccable result. We particularly appreciate the quality of the finishes and the communication throughout the works.',
    },
  },
  {
    id: 't-3',
    name: 'A. Dubois',
    project: 'Aménagement maison familiale',
    rating: 5,
    quote: {
      fr: "Hayal Rénovation Décoration a transformé notre quotidien. Les espaces sont plus fonctionnels, plus lumineux, et reflètent enfin notre mode de vie.",
      en: 'Hayal Rénovation Décoration transformed our daily life. The spaces are more functional, brighter, and finally reflect the way we live.',
    },
  },
  {
    id: 't-4',
    name: 'S. Petit',
    project: 'Décoration intérieure',
    rating: 5,
    quote: {
      fr: "Une vraie sensibilité esthétique et un sens de l'écoute remarquable. Nous recommandons sans hésitation.",
      en: 'A real sense of style and remarkable listening skills. We recommend without hesitation.',
    },
  },
]
