export const metadata = {
  title: "FAQ — Questions sur les Installateurs Géothermie RGE",
  description: "Certification RGE, assurance décennale, devis : toutes les réponses pour choisir le bon artisan géothermique.",
  alternates: { canonical: "https://www.installateur-geothermie-france.fr/faq" },
};
const faqItems = [
  { q: "Comment vérifier qu'un installateur est bien certifié RGE ?", a: "Rendez-vous sur france-renov.gouv.fr/annuaire-rge. Recherchez l'entreprise et vérifiez que la mention 'PAC géothermiques' est active. La certification est renouvelée tous les 4 ans." },
  { q: "Quelle est la différence entre RGE QualiPAC aérothermique et géothermique ?", a: "Ce sont deux qualifications distinctes. Un installateur certifié aérothermique (air-eau) n'est PAS qualifié pour la géothermie (sol-eau). Vérifiez la mention exacte." },
  { q: "Combien de devis faut-il demander ?", a: "Minimum 3 devis d'installateurs différents. Les écarts de prix atteignent 15 à 25% pour un même projet. Comparez aussi les marques et les garanties proposées." },
  { q: "L'installateur prend-il en charge les démarches administratives ?", a: "Un bon installateur RGE monte votre dossier MaPrimeRénov', active les CEE, et déclare le forage auprès de la DREAL. Vérifiez que c'est inclus dans le devis." },
  { q: "Que couvre l'assurance décennale ?", a: "Elle protège pendant 10 ans contre les défauts de forage, d'étanchéité des sondes et de dimensionnement. Demandez l'attestation et vérifiez que le forage géothermique y figure." },
  { q: "L'installateur est-il aussi le foreur ?", a: "Pas toujours. Certains installateurs sous-traitent le forage à un foreur QualiForage. Demandez qui réalise le forage et vérifiez sa certification." },
  { q: "Quel délai pour obtenir un rendez-vous ?", a: "En 2026, comptez 2 à 4 semaines pour une visite technique et 2 à 4 mois entre le premier contact et le début du chantier. La demande est forte." },
  { q: "Faut-il un contrat d'entretien ?", a: "L'entretien est obligatoire tous les 2 ans. Un contrat (200-400€/an) inclut le dépannage prioritaire (24-48h) et souvent les pièces d'usure. C'est recommandé." },
  { q: "Que faire en cas de litige avec l'installateur ?", a: "Mise en demeure par recommandé, puis médiation de la consommation (gratuite). Vous pouvez aussi saisir directement son assurance décennale ou signaler à Qualit'EnR." },
  { q: "Un installateur peut-il refuser un chantier ?", a: "Oui, si le terrain est inaccessible pour la foreuse, si le sous-sol est inadapté (zone karstique), ou si le projet est sous-dimensionné. Un refus peut être un signe de sérieux." },
];
export default function FAQPage() {
  return (
    <div className="bg-bg min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">Questions Fréquentes — Installateurs RGE</h1>
          <p className="text-stone-600 text-lg">Certification, devis, garanties : tout savoir pour choisir le bon artisan.</p>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(faq => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
        <div className="space-y-4">
          {faqItems.map((faq, idx) => (
            <details key={idx} className="group bg-white rounded-lg border border-stone-200 overflow-hidden">
              <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-primary group-hover:bg-stone-50 transition-colors text-lg">{faq.q}<span className="text-stone-400 group-open:rotate-180 transition-transform ml-4 shrink-0">▼</span></summary>
              <div className="p-5 pt-0 text-stone-600 leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
