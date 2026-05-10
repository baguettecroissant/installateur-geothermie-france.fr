export interface Guide {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  readTime: string;
  sections: { title: string; content: string; tip?: string }[];
  tableData?: { label: string; values: string[] }[];
  faq?: { question: string; answer: string }[];
}

export const guides: Guide[] = [
  {
    "slug": "choisir-installateur-rge",
    "title": "Comment choisir le bon installateur géothermique RGE QualiPAC ?",
    "description": "Ne confiez pas 25 000€ au premier venu. Les 5 critères intraitables pour sélectionner une entreprise de géothermie fiable et certifiée.",
    "heroImage": "/images/guides/choisir-rge.png",
    "readTime": "11 min",
    "sections": [
      {
        "title": "Le Graal absolu : La double certification RGE",
        "content": "L'installation d'une géothermie n'est pas un métier, c'est l'association de trois métiers complexes : chauffagiste/frigoriste, terrassier et foreur professionnel.\n\nPour que vous puissiez toucher les aides de l'État (MaPrimeRénov' et CEE), l'entreprise (ou le groupement d'entreprises) qui vous facture doit impérativement posséder :\n1. **Le label RGE QualiPAC** : Qui prouve la compétence de l'entreprise à dimensionner et installer la pompe à chaleur (le module hydraulique intérieur).\n2. **Le label RGE QualiForage** (si capteurs verticaux) : Qui atteste que le foreur respecte la norme NF X10-970 (cimentation, protection des nappes).\n\nSi le chauffagiste sous-traite le forage, le sous-traitant DOIT lui aussi être RGE QualiForage. Exigez de voir les certificats à jour (vérifiables sur l'annuaire France Rénov').",
        "tip": "Méfiez-vous des devis où le forage est 'à votre charge' ou 'facturé à part' par une entreprise que le plombier vous recommande à l'oral. Le devis doit être global ou clairement co-traitant pour garantir les aides."
      },
      {
        "title": "L'importance du bureau d'études interne",
        "content": "Une entreprise de géothermie sérieuse ne vend pas 'un modèle sur catalogue'. Elle vend un système de chauffage sur-mesure. \nLes meilleurs installateurs possèdent un bureau d'études thermique en interne (ou travaillent avec un partenaire exclusif). Ils doivent vous fournir :\n- Le calcul précis des déperditions de votre maison pièce par pièce.\n- Une étude géologique de préfaisabilité (analyse des sols du BRGM).\n- Le dimensionnement du capteur (profondeur en mètres linéaires ou surface de décaissement) justifié par une note de calcul.\n\nFuyez l'artisan qui vous fait un devis en 10 minutes sur un coin de table en regardant simplement la surface de votre maison."
      },
      {
        "title": "Vérifier la santé financière de l'entreprise",
        "content": "Un chantier géothermique implique de verser un acompte important (souvent 30%, soit près de 8 000€). C'est un risque majeur si l'entreprise fait faillite avant le début des travaux.\n\nAvant de signer :\n- Vérifiez les statuts de l'entreprise sur Societe.com ou Pappers.fr. Évitez les entreprises créées il y a moins de 2 ans.\n- Regardez le capital social : une entreprise qui manipule des foreuses de plusieurs centaines de milliers d'euros n'a généralement pas un capital social de 1 000€.\n- Demandez l'attestation d'assurance Décennale ET vérifiez auprès de l'assureur (numéro de téléphone sur l'attestation) que les primes sont bien payées et que le 'Forage Géothermique' est explicitement couvert."
      },
      {
        "title": "La proximité géographique : Un critère vital",
        "content": "Ne choisissez pas une entreprise située à 300 kilomètres, même si son devis est moins cher de 1 000€.\nEn cas de panne en plein mois de janvier (carte mère grillée, fuite sur le réseau primaire), vous avez besoin d'une intervention rapide. \nUn installateur local (moins de 50 km) a une réputation locale à défendre et sera beaucoup plus réactif pour le SAV. De plus, il connaît parfaitement la géologie de votre département, évitant ainsi les mauvaises surprises lors du forage."
      }
    ],
    "faq": [
      {
        "question": "L'installateur doit-il avoir l'attestation de capacité fluides frigorigènes ?",
        "answer": "Absolument. Si l'installation nécessite la manipulation de fluides frigorigènes (notamment sur certaines PAC en relève ou pour les capteurs à détente directe), le technicien qui effectue la mise en service doit posséder cette attestation réglementaire. Demandez-la."
      },
      {
        "question": "Faut-il payer le devis d'installation ?",
        "answer": "Non. Un devis classique avec étude thermique simplifiée doit être gratuit. En revanche, si l'installateur doit faire intervenir un cabinet géologique pour une étude de faisabilité complexe (Zone Orange ou Rouge), cette étude préalable est souvent facturée (entre 500 et 1000€), puis déduite du devis final si vous signez."
      }
    ]
  },
  {
    "slug": "comparer-devis-geothermie",
    "title": "Comment décrypter et comparer 3 devis de Géothermie",
    "description": "Ne regardez pas que le prix final. Lignes cachées, marques de PAC, profondeur de forage... Voici comment comparer des pommes avec des pommes.",
    "heroImage": "/images/guides/comparer-devis.png",
    "readTime": "12 min",
    "sections": [
      {
        "title": "Ligne de mire 1 : La PAC (Marque, Puissance, COP)",
        "content": "La pompe à chaleur est le cœur de l'installation. Sur vos trois devis, vérifiez :\n- **La marque** : Viessmann, Nibe, Lemasson, Vaillant, Waterkotte sont les références premium (haute fiabilité, SAV solide). Évitez les marques obscures ou rebadgées sans réseau de pièces détachées.\n- **La puissance thermique nominale (ex: 12 kW)** : Si le devis A propose 8 kW et le devis B propose 14 kW pour la même maison, il y a un problème. L'un des deux a mal fait son étude thermique. Demandez-leur leurs notes de calcul.\n- **L'ETAs ou SCOP** : Assurez-vous que l'Efficacité Énergétique Saisonnière (ETAs) est bien spécifiée (ex: 185%). C'est indispensable pour MaPrimeRénov'."
      },
      {
        "title": "Ligne de mire 2 : Le poste Forage (Le nerf de la guerre)",
        "content": "C'est ici que les devis varient du simple au double. Regardez à la loupe :\n- **La profondeur facturée (en mètres linéaires)** : Devis A propose 2 x 70m. Devis B propose 1 x 110m. Si le devis C propose seulement 1 x 60m pour la même PAC, il sous-dimensionne le capteur pour être moins cher ! Le rendement va s'effondrer au bout de 3 ans.\n- **La technique et l'aléa géologique** : Le devis indique-t-il 'forage au Rotary' ? Que se passe-t-il s'il trouve du granit dur ? Y a-t-il une ligne 'supplément marteau fond de trou' qui risque de faire exploser la facture finale ? Privilégiez les devis 'forfaitaires' où le foreur assume le risque.\n- **La gestion des boues** : L'évacuation des déblais (boues de forage) coûte très cher. Le devis doit préciser si l'évacuation en décharge agréée est incluse, ou si la boue est laissée sur votre terrain."
      },
      {
        "title": "Ligne de mire 3 : La Chaufferie et le raccordement",
        "content": "La PAC a besoin d'accessoires cruciaux pour bien fonctionner et durer :\n- **Le Ballon Tampon** : Indispensable en géothermie pour éviter les courts-cycles (le compresseur s'allume et s'éteint sans arrêt, ce qui le détruit). Un devis sans ballon tampon est moins cher, mais c'est une hérésie technique (sauf PAC inverter sur grand plancher chauffant).\n- **Le Ballon d'ECS (Eau Chaude Sanitaire)** : Est-il inclus ? En acier émaillé ou en inox ?\n- **Le désembouage du réseau existant** : Brancher une géothermie neuve à 25k€ sur un vieux réseau de radiateurs plein de boues d'oxydation va boucher l'échangeur de la PAC en 6 mois. Le désembouage hydrodynamique du circuit doit OBLIGATOIREMENT figurer sur le devis (souvent entre 500 et 800€)."
      },
      {
        "title": "Ligne de mire 4 : Les 'à-côtés' administratifs",
        "content": "Un devis 'clés en main' de la part d'un bon professionnel inclut généralement :\n- La déclaration préalable DREAL (Code minier).\n- Le montage des dossiers d'aides (MaPrimeRénov, CEE) en tant que mandataire.\n- La première année d'entretien offerte.\nSi l'artisan vous laisse vous débrouiller seul avec l'administration, c'est un point noir majeur."
      }
    ],
    "faq": [
      {
        "question": "Dois-je toujours choisir le devis du milieu ?",
        "answer": "Pas forcément. Un devis nettement plus cher (+20%) peut se justifier s'il propose une PAC premium (ex: Nibe) avec une garantie étendue (7 à 10 ans pièces, main d'œuvre et déplacement) et un forage surdimensionné garantissant un rendement exceptionnel à vie. Le prix bas cache toujours une économie (sur la profondeur du forage, la qualité des tubes ou le SAV)."
      }
    ]
  },
  {
    "slug": "etapes-installation-pac",
    "title": "Chantier Géothermique : Le déroulement de A à Z",
    "description": "De l'arrivée des pelleteuses à la remise des clés. Découvrez les grandes étapes d'un chantier géothermique pour vous préparer sans stress.",
    "heroImage": "/images/guides/etapes-installation.png",
    "readTime": "10 min",
    "sections": [
      {
        "title": "Étape 1 : Préparation et Autorisations (Semaine 1 à 4)",
        "content": "Bien avant que le premier coup de pelle ne soit donné, le chantier est administratif.\n- **J-30** : Le foreur dépose la Déclaration d'Ouvrage Souterrain (GMI) auprès de la DREAL. Le délai de carence est généralement d'un mois en Zone Verte.\n- **J-15** : Visite technique préalable sur site. Le chef de chantier valide l'accès pour la foreuse (largeur portail, dévers), l'emplacement exact des forages (respect des distances réglementaires : 3m des limites de propriété, 2m des fondations) et la zone de stockage des boues."
      },
      {
        "title": "Étape 2 : Le Forage (La phase impressionnante) (Jours 1 à 3)",
        "content": "C'est l'étape la plus bruyante et salissante du projet.\n1. **Installation** : La foreuse sur chenilles (3 à 15 tonnes) arrive, suivie d'un puissant compresseur d'air tracté.\n2. **Le perçage** : La machine attaque le sol. Selon la roche, elle avancera de 15 à 40 mètres par jour. Un forage de 100m prend généralement 2 à 3 jours.\n3. **Insertion de la sonde** : Immédiatement après avoir atteint la profondeur requise, les foreurs glissent le tube en PEHD double U dans le trou.\n4. **Cimentation** : C'est l'étape critique (norme NF X10-970). Un coulis thermo-cimentaire est injecté sous pression depuis le fond du trou (via un tube plongeur) jusqu'à ce qu'il déborde à la surface, scellant définitivement la sonde et protégeant les nappes."
      },
      {
        "title": "Étape 3 : Tranchées et raccordement (Jours 4 à 5)",
        "content": "La foreuse repart. Le terrassier prend le relais.\n- Il creuse une tranchée de liaison (généralement à 60-80 cm de profondeur) entre la tête de forage et le mur de la maison (chaufferie).\n- Les tubes géothermiques y sont posés sur un lit de sable, et reliés à un collecteur/distributeur (une nourrice) qui gère les départs/retours.\n- Le circuit souterrain est mis en eau (glycolée), purgé de son air, et subit un test de pression à 6 bars pour vérifier son étanchéité avant d'être remblayé."
      },
      {
        "title": "Étape 4 : La chaufferie et la PAC (Jours 6 à 8)",
        "content": "Pendant ce temps, le chauffagiste travaille à l'intérieur.\n- Démontage et évacuation de l'ancienne chaudière fioul ou gaz.\n- Installation de la nouvelle pompe à chaleur géothermique, du ballon tampon et du ballon d'eau chaude sanitaire (ECS).\n- Raccordement de la PAC au collecteur géothermique extérieur (primaire) et au réseau de radiateurs/plancher chauffant de la maison (secondaire)."
      },
      {
        "title": "Étape 5 : Mise en service et PV de réception",
        "content": "Tout est branché. Le technicien effectue la mise en service (Paramétrage de la courbe de chauffe, vérification des débits, test du compresseur).\nVous signez le Procès-Verbal de réception de travaux. Ce document est capital : il marque le point de départ de vos garanties (biennale et décennale) et vous permet de solder la facture pour déclencher le versement final des aides de l'État."
      }
    ],
    "faq": [
      {
        "question": "Le chantier abîme-t-il beaucoup le jardin ?",
        "answer": "Le forage génère des vibrations et des boues, et les chenilles marquent la pelouse. De plus, la tranchée de liaison éventrera inévitablement une partie du terrain. Un bon foreur protège le sol avec des plaques de roulage, mais prévoyez toujours de devoir semer un peu de gazon au printemps suivant."
      },
      {
        "question": "Vais-je me retrouver sans chauffage pendant les travaux ?",
        "answer": "Les artisans essaient de coordonner les travaux extérieurs avec le maintien de l'ancienne chaudière. Mais la dépose de la chaudière et le raccordement de la PAC exigent généralement 2 à 4 jours de coupure. C'est pourquoi la géothermie s'installe de préférence au printemps ou en été, pas au mois de janvier !"
      }
    ]
  },
  {
    "slug": "arnaques-pompe-a-chaleur-1-euro",
    "title": "Arnaques à la Pompe à Chaleur : Comment repérer les éco-délinquants",
    "description": "Démarchage téléphonique agressif, offres à 1€, contrats cachés. Apprenez à déjouer les pièges des escrocs de la rénovation énergétique.",
    "heroImage": "/images/guides/arnaques-pac.png",
    "readTime": "9 min",
    "sections": [
      {
        "title": "L'illusion de la PAC à 1 euro (Finie depuis 2020)",
        "content": "Soyons clairs : **le dispositif 'Pompe à Chaleur à 1€' a été supprimé par l'État en 2020** en raison des fraudes massives. Si un flyer dans votre boîte aux lettres, une publicité sur Facebook ou un téléconseiller vous propose l'installation d'une pompe à chaleur géothermique (ou même aérothermique) pour 1 euro symbolique ou 'totalement gratuite', c'est une arnaque catégorique.\n\nEn 2026, la réglementation (MaPrimeRénov' + CEE) impose un **reste à charge légal obligatoire d'au moins 10% du montant total du devis**, même pour les ménages les plus modestes (Profil Bleu)."
      },
      {
        "title": "Le piège du crédit caché",
        "content": "Comment les éco-délinquants arrivent-ils à vous promettre des restes à charge à zéro euro aujourd'hui ? Par le crédit affecté maquillé.\n\nLors de la visite (souvent longue, épuisante, le soir), le commercial vous présente un 'dossier d'étude de faisabilité' ou une 'demande préalable pour bloquer les aides'. Il insiste lourdement pour que vous signiez sur sa tablette.\nEn réalité, vous venez de signer électroniquement un devis ET une offre de crédit à la consommation (souvent à des taux frôlant les 6% ou 7%) pour payer la différence non couverte par les aides.\nQuelques jours plus tard, une équipe vient installer à la hâte une PAC bas de gamme, souvent sous-dimensionnée. Le SAV sera inexistant, et vous devrez rembourser un crédit de 15 000€ sur 10 ans pour une machine qui ne chauffe pas la maison."
      },
      {
        "title": "Les 5 signaux d'alerte (Red Flags)",
        "content": "Fuyez immédiatement si vous rencontrez l'une de ces situations :\n1. **Le Démarchage** : Une entreprise de géothermie sérieuse a 6 mois de carnet de commandes. Elle ne fait JAMAIS de démarchage téléphonique (c'est d'ailleurs strictement interdit par la loi depuis 2020 pour la rénovation énergétique) ni de porte-à-porte.\n2. **L'usurpation d'identité de l'État** : Le commercial se présente comme mandaté par 'La Mairie', 'Le Ministère de la Transition' ou 'L'Anah'. C'est illégal. L'État ne mandate aucune entreprise commerciale.\n3. **La pression de l'urgence** : \"Cette prime disparaît à la fin du mois, il faut signer aujourd'hui\". Les barèmes de primes sont fixés par décrets annuels, ils ne disparaissent pas en 24h.\n4. **Pas d'étude thermique** : Vendre une pompe à chaleur géothermique sans étudier vos radiateurs, l'isolation de vos combles et vos factures passées est une faute professionnelle grave.\n5. **Le sous-traitant mystère** : L'entreprise commerciale située à Paris fait signer le contrat, mais envoie des sous-traitants d'Europe de l'Est en camionnette banalisée pour l'installation."
      },
      {
        "title": "Comment se protéger et se rétracter ?",
        "content": "Si vous avez signé à votre domicile (démarchage) ou sur une foire/salon :\n- **À domicile** : La loi Hamon vous accorde un délai de rétractation absolu et sans justification de **14 jours calendaires**. Renvoyez immédiatement le bordereau de rétractation (qui doit obligatoirement être joint au devis) par Lettre Recommandée avec Accusé de Réception (LRAR).\n- **Sur une Foire/Salon** : Attention danger ! Le délai de rétractation de 14 jours NE S'APPLIQUE PAS sur les foires. Ce que vous signez sur un salon est ferme et définitif (sauf exception si l'achat est explicitement financé par un crédit affecté mentionné au contrat)."
      }
    ],
    "faq": [
      {
        "question": "Où signaler une entreprise frauduleuse ?",
        "answer": "Vous pouvez signaler l'entreprise sur la plateforme gouvernementale 'SignalConso' (gérée par la DGCCRF - Répression des fraudes). Si le devis mentionnait frauduleusement le logo RGE, signalez-le également sur l'annuaire France Rénov' pour qu'ils perdent leur qualification."
      }
    ]
  },
  {
    "slug": "garantie-decennale-forage",
    "title": "Garantie Décennale et Assurances en Géothermie : Ce qu'il faut exiger",
    "description": "Un forage perçant une nappe polluée, des tuyaux qui fuient sous terre... Découvrez quelles assurances protègent votre investissement géothermique sur le long terme.",
    "heroImage": "/images/guides/garantie-decennale.png",
    "readTime": "8 min",
    "sections": [
      {
        "title": "La Garantie Décennale : L'obligation absolue",
        "content": "L'installation d'un système de chauffage géothermique complet est considérée par la loi française comme un 'ouvrage' (au même titre que la construction de murs porteurs). \n\nL'entreprise (le plombier ET le foreur) est donc légalement obligée d'être couverte par une **Assurance Responsabilité Civile Décennale**. Cette assurance vous protège pendant **10 ans** après la réception des travaux contre les vices cachés et les malfaçons qui :\n- Compromettent la solidité de l'ouvrage (ex: effondrement du forage).\n- Rendent la maison 'impropre à sa destination' (ex: le système de chauffage est sous-dimensionné et il fait 12°C dans la maison en hiver).\n\nL'attestation de garantie décennale doit obligatoirement être jointe au devis."
      },
      {
        "title": "Le piège de la nomenclature d'assurance",
        "content": "Beaucoup d'installateurs peu scrupuleux fournissent une attestation décennale valide, mais **elle ne couvre que la plomberie classique** !\n\nL'assureur détaille les activités couvertes sur l'attestation. Vous devez impérativement y lire les mentions exactes :\n- Pour le chauffagiste : 'Installation de pompe à chaleur géothermique'.\n- Pour le foreur : 'Travaux de forage vertical géothermique et pose de sondes'.\n\nSi le forage endommage les fondations de votre maison ou pollue une nappe phréatique (sinistre à 100 000€), et que le foreur n'était assuré que pour du 'terrassement paysager', l'assureur refusera de payer. L'artisan fera faillite, et vous supporterez la perte."
      },
      {
        "title": "La Garantie Biennale (Bon fonctionnement)",
        "content": "Complémentaire de la décennale, la garantie de bon fonctionnement couvre pendant **2 ans** tous les équipements 'dissociables' de l'ouvrage (ceux qu'on peut démonter sans casser les murs).\n\nEn géothermie, cela concerne :\n- La pompe à chaleur (le compresseur, la carte électronique).\n- Les circulateurs, les sondes de température, les régulateurs.\n- Le vase d'expansion.\n\nAttention, cette garantie n'est valable que si vous entretenez correctement le matériel. Un défaut d'entretien annuel peut annuler la garantie constructeur."
      },
      {
        "title": "L'Assurance Dommages-Ouvrage (DO) : Est-ce utile ?",
        "content": "La Dommages-Ouvrage est une assurance que VOUS (le maître d'ouvrage) souscrivez. En cas de sinistre décennal (ex: l'installateur refuse d'intervenir ou a fait faillite), la DO vous rembourse immédiatement les réparations, puis se retourne ensuite contre l'assureur de l'artisan. Cela vous évite des années de procédures judiciaires à vivre dans le froid.\n\nEn construction neuve, la DO est obligatoire. En rénovation pure (remplacement de chaudière par géothermie sans modification de structure), elle n'est pas strictement obligatoire, mais fortement recommandée vu l'enjeu financier (un sinistre forage peut coûter extrêmement cher)."
      }
    ],
    "faq": [
      {
        "question": "Que vaut la garantie constructeur de 5 ou 7 ans ?",
        "answer": "Les grandes marques (Viessmann, Nibe) offrent souvent des extensions de garantie jusqu'à 7 ans. C'est un gage de sérénité (couvrant les pièces maîtresses comme le compresseur). Mais attention : ces garanties sont toujours conditionnées à la souscription d'un contrat d'entretien annuel dès la première année."
      }
    ]
  },
  {
    "slug": "bureau-etudes-thermiques",
    "title": "Pourquoi passer par un bureau d'études thermiques indépendant ?",
    "description": "L'audit énergétique est le juge de paix de la rénovation. Pourquoi il est souvent rentable de payer un ingénieur avant de consulter des installateurs.",
    "heroImage": "/images/guides/bureau-etudes.png",
    "readTime": "11 min",
    "sections": [
      {
        "title": "Le conflit d'intérêt de l'installateur",
        "content": "Un installateur sérieux réalisera toujours une étude thermique de votre maison avant de deviser une pompe à chaleur. Mais l'installateur est aussi un vendeur. Il a parfois intérêt financièrement à :\n- Vous vendre la machine la plus puissante (plus chère).\n- Remplacer le système sans évoquer l'isolation des combles (ce n'est pas son métier).\n\nLe bureau d'études thermiques indépendant (BET) est impartial. Il ne vend ni PAC, ni laine de verre. Il vend un diagnostic objectif. Son rôle est de trouver la solution technique la plus rentable pour VOTRE maison, pas pour son chiffre d'affaires."
      },
      {
        "title": "Le calcul précis de la charge thermique (Norme EN 12831)",
        "content": "Un ingénieur thermicien ne calcule pas la puissance de la PAC avec la vieille règle empirique du 'G x Volume de la maison'. Il modélise votre maison en 3D sur un logiciel réglementaire et réalise un calcul pièce par pièce :\n- Composition de chaque mur, plancher et toiture.\n- Type de vitrage et orientation solaire de chaque fenêtre.\n- Type et dimensionnement exact de chaque radiateur de la maison.\n- Zone climatique, altitude, et température de base hivernale (ex: -7°C à Lyon).\n\nLe résultat (ex: 8540 Watts de déperditions à -7°C) permet de dimensionner la géothermie au watt près, évitant le surdimensionnement (qui coûte cher à l'achat et réduit la durée de vie du compresseur) et le sous-dimensionnement (qui vous laissera dans le froid)."
      },
      {
        "title": "La stratégie de Rénovation Globale (BBC)",
        "content": "C'est la vraie force du bureau d'études. Au lieu de simplement remplacer la chaudière, l'ingénieur va simuler des scénarios :\n\n- Scénario 1 : Forage + PAC de 14 kW (Devis à 28 000€, aides 10 000€).\n- Scénario 2 : On rajoute 30cm d'isolant dans les combles + On isole les murs par l'extérieur (ITE). Les besoins de la maison chutent drastiquement. Une petite géothermie de 6 kW avec deux petites corbeilles suffit ! (Devis global Isolation + PAC : 30 000€). De plus, ce bouquet de travaux débloque le bonus 'Rénovation Globale' (aides de 22 000€).\n\nAu final, pour le même budget (ou moins !), vous avez une maison BBC (Bâtiment Basse Consommation) qui consommera trois fois moins d'électricité à vie."
      },
      {
        "title": "Coût et aides pour l'audit énergétique",
        "content": "Un véritable Audit Énergétique Réglementaire coûte entre 600 et 1 200€.\nHeureusement, l'État finance massivement ce diagnostic essentiel. MaPrimeRénov' subventionne l'audit (jusqu'à 500€ pour les revenus très modestes, 300€ pour les revenus intermédiaires), à condition que le bureau d'études soit qualifié 'RGE Études' ou 'RGE Audit'."
      }
    ],
    "faq": [
      {
        "question": "Le DPE (Diagnostic de Performance Énergétique) est-il suffisant ?",
        "answer": "Non. Le DPE (qui coûte 150€) est un document informatif destiné à la vente ou à la location. Il est beaucoup trop imprécis pour dimensionner une installation de géothermie à 25 000€. L'audit énergétique est un document d'ingénierie qui sert de cahier des charges aux artisans."
      }
    ]
  },
  {
    "slug": "entretien-maintenance-pac",
    "title": "Entretien de la géothermie : Obligations, contrats et tarifs",
    "description": "La géothermie demande peu d'entretien, mais certaines révisions sont obligatoires. Découvrez ce qui est à vérifier pour garantir une PAC qui dure 25 ans.",
    "heroImage": "/images/guides/entretien.png",
    "readTime": "7 min",
    "sections": [
      {
        "title": "L'obligation légale d'entretien (Décret de 2020)",
        "content": "Depuis le décret du 28 juillet 2020, l'entretien des pompes à chaleur (aérothermiques comme géothermiques) d'une puissance comprise entre 4 kW et 70 kW est **obligatoire tous les deux ans**.\n\nCet entretien doit être réalisé par un professionnel qualifié. Au-delà de l'obligation légale, c'est une nécessité technique : une fuite invisible de gaz frigorigène fait chuter le rendement de la PAC, augmente drastiquement votre facture d'électricité, et détruit la couche d'ozone (les fluides HFC étant de puissants gaz à effet de serre)."
      },
      {
        "title": "Ce que comprend une visite de maintenance",
        "content": "Le contrat d'entretien d'une géothermie sol-eau est très différent de celui d'une chaudière fioul (pas de combustion, pas de ramonage, pas de suie).\nLe technicien frigoriste effectuera les contrôles suivants :\n1. **Le contrôle d'étanchéité du circuit frigorifique** (à l'aide d'un détecteur de fuites électronique).\n2. **Le contrôle des performances thermodynamiques** (mesure du COP instantané, des températures de sous-refroidissement et de surchauffe).\n3. **Le circuit de captage (Primaire)** : Vérification de la pression du fluide glycolé provenant du forage. Si la pression baisse, il y a un problème (bulle d'air ou fuite souterraine très rare).\n4. **Le circuit de chauffage (Secondaire)** : Contrôle de la pression d'eau, purge de l'air, vérification du bon fonctionnement du circulateur et nettoyage du filtre à boues (pot à boue magnétique).\n5. **Contrôle électrique** : Resserrage des borniers, mesure des intensités absorbées par le compresseur."
      },
      {
        "title": "Prix et types de contrats de maintenance",
        "content": "Il est fortement conseillé de souscrire un contrat annuel auprès de l'entreprise qui a installé votre matériel (ou à défaut auprès d'un mainteneur national type Engie Home Services ou Proxiserve).\n\n- **Visite ponctuelle (sans contrat)** : Entre 150€ et 200€. Intervention sur appel.\n- **Contrat 'Standard'** : Entre 180€ et 250€/an. Inclut la visite annuelle préventive obligatoire + la gratuité du déplacement en cas de panne (mais les pièces restent payantes).\n- **Contrat 'Omnium' ou 'Total'** : Entre 280€ et 400€/an. La tranquillité absolue. Inclut la visite, le déplacement en cas de panne, ET le remplacement de toutes les pièces défectueuses (main d'œuvre et pièces), souvent prolongé jusqu'à 7 ou 10 ans d'âge de la machine."
      },
      {
        "title": "L'entretien à la charge de l'utilisateur",
        "content": "Entre deux visites annuelles du technicien, le propriétaire a aussi un rôle à jouer pour préserver la durée de vie de son installation :\n- Surveiller la pression d'eau du réseau de radiateurs (manomètre sur la façade de la PAC). Elle doit généralement se situer entre 1,2 et 1,5 bar.\n- Ne pas fermer tous les robinets thermostatiques des radiateurs en même temps (la PAC a besoin d'un débit minimal permanent pour fonctionner).\n- Garder l'environnement de la PAC propre et sec dans la chaufferie (pour éviter l'oxydation des cartes électroniques)."
      }
    ],
    "faq": [
      {
        "question": "Doit-on remplacer le glycol du forage ?",
        "answer": "Contrairement à l'huile moteur, le fluide caloporteur (glycol) d'un forage géothermique ne se dégrade quasiment pas, car il circule en boucle fermée à l'abri de l'air et de la lumière. Il n'est généralement jamais remplacé. L'installateur vérifie simplement son pouvoir antigel avec un réfractomètre lors de l'entretien (il doit protéger jusqu'à -15°C)."
      }
    ]
  }
];

export function getAllGuides() { return guides; }
