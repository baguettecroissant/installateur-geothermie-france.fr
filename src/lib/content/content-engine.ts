// Content Engine — Installateur Géothermie France : artisans RGE par ville
// Axe éditorial : ARTISANS, INSTALLATEURS RGE, MISE EN RELATION
// 12 variantes d'intro × 5 tiers × 6 climats × 13 régions = milliers de combinaisons uniques

import { City } from "@/types";
import { getPopTier, populationTiers } from "./population-tiers";
import { regionsContent } from "./regions";
import { getClimateZone } from "./climate-zones";

export interface CityPageContent {
    introTitle: string;
    introParagraph: string;
    regionSpecificite: string;
    regionTendance: string;
    regionMarche: string;
    climateAdvice: string;
    captageRecommande: string;
    saisonTravaux: string;
    conseilSaisonnier: string;
    solType: string;
    casUsage: string;
    conseilPratique: string;
    logistique: string;
    budgetContexte: string;
    faqItems: FaqItem[];
    tierLabel: string;
    checklistItems: string[];
    marquesRecommandees: string[];
    pricingContext: string;
    displayPopulation: number;
}

export interface FaqItem {
    question: string;
    answer: string;
}

// Deterministic hash for selecting intro variants
function hashSlug(slug: string): number {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
        const char = slug.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash);
}

// 12 intro variants — AXE ARTISANS & INSTALLATEURS RGE — contenu 100% unique
const introVariants = [
    (city: string, dept: string, region: string) => `Trouver un installateur géothermique RGE à ${city} est la première étape d'un projet réussi. La certification RGE (Reconnu Garant de l'Environnement) est obligatoire pour bénéficier des aides de l'État. Dans le ${dept} en ${region}, plusieurs entreprises spécialisées interviennent sur les installations géothermiques : foreurs, chauffagistes et intégrateurs thermiques.`,
    (city: string, dept: string, region: string) => `Les installateurs géothermiques certifiés RGE autour de ${city} maîtrisent l'ensemble de la chaîne : étude de sol, dimensionnement, forage, pose de la PAC et mise en service. Dans le ${dept}, la certification QualiPAC ou Qualit'EnR garantit un savoir-faire vérifié par un organisme indépendant. Comparer 3 devis d'artisans différents en ${region} reste la meilleure stratégie.`,
    (city: string, dept: string, region: string) => `Comment choisir son installateur géothermique à ${city} ? Vérifiez 3 critères essentiels : la certification RGE QualiPAC en cours de validité, au moins 5 chantiers géothermiques réalisés dans le ${dept}, et une assurance décennale couvrant spécifiquement le forage et l'installation de PAC sol-eau. En ${region}, les professionnels sérieux fournissent ces justificatifs sans difficulté.`,
    (city: string, dept: string, region: string) => `À ${city}, le choix de l'installateur géothermique détermine 80% de la réussite de votre projet. Un bon artisan RGE dans le ${dept} réalise une étude thermique approfondie, dimensionne correctement les sondes, et garantit les performances de la PAC pendant 2 ans minimum. En ${region}, privilégiez les entreprises spécialisées plutôt que les généralistes du chauffage.`,
    (city: string, dept: string, region: string) => `Les meilleurs installateurs géothermiques près de ${city} se distinguent par leur expérience terrain : connaissance du sous-sol du ${dept}, relations avec les foreurs locaux, et maîtrise des PAC des grandes marques (Viessmann, NIBE, Vaillant, Atlantic). En ${region}, demandez systématiquement des références de chantiers réalisés dans votre commune ou ses environs.`,
    (city: string, dept: string, region: string) => `Un installateur géothermique qualifié à ${city} prend en charge votre projet de A à Z : visite technique, étude de faisabilité, déclaration DREAL, coordination du foreur, installation de la PAC, raccordements et mise en service. Les artisans RGE du ${dept} en ${region} gèrent également votre dossier MaPrimeRénov' et CEE.`,
    (city: string, dept: string, region: string) => `Le délai moyen pour trouver un installateur géothermique disponible à ${city} est de 2 à 4 mois en 2026, la demande étant en forte hausse. Dans le ${dept}, anticiper votre projet est essentiel : contactez les artisans RGE en ${region} dès maintenant pour obtenir des devis et réserver un créneau de chantier avant la saison de chauffe.`,
    (city: string, dept: string, region: string) => `Attention aux faux installateurs géothermiques à ${city} : seuls les artisans titulaires de la certification RGE QualiPAC "pompes à chaleur géothermiques" peuvent vous faire bénéficier des aides. Vérifiez sur france-renov.gouv.fr que l'entreprise est bien référencée dans le ${dept}. En ${region}, les installateurs certifiés affichent leur numéro RGE sur leurs devis.`,
    (city: string, dept: string, region: string) => `Les installateurs géothermiques de ${city} et du ${dept} interviennent généralement en binôme : un foreur pour le captage (vertical ou horizontal) et un chauffagiste pour la PAC et les raccordements. Certaines entreprises en ${region} intègrent les deux compétences, ce qui simplifie la coordination et réduit les coûts de 5 à 10%.`,
    (city: string, dept: string, region: string) => `À ${city}, un installateur géothermique expérimenté dans le ${dept} saura vous orienter entre PAC sol-eau (la plus courante), PAC eau-eau (sur nappe phréatique) et PAC sol-sol (à détente directe). Chaque technologie a ses avantages selon la géologie locale en ${region}. Un diagnostic terrain gratuit est proposé par la plupart des professionnels certifiés.`,
    (city: string, dept: string, region: string) => `Le SAV et l'entretien sont aussi importants que l'installation à ${city}. Choisissez un installateur géothermique du ${dept} qui propose un contrat de maintenance annuel (150 à 300€/an) incluant le contrôle des performances, la vérification du circuit frigorifique et l'entretien préventif. En ${region}, les artisans locaux assurent une réactivité de dépannage sous 24 à 48h.`,
    (city: string, dept: string, region: string) => `Comparer les installateurs géothermiques à ${city}, c'est comparer : les marques de PAC proposées, les techniques de forage maîtrisées, les garanties offertes (décennale + constructeur), et le suivi post-installation. Dans le ${dept} en ${region}, les écarts de prix entre artisans RGE pour un même projet atteignent 15 à 25% — d'où l'importance de demander au moins 3 devis détaillés.`,
];

