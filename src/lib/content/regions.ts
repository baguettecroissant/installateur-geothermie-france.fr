// Régions de France — contenu INSTALLATEUR et ARTISAN spécifique par région
// Angle éditorial Site 3 : réseau d'artisans, expertise locale, SAV, confiance

export const regionsContent: Record<string, RegionContent> = {
    "Île-De-France": {
        specificite_geo: "L'Île-de-France dispose du plus grand réseau d'installateurs géothermiques certifiés de France : plus de 150 entreprises RGE QualiPAC interviennent dans la région. Les artisans franciliens sont spécialisés en forage urbain (foreuses compactes, gestion de voirie) et en aquathermie sur nappe. Les bureaux d'études thermiques certifiés sont nombreux pour piloter les projets complexes (copropriétés, sites contraints).",
        tendance: "Les carnets de commandes des installateurs sont chargés (délai d'attente 2-4 mois). Les réseaux de marques (Viessmann Partner, NIBE Pro, Daikin Expert) offrent des garanties étendues et un SAV structuré. Les artisans indépendants restent compétitifs en prix mais avec des délais d'intervention SAV plus longs.",
        marche: "Le choix est large : artisans indépendants, filiales de groupes (ENGIE, Effy), et installateurs agréés constructeurs. Comparez sur 3 critères : expérience en milieu urbain, réactivité SAV contractuelle, et garantie de performance (SCOP garanti). Les meilleurs installateurs proposent un contrat de maintenance premium avec intervention sous 24h.",
    },
    "Auvergne-Rhône-Alpes": {
        specificite_geo: "La région ARA possède le tissu d'installateurs géothermiques le plus dense de province. Les artisans locaux sont particulièrement expérimentés grâce à la diversité géologique (alluvions du Rhône, calcaires alpins, granites du Massif Central). Les installateurs de Savoie et Haute-Savoie maîtrisent les PAC haute température (65°C) indispensables pour les maisons de montagne conservant des radiateurs.",
        tendance: "La densité d'installateurs certifiés maintient une concurrence saine. Les marques ENGIE Homes, Atlantic et Viessmann ont des réseaux régionaux structurés avec des SAV locaux. Les artisans alpins se distinguent par leur expertise en dimensionnement pour climat rigoureux. La tendance est aux installateurs proposant un suivi énergétique connecté (monitoring PAC à distance).",
        marche: "Un marché mature avec des artisans expérimentés. Les critères de choix déterminants : expérience dans votre type de terrain (alluvions vs montagne), connaissance des marques adaptées à votre climat, et disponibilité du SAV local. Demandez au moins 3 chantiers de référence dans votre département.",
    },
    "Nouvelle-Aquitaine": {
        specificite_geo: "Le réseau d'installateurs néo-aquitain est en forte structuration : les artisans historiques (plombiers-chauffagistes) se certifient QualiPAC pour répondre à la demande croissante. Les foreurs locaux connaissent parfaitement les sols sédimentaires du bassin aquitain et les nappes alluviales. Les installateurs ruraux (Charente, Dordogne, Limousin) offrent un service de proximité apprécié des propriétaires isolés.",
        tendance: "Le remplacement massif du fioul (+30%/an) attire de nouveaux artisans sur le marché. Attention aux installateurs récemment certifiés avec peu d'expérience géothermique : vérifiez le nombre de chantiers réalisés (minimum 10 recommandé). Les réseaux de marques (Viessmann, Atlantic) offrent un gage de qualité via la formation continue de leurs artisans partenaires.",
        marche: "Marché en forte croissance avec un mix d'artisans expérimentés et de nouveaux entrants. Privilégiez les installateurs avec une ancienneté de 3+ ans en géothermie et un foreur partenaire régulier. Le suivi SAV de proximité est un atout majeur en zone rurale.",
    },
    "Occitanie": {
        specificite_geo: "Les installateurs géothermiques d'Occitanie maîtrisent la double compétence chauffage/rafraîchissement grâce au climat méditerranéen. Les artisans de Toulouse sont spécialisés en captage dans les alluvions de la Garonne, ceux de Montpellier en forage dans le calcaire languedocien. Les installateurs de la côte proposent des PAC réversibles avec plancher chauffant-rafraîchissant.",
        tendance: "La demande de PAC réversibles attire des installateurs climaticiens (air conditionné) vers la géothermie. Vérifiez que l'artisan possède bien la certification QualiPAC géothermique (pas seulement aérothermique). Les installateurs les plus sérieux proposent une mise en service en deux temps : chauffage + rafraîchissement.",
        marche: "Les installateurs se concentrent autour de Toulouse et Montpellier. En zone rurale, les délais d'intervention SAV peuvent atteindre 48-72h. Négociez un délai d'intervention contractuel. Les artisans locaux offrent un meilleur suivi de proximité que les réseaux nationaux dans les zones éloignées.",
    },
    "Hauts-De-France": {
        specificite_geo: "Les Hauts-de-France disposent d'un réseau d'installateurs en forte croissance, avec des artisans spécialisés en forage dans les sols crayeux de Picardie. Les foreurs locaux maîtrisent la technique d'aquathermie sur nappe de la craie, particulièrement développée dans la région. Les installateurs des bassins miniers (Nord, Pas-de-Calais) ont une expertise spécifique en rénovation de maisons anciennes.",
        tendance: "Le marché nordiste attire de nombreux nouveaux installateurs (+35%/an). La facilité de forage en craie abaisse la barrière d'entrée pour les foreurs. Conséquence : grande diversité de qualité entre artisans. Soyez particulièrement vigilant sur les certifications (QualiPAC valide, décennale en cours) et les références terrain.",
        marche: "Un marché concurrentiel avec des prix compétitifs. La qualité varie fortement : demandez systématiquement les certificats RGE et les références. Les installateurs historiques (10+ ans d'expérience) sont les plus fiables. Les réseaux de marques offrent un gage de qualité et de SAV structuré.",
    },
    "Provence-Alpes-Côte D'azur": {
        specificite_geo: "En PACA, les installateurs doivent maîtriser trois compétences clés : le forage en sol rocheux (calcaire, schiste), la PAC réversible pour le géocooling, et le dimensionnement adapté au climat méditerranéen. Les artisans de la Côte d'Azur sont les plus expérimentés en PAC réversibles. Les installateurs des Alpes maîtrisent les PAC haute température pour les chalets et maisons de montagne.",
        tendance: "La demande de géocooling tire le marché vers des installateurs haut de gamme proposant des solutions premium (PAC silencieuses, plancher rafraîchissant, monitoring connecté). Les marques Daikin et Viessmann sont très implantées. Attention au surcoût de main-d'œuvre azuréenne : comparez avec des artisans de l'arrière-pays.",
        marche: "Marché premium avec des artisans qualifiés. Les critères de choix : expérience en PAC réversible (pas seulement chauffage), maîtrise du forage en sol rocheux, et SAV réactif (intervention sous 24-48h). Les installateurs des grandes villes (Nice, Marseille, Aix) proposent des contrats de maintenance tout inclus.",
    },
    "Grand Est": {
        specificite_geo: "Le Grand Est dispose du réseau d'installateurs le plus expérimenté de France grâce à la tradition alsacienne de la géothermie. Les artisans alsaciens maîtrisent parfaitement l'aquathermie sur nappe rhénane et travaillent avec des marques allemandes réputées (Viessmann, Vaillant, Stiebel Eltron). En Lorraine et Champagne, les installateurs sont spécialisés en forage dans les sols calcaires et crayeux.",
        tendance: "L'Alsace est la référence nationale en qualité d'installation géothermique. Les artisans bénéficient de formations continues dispensées par les fabricants allemands. Le standard de qualité alsacien (étude thermique systématique, cimentation certifiée, test de performance) devrait être le modèle pour toute la France. La Lorraine monte en compétence rapidement.",
        marche: "Marché le plus mature de France avec des artisans d'excellent niveau. Les installateurs alsaciens sont les plus recommandés par les clients satisfaits (taux de satisfaction >90%). En Lorraine, le marché est plus jeune mais dynamique. Demandez des références de chantiers réalisés sur votre type de sol (nappe rhénane, calcaire, ou granite).",
    },
    "Pays De La Loire": {
        specificite_geo: "Les installateurs ligériens sont reconnus pour leur expertise en captage horizontal, très développé dans la région grâce à la disponibilité foncière. Les artisans locaux maîtrisent les sols sédimentaires et proposent des installations fiables avec un bon suivi de proximité. Le réseau d'installateurs est concentré autour de Nantes et Angers.",
        tendance: "Le marché est porté par la métropole nantaise qui attire des installateurs de toute la région. Les artisans développent une double compétence captage horizontal + vertical pour répondre à tous les profils de terrain. La qualité est globalement bonne avec des installateurs stables et expérimentés.",
        marche: "Un marché équilibré avec des artisans de bon niveau. Les installateurs nantais proposent des forfaits complets incluant forage, PAC, raccordements et 3 ans de maintenance. En zone rurale, les artisans locaux offrent un suivi de proximité appréciable mais un SAV parfois plus lent (48-72h).",
    },
    "Bretagne": {
        specificite_geo: "Les installateurs bretons développent une expertise pointue en forage dans le socle granitique, le sol le plus difficile de France. Les foreurs bretons utilisent des marteaux fond de trou haute énergie adaptés au granite. Cette spécialisation est un gage de qualité : un artisan qui maîtrise le granite sait forer dans n'importe quel sol. Les installateurs des côtes maîtrisent les contraintes littorales (salinité, érosion).",
        tendance: "La Bretagne rattrape son retard avec l'arrivée de nouveaux installateurs (+35%/an). Les artisans historiques, formés au granite breton, sont les plus fiables. Les nouveaux entrants doivent être vérifiés avec attention : exigez des références de forage en granit. Les réseaux de marques (NIBE, Viessmann) forment les artisans aux spécificités bretonnes.",
        marche: "Marché en forte croissance avec un mix de qualité. Les artisans spécialisés en forage granitique sont rares et précieux — leur carnet de commandes est chargé (3-4 mois d'attente). Réservez tôt et vérifiez la spécialisation. Les installateurs du littoral proposent des protections anti-corrosion adaptées.",
    },
    "Normandie": {
        specificite_geo: "Les installateurs normands sont spécialisés en forage dans les sols crayeux, parmi les plus faciles de France. Cette facilité de forage attire de nombreux artisans, ce qui maintient un marché concurrentiel avec des prix compétitifs. Les installateurs ruraux (Calvados, Orne, Manche) offrent un service de proximité pour les maisons individuelles chauffées au fioul.",
        tendance: "Le marché normand est en progression avec l'arrivée de nouveaux installateurs. La facilité de forage en craie abaisse la barrière d'entrée, ce qui impose une vigilance accrue sur les qualifications. Vérifiez systématiquement la certification QualiPAC et l'assurance décennale spécifique aux forages.",
        marche: "Marché concurrentiel avec des prix attractifs. Les installateurs historiques (artisans chauffagistes reconvertis depuis 5+ ans) offrent la meilleure garantie de qualité. Le SAV de proximité est un atout fort en zone rurale normande.",
    },
    "Bourgogne-Franche-Comté": {
        specificite_geo: "Les installateurs de Bourgogne-Franche-Comté sont habitués à des conditions géologiques variées (alluvions de la Saône, calcaires bourguignons, granites du Morvan). Cette polyvalence est un gage de compétence. Les artisans jurassiens maîtrisent les installations en altitude avec PAC haute température. Les installateurs de la Saône sont spécialisés en aquathermie sur nappe alluviale.",
        tendance: "Le marché est qualitatif avec des installateurs expérimentés et stables. Les artisans de la région ont une réputation de sérieux et de fiabilité. Les PAC haute température (65°C) pour les maisons anciennes bourguignonnes sont une spécialité régionale. Le SAV est réactif grâce à la taille humaine des entreprises.",
        marche: "Un marché de confiance avec des artisans qui connaissent parfaitement le terrain. Les références locales sont faciles à vérifier (petites communes, bouche-à-oreille fiable). Les contrats de maintenance sont proposés à des tarifs compétitifs (150-250€/an).",
    },
    "Centre-Val De Loire": {
        specificite_geo: "Les installateurs du Centre-Val de Loire ont développé une expertise unique en aquathermie sur nappe de Beauce. Les foreurs locaux maîtrisent le forage peu profond (10-30 m) dans les sols calcaires, la technique la plus simple et la plus fiable de la géothermie. Les artisans de Tours et Orléans sont les plus spécialisés.",
        tendance: "L'aquathermie sur nappe de Beauce attire des installateurs de toute la France pour se former aux techniques régionales. Les artisans locaux restent les plus compétents grâce à leur connaissance du terrain. La tendance est aux installations clé en main avec monitoring connecté.",
        marche: "Marché spécialisé avec des artisans de haut niveau en aquathermie. Les installateurs locaux proposent des garanties de performance (SCOP contractuel) grâce à la fiabilité de la nappe de Beauce. Le SAV est excellent avec des délais d'intervention courts (24h dans les zones denses).",
    },
    "Corse": {
        specificite_geo: "En Corse, le réseau d'installateurs géothermiques est restreint : moins de 10 entreprises certifiées RGE interviennent sur l'île. Les artisans corses doivent gérer les contraintes insulaires (transport maritime des équipements, rareté des pièces détachées). Les installateurs de la Plaine orientale maîtrisent les conditions les plus favorables (sols alluviaux).",
        tendance: "Le marché corse est émergent avec un potentiel de croissance important. Les artisans se forment progressivement à la géothermie. L'insularité impose un suivi SAV anticipé (stock de pièces détachées sur l'île). Privilégiez les installateurs ayant un partenariat avec un fabricant disposant d'un stock en Corse ou en PACA.",
        marche: "Marché contraint avec peu de concurrence. Le choix de l'installateur est limité mais les artisans présents sont motivés et investissent dans la formation. Exigez un contrat de maintenance incluant un stock de pièces détachées sur l'île pour éviter les délais de réparation liés au transport maritime (1-2 semaines).",
    },
};

export interface RegionContent {
    specificite_geo: string;
    tendance: string;
    marche: string;
}
