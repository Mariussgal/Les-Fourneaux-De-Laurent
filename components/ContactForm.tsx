"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
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
      <div className="space-y-1 md:space-y-2">
        <label htmlFor="name" className="block text-xs md:text-sm font-bold text-dark uppercase tracking-wider">Nom complet</label>
        <input 
          type="text" 
          id="name" 
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
          required 
          rows={3}
          className="w-full px-3 py-2 md:px-5 md:py-4 rounded-lg md:rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-background/50 resize-none text-dark text-sm md:text-base md:rows-5"
          placeholder="Dites-nous en plus sur votre événement..."
        ></textarea>
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
