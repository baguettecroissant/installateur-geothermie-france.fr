// Zones climatiques — impact sur le CHOIX de l'installateur et les compétences requises
// Angle éditorial Site 3 : artisan, techniques, certifications, expertise terrain

export interface ClimateZone {
    id: string;
    label: string;
    conseil_geothermie: string;
    captage_recommande: string;
    saison_travaux: string;
    conseil_saisonnier: string;
    sol_type: string;
}

export function getClimateZone(lat: number, lng: number): ClimateZone {
    if (lat > 48.5) return climateZones.oceanique_nord;
    if (lat > 46.5 && lng < 0) return climateZones.oceanique;
    if (lat > 46.5 && lng >= 0 && lng < 5) return climateZones.semi_continental;
    if (lat > 46.5 && lng >= 5) return climateZones.continental;
    if (lat > 44 && lng > 3) return climateZones.mediterraneen;
    if (lat <= 44 && lng > 3) return climateZones.mediterraneen;
    if (lat <= 44) return climateZones.oceanique_sud;
    return climateZones.oceanique;
}

export const climateZones: Record<string, ClimateZone> = {
    oceanique_nord: {
        id: "oceanique_nord",
        label: "Climat océanique tempéré (Nord)",
        conseil_geothermie: "En zone océanique nord, les installateurs doivent maîtriser le forage en sols humides (argiles, limons). Vérifiez que votre artisan dispose d'un système de gestion des eaux de forage adapté et connaît les techniques de cimentation en terrain instable. Les foreurs expérimentés dans cette zone atteignent 60-80 ml/jour contre 40-50 ml en zone rocheuse.",
        captage_recommande: "Le captage horizontal est bien maîtrisé par les artisans locaux habitués aux terrains argileux. Vérifiez que l'installateur pose les capteurs à la bonne profondeur (1,2-1,5 m) et respecte l'espacement normalisé entre les boucles (40-60 cm). Pour le vertical, exigez un foreur certifié QualiForage avec expérience en sol meuble.",
        saison_travaux: "Les installateurs sont les plus disponibles en hiver (janvier-mars) dans cette zone. Profitez-en pour la visite technique et le montage du dossier. Les travaux au printemps-été garantissent les meilleures conditions de chantier et un suivi optimal par l'artisan.",
        conseil_saisonnier: "En automne-hiver, les sols gorgés d'eau compliquent le chantier — seuls les installateurs expérimentés gèrent efficacement le drainage et la protection des tranchées. Demandez comment l'artisan gère les intempéries : un protocole clair (bâche, drainage, report de chantier) est le signe d'un professionnel sérieux.",
        sol_type: "Sols argileux et limoneux — les installateurs doivent maîtriser les techniques de cimentation en terrain humide et la gestion des eaux de forage. Nappes phréatiques accessibles : vérifiez que le foreur possède la certification pour l'aquathermie.",
    },
    oceanique: {
        id: "oceanique",
        label: "Climat océanique doux (Ouest)",
        conseil_geothermie: "Le climat doux de l'Ouest permet aux installateurs de travailler dans des conditions confortables presque toute l'année. Les artisans locaux ont développé une expertise solide en captage horizontal, très courant dans cette zone. Privilégiez les installateurs ayant une double compétence : captage horizontal ET vertical, pour une recommandation objective selon votre terrain.",
        captage_recommande: "Les installateurs de l'Ouest sont réputés pour leur maîtrise du captage horizontal en sols sableux et limoneux. Vérifiez que l'artisan possède une mini-pelle adaptée et un GPS de tracé pour documenter la position exacte des capteurs (indispensable pour les travaux futurs sur le terrain). Pour le littoral, exigez un foreur avec expérience en terrain salin.",
        saison_travaux: "La disponibilité des artisans est constante toute l'année dans l'Ouest — un avantage pour obtenir des devis réactifs et un suivi attentif. La période septembre-novembre est idéale : l'artisan a terminé les chantiers d'été et peut consacrer plus de temps à votre projet.",
        conseil_saisonnier: "Les tempêtes atlantiques (octobre-février) peuvent interrompre le chantier. Un bon installateur anticipe ce risque dans son planning et prévoit des marges. Demandez le planning prévisionnel avec les jours tampons en cas d'intempérie — c'est un indicateur de professionnalisme.",
        sol_type: "Sols sableux et limoneux — les installateurs locaux maîtrisent ces terrains. En zone littorale (schiste, sable marin), vérifiez que le foreur possède l'équipement de tubage renforcé adapté. Nappes côtières : analyse de salinité obligatoire par le foreur.",
    },
    semi_continental: {
        id: "semi_continental",
        label: "Climat semi-continental",
        conseil_geothermie: "En zone semi-continentale, les installateurs doivent maîtriser les deux types de captage (horizontal et vertical) car les conditions varient fortement selon les parcelles. Privilégiez les artisans qui réalisent une étude de sol systématique avant de recommander une solution. Un installateur qui propose le vertical sans avoir vérifié la faisabilité du horizontal n'est pas objectif.",
        captage_recommande: "Les sols du Bassin parisien alternent couches tendres et dures — le foreur doit disposer d'un équipement polyvalent (tricône + marteau fond de trou). Vérifiez que l'installateur propose une cimentation thermo-ciment conforme à la norme NF X10-970. Les artisans expérimentés dans cette zone connaissent la stratigraphie locale et anticipent les aléas géologiques.",
        saison_travaux: "Les artisans de cette zone sont très sollicités au printemps — anticipez votre demande de devis de 3-4 mois. En automne (septembre-novembre), les installateurs sont plus disponibles et peuvent réaliser la visite technique avec plus de soin.",
        conseil_saisonnier: "Les gelées (novembre-avril) testent la compétence de l'installateur : les raccordements extérieurs doivent être protégés et les tests de pression adaptés. Un artisan sérieux refuse de faire la mise en service par températures négatives (risque de faux diagnostic). Planifiez la mise en service entre avril et octobre.",
        sol_type: "Sols calcaires et argileux variés — l'installateur doit adapter ses techniques à chaque chantier. Les terrains argileux nécessitent une expertise en retrait-gonflement. Les artisans certifiés connaissent la carte géologique locale et dimensionnent en conséquence.",
    },
    continental: {
        id: "continental",
        label: "Climat continental (Est, massifs)",
        conseil_geothermie: "Le climat continental exige le plus haut niveau d'expertise de l'installateur. Les hivers rigoureux (-10 à -15°C) imposent un dimensionnement PAC précis : un sous-dimensionnement de 10% se traduit par un inconfort de chauffage réel. Les installateurs de cette zone doivent maîtriser les PAC haute température (65°C) pour les rénovations conservant des radiateurs, et le forage en terrains granitiques difficiles.",
        captage_recommande: "Le forage vertical en granite vosgien ou calcaire jurassien requiert un foreur spécialisé avec équipement adapté (marteau fond de trou à haute énergie). En Alsace, l'aquathermie sur nappe rhénane demande une expertise hydrogéologique spécifique. Vérifiez que le foreur possède la certification QualiForage ET une expérience documentée dans le type de sol de votre parcelle.",
        saison_travaux: "En zone de montagne, le calendrier de chantier est contraint (mai-septembre). Les installateurs locaux ont des carnets de commandes très chargés en été — réservez 4 à 6 mois à l'avance. En plaine, les artisans sont plus disponibles en basse saison (novembre-mars) pour les visites techniques.",
        conseil_saisonnier: "Seuls les installateurs expérimentés en climat continental savent gérer les contraintes hivernales : protection antigel des circuits avant mise en service, test de performance en conditions réelles de froid, et ajustement de la courbe de chauffe. Demandez comment l'artisan gère la mise en service par grand froid.",
        sol_type: "Géologie exigeante (granite, calcaire dur, alluvions) — le foreur doit posséder l'équipement adapté à chaque type de sol. En Alsace, la nappe rhénane nécessite un foreur spécialisé en aquathermie. L'expertise locale du sous-sol est un critère de sélection décisif.",
    },
    mediterraneen: {
        id: "mediterraneen",
        label: "Climat méditerranéen (Sud-Est)",
        conseil_geothermie: "En Méditerranée, l'installateur doit maîtriser deux compétences spécifiques : le forage en sol rocheux (calcaire, schiste) et la configuration PAC réversible pour le géocooling. Vérifiez que l'artisan a déjà installé des PAC géothermiques réversibles avec plancher chauffant-rafraîchissant — c'est une configuration plus complexe qu'un simple chauffage.",
        captage_recommande: "Le captage vertical en sol rocheux nécessite un foreur expérimenté avec matériel adapté (marteau fond de trou, tubage en terrain fracturé). Les sols secs imposent une cimentation thermo-ciment de haute qualité pour garantir le contact sonde-sol. L'installateur doit connaître les nappes locales (Durance, Rhône) pour proposer l'aquathermie quand c'est pertinent.",
        saison_travaux: "Les installateurs méditerranéens travaillent toute l'année — profitez de cette disponibilité pour obtenir des visites techniques approfondies. Évitez les mois d'été pour les travaux intérieurs (inconfort thermique pour l'artisan = qualité moindre). Automne et hiver sont idéaux.",
        conseil_saisonnier: "L'installation d'une PAC réversible demande une mise en service en deux temps : mode chauffage (octobre-novembre) puis mode rafraîchissement (mai-juin). Un bon installateur prévoit ces deux rendez-vous de réglage dans son devis. Méfiez-vous des artisans qui ne mentionnent pas le réglage du mode rafraîchissement.",
        sol_type: "Sols rocheux (calcaire, schiste) — le foreur doit posséder un équipement de forage en roche dure. Les sols secs en été exigent une cimentation de qualité supérieure. Seuls les installateurs maîtrisant la géologie locale peuvent garantir les performances.",
    },
    oceanique_sud: {
        id: "oceanique_sud",
        label: "Climat océanique aquitain (Sud-Ouest)",
        conseil_geothermie: "Le Sud-Ouest dispose d'un réseau d'installateurs géothermiques en croissance rapide (+30%/an). Les artisans locaux maîtrisent bien les sols sédimentaires (alluvions, molasses) et proposent des installations aux bons dimensionnements grâce à leur connaissance du bâti régional (maisons girondines, longères béarnaises, pavillons périurbains).",
        captage_recommande: "Les installateurs aquitains excellent en captage horizontal dans les alluvions de la Garonne. Pour les coteaux calcaires (Gers, Lot-et-Garonne), vérifiez que le foreur possède l'équipement de forage en roche. La particularité locale : les sols molassiques instables nécessitent un installateur connaissant la carte RGA (retrait-gonflement des argiles).",
        saison_travaux: "Les artisans aquitains sont très demandés en été (haute saison construction). Anticipez votre projet de 3-4 mois et privilégiez l'automne (septembre-novembre) pour bénéficier d'une meilleure disponibilité et d'un suivi plus attentif de l'installateur.",
        conseil_saisonnier: "Les sols molassiques instables imposent une expertise spécifique : l'installateur doit connaître les techniques de protection des capteurs horizontaux contre le retrait-gonflement. Demandez si l'artisan vérifie la classification RGA avant de proposer un captage horizontal — c'est un indicateur de compétence locale.",
        sol_type: "Sols alluviaux, molassiques et calcaires — les installateurs locaux connaissent ces terrains. L'expertise critique est la gestion des argiles gonflantes pour le captage horizontal. Les artisans sérieux refusent l'horizontal en terrain RGA B3 et recommandent le vertical.",
    },
};
