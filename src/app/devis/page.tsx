import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { IconCheck, IconShieldCheck, IconClock, IconCertificate } from "@tabler/icons-react";
import Link from "next/link";
export const metadata = { title: "Trouver un Installateur RGE Géothermie | Devis Gratuit 2026", description: "Comparez 3 installateurs géothermiques RGE certifiés dans votre département. Devis gratuit, sans engagement.", alternates: { canonical: "https://www.installateur-geothermie-france.fr/devis" } };
export default function DevisPage() {
  return (
    <div className="bg-bg min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 font-heading">Trouvez un <span className="text-secondary">Artisan RGE</span><br/>Géothermique Certifié</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">Comparez 3 installateurs certifiés RGE QualiPAC dans votre département. Devis détaillé sous 48h.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
            <div className="p-1 md:p-4"><ViteUnDevisWidget /></div>
            <div className="bg-stone-50 p-4 text-center border-t border-stone-100 text-sm text-stone-500">Artisans vérifiés. Certification RGE et décennale contrôlées.</div>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
              <h3 className="font-bold text-primary mb-4 text-lg font-heading">Artisans vérifiés</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><div className="bg-amber-100 p-1.5 rounded-full shrink-0 mt-0.5"><IconCertificate className="h-5 w-5 text-amber-600" /></div><div><span className="font-bold block text-primary">RGE QualiPAC</span><span className="text-sm text-stone-600">Mention géothermique vérifiée.</span></div></li>
                <li className="flex items-start gap-3"><div className="bg-green-100 p-1.5 rounded-full shrink-0 mt-0.5"><IconShieldCheck className="h-5 w-5 text-green-600" /></div><div><span className="font-bold block text-primary">Décennale à jour</span><span className="text-sm text-stone-600">Forage et PAC sol-eau couverts.</span></div></li>
                <li className="flex items-start gap-3"><div className="bg-blue-100 p-1.5 rounded-full shrink-0 mt-0.5"><IconClock className="h-5 w-5 text-blue-600" /></div><div><span className="font-bold block text-primary">Devis sous 48h</span><span className="text-sm text-stone-600">Visite technique gratuite.</span></div></li>
              </ul>
            </div>
            <div className="bg-stone-900 p-6 rounded-xl text-center text-white">
              <div className="text-4xl font-bold text-amber-400 mb-2">3 devis</div>
              <div className="text-stone-300">artisans certifiés</div>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-16 border-t border-stone-200">
          <div className="prose prose-stone max-w-none">
            <h2 className="text-2xl font-bold text-primary mb-6 font-heading">Comment choisir le bon installateur ?</h2>
            <p>La certification RGE QualiPAC est obligatoire, mais ne suffit pas. Vérifiez l&apos;expérience locale (5+ chantiers dans votre département), l&apos;assurance décennale et le contrat de maintenance proposé. <Link href="/guides/choisir-installateur-rge-criteres" className="text-secondary hover:underline font-medium">→ Les 7 critères de sélection</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
