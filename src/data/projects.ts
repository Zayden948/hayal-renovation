// Centralised project data. Replace placeholders with the real projects.
// Images use Unsplash with neutral architecture/interior keywords.

export type ProjectCategory =
  | 'renovation'
  | 'kitchen'
  | 'bathroom'
  | 'decoration'
  | 'layout'
  | 'design3d'

export interface ProjectRoom {
  title: string
  text: string
  images: string[]
}

export interface Project {
  id: string
  name: string
  category: ProjectCategory
  location: string
  year: string
  description: string
  image: string
  gallery?: string[]
  featured?: boolean
  /** Surface en m² (ex: '65 m²') — optionnel. */
  surface?: string
  /** Sections narratives par pièce/zone du chantier — placeholders à compléter. */
  rooms?: ProjectRoom[]
  /** Chemin vers un fichier .glb dans public/models/ — affiche une visionneuse 3D sur la page projet. */
  model3d?: string
}

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const projects: Project[] = [
  {
    id: 'haussmannian-renewal',
    name: 'Appartement haussmannien — Renewal',
    category: 'renovation',
    location: 'Paris, France',
    year: '—',
    description:
      "Rénovation complète d'un appartement haussmannien : restitution des moulures, optimisation des volumes et sélection d'un mobilier contemporain en dialogue avec l'existant.",
    image: img('photo-1505691938895-1758d7feb511'),
    featured: true,
    // PLACEHOLDER : surface + sections par pièce à compléter avec le récit réel du chantier
    surface: '[surface à compléter]',
    rooms: [
      {
        title: 'Séjour',
        text: "Retour des moulures au plafond, parquet restauré et mobilier contemporain choisi pour dialoguer avec l'existant. [Texte placeholder]",
        images: [img('photo-1505691938895-1758d7feb511', 1200), img('photo-1616486338812-3dadae4b4ace', 1200)],
      },
      {
        title: 'Cuisine',
        text: "Cuisine ouverte sur le séjour, façades sur mesure et plan de travail en pierre. [Texte placeholder]",
        images: [img('photo-1556909114-f6e7ad7d3136', 1200)],
      },
      {
        title: 'Salle de bain',
        text: "Salle d'eau refaite intégralement : douche à l'italienne, vasque sculptée et robinetterie noire. [Texte placeholder]",
        images: [img('photo-1552321554-5fefe8c9ef14', 1200), img('photo-1620626011761-996317b8d101', 1200)],
      },
    ],
  },
  {
    id: 'minimal-kitchen',
    name: 'Cuisine minimaliste — Béton & bois',
    category: 'kitchen',
    location: '—',
    year: '—',
    description:
      "Conception et pose d'une cuisine sur mesure, avec façades en placage bois, plan de travail en béton ciré et éclairage intégré.",
    image: img('photo-1556909114-f6e7ad7d3136'),
    featured: true,
    surface: '[surface à compléter]',
    rooms: [
      {
        title: 'Composition',
        text: "Implantation sur mesure autour d'un îlot central, rangements intégrés du sol au plafond. [Texte placeholder]",
        images: [img('photo-1556909114-f6e7ad7d3136', 1200)],
      },
      {
        title: 'Matériaux',
        text: "Placage bois, béton ciré et éclairage intégré sous les meubles hauts. [Texte placeholder]",
        images: [img('photo-1556909195-4e5d12c40b80', 1200)],
      },
    ],
  },
  {
    id: 'stone-bathroom',
    name: 'Salle de bain — Pierre naturelle',
    category: 'bathroom',
    location: '—',
    year: '—',
    description:
      "Création d'une salle de bain contemporaine en pierre naturelle, avec vasque sculptée, robinetterie noire et douche à l'italienne.",
    image: img('photo-1552321554-5fefe8c9ef14'),
  },
  {
    id: 'loft-decoration',
    name: 'Loft — Décoration éditoriale',
    category: 'decoration',
    location: '—',
    year: '—',
    description:
      "Mise en ambiance d'un loft avec une sélection soignée de mobilier, textiles naturels et pièces d'art pour un rendu chaleureux et minimal.",
    image: img('photo-1493809842364-78817add7ffb'),
  },
  {
    id: 'family-layout',
    name: 'Maison familiale — Réagencement',
    category: 'layout',
    location: '—',
    year: '—',
    description:
      "Réagencement complet des espaces de vie d'une maison familiale, fluidifiant la circulation et créant des zones distinctes pour chaque usage.",
    image: img('photo-1600585154340-be6161a56a0c'),
    featured: true,
  },
  {
    id: 'light-renovation',
    name: 'Appartement — Rénovation lumière',
    category: 'renovation',
    location: '—',
    year: '—',
    description:
      "Rénovation d'un appartement orienté nord, avec travail approfondi sur la lumière, les matériaux clairs et les ouvertures pour amplifier chaque pièce.",
    image: img('photo-1502672023488-70e25813eb80'),
  },
  // --- Entrées 3D (PLACEHOLDERS) : modèles d'exemple glTF, à remplacer par
  // vos propres rendus 3D (.glb, < 5 Mo) déposés dans public/models/ ---
  {
    id: 'design3d-fauteuil',
    name: 'Design 3D — Fauteuil [projet à compléter]',
    category: 'design3d',
    location: '—',
    year: '—',
    description:
      'Visualisation 3D interactive d\'un fauteuil. Faites-le pivoter pour l\'explorer sous tous les angles : matériaux, proportions et finitions. [Modèle d\'exemple — à remplacer par votre propre rendu 3D.]',
    image: img('photo-1503602642458-232111445657'),
    model3d: '/models/SheenChair.glb',
  },
  {
    id: 'design3d-canape',
    name: 'Design 3D — Canapé [projet à compléter]',
    category: 'design3d',
    location: '—',
    year: '—',
    description:
      'Visualisation 3D interactive d\'un canapé en velours. Tournez le modèle pour évaluer les volumes et l\'intégration dans votre espace. [Modèle d\'exemple — à remplacer par votre propre rendu 3D.]',
    image: img('photo-1555041469-a586c61ea9bc'),
    model3d: '/models/GlamVelvetSofa.glb',
  },
]

// Before / After data
export interface BeforeAfter {
  id: string
  type: string
  description: string
  before: string
  after: string
}

export const beforeAfters: BeforeAfter[] = [
  {
    id: 'ba-1',
    type: 'Salon — Rénovation complète',
    description:
      "Transformation d'un séjour cloisonné en un espace ouvert, lumineux, avec parquet point de Hongrie et mobilier sur mesure.",
    before: img('photo-1505691938895-1758d7feb511', 1400),
    after: img('photo-1616486338812-3dadae4b4ace', 1400),
  },
  {
    id: 'ba-2',
    type: 'Cuisine — Modernisation',
    description:
      "Modernisation d'une cuisine fermée avec création d'un ilot central, façade laquée et plan de travail en pierre.",
    before: img('photo-1556909114-f6e7ad7d3136', 1400),
    after: img('photo-1556909195-4e5d12c40b80', 1400),
  },
  {
    id: 'ba-3',
    type: 'Salle de bain — Rénovation',
    description:
      "Rénovation complète d'une salle de bain : receveur extra-plat, faïence grand format et robinetterie thermostatique.",
    before: img('photo-1552321554-5fefe8c9ef14', 1400),
    after: img('photo-1620626011761-996317b8d101', 1400),
  },
]
