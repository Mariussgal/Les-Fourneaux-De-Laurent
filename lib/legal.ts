// Informations légales affichées dans les mentions légales et la politique de
// confidentialité. Forme juridique et RCS se retrouvent à partir du SIRET sur
// https://annuaire-entreprises.data.gouv.fr
export const legal = {
  companyName: "Les Fourneaux de Laurent", // nom commercial
  legalName: "L&A SOLUTION",
  legalForm: "SAS (société par actions simplifiée)",
  shareCapital: "", // obligatoire pour une SAS (ex. « 1 000 € ») — ligne masquée tant que vide
  siret: "942 857 293 00016",
  rcs: "RCS Nanterre 942 857 293",
  vatNumber: "FR93942857293",
  director: "Laurent Cucchi",
  address: "6 rue du Général Mangin, 92600 Asnières-sur-Seine",
  phone: "06 46 86 34 34",
  email: "lesfourneauxdelaurent@gmail.com",
  siteUrl: "https://lesfourneauxdelaurent.fr",

  host: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    website: "https://vercel.com",
  },

  lastUpdated: "30 septembre 2026",
} as const;
