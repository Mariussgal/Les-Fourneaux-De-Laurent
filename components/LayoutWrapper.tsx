"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WaveDivider } from "@/components/WaveDivider";

interface NavLink {
  readonly label: string;
  readonly href: string;
}

interface NavData {
  readonly nav_links?: readonly NavLink[];
}

interface FooterData {
  readonly tagline?: string;
  readonly location?: string;
  readonly phone?: string;
  readonly email?: string;
  readonly legal_text?: string;
}

export function LayoutWrapper({
  children,
  navData,
  footerData,
}: {
  children: React.ReactNode;
  navData?: NavData | null;
  footerData?: FooterData | null;
}) {
  const pathname = usePathname();
  const isKeystatic = pathname?.startsWith("/keystatic");

  if (isKeystatic) {
    return <main className="flex-grow">{children}</main>;
  }

  return (
    <>
      <Navbar navData={navData ?? undefined} />
      <main className="flex-grow">{children}</main>
      <WaveDivider fromColor="bg-background" toColor="text-dark" />
      <Footer footerData={footerData ?? undefined} />
    </>
  );
}
