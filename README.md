# HAYAL RÉNOVATION DÉCORATION — Site web

Site vitrine bilingue (FR/EN) pour Hayal Rénovation Décoration.
Vite + React 18 + TypeScript + Tailwind CSS, react-router-dom, <model-viewer> pour la 3D.

## Lancer le site

```bash
npm install
npm run dev      # serveur de développement (http://localhost:5173)
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build de production
```

## Rendre le formulaire fonctionnel (envoi réel d'emails)

Par défaut, les formulaires (devis + contact) sont **simulés** : aucun envoi réel.

Pour activer l'envoi réel :

1. Créez un compte sur [Formspree](https://formspree.io) (ou équivalent : Getform, Web3Forms…) et récupérez l'URL du formulaire (`https://formspree.io/f/xxxxx`).
2. Dans `src/data/company.ts`, renseignez la valeur :
   ```ts
   formEndpoint: 'https://formspree.io/f/xxxxx',
   ```

⚠️ **Pièces jointes** : le plan gratuit de Formspree ignore les fichiers joints
(champ `files`). Pour recevoir les photos envoyées par les visiteurs, il faut un
plan payant, ou un service qui accepte les pièces jointes. À défaut, les
pièces jointes sont silencieusement ignorées.

## Ajouter un projet 3D

Voir `public/models/README.md` : déposez un `.glb` (< 5 Mo) dans
`public/models/`, puis ajoutez une entrée de catégorie `'design3d'` avec
`model3d: '/models/mon-modele.glb'` dans `src/data/projects.ts`.

## Compléter les placeholders

Rien n'est inventé dans ce site — tout ce qui manque est marqué entre
[crochets] ou avec des tirets `—` :

| Quoi                                    | Où                                            |
| --------------------------------------- | --------------------------------------------- |
| Email, téléphone, adresse, réseaux      | `src/data/company.ts`                         |
| Projets réels (nom, année, localisation)| `src/data/projects.ts`                        |
| Avant/Après réels                       | `src/data/projects.ts` (`beforeAfters`)       |
| Avis clients                            | `src/data/testimonials.ts`                    |
| SIRET, forme juridique, hébergeur, dates| `src/data/legal.ts` (mentions légales + RGPD) |
| Villes desservies                       | `src/data/company.ts` (`zones`)               |
| Surfaces + récits par pièce des projets | `src/data/projects.ts` (`surface`, `rooms`)   |

## Structure

```
src/
  components/   Navbar, Footer, ModelViewer (3D), AnchorLink, Reveal…
  sections/     Hero, About, Services, Projects, BeforeAfter, Process,
                Why, Testimonials, Quote, Contact
  pages/        Home, ProjectPage (détail projet + visionneuse 3D),
                LegalPage (mentions légales / confidentialité), NotFound
  data/         company, projects, legal, translations (FR/EN)
  lib/          forms.ts (envoi de formulaire), modelViewerLoader.ts
  i18n/         contexte de langue (français par défaut)
```

## Notes techniques

- **Routes** : `/` (accueil), `/projets/:id`, `/mentions-legales`, `/confidentialite`.
  Les ancres (`#services`, `#quote`…) fonctionnent depuis toutes les pages via
  `AnchorLink` + `ScrollManager`.
- **3D** : `@google/model-viewer` est importé dynamiquement (chunk séparé,
  ~250 Ko) et ne se charge que lorsqu'une visionneuse devient visible.
- **Accessibilité** : skip-link, `prefers-reduced-motion` respecté (désactive
  révélations, rotation auto des modèles, slider), hiérarchie de titres propre.
- **SEO** : balises meta + Open Graph + JSON-LD LocalBusiness dans `index.html`.