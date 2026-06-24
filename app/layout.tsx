import type { Metadata } from "next";
import { Fraunces, DM_Sans, Bebas_Neue, Cormorant_Garamond } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WaveDivider } from "@/components/WaveDivider";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Les Fourneaux de Laurent",
    default: "Les Fourneaux de Laurent | Traiteur du Sud-Ouest en Île-de-France",
  },
  description: "Traiteur convivial du Sud-Ouest basé à Asnières-sur-Seine. Brasero, apéros dînatoires, service de Food Truck et événements sur mesure.",
  openGraph: {
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Les Fourneaux de Laurent Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${dmSans.variable} ${bebasNeue.variable} ${cormorant.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans bg-background text-text selection:bg-primary selection:text-surface" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <WaveDivider fromColor="bg-background" toColor="text-dark" />
        <Footer />
      </body>
    </html>
  );
}
