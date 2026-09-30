"use client";

import { useState } from "react";
import Link from "next/link";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      need: { value: string };
      event: { value: string };
      budget: { value: string };
      message: { value: string };
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/lesfourneauxdelaurent@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nom: target.name.value,
          Email: target.email.value,
          Besoin: target.need.value,
          Evenement: target.event.value,
          Budget: target.budget.value,
          Message: target.message.value,
          Consentement_RGPD: `Accepté le ${new Date().toLocaleString("fr-FR")}`,
          _subject: "Nouveau message depuis Les Fourneaux de Laurent !",
        })
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-surface p-8 md:p-12 rounded-[2rem] border border-border shadow-sm text-center">
        <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-dark mb-4">Message envoyé !</h3>
        <p className="text-text-muted text-lg mb-8">Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="text-primary font-bold hover:underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface p-4 md:p-12 rounded-3xl md:rounded-[2rem] border border-border shadow-sm space-y-3 md:space-y-6">
      {status === "error" && (
        <div className="p-4 bg-red-100 text-red-700 rounded-lg text-sm mb-4">
          Une erreur s&apos;est produite lors de l&apos;envoi. Veuillez réessayer plus tard.
        </div>
      )}
      
      <div className="space-y-1 md:space-y-2">
        <label htmlFor="name" className="block text-xs md:text-sm font-bold text-dark uppercase tracking-wider">Nom complet</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          required 
          className="w-full px-3 py-2 md:px-5 md:py-4 rounded-lg md:rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background/50 text-dark text-sm md:text-base"
          placeholder="Votre nom"
        />
      </div>
      
      <div className="space-y-1 md:space-y-2">
        <label htmlFor="email" className="block text-xs md:text-sm font-bold text-dark uppercase tracking-wider">Adresse e-mail</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          required 
          className="w-full px-3 py-2 md:px-5 md:py-4 rounded-lg md:rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background/50 text-dark text-sm md:text-base"
          placeholder="vous@exemple.com"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        <div className="space-y-1 md:space-y-2">
          <label htmlFor="need" className="block text-xs md:text-sm font-bold text-dark uppercase tracking-wider">Type de besoin</label>
          <select 
            id="need" 
            name="need"
            required 
            defaultValue=""
            className="w-full px-3 py-2 md:px-5 md:py-4 rounded-lg md:rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background/50 text-dark cursor-pointer text-sm md:text-base"
          >
            <option value="" disabled hidden>Choisir une option</option>
            <option value="food-truck">Food Truck</option>
            <option value="traiteur">Prestation Traiteur</option>
          </select>
        </div>

        <div className="space-y-1 md:space-y-2">
          <label htmlFor="event" className="block text-xs md:text-sm font-bold text-dark uppercase tracking-wider">Type d&apos;événement</label>
          <select 
            id="event" 
            name="event"
            required 
            defaultValue=""
            className="w-full px-3 py-2 md:px-5 md:py-4 rounded-lg md:rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background/50 text-dark cursor-pointer text-sm md:text-base"
          >
            <option value="" disabled hidden>Choisir une option</option>
            <option value="privé">Privé</option>
            <option value="pro">Professionnel</option>
          </select>
        </div>
      </div>

      <div className="space-y-1 md:space-y-2">
        <label htmlFor="budget" className="block text-xs md:text-sm font-bold text-dark uppercase tracking-wider">Budget par personne</label>
        <select 
          id="budget" 
          name="budget"
          required 
          defaultValue=""
          className="w-full px-3 py-2 md:px-5 md:py-4 rounded-lg md:rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background/50 text-dark cursor-pointer text-sm md:text-base"
        >
          <option value="" disabled hidden>Choisir une tranche budgétaire</option>
          <option value="15-30">Entre 15 et 30 €</option>
          <option value="30-60">Entre 30 et 60 €</option>
          <option value="60+">60 € et plus</option>
        </select>
      </div>
      
      <div className="space-y-1 md:space-y-2">
        <label htmlFor="message" className="block text-xs md:text-sm font-bold text-dark uppercase tracking-wider">Message</label>
        <textarea 
          id="message" 
          name="message"
          required 
          rows={3}
          className="w-full px-3 py-2 md:px-5 md:py-4 rounded-lg md:rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background/50 resize-none text-dark text-sm md:text-base md:rows-5"
          placeholder="Dites-nous en plus sur votre événement..."
        ></textarea>
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-primary"
        />
        <label htmlFor="consent" className="text-xs md:text-sm text-text-muted leading-snug cursor-pointer">
          J&apos;accepte que les informations saisies soient utilisées pour répondre à ma demande et établir un devis. Pour en savoir plus
          sur la gestion de vos données et vos droits, consultez notre{" "}
          <Link href="/politique-de-confidentialite" target="_blank" className="text-primary underline hover:text-primary-dark">
            politique de confidentialité
          </Link>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-primary hover:bg-primary-dark text-surface font-bold py-3 md:py-4 rounded-lg md:rounded-xl transition-colors disabled:opacity-70 flex justify-center items-center text-base md:text-lg mt-2 md:mt-4 shadow-lg shadow-primary/20"
      >
        {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
      </button>
    </form>
  );
}