function getDisplayPopulation(city: City): number {
    let pop = city.population || 0;
    if (pop === 0) {
        if (city.name.includes("Paris")) pop = 2100000;
        else if (city.name.includes("Marseille")) pop = 870000;
        else if (city.name.includes("Lyon")) pop = 522000;
    }
    return pop;
}

export function generateCityContent(city: City): CityPageContent {
    const pop = getDisplayPopulation(city);
    const tier = getPopTier(pop);
    const tierData = populationTiers[tier];
    const regionData = regionsContent[city.region];
    const climateZone = getClimateZone(city.coordinates.lat, city.coordinates.lng);

    const introTitle = `Installateur Géothermie RGE à ${city.name}`;

    // Deterministic intro variant selection — 12 variants × dept × region = unique
    const variantIndex = hashSlug(city.slug) % introVariants.length;
    const introVariant = introVariants[variantIndex](city.name, city.department_name, city.region);
    const introParagraph = `${introVariant}\n\n${tierData.intro}`;

    const regionSpecificite = regionData?.specificite_geo || '';
    const regionTendance = regionData?.tendance || '';
    const regionMarche = regionData?.marche || '';

    const climateAdvice = climateZone.conseil_geothermie;
    const captageRecommande = climateZone.captage_recommande;
    const saisonTravaux = climateZone.saison_travaux;
    const conseilSaisonnier = climateZone.conseil_saisonnier;
    const solType = climateZone.sol_type;

    const casUsage = tierData.cas_usage;
    const conseilPratique = tierData.conseil_pratique;
    const logistique = tierData.logistique;
    const budgetContexte = tierData.budget_contexte;

    const faqItems = buildFaq(city, pop, climateZone.saison_travaux);

    // Pricing context — unique paragraph combining dept + tier + climate
    const pricingContext = buildPricingContext(city, pop, climateZone.label);

    return {
        introTitle,
        introParagraph,
        regionSpecificite,
        regionTendance,
        regionMarche,
        climateAdvice,
        captageRecommande,
        saisonTravaux,
        conseilSaisonnier,
        solType,
        casUsage,
        conseilPratique,
        logistique,
        budgetContexte,
        faqItems,
        tierLabel: tierData.label,
        checklistItems: tierData.checklist_items,
        marquesRecommandees: tierData.marques_recommandees,
        pricingContext,
        displayPopulation: pop,
    };
}

