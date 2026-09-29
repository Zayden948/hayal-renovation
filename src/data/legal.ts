// Contenu des pages légales — templates à compléter avec les informations
// réelles de l'entreprise (placeholders entre [crochets]).
// Aucune information n'est inventée : tout ce qui manque est marqué.

export interface LegalSection {
  heading: string
  paragraphs: string[]
}

export interface LegalDoc {
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}

export const legalDocs: {
  legal: { fr: LegalDoc; en: LegalDoc }
  privacy: { fr: LegalDoc; en: LegalDoc }
} = {
  legal: {
    fr: {
      title: 'Mentions légales',
      updated: 'Dernière mise à jour : [date à compléter]',
      intro:
        'Conformément à la législation française en vigueur, vous trouverez ci-dessous les informations relatives à l\'éditeur de ce site.',
      sections: [
        {
          heading: 'Éditeur du site',
          paragraphs: [
            'Hayal Rénovation Décoration',
            '[Forme juridique à compléter]',
            '[SIRET à compléter]',
            '[Adresse à compléter]',
            'Email : [email à compléter]',
            'Téléphone : [numéro à compléter]',
          ],
        },
        {
          heading: 'Responsable de la publication',
          paragraphs: ['[Nom du responsable de la publication à compléter]'],
        },
        {
          heading: 'Hébergement du site',
          paragraphs: [
            '[Nom de l\'hébergeur à compléter]',
            '[Adresse de l\'hébergeur à compléter]',
            '[Coordonnées de l\'hébergeur à compléter]',
          ],
        },
        {
          heading: 'Propriété intellectuelle',
          paragraphs: [
            'L\'ensemble des contenus présents sur ce site (textes, visuels, éléments graphiques et modèles 3D) est la propriété de Hayal Rénovation Décoration, sauf mention contraire. Toute reproduction, même partielle, est soumise à autorisation préalable.',
          ],
        },
      ],
    },
    en: {
      title: 'Legal notice',
      updated: 'Last updated: [date to complete]',
      intro:
        'In accordance with applicable French law, you will find below the information relating to the publisher of this website.',
      sections: [
        {
          heading: 'Website publisher',
          paragraphs: [
            'Hayal Rénovation Décoration',
            '[Legal form to complete]',
            '[Company registration number to complete]',
            '[Address to complete]',
            'Email: [email to complete]',
            'Phone: [number to complete]',
          ],
        },
        {
          heading: 'Publication manager',
          paragraphs: ['[Name of the publication manager to complete]'],
        },
        {
          heading: 'Website hosting',
          paragraphs: [
            '[Hosting provider to complete]',
            '[Hosting provider address to complete]',
            '[Hosting provider contact details to complete]',
          ],
        },
        {
          heading: 'Intellectual property',
          paragraphs: [
            'All content on this website (text, visuals, graphic elements and 3D models) is the property of Hayal Rénovation Décoration unless otherwise stated. Any reproduction, even partial, requires prior authorisation.',
          ],
        },
      ],
    },
  },

  privacy: {
    fr: {
      title: 'Politique de confidentialité',
      updated: 'Dernière mise à jour : [date à compléter]',
      intro:
        'La protection de vos données est importante pour nous. Cette page explique quelles données sont collectées via ce site et comment elles sont utilisées.',
      sections: [
        {
          heading: 'Données collectées',
          paragraphs: [
            'Les formulaires de ce site (demande de devis, contact) collectent les informations que vous saisissez volontairement : nom, prénom, email, téléphone, type de projet, budget indicatif, localisation, description du projet et, le cas échéant, les photos ou documents que vous joignez.',
          ],
        },
        {
          heading: 'Finalité du traitement',
          paragraphs: [
            'Ces données sont utilisées uniquement pour répondre à vos demandes, préparer vos devis et assurer le suivi de votre projet. Elles ne sont ni vendues, ni transmises à des tiers à des fins commerciales.',
          ],
        },
        {
          heading: 'Base légale et conservation',
          paragraphs: [
            'Le traitement repose sur votre consentement, exprimé au moment de l\'envoi du formulaire. Les données sont conservées pendant une durée de [durée à compléter], le temps de traiter votre demande et d\'assurer le suivi du projet.',
          ],
        },
        {
          heading: 'Vos droits',
          paragraphs: [
            'Conformément au RGPD, vous disposez d\'un droit d\'accès, de rectification, d\'effacement et d\'opposition concernant vos données. Pour exercer ces droits, contactez-nous à l\'adresse [email à compléter].',
          ],
        },
        {
          heading: 'Cookies et stockage local',
          paragraphs: [
            'Ce site n\'utilise aucun cookie publicitaire ni aucun traceur tiers. Seul le stockage local de votre navigateur (localStorage) mémorise la langue d\'affichage choisie (français ou anglais), uniquement sur votre appareil.',
          ],
        },
      ],
    },
    en: {
      title: 'Privacy policy',
      updated: 'Last updated: [date to complete]',
      intro:
        'The protection of your data matters to us. This page explains what data is collected through this website and how it is used.',
      sections: [
        {
          heading: 'Data collected',
          paragraphs: [
            'The forms on this website (quote request, contact) collect the information you voluntarily enter: name, first name, email, phone, project type, indicative budget, location, project description and, where applicable, the photos or documents you attach.',
          ],
        },
        {
          heading: 'Purpose of processing',
          paragraphs: [
            'This data is used solely to respond to your requests, prepare your quotes and follow up on your project. It is neither sold nor passed on to third parties for commercial purposes.',
          ],
        },
        {
          heading: 'Legal basis and retention',
          paragraphs: [
            'Processing is based on your consent, given when you submit the form. Data is retained for [duration to complete], the time needed to process your request and follow up on the project.',
          ],
        },
        {
          heading: 'Your rights',
          paragraphs: [
            'Under the GDPR, you have the right to access, rectify, erase and object to the processing of your data. To exercise these rights, contact us at [email to complete].',
          ],
        },
        {
          heading: 'Cookies and local storage',
          paragraphs: [
            'This website uses no advertising cookies and no third-party trackers. Only your browser\'s local storage (localStorage) remembers the display language you choose (French or English), solely on your own device.',
          ],
        },
      ],
    },
  },
}