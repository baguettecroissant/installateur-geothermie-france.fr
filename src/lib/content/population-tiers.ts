// Population tiers — 5 niveaux avec contenu adapté "installateur géothermie"
// Angle éditorial : artisans RGE, qualité chantier, SAV, certification, confiance
// XS (<2000), S (2000-10000), M (10000-50000), L (50000-200000), XL (>200000)

export type PopTier = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface PopTierContent {
    tier: PopTier;
    label: string;
    intro: string;
    cas_usage: string;
    conseil_pratique: string;
    logistique: string;
    budget_contexte: string;
    checklist_items: string[];
    marques_recommandees: string[];
}

export function getPopTier(population?: number): PopTier {
    if (population === undefined || population === null || population === 0) return 'S';
    if (population < 2000) return 'XS';
    if (population < 10000) return 'S';
    if (population < 50000) return 'M';
    if (population < 200000) return 'L';
    return 'XL';
}

export const populationTiers: Record<PopTier, PopTierContent> = {
    XS: {
        tier: 'XS',
        label: 'commune rurale',
        intro: `En commune rurale, trouver un installateur géothermique qualifié demande une démarche proactive : le réseau d'artisans RGE est moins dense qu'en zone urbaine, et les entreprises spécialisées interviennent dans un rayon de 30 à 60 km. L'avantage : les installateurs ruraux sont souvent des artisans de proximité, ancrés dans le tissu local depuis des années, avec une connaissance approfondie du sous-sol et des conditions de forage de votre secteur. Ils assurent un suivi personnalisé et une réactivité de dépannage que les grandes structures ne peuvent pas offrir.`,
        cas_usage: `Profils d'artisans intervenant en zone rurale : artisan chauffagiste RGE QualiPAC avec partenariat foreur local (le binôme le plus courant), entreprise de forage certifiée avec équipe d'installation intégrée (solution clé en main), et installateur multi-énergies proposant géothermie + solaire + bois. En commune rurale, privilégiez les entreprises ayant réalisé au moins 5 chantiers géothermiques dans un rayon de 30 km autour de chez vous.`,
        conseil_pratique: `Pour identifier les meilleurs installateurs en zone rurale, consultez l'annuaire France Rénov' (france-renov.gouv.fr), vérifiez la certification RGE QualiPAC sur qualit-enr.org, et demandez des références de chantiers locaux. Un bon installateur rural accepte toujours de vous montrer un chantier réalisé dans votre commune ou les communes voisines. Méfiez-vous des démarcheurs téléphoniques : un artisan sérieux ne pratique jamais le démarchage agressif.`,
        logistique: `L'installateur rural intervient généralement avec un foreur partenaire qu'il connaît et avec lequel il a l'habitude de travailler. Cette coordination rodée est un gage de qualité : le chauffagiste dimensionne la PAC, le foreur exécute le captage, puis le chauffagiste raccorde et met en service. Le délai d'intervention moyen est de 2 à 4 mois (plus long qu'en ville en raison des carnets de commandes chargés). Prévoyez une visite technique préalable (gratuite chez les artisans sérieux).`,
        budget_contexte: `les artisans ruraux proposent des tarifs de main-d'œuvre 10 à 15% inférieurs aux grandes entreprises urbaines. Le coût de la visite technique et du déplacement est généralement inclus dans le devis final. Le suivi de proximité et la réactivité de dépannage sont des avantages compétitifs majeurs.`,
        checklist_items: [
            "Rechercher les installateurs RGE QualiPAC sur l'annuaire officiel france-renov.gouv.fr",
            "Vérifier la validité de la certification RGE sur qualit-enr.org (numéro de certificat sur le devis)",
            "Demander les références locales : au moins 3 chantiers géothermiques réalisés dans votre secteur",
            "Exiger la copie de l'assurance décennale couvrant spécifiquement les travaux de géothermie",
            "Vérifier que l'installateur travaille avec un foreur certifié QualiForage",
            "Demander un devis détaillé avec le planning d'intervention (visite, forage, installation, mise en service)",
            "Confirmer les conditions de garantie : PAC (2-5 ans constructeur), installation (10 ans décennale)",
            "S'assurer qu'un contrat de maintenance annuel est proposé (150 à 250€/an en zone rurale)",
        ],
        marques_recommandees: ["viessmann", "nibe", "atlantic", "stiebel-eltron"],
    },
    S: {
        tier: 'S',
        label: 'bourg ou petite ville',
        intro: `Dans les petites villes, le réseau d'installateurs géothermiques RGE est suffisamment étoffé pour obtenir plusieurs devis comparatifs. Deux à cinq entreprises spécialisées interviennent dans un rayon de 20 à 40 km. Ces artisans — souvent des chauffagistes ayant élargi leur expertise à la géothermie — connaissent les spécificités du bâti local (pavillons des années 70-90, constructions neuves en lotissement) et disposent de partenariats établis avec des foreurs régionaux. Le bouche-à-oreille est un excellent indicateur : demandez à vos voisins qui a réalisé leur installation.`,
        cas_usage: `Types d'installateurs disponibles : artisan chauffagiste indépendant certifié QualiPAC (tarifs compétitifs, service personnalisé), entreprise de génie climatique locale avec équipe de 5 à 15 personnes (capacité de gestion de projet plus structurée), et installateur agréé par un fabricant (Viessmann Partner, NIBE Pro) offrant des garanties étendues. Chaque profil a ses avantages — l'essentiel est la certification RGE et l'expérience terrain en géothermie.`,
        conseil_pratique: `Pour comparer les installateurs en petite ville, allez au-delà du prix : évaluez la qualité de l'étude thermique préalable (un devis sans dimensionnement détaillé est un mauvais signe), le sérieux du suivi de chantier (un seul interlocuteur de A à Z), la réactivité du SAV (délai d'intervention garanti contractuellement), et la transparence sur les sous-traitants (nom du foreur, nom du fluorigène). Un bon installateur répond à toutes vos questions sans hésitation.`,
        logistique: `En petite ville, l'installateur gère l'intégralité du projet : visite technique (1h, gratuite), étude thermique et dimensionnement (2-3 jours), coordination du foreur (planification commune), suivi du chantier de forage (présence sur site), installation de la PAC et raccordements (2-3 jours), mise en service et réglages (demi-journée). Le délai moyen entre le devis signé et la mise en service est de 2 à 3 mois.`,
        budget_contexte: `les tarifs de main-d'œuvre sont dans la moyenne nationale. La concurrence entre 3 à 5 installateurs locaux assure des prix justes. Comparez les devis sur la base du coût total "clé en main" incluant forage, PAC, raccordements, mise en service et première année de maintenance.`,
        checklist_items: [
            "Identifier 3 à 5 installateurs RGE QualiPAC dans un rayon de 40 km via france-renov.gouv.fr",
            "Vérifier les avis clients sur Google, Pages Jaunes et forums spécialisés (ForumConstruire, etc.)",
            "Demander la liste des chantiers géothermiques réalisés avec photos et contacts clients",
            "Exiger une étude thermique complète AVANT le devis (un devis sans étude est un devis au hasard)",
            "Vérifier l'assurance décennale ET l'assurance responsabilité civile professionnelle",
            "Comparer les devis ligne par ligne : forage, PAC (marque/modèle), raccordements, mise en service",
            "Négocier un contrat de maintenance tout inclus sur 3 à 5 ans (meilleur rapport qualité-prix)",
            "S'assurer que l'installateur propose une garantie de performance (SCOP contractuel)",
        ],
        marques_recommandees: ["viessmann", "nibe", "vaillant", "atlantic"],
    },
    M: {
        tier: 'M',
        label: 'ville moyenne',
        intro: `En ville moyenne, le marché des installateurs géothermiques est le plus concurrentiel de France. Cinq à quinze entreprises certifiées RGE interviennent dans votre périmètre, allant de l'artisan indépendant au réseau national (ENGIE Home Services, Effy, Hellio). Cette concurrence joue en votre faveur : vous pouvez comparer les approches techniques, les marques proposées, les garanties offertes et les services après-vente. Les installateurs en ville moyenne ont une expérience variée (pavillons, maisons de ville, petits collectifs) et maîtrisent les différentes technologies de captage.`,
        cas_usage: `Catégories d'installateurs : artisan chauffagiste QualiPAC spécialisé géothermie (10-15 chantiers/an, service premium), entreprise de génie climatique multi-sites (20-50 chantiers/an, prix négociables), installateur agréé fabricant avec stock local de pièces détachées, et bureau d'études thermiques avec réseau d'artisans partenaires. En ville moyenne, vous avez accès à toutes ces catégories — comparez leurs points forts.`,
        conseil_pratique: `En ville moyenne, les installateurs les plus sérieux se différencient par trois critères décisifs : 1) La visite technique approfondie (analyse du bâti, relevé cadastral, diagnostic du réseau hydraulique existant) — comptez 1h30 à 2h pour une visite sérieuse. 2) L'étude thermique certifiée (simulation logicielle, pas un simple calcul Excel). 3) L'engagement de performance contractuel (SCOP garanti, pénalités en cas de sous-performance). Fuyez les devis envoyés sans visite préalable.`,
        logistique: `L'installateur en ville moyenne coordonne un chantier de 4 à 6 jours : J1-J2 forage (sous-traité au foreur partenaire mais supervisé), J3-J4 installation PAC et raccordements hydrauliques, J5 raccordements électriques et programmation, J6 mise en service et formation utilisateur. Un interlocuteur unique gère l'ensemble. Le délai entre la signature du devis et le début du chantier est de 6 à 12 semaines (haute saison) ou 3 à 6 semaines (basse saison).`,
        budget_contexte: `la concurrence entre installateurs maintient des tarifs de main-d'œuvre compétitifs. Négociez le contrat de maintenance sur la durée (forfait 3 ou 5 ans) et les conditions de garantie étendues. Certains installateurs proposent des "packs all-inclusive" incluant PAC, forage, raccordements, mise en service et 3 ans de maintenance.`,
        checklist_items: [
            "Établir une shortlist de 5 installateurs RGE via france-renov.gouv.fr et les avis en ligne",
            "Organiser des visites techniques avec 3 installateurs minimum (gratuit chez les professionnels sérieux)",
            "Exiger une étude thermique certifiée avec simulation logicielle (pas un simple tableur)",
            "Vérifier la certification QualiPAC et l'expérience spécifique en géothermie (≥ 10 chantiers)",
            "Comparer les marques de PAC proposées : SCOP certifié, garantie constructeur, disponibilité SAV",
            "Négocier un engagement de performance contractuel (SCOP garanti par l'installateur)",
            "Demander les conditions de garantie étendues : 5 ans sur le compresseur, 10 ans décennale",
            "Vérifier le délai d'intervention SAV contractuel (24h ouvré = standard, 48h = acceptable)",
        ],
        marques_recommandees: ["viessmann", "vaillant", "nibe", "daikin", "atlantic"],
    },
    L: {
        tier: 'L',
        label: 'grande ville',
        intro: `En grande ville, le réseau d'installateurs géothermiques RGE est dense et diversifié : artisans spécialisés, entreprises de génie climatique, filiales de grands groupes (ENGIE, Daikin, Viessmann), et bureaux d'études avec réseau d'artisans partenaires. L'enjeu principal est de trouver un professionnel expérimenté en milieu urbain, capable de gérer les contraintes spécifiques : accès restreint, forage en site confiné, coordination avec la voirie, relations de voisinage et autorisations administratives. Un installateur généraliste qui "fait aussi de la géothermie" n'a pas cette expertise.`,
        cas_usage: `Profils d'installateurs adaptés au milieu urbain : entreprise spécialisée en forage urbain avec foreuse compacte (expertise rare et précieuse), installateur agréé par un fabricant premium avec SAV intégré (idéal pour les maisons de ville), bureau d'études en maîtrise d'œuvre coordonnant foreur et chauffagiste (recommandé pour les projets complexes > 30 000€), et entreprise de géothermie collective pour les copropriétés (compétence en réseau basse température).`,
        conseil_pratique: `En grande ville, le critère n°1 pour choisir votre installateur est son expérience en milieu urbain. Posez ces questions : combien de forages avez-vous réalisés en site confiné ? Utilisez-vous une foreuse compacte ou classique ? Comment gérez-vous les autorisations de voirie ? Avez-vous des photos de chantiers en maison de ville ? Un artisan qui hésite ou qui n'a que des références en zone pavillonnaire n'est pas le bon interlocuteur pour votre projet urbain.`,
        logistique: `En grande ville, l'installateur doit maîtriser la coordination urbaine : obtention de l'autorisation de voirie (délai 2-4 semaines), planification du créneau de forage (horaires réglementés 7h-19h), protection du voisinage (panneaux, bâches anti-bruit), gestion des boues en filière agréée, et remise en état du terrain après chantier. Le chantier complet dure 5 à 8 jours. Les installateurs expérimentés proposent un "protocole de voisinage" incluant l'information des riverains avant le début des travaux.`,
        budget_contexte: `les tarifs de main-d'œuvre sont supérieurs de 10 à 20% à la moyenne nationale. En contrepartie, les installateurs urbains proposent des garanties étendues et un SAV réactif (intervention sous 24-48h). Négociez un forfait "clé en main" incluant toutes les prestations urbaines spécifiques (voirie, bruit, boues, remise en état).`,
        checklist_items: [
            "Cibler exclusivement les installateurs ayant une expérience documentée en forage urbain",
            "Vérifier que l'installateur dispose d'une foreuse compacte adaptée aux sites contraints",
            "Demander les références de chantiers réalisés en milieu urbain dense avec contacts clients",
            "Exiger un devis incluant toutes les prestations urbaines : voirie, bruit, boues, remise en état",
            "Vérifier l'assurance décennale couvrant spécifiquement les forages en milieu urbain",
            "S'assurer que l'installateur gère les autorisations administratives (voirie, DREAL, mairie)",
            "Négocier un contrat de maintenance avec délai d'intervention garanti sous 24h",
            "Demander le protocole de gestion du voisinage (information, protection, créneau horaire)",
        ],
        marques_recommandees: ["viessmann", "vaillant", "nibe", "daikin", "stiebel-eltron", "atlantic"],
    },
    XL: {
        tier: 'XL',
        label: 'métropole',
        intro: `En métropole, le choix de l'installateur géothermique est un facteur décisif de réussite — plus encore qu'en zone rurale ou périurbaine. Les contraintes métropolitaines (forage en site ultra-confiné, réglementations strictes, copropriétés, logistique complexe) exigent un niveau d'expertise que seules les entreprises spécialisées possèdent. Ne confiez pas votre projet à un chauffagiste généraliste : ciblez les entreprises dont le cœur de métier est la géothermie, avec au minimum 20 chantiers urbains à leur actif et une foreuse compacte dans leur parc matériel.`,
        cas_usage: `Catégories d'installateurs métropolitains : bureau d'études en géothermie avec réseau d'artisans certifiés (maîtrise d'œuvre complète, recommandé pour les projets > 30 000€), entreprise de forage géothermique avec équipe d'installation intégrée (solution clé en main, rare mais idéale), installateur agréé premium (Viessmann Excellence, NIBE Partner) avec SAV national (réactivité garantie), et société de géothermie collective pour copropriétés et promoteurs (expertise réseau de chaleur).`,
        conseil_pratique: `En métropole, exigez trois documents avant de signer : 1) L'attestation RGE QualiPAC en cours de validité (vérifiable sur qualit-enr.org), 2) L'attestation d'assurance décennale avec mention explicite "forage géothermique et installation PAC" (pas de clause d'exclusion), 3) Un portfolio de 5 chantiers urbains documentés avec photos et témoignages clients. Un installateur qui refuse de fournir ces documents n'est pas digne de confiance.`,
        logistique: `En métropole, l'installateur doit orchestrer une logistique complexe : coordination avec les services de voirie (délai 3-6 semaines pour l'arrêté), location de foreuse ultra-compacte (certaines rues ne permettent que des machines de 2 m de largeur), protection acoustique renforcée (mesure de bruit avant/après), gestion des boues en filière ICPE, constat d'huissier (protection façades voisines), et remise en état certifiée du terrain. Seuls les installateurs expérimentés en métropole gèrent cette chaîne logistique sans retard.`,
        budget_contexte: `les tarifs sont les plus élevés de France (+15 à 30% vs moyenne nationale) mais correspondent à un niveau de service et d'expertise supérieur. L'installateur métropolitain offre : une coordination administrative complète, un suivi de chantier quotidien, un SAV sous 24h, et une garantie de performance contractuelle. Comparez le "coût global de possession" sur 15 ans, pas seulement le prix d'installation.`,
        checklist_items: [
            "Cibler exclusivement les installateurs spécialisés géothermie avec ≥ 20 chantiers urbains documentés",
            "Vérifier le portfolio : photos de chantiers en milieu dense, témoignages clients vérifiables",
            "Exiger les 3 documents obligatoires : RGE QualiPAC, décennale géothermie, références urbaines",
            "S'assurer que l'installateur possède une foreuse compacte ou un partenariat foreur urbain exclusif",
            "Demander un contrat clé en main incluant toutes les prestations (voirie, bruit, boues, huissier)",
            "Négocier un engagement de performance contractuel : SCOP garanti, pénalités en cas de non-atteinte",
            "Exiger un contrat de maintenance premium avec intervention garantie sous 24h ouvré",
            "En copropriété : vérifier l'expérience en géothermie collective et en gestion de syndic",
        ],
        marques_recommandees: ["viessmann", "vaillant", "nibe", "daikin", "stiebel-eltron", "atlantic"],
    },
};