function buildPricingContext(city: City, pop: number, climateLabel: string): string {
    const dept = city.department_name;
    const region = city.region;
    
    if (pop > 200000) {
        return `À ${city.name}, le choix de l'installateur géothermique est décisif : plus de 15 entreprises RGE interviennent dans la métropole, mais seules celles maîtrisant le forage urbain (foreuse compacte, gestion de voirie) sont adaptées. Exigez un artisan ayant réalisé au minimum 20 chantiers en milieu métropolitain dense dans le ${dept}. En ${region}, les installateurs agréés par les grandes marques (Viessmann, NIBE, Daikin) offrent les garanties étendues et le SAV le plus structuré.`;
    }
    if (pop > 50000) {
        return `À ${city.name}, 5 à 15 installateurs RGE QualiPAC interviennent dans un rayon de 30 km. En ${region}, zone ${climateLabel.toLowerCase()}, cette densité d'artisans permet de comparer les approches techniques et les devis. Les critères de choix essentiels dans le ${dept} : expérience en forage (vertical et/ou horizontal), marques de PAC maîtrisées, délai d'intervention SAV garanti, et contrat de maintenance proposé. Les meilleurs installateurs offrent une visite technique gratuite.`;
    }
    if (pop > 10000) {
        return `${city.name} bénéficie d'un réseau d'installateurs géothermiques RGE de bonne densité. En ${region}, les artisans du ${dept} proposent des installations de qualité avec un suivi personnalisé. Comparez 3 à 5 devis en évaluant : la qualité de l'étude thermique préalable, l'expérience sur votre type de sol, les marques de PAC proposées, et les conditions de garantie (décennale + constructeur).`;
    }
    if (pop > 2000) {
        return `Dans les communes comme ${city.name}, les installateurs locaux du ${dept} offrent un service de proximité très apprécié : connaissance du terrain, réactivité de dépannage, et suivi personnalisé. En ${region}, ces artisans travaillent souvent en binôme avec un foreur partenaire régulier. L'avantage : une coordination rodée qui garantit la qualité du chantier et des tarifs 5 à 15% inférieurs aux grandes structures.`;
    }
    return `En commune rurale comme ${city.name}, le réseau d'installateurs RGE est plus restreint dans le ${dept} — comptez 2 à 4 artisans certifiés dans un rayon de 40 km. L'avantage de ces installateurs de proximité en ${region} : une connaissance approfondie du sous-sol local, un suivi personnalisé et une réactivité de dépannage rapide. Le principal critère de choix reste l'expérience en forage géothermique (minimum 5 chantiers recommandés).`;
}

