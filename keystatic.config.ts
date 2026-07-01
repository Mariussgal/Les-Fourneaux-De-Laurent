import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: process.env.NODE_ENV === 'development'
    ? { kind: 'local' }
    : {
        kind: 'github',
        repo: {
          owner: 'Mariussgal',
          name: 'Les-Fourneaux-De-Laurent',
        },
      },

  ui: {
    brand: { name: 'Les Fourneaux de Laurent' },
  },

  singletons: {
    navigation: singleton({
      label: 'Navigation',
      path: 'src/content/navigation/index',
      schema: {
        nav_links: fields.array(
          fields.object({
            label: fields.text({ label: 'Libellé' }),
            href: fields.text({ label: 'Lien' }),
          }),
          { label: 'Liens', itemLabel: (p) => p.fields.label.value || 'Lien' }
        ),
      },
    }),

    footer: singleton({
      label: 'Footer',
      path: 'src/content/footer/index',
      schema: {
        tagline: fields.text({ label: 'Accroche', defaultValue: 'La convivialité à chaque bouchée.' }),
        location: fields.text({ label: 'Localisation', defaultValue: 'Asnières-sur-Seine, Île-de-France' }),
        phone: fields.text({ label: 'Téléphone', defaultValue: '06 46 86 34 34' }),
        email: fields.text({ label: 'Email', defaultValue: 'lesfourneauxdelaurent@gmail.com' }),
        legal_text: fields.text({ label: 'Texte légal', defaultValue: "L'abus d'alcool est dangereux pour la santé, à consommer avec modération." }),
      },
    }),

    homepage: singleton({
      label: "Page d'accueil",
      path: 'src/content/homepage/index',
      schema: {
        hero: fields.object({
          headline: fields.text({ label: 'Titre principal', multiline: true }),
          subline: fields.text({ label: 'Sous-titre', multiline: true }),
          ctaPrimaryLabel: fields.text({ label: 'Bouton CTA Primaire - Texte' }),
          ctaPrimaryHref: fields.text({ label: 'Bouton CTA Primaire - Lien' }),
          ctaSecondaryLabel: fields.text({ label: 'Bouton CTA Secondaire - Texte' }),
          ctaSecondaryHref: fields.text({ label: 'Bouton CTA Secondaire - Lien' }),
        }, { label: 'Section Hero' }),

        marquee: fields.array(
          fields.text({ label: 'Texte' }),
          { label: 'Bandeau défilant (Marquee)', itemLabel: (p) => p.value || 'Mot' }
        ),

        engagement: fields.object({
          title: fields.text({ label: 'Titre' }),
          description: fields.text({ label: 'Description', multiline: true }),
        }, { label: 'Notre engagement' }),

        services: fields.object({
          badge: fields.text({ label: 'Badge' }),
          title: fields.text({ label: 'Titre' }),
          cards: fields.array(
            fields.object({
              title: fields.text({ label: 'Titre de la carte' }),
              description: fields.text({ label: 'Description de la carte', multiline: true }),
            }),
            { label: 'Cartes Services', itemLabel: (p) => p.fields.title.value || 'Carte' }
          ),
        }, { label: 'Nos services' }),

        about: fields.object({
          title: fields.text({ label: 'Titre' }),
          description: fields.text({ label: 'Description', multiline: true }),
        }, { label: 'Qui est Laurent ?' }),

        final_cta: fields.object({
          title: fields.text({ label: 'Titre' }),
          description: fields.text({ label: 'Description', multiline: true }),
          button_label: fields.text({ label: 'Bouton - Texte' }),
          button_href: fields.text({ label: 'Bouton - Lien' }),
        }, { label: 'CTA Final' }),
      },
    }),

    services: singleton({
      label: 'Page Services',
      path: 'src/content/services/index',
      schema: {
        hero: fields.object({
          headline: fields.text({ label: 'Titre', multiline: true }),
          subline: fields.text({ label: 'Sous-titre', multiline: true }),
        }, { label: 'Section Hero' }),
        intro: fields.object({
          title: fields.text({ label: 'Titre (Partie 1)' }),
          title_highlight: fields.text({ label: 'Titre (Partie en couleur)' }),
          description: fields.text({ label: 'Description', multiline: true }),
        }, { label: 'Introduction' }),
        menu: fields.object({
          title: fields.text({ label: 'Titre' }),
          description: fields.text({ label: 'Description', multiline: true }),
        }, { label: 'Nos plats et menus' }),
        final_cta: fields.object({
          title: fields.text({ label: 'Titre' }),
          button_label: fields.text({ label: 'Bouton - Texte' }),
          button_href: fields.text({ label: 'Bouton - Lien' }),
        }, { label: 'CTA Final' }),
      },
    }),

    foodtruck: singleton({
      label: 'Page Food Truck',
      path: 'src/content/foodtruck/index',
      schema: {
        hero: fields.object({
          headline: fields.text({ label: 'Titre' }),
          subline: fields.text({ label: 'Sous-titre', multiline: true }),
          ctaPrimaryLabel: fields.text({ label: 'Bouton CTA Primaire - Texte' }),
          ctaPrimaryHref: fields.text({ label: 'Bouton CTA Primaire - Lien' }),
          ctaSecondaryLabel: fields.text({ label: 'Bouton CTA Secondaire - Texte' }),
          ctaSecondaryHref: fields.text({ label: 'Bouton CTA Secondaire - Lien' }),
        }, { label: 'Section Hero' }),
        concept: fields.object({
          title: fields.text({ label: 'Titre (Partie 1)' }),
          title_highlight: fields.text({ label: 'Titre (Partie en couleur)' }),
          description_1: fields.text({ label: 'Description (Paragraphe 1)', multiline: true }),
          description_2: fields.text({ label: 'Description (Paragraphe 2)', multiline: true }),
          button_label: fields.text({ label: 'Bouton - Texte' }),
          button_href: fields.text({ label: 'Bouton - Lien' }),
        }, { label: 'Le Concept' }),
        formules: fields.object({
          badge: fields.text({ label: 'Badge' }),
          title: fields.text({ label: 'Titre' }),
          description: fields.text({ label: 'Description', multiline: true }),
          subtitle: fields.text({ label: 'Sous-titre (italic)' }),
          cards: fields.array(
            fields.object({
              title: fields.text({ label: 'Titre de la formule' }),
              items: fields.array(
                fields.object({
                  name: fields.text({ label: 'Élément' }),
                }),
                { label: 'Éléments', itemLabel: (p) => p.fields.name.value || 'Élément' }
              ),
            }),
            { label: 'Formules', itemLabel: (p) => p.fields.title.value || 'Formule' }
          ),
          button_label: fields.text({ label: 'Bouton - Texte' }),
          button_href: fields.text({ label: 'Bouton - Lien' }),
        }, { label: 'Les Formules' }),
        privatisation: fields.object({
          title: fields.text({ label: 'Titre' }),
          description: fields.text({ label: 'Description', multiline: true }),
          steps: fields.array(
            fields.object({
              title: fields.text({ label: 'Titre de l\'étape' }),
              description: fields.text({ label: 'Description de l\'étape', multiline: true }),
            }),
            { label: 'Étapes', itemLabel: (p) => p.fields.title.value || 'Étape' }
          ),
        }, { label: 'Privatisation' }),
        final_cta: fields.object({
          title: fields.text({ label: 'Titre' }),
          description: fields.text({ label: 'Description', multiline: true }),
          button_label: fields.text({ label: 'Bouton - Texte' }),
          button_href: fields.text({ label: 'Bouton - Lien' }),
        }, { label: 'CTA Final' }),
      },
    }),

    tarifs: singleton({
      label: 'Page Tarifs',
      path: 'src/content/tarifs/index',
      schema: {
        intro: fields.object({
          badge: fields.text({ label: 'Badge' }),
          title: fields.text({ label: 'Titre principal' }),
          paragraphs: fields.array(
            fields.text({ label: 'Paragraphe', multiline: true }),
            { label: 'Paragraphes de description', itemLabel: (p) => p.value ? p.value.substring(0, 30) + '...' : 'Paragraphe' }
          ),
          contact_text: fields.text({ label: 'Texte d\'invitation au contact', multiline: true }),
          button_label: fields.text({ label: 'Bouton - Texte' }),
          button_href: fields.text({ label: 'Bouton - Lien' }),
        }, { label: 'Introduction' }),
        formules: fields.object({
          title: fields.text({ label: 'Titre' }),
          subtitle: fields.text({ label: 'Sous-titre' }),
          cards: fields.array(
            fields.object({
              title: fields.text({ label: 'Titre de la formule' }),
              description: fields.text({ label: 'Description' }),
              items: fields.array(
                fields.object({
                  name: fields.text({ label: 'Élément' }),
                }),
                { label: 'Éléments', itemLabel: (p) => p.fields.name.value || 'Élément' }
              ),
            }),
            { label: 'Formules', itemLabel: (p) => p.fields.title.value || 'Formule' }
          ),
        }, { label: 'Formules & Formats' }),
      },
    }),

    album: singleton({
      label: 'Page Album',
      path: 'src/content/album/index',
      schema: {
        intro: fields.object({
          badge: fields.text({ label: 'Badge' }),
          title: fields.text({ label: 'Titre principal' }),
          quote: fields.text({ label: 'Citation (italic)', multiline: true }),
          description: fields.text({ label: 'Description', multiline: true }),
        }, { label: 'Introduction' }),
        photos: fields.object({
          badge: fields.text({ label: 'Badge' }),
          title: fields.text({ label: 'Titre' }),
        }, { label: 'Section Photos' }),
        videos: fields.object({
          badge: fields.text({ label: 'Badge' }),
          title: fields.text({ label: 'Titre' }),
          description: fields.text({ label: 'Description', multiline: true }),
        }, { label: 'Section Vidéos' }),
        final_cta: fields.object({
          badge: fields.text({ label: 'Badge' }),
          title: fields.text({ label: 'Titre' }),
          description: fields.text({ label: 'Description', multiline: true }),
          button_1_label: fields.text({ label: 'Bouton 1 - Texte' }),
          button_1_href: fields.text({ label: 'Bouton 1 - Lien' }),
          button_2_label: fields.text({ label: 'Bouton 2 - Texte' }),
          button_2_href: fields.text({ label: 'Bouton 2 - Lien' }),
        }, { label: 'CTA Final' }),
      },
    }),

    contact: singleton({
      label: 'Page Contact',
      path: 'src/content/contact/index',
      schema: {
        hero: fields.object({
          headline: fields.text({ label: 'Titre' }),
          subline: fields.text({ label: 'Sous-titre', multiline: true }),
        }, { label: 'Section Hero' }),
        info_section: fields.object({
          title: fields.text({ label: 'Titre de la section' }),
          email: fields.text({ label: 'Email' }),
          phone: fields.text({ label: 'Téléphone' }),
          address: fields.text({ label: 'Adresse', multiline: true }),
        }, { label: 'Informations' }),
        social_section: fields.object({
          title: fields.text({ label: 'Titre de la section' }),
          instagram_handle: fields.text({ label: 'Instagram - Texte' }),
          whatsapp_text: fields.text({ label: 'WhatsApp - Texte' }),
        }, { label: 'Réseaux Sociaux' }),
      },
    }),
  },
});
