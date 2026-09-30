import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { legal } from "@/lib/legal";

export const metadata = {
  title: "Mentions légales",
};

export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales">
      <div>
        <h2>Éditeur du site</h2>
        <p>
          Le site <strong>{legal.siteUrl.replace("https://", "")}</strong> est édité par :
        </p>
        <ul>
          <li>Raison sociale : {legal.legalName}, exploitant la marque « {legal.companyName} »</li>
          <li>Forme juridique : {legal.legalForm}</li>
          {legal.shareCapital && <li>Capital social : {legal.shareCapital}</li>}
          <li>Siège social : {legal.address}</li>
          <li>SIRET : {legal.siret}</li>
          <li>Immatriculation : {legal.rcs}</li>
          <li>N° TVA intracommunautaire : {legal.vatNumber}</li>
          <li>Téléphone : {legal.phone}</li>
          <li>E-mail : <a href={`mailto:${legal.email}`}>{legal.email}</a></li>
        </ul>
        <p>Directeur de la publication : {legal.director}, Président</p>
      </div>

      <div>
        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par {legal.host.name}, {legal.host.address} —{" "}
          <a href={legal.host.website} target="_blank" rel="noopener noreferrer">{legal.host.website.replace("https://", "")}</a>.
        </p>
      </div>

      <div>
        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, photographies, vidéos, logos, éléments graphiques) est la propriété
          exclusive de {legal.companyName} ou de ses partenaires, et est protégé par le droit de la propriété intellectuelle.
          Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.
        </p>
      </div>

      <div>
        <h2>Responsabilité</h2>
        <p>
          {legal.companyName} s&apos;efforce de fournir des informations exactes et à jour, sans pouvoir en garantir l&apos;exhaustivité.
          Les menus et compositions présentés sur le site sont donnés à titre d&apos;exemple et ne constituent pas une offre contractuelle :
          seul le devis accepté fait foi.
        </p>
      </div>

      <div>
        <h2>Données personnelles et cookies</h2>
        <p>
          Le traitement des données collectées via le formulaire de contact est détaillé dans notre{" "}
          <Link href="/politique-de-confidentialite">politique de confidentialité</Link>. Ce site n&apos;utilise pas de cookies
          publicitaires ni de traceurs de mesure d&apos;audience.
        </p>
      </div>

      <div>
        <h2>Santé publique</h2>
        <p>L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer avec modération. La vente d&apos;alcool aux mineurs est interdite.</p>
      </div>
    </LegalPage>
  );
}
