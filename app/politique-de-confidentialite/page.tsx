import { LegalPage } from "@/components/LegalPage";
import { legal } from "@/lib/legal";

export const metadata = {
  title: "Politique de confidentialité",
};

export default function PolitiqueDeConfidentialite() {
  return (
    <LegalPage title="Politique de confidentialité">
      <div>
        <h2>Responsable du traitement</h2>
        <p>
          {legal.legalName} ({legal.companyName}), représentée par {legal.director}, {legal.address} —{" "}
          <a href={`mailto:${legal.email}`}>{legal.email}</a>.
        </p>
      </div>

      <div>
        <h2>Données collectées</h2>
        <p>Lorsque vous utilisez le formulaire de contact, nous collectons :</p>
        <ul>
          <li>vos nom et prénom ;</li>
          <li>votre adresse e-mail ;</li>
          <li>le type de prestation, le type d&apos;événement et le budget envisagés ;</li>
          <li>le contenu de votre message.</li>
        </ul>
        <p>Aucune donnée n&apos;est collectée à votre insu. Ce site ne dépose pas de cookies publicitaires ni de traceurs de mesure d&apos;audience.</p>
      </div>

      <div>
        <h2>Finalité et base légale</h2>
        <p>
          Ces données servent uniquement à répondre à votre demande et à établir un devis. Le traitement repose sur votre consentement,
          exprimé en cochant la case prévue à cet effet, puis, le cas échéant, sur l&apos;exécution de mesures précontractuelles ou du contrat.
        </p>
      </div>

      <div>
        <h2>Destinataires</h2>
        <p>
          Les données sont destinées exclusivement à {legal.companyName}. Elles ne sont ni vendues ni cédées à des tiers.
          Pour l&apos;acheminement des messages, nous faisons appel aux sous-traitants techniques suivants :
        </p>
        <ul>
          <li>FormSubmit (formsubmit.co) — transmission du formulaire par e-mail ;</li>
          <li>Google (Gmail) — réception et stockage des e-mails ;</li>
          <li>{legal.host.name} — hébergement du site.</li>
        </ul>
        <p>
          Certains de ces prestataires sont situés hors de l&apos;Union européenne (États-Unis). Ces transferts sont encadrés par des
          garanties appropriées (Data Privacy Framework UE–États-Unis ou clauses contractuelles types de la Commission européenne).
        </p>
      </div>

      <div>
        <h2>Durée de conservation</h2>
        <p>
          Les données des demandes n&apos;ayant pas abouti sont conservées 3 ans maximum à compter du dernier contact. Les données
          clients liées à une prestation sont conservées pendant la durée de la relation commerciale, puis archivées pendant les durées
          légales (10 ans pour les pièces comptables).
        </p>
      </div>

      <div>
        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD et à la loi « Informatique et Libertés », vous disposez d&apos;un droit d&apos;accès, de rectification,
          d&apos;effacement, de limitation, d&apos;opposition et de portabilité de vos données, ainsi que du droit de retirer votre
          consentement à tout moment. Pour les exercer, écrivez à <a href={`mailto:${legal.email}`}>{legal.email}</a>.
        </p>
        <p>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>).
        </p>
      </div>
    </LegalPage>
  );
}
