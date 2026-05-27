"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";


const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Épicerie", href: "/epicerie-fine" },
  { label: "Traiteur", href: "/nos-services-traiteur" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        
        setIsScrolled(currentScrollY > 20);

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down: hide navbar
          setIsVisible(false);
        } else {
          // Scrolling up: show navbar
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out py-3 md:py-5",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isMobileMenuOpen
          ? "bg-[#FAF7F2] border-b border-[#1C1008]/10"
          : isScrolled
            ? "bg-[#FAF7F2]/90 backdrop-blur-md shadow-sm border-b border-[#1C1008]/5"
            : "bg-transparent"
      )}
    >
      <div className="container-custom px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Logo Pill */}
        <Link
          href="/"
          className="bg-[#FAF7F2] text-[#1C1008] border border-[#1C1008]/10 rounded-full px-4 sm:px-6 py-2 font-display font-black tracking-wider sm:tracking-widest text-xs sm:text-base md:text-lg uppercase shadow-sm hover:bg-[#1C1008] hover:text-[#FAF7F2] transition-all duration-300 whitespace-nowrap"
        >
          Les Fourneaux de Laurent
        </Link>

        {/* Right Side: Navigation Links as Pills */}
        <nav className="hidden lg:flex items-center gap-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-[#FAF7F2] text-[#1C1008] border border-[#1C1008]/10 rounded-full px-5 py-2 font-bold text-sm hover:bg-[#1C1008] hover:text-[#FAF7F2] transition-colors shadow-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-[#1C1008] hover:bg-[#1C1008]/5 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#FAF7F2] border-b border-[#1C1008]/10 shadow-lg py-6 px-6 flex flex-col gap-3 animate-in fade-in slide-in-from-top-5 duration-200">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#FAF7F2] text-[#1C1008] border border-[#1C1008]/10 rounded-full px-6 py-3 font-bold text-center text-base hover:bg-[#1C1008] hover:text-[#FAF7F2] transition-all shadow-sm active:scale-98"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