function buildFaq(city: City, pop: number, saisonTravaux: string): FaqItem[] {
    const dept = city.department_name;
    const region = city.region;

    return [
        {
            question: `Comment trouver un installateur géothermique RGE à ${city.name} ?`,
            answer: pop > 200000
                ? `Pour trouver un installateur RGE à ${city.name}, consultez l'annuaire officiel france-renov.gouv.fr (filtrez par "PAC géothermique" et "${dept}"). En métropole, ciblez les artisans avec une expérience documentée en forage urbain (foreuse compacte, gestion de voirie). Vérifiez la certification sur qualit-enr.org. Demandez 3 à 5 devis avec portfolio de chantiers urbains.`
                : pop > 50000
                    ? `Recherchez les installateurs RGE QualiPAC à ${city.name} sur france-renov.gouv.fr et qualit-enr.org. Comparez 3 artisans sur les critères : nombre de chantiers géothermiques dans le ${dept}, marques de PAC proposées, et conditions de garantie. Un bon installateur propose une visite technique gratuite d'1h30 minimum.`
                    : pop > 10000
                        ? `Les installateurs RGE autour de ${city.name} sont référencés sur france-renov.gouv.fr. Demandez 3 devis à des artisans certifiés QualiPAC dans le ${dept}. Vérifiez les avis clients en ligne et les références de chantiers locaux. Le bouche-à-oreille est un excellent indicateur de qualité.`
                        : `Autour de ${city.name}, les installateurs RGE sont moins nombreux mais souvent plus expérimentés. Consultez france-renov.gouv.fr pour le ${dept}. Demandez des références locales et visitez un chantier si possible. Les artisans de proximité offrent le meilleur suivi.`
        },
        {
            question: `Quelles certifications vérifier pour un installateur à ${city.name} ?`,
            answer: `Trois certifications sont essentielles pour un installateur géothermique à ${city.name} (${dept}) : 1) RGE QualiPAC mention "PAC géothermique" (vérifiable sur qualit-enr.org), 2) Assurance décennale couvrant explicitement le forage géothermique et l'installation de PAC, 3) QualiForage pour le foreur (vérifiable sur qualiforage.org). Exigez les copies de ces documents avant de signer le devis.`
        },
        {
            question: `Combien de devis demander pour la géothermie à ${city.name} ?`,
            answer: `Demandez au minimum 3 devis d'installateurs RGE différents à ${city.name} et dans le ${dept}. ${saisonTravaux} Comparez-les ligne par ligne : marque et modèle de PAC, type de captage, longueur de forage, raccordements, mise en service, et conditions de garantie. Les écarts de prix entre artisans atteignent 15 à 30% pour un même projet — la mise en concurrence est indispensable en ${region}.`
        },
        {
            question: `Quel est le délai d'intervention d'un installateur à ${city.name} ?`,
            answer: pop > 50000
                ? `À ${city.name}, le délai entre le premier contact et le début du chantier est de 2 à 4 mois en 2026 (forte demande). La visite technique est réalisée sous 1-2 semaines, le devis envoyé sous 5-10 jours. Le chantier dure 4 à 7 jours. Après mise en service, le SAV contractuel garantit une intervention sous 24 à 48h dans le ${dept}.`
                : `Autour de ${city.name}, comptez 1 à 3 mois entre la signature du devis et le début du chantier. Les installateurs du ${dept} sont chargés — anticipez. Le chantier dure 3 à 5 jours. Le SAV est assuré sous 24 à 72h selon la distance de l'artisan.`
        },
        {
            question: `Comment reconnaître un bon installateur géothermique à ${city.name} ?`,
            answer: `Un bon installateur géothermique à ${city.name} se reconnaît à 5 signes : 1) Il réalise une visite technique approfondie (1h30 min, gratuite), 2) Il fournit une étude thermique certifiée avant le devis, 3) Il propose un engagement de performance (SCOP garanti), 4) Il montre un portfolio de chantiers locaux dans le ${dept}, 5) Il propose un contrat de maintenance annuel. Méfiez-vous des devis envoyés sans visite préalable.`
        },
        {
            question: `Que couvre la garantie décennale d'un installateur à ${city.name} ?`,
            answer: `La garantie décennale de votre installateur à ${city.name} couvre pendant 10 ans tous les dommages compromettant la solidité de l'installation ou la rendant impropre à sa destination : fuite du circuit géothermique, défaut de forage, affaissement des sondes, dommage structurel. Vérifiez que l'attestation couvre spécifiquement "forage géothermique et installation PAC sol-eau". Les artisans du ${dept} en ${region} fournissent cette attestation sur simple demande.`
        },
        {
            question: `Quel contrat de maintenance choisir à ${city.name} ?`,
            answer: pop > 50000
                ? `À ${city.name}, un contrat de maintenance géothermique coûte 200 à 400€/an et inclut : visite annuelle de contrôle, vérification du circuit frigorifique, nettoyage des filtres, test de performance (SCOP), et dépannage prioritaire sous 24h. Les installateurs du ${dept} proposent des forfaits 3 ou 5 ans avec remise de 10-20%. Sans contrat, une intervention coûte 80-120€/h.`
                : `Un contrat de maintenance à ${city.name} coûte 150 à 300€/an incluant une visite annuelle et le dépannage prioritaire. Les artisans locaux du ${dept} proposent un SAV de proximité réactif. Un contrat 3 ou 5 ans est plus avantageux (réduction 10-20%). Les sondes géothermiques ne nécessitent aucun entretien pendant 50 ans.`
        },
        {
            question: `Peut-on changer d'installateur pour la maintenance à ${city.name} ?`,
            answer: `Oui, vous pouvez choisir un autre artisan RGE pour la maintenance de votre PAC géothermique à ${city.name}. La garantie constructeur (2-5 ans) reste valide si l'entretien est réalisé par un professionnel certifié. La garantie décennale (10 ans) n'est pas impactée par le choix du mainteneur. Dans le ${dept} en ${region}, plusieurs installateurs RGE proposent des contrats de maintenance pour des PAC qu'ils n'ont pas installées.`
        },
    ];
}

// Helper: find nearby cities from the same department
export function findNearbyCities(allCities: City[], currentCity: City, limit: number = 8): City[] {
    const sameDept = allCities.filter(c => c.department_code === currentCity.department_code && c.slug !== currentCity.slug);

    if (currentCity.coordinates.lat === 0 && currentCity.coordinates.lng === 0) {
        return sameDept.slice(0, limit);
    }

    return sameDept
        .map(c => ({
            city: c,
            distance: Math.sqrt(
                Math.pow(c.coordinates.lat - currentCity.coordinates.lat, 2) +
                Math.pow(c.coordinates.lng - currentCity.coordinates.lng, 2)
            )
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, limit)
        .map(c => c.city);
}
