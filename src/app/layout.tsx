import type { Metadata } from "next";
import { Sora, Karla, Fira_Code } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const sora = Sora({ variable: "--font-sora", subsets: ["latin"], display: "swap", weight: ["400", "600", "700", "800"] });
const karla = Karla({ variable: "--font-karla", subsets: ["latin"], display: "swap" });
const firaCode = Fira_Code({ variable: "--font-fira-code", subsets: ["latin"], display: "swap", weight: ["400", "700"] });

const BASE_URL = "https://www.installateur-geothermie-france.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Installateur Géothermie France — Trouvez un Artisan RGE 2026",
    template: "%s | installateur-geothermie-france.fr",
  },
  description: "Trouvez un installateur géothermique RGE certifié près de chez vous. Devis gratuit, artisans qualifiés dans plus de 35 000 communes en France.",
  openGraph: {
    type: "website", locale: "fr_FR", url: BASE_URL, siteName: "Installateur Géothermie France",
    title: "Installateur Géothermie France — Artisans RGE Certifiés",
    description: "Trouvez un installateur géothermique RGE certifié près de chez vous.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Installateur Géothermie France — Artisans RGE",
    description: "Trouvez un artisan géothermique certifié près de chez vous.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${BASE_URL}/#organization`, name: "Installateur Géothermie France", url: BASE_URL, description: "Annuaire des installateurs géothermiques RGE certifiés en France." },
      { "@type": "WebSite", "@id": `${BASE_URL}/#website`, url: BASE_URL, name: "Installateur Géothermie France", publisher: { "@id": `${BASE_URL}/#organization` }, inLanguage: "fr-FR" },
    ],
  };

  return (
    <html lang="fr" className={`${sora.variable} ${karla.variable} ${firaCode.variable}`}>
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} /></head>
      <body className="font-sans antialiased bg-bg text-text min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
