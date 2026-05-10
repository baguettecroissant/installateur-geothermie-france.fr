import Link from "next/link";
import { getAllGuides } from "@/data/guides";
import { IconArrowRight, IconCheck, IconStar, IconClock, IconTool, IconShieldCheck, IconAward, IconUsers, IconChecklist, IconCertificate } from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = { alternates: { canonical: "https://www.installateur-geothermie-france.fr" } };

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 py-20 lg:py-0 lg:h-[600px] flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <IconStar className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span>Annuaire RGE 2026 — Vérifié</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight font-heading">
                Trouvez un Installateur{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-300">Géothermique RGE</span>
              </h1>
              <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                Comparez les artisans certifiés RGE QualiPAC dans votre ville. Vérification des certifications, assurance décennale et références de chantiers géothermiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/devis" className="inline-flex items-center justify-center bg-accent hover:bg-amber-700 text-white text-lg px-8 h-14 rounded-xl shadow-lg transition-all transform hover:scale-105 font-bold">Trouver un artisan <IconArrowRight className="ml-2 h-5 w-5" /></Link>
                <div className="flex items-center gap-3 text-amber-200 px-4"><div className="text-sm"><span className="font-bold text-white block">3 devis</span>en 48h maximum</div></div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-[400px] flex items-center justify-center bg-gradient-to-br from-amber-900 to-stone-900">
                  <div className="text-center p-8 z-10">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400/30 to-amber-600/30 border-2 border-amber-400/50 flex items-center justify-center"><IconTool className="h-12 w-12 text-amber-400" /></div>
                    <div className="text-white font-heading font-bold text-2xl mb-2">Artisans RGE</div>
                    <div className="text-amber-200">Certifiés QualiPAC</div>
                    <div className="mt-6 flex justify-center gap-4">
                      <div className="bg-amber-800/50 p-3 rounded-lg text-center"><div className="text-amber-300 font-bold text-lg">100%</div><div className="text-amber-500 text-xs">RGE vérifiés</div></div>
                      <div className="bg-amber-800/50 p-3 rounded-lg text-center"><div className="text-amber-300 font-bold text-lg">48h</div><div className="text-amber-500 text-xs">délai devis</div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}><div className="bg-amber-100 p-2 rounded-full"><IconCheck className="h-6 w-6 text-amber-600" /></div><div><p className="text-sm font-bold text-stone-900">Décennale vérifiée</p><p className="text-xs text-stone-500">Assurance à jour</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-amber-100 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-stone-600 text-sm font-medium uppercase tracking-wider">
            <div className="flex items-center gap-2"><IconCertificate className="h-5 w-5 text-secondary" /> Certification RGE vérifiée</div>
            <div className="flex items-center gap-2"><IconShieldCheck className="h-5 w-5 text-secondary" /> Assurance décennale</div>
            <div className="flex items-center gap-2"><IconClock className="h-5 w-5 text-secondary" /> Devis sous 48h</div>
            <div className="flex items-center gap-2"><IconAward className="h-5 w-5 text-secondary" /> Références chantiers</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">3 critères pour choisir votre installateur</h2>
            <p className="text-stone-600 text-lg">Un bon artisan géothermique se distingue par sa certification, son expérience terrain et ses garanties.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Certification RGE QualiPAC", desc: "Obligatoire pour les aides. Vérifiez que la mention 'PAC géothermiques' est bien active sur france-renov.gouv.fr. Renouvelée tous les 4 ans.", icon: IconCertificate, color: "bg-amber-50 border-amber-200", badge: "Obligatoire" },
              { title: "Expérience géothermique", desc: "Minimum 5 chantiers géothermiques réalisés dans votre département. Demandez photos et références. Privilégiez les spécialistes vs les généralistes.", icon: IconUsers, color: "bg-green-50 border-green-200", badge: "Recommandé" },
              { title: "Garanties et assurances", desc: "Assurance décennale couvrant spécifiquement le forage et l'installation de PAC sol-eau. Garantie constructeur PAC : 5 ans minimum. SAV local sous 48h.", icon: IconShieldCheck, color: "bg-blue-50 border-blue-200", badge: "Essentiel" },
            ].map((item, idx) => (
              <div key={idx} className={`p-8 rounded-2xl shadow-sm border hover:shadow-lg transition-shadow ${item.color}`}>
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm"><item.icon className="h-7 w-7 text-secondary" /></div>
                <span className="inline-block text-xs font-bold px-2 py-1 rounded bg-white text-secondary mb-3">{item.badge}</span>
                <h3 className="text-xl font-bold text-primary mb-2 font-heading">{item.title}</h3>
                <p className="text-sm text-stone-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Les 6 étapes de votre mise en relation</h2>
            <p className="text-stone-600 text-lg">Du premier contact à la mise en service, un installateur qualifié gère tout le projet.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Demande de devis", desc: "Décrivez votre projet en 2 minutes. Nous sélectionnons 3 artisans RGE certifiés dans votre département." },
              { step: "2", title: "Visite technique", desc: "L'installateur se déplace gratuitement pour évaluer votre terrain, votre installation existante et vos besoins." },
              { step: "3", title: "Devis détaillé", desc: "Vous recevez un devis chiffré incluant forage, PAC, raccordements et démarches administratives (DREAL, MaPrimeRénov')." },
              { step: "4", title: "Validation aides", desc: "L'artisan monte votre dossier MaPrimeRénov' et CEE. Il attend l'accord avant de lancer les travaux." },
              { step: "5", title: "Chantier (3-7 jours)", desc: "Forage, pose de la PAC, raccordements hydrauliques et électriques, mise en service et réglages." },
              { step: "6", title: "SAV et entretien", desc: "Contrat de maintenance annuel (150-300€). Dépannage prioritaire sous 24-48h. Suivi des performances." },
            ].map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold text-lg mb-4">{item.step}</span>
                <h3 className="text-lg font-bold text-primary mb-2 font-heading">{item.title}</h3>
                <p className="text-stone-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3 prose prose-lg prose-stone">
            <h2 className="text-3xl font-extrabold text-primary not-prose mb-8 font-heading">Comment vérifier un installateur géothermique ?</h2>
            <p>Avant de signer un devis, effectuez ces <strong>5 vérifications essentielles</strong> pour éviter les mauvaises surprises et garantir la qualité de votre installation.</p>
            <ul className="not-prose grid gap-4 my-8">
              <li className="flex items-center gap-4 p-4 bg-white rounded-lg border border-stone-200"><span className="font-bold text-primary min-w-[200px]">Certificat RGE QualiPAC</span><span className="text-stone-600">Vérifiez sur <strong>france-renov.gouv.fr</strong> que la certification mentionne bien "pompes à chaleur géothermiques".</span></li>
              <li className="flex items-center gap-4 p-4 bg-white rounded-lg border border-stone-200"><span className="font-bold text-primary min-w-[200px]">Assurance décennale</span><span className="text-stone-600">Demandez l'attestation à jour. Elle doit couvrir <strong>spécifiquement le forage et l'installation de PAC sol-eau</strong>.</span></li>
              <li className="flex items-center gap-4 p-4 bg-white rounded-lg border border-stone-200"><span className="font-bold text-primary min-w-[200px]">Références locales</span><span className="text-stone-600">Minimum <strong>5 chantiers géothermiques</strong> réalisés dans votre département. Demandez photos et contacts.</span></li>
              <li className="flex items-center gap-4 p-4 bg-white rounded-lg border border-stone-200"><span className="font-bold text-primary min-w-[200px]">Marques proposées</span><span className="text-stone-600">Les bons installateurs travaillent avec des marques premium : <strong>Viessmann, NIBE, Vaillant, Atlantic, Stiebel Eltron</strong>.</span></li>
              <li className="flex items-center gap-4 p-4 bg-white rounded-lg border border-stone-200"><span className="font-bold text-primary min-w-[200px]">Contrat de maintenance</span><span className="text-stone-600">Un artisan sérieux propose un <strong>SAV local sous 48h</strong> et un contrat d'entretien annuel (150-300€).</span></li>
            </ul>
          </div>
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl">
              <h3 className="font-bold text-amber-900 mb-4 flex items-center gap-2 font-heading"><IconTool className="h-5 w-5" /> Trouvez un artisan vérifié</h3>
              <p className="text-sm text-amber-800 mb-4">3 installateurs RGE certifiés et assurés dans votre département.</p>
              <Link href="/devis" className="block w-full bg-accent hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors">Comparer les artisans</Link>
            </div>
            <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-stone-100 bg-stone-50"><h3 className="font-bold text-primary flex items-center gap-2 font-heading"><IconArrowRight className="h-5 w-5 text-secondary" /> Guides Installateur</h3></div>
              <div className="divide-y divide-stone-100">{getAllGuides().slice(0, 4).map((guide) => (<Link key={guide.slug} href={`/guides/${guide.slug}`} className="flex gap-4 p-4 hover:bg-stone-50 transition-colors group"><div className="flex-1"><h4 className="text-sm font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 mb-1">{guide.title}</h4></div></Link>))}</div>
              <div className="p-4 bg-stone-50 text-center"><Link href="/guides" className="text-sm font-medium text-secondary">Voir tous les guides →</Link></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl"><h2 className="text-3xl font-bold mb-4 font-heading">Installateurs par ville</h2><p className="text-stone-400">Des artisans RGE certifiés dans toute la France. Sélectionnez votre commune pour être mis en relation.</p></div>
            <Link href="/annuaire" className="hidden md:inline-flex items-center text-secondary hover:text-amber-400 font-medium">Tout l&apos;annuaire <IconArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["paris-75001|Paris (75)","lyon-69001|Lyon (69)","marseille-13001|Marseille (13)","bordeaux-33000|Bordeaux (33)","toulouse-31000|Toulouse (31)","nantes-44000|Nantes (44)","lille-59000|Lille (59)","strasbourg-67000|Strasbourg (67)","nice-06000|Nice (06)","montpellier-34000|Montpellier (34)","rennes-35000|Rennes (35)","grenoble-38000|Grenoble (38)"].map(c => { const [slug, name] = c.split("|"); return <Link key={slug} href={`/geothermie/${slug}`} className="dept-card">{name}</Link>; })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12 font-heading">Questions sur les Installateurs</h2>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Comment vérifier qu'un installateur est bien RGE ?","acceptedAnswer":{"@type":"Answer","text":"Rendez-vous sur france-renov.gouv.fr et recherchez l'entreprise. Vérifiez que la certification mentionne 'PAC géothermiques' et qu'elle est en cours de validité."}},{"@type":"Question","name":"Combien de devis demander ?","acceptedAnswer":{"@type":"Answer","text":"Minimum 3 devis d'artisans différents. Les écarts de prix atteignent 15 à 25% pour un même projet. Comparez aussi les marques et les garanties."}},{"@type":"Question","name":"Quel délai pour trouver un installateur ?","acceptedAnswer":{"@type":"Answer","text":"Comptez 2 à 4 mois entre le premier contact et le début du chantier. La demande est forte en 2026, anticipez votre projet."}}]}) }} />
          <div className="space-y-4">
            {[
              { q: "Comment vérifier qu'un installateur est bien RGE ?", a: "Rendez-vous sur france-renov.gouv.fr et recherchez l'entreprise par nom ou SIRET. Vérifiez que la certification mentionne spécifiquement 'pompes à chaleur géothermiques' (et pas uniquement aérothermiques). La certification doit être en cours de validité." },
              { q: "Combien de devis faut-il demander ?", a: "Minimum 3 devis d'artisans différents. Les écarts de prix pour un même projet géothermique atteignent 15 à 25%. Au-delà du prix, comparez les marques de PAC proposées, les techniques de forage, les garanties et le suivi post-installation." },
              { q: "Quel délai pour trouver un installateur disponible ?", a: "En 2026, comptez 2 à 4 mois entre le premier contact et le début du chantier. La demande est en forte hausse. Anticipez et contactez les artisans RGE dès maintenant pour réserver un créneau avant la saison de chauffe." },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-lg border border-stone-200 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-primary group-hover:bg-stone-50 transition-colors text-lg">{faq.q}<span className="text-stone-400 group-open:rotate-180 transition-transform">▼</span></summary>
                <div className="p-5 pt-0 text-stone-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-amber-800 to-stone-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">Trouvez votre installateur RGE</h2>
          <p className="text-xl text-amber-100 mb-10">Comparez 3 artisans certifiés dans votre département. Devis gratuit, sans engagement.</p>
          <Link href="/devis" className="inline-flex items-center bg-white text-amber-900 hover:bg-amber-50 text-xl px-12 py-4 rounded-full shadow-2xl transition-transform hover:scale-105 font-bold">Être mis en relation <IconArrowRight className="ml-2 h-6 w-6" /></Link>
          <p className="mt-6 text-sm text-amber-200 opacity-80">Gratuit • Sans engagement • Artisans vérifiés</p>
        </div>
      </section>
    </div>
  );
}
