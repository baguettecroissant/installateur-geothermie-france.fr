export interface Guide {
  slug: string; title: string; description: string; heroImage: string; readTime: string;
  sections: { title: string; content: string; tip?: string }[];
  tableData?: { label: string; values: string[] }[];
  faq?: { question: string; answer: string }[];
}
export const guides: Guide[] = [
  {
    "slug": "choisir-installateur-rge-criteres",
    "title": "Choisir son installateur géothermique RGE : les 7 critères essentiels",
    "description": "Certification, expérience, assurance : la checklist complète pour sélectionner le bon artisan.",
    "heroImage": "/images/guides/choisir-installateur.png",
    "readTime": "11 min",
    "sections": [
      {
        "title": "Les 7 critères de sélection",
        "content": "Un installateur géothermique de qualité doit répondre à ces 7 critères :\n\n1. **Certification RGE QualiPAC** mention \"PAC géothermiques\" en cours de validité\n2. **Assurance décennale** couvrant spécifiquement le forage et les PAC sol-eau\n3. **Minimum 5 chantiers géothermiques** réalisés dans votre département\n4. **Maîtrise des marques premium** (Viessmann, NIBE, Vaillant, Atlantic)\n5. **Partenariat avec un foreur QualiForage** ou compétence intégrée\n6. **Contrat de maintenance** proposé avec SAV sous 48h\n7. **Prise en charge administrative** complète (DREAL, MaPrimeRénov', CEE)"
      },
      {
        "title": "Comment vérifier la certification RGE",
        "content": "La vérification se fait en 3 étapes :\n\n1. **Site officiel** : rendez-vous sur france-renov.gouv.fr/annuaire-rge\n2. **Recherche** : tapez le nom de l'entreprise ou son SIRET\n3. **Vérification** : la fiche doit mentionner :\n   - Qualification \"Pompes à chaleur géothermiques\" (pas seulement aérothermiques)\n   - Date de validité en cours\n   - Organisme certificateur (Qualit'EnR, Qualifelec)\n\n**Attention** : un installateur RGE \"PAC air-eau\" n'est PAS qualifié pour la géothermie. La mention doit être spécifique."
      },
      {
        "title": "Les questions à poser avant de signer",
        "content": "Lors du rendez-vous avec l'installateur, posez ces questions :\n\n- Combien de PAC géothermiques avez-vous installées dans le département ?\n- Pouvez-vous me montrer des photos de chantiers récents ?\n- Quelle marque de PAC proposez-vous et pourquoi ?\n- Travaillez-vous avec votre propre foreur ou un sous-traitant ?\n- Quelle garantie de performance proposez-vous sur le COP ?\n- Proposez-vous un contrat d'entretien ? Quel délai de dépannage ?\n- Prenez-vous en charge le dossier MaPrimeRénov' et CEE ?"
      }
    ],
    "faq": [
      {
        "question": "Comment savoir si un installateur est compétent en géothermie ?",
        "answer": "Vérifiez la certification RGE QualiPAC mention 'géothermique', demandez 5+ références locales, et confirmez l'assurance décennale couvrant le forage."
      }
    ]
  },
  {
    "slug": "certification-qualipac-garanties",
    "title": "Certification QualiPAC : ce que ça garantit pour votre chantier",
    "description": "La certification QualiPAC géothermique est obligatoire pour les aides. Ce qu'elle couvre et ses limites.",
    "heroImage": "/images/guides/qualipac.png",
    "readTime": "8 min",
    "sections": [
      {
        "title": "QualiPAC : le label de référence",
        "content": "**QualiPAC** est la certification délivrée par Qualit'EnR aux installateurs de pompes à chaleur. Elle est **obligatoire** pour que vos travaux soient éligibles aux aides (MaPrimeRénov', CEE).\n\nElle garantit que l'installateur :\n- A suivi une formation technique de 3 à 5 jours\n- A passé un examen théorique et pratique\n- A réalisé au moins 2 chantiers de référence audités\n- Est contrôlé par un organisme indépendant tous les 4 ans\n- Dispose d'une assurance professionnelle à jour"
      },
      {
        "title": "QualiPAC géothermique vs aérothermique",
        "content": "**Attention** : il existe deux mentions QualiPAC distinctes :\n\n- **QualiPAC aérothermique** : PAC air-air et air-eau uniquement\n- **QualiPAC géothermique** : PAC sol-eau, eau-eau et sol-sol\n\nUn installateur certifié aérothermique **n'est PAS qualifié** pour installer une PAC géothermique. Le forage, le dimensionnement des sondes et les raccordements glycol sont des compétences spécifiques.\n\nVérifiez la mention exacte sur france-renov.gouv.fr."
      },
      {
        "title": "Les limites de la certification",
        "content": "QualiPAC garantit un **niveau minimum de compétence**, mais ne garantit pas :\n\n- La qualité du service client\n- Le respect des délais\n- Le meilleur rapport qualité/prix\n- L'expertise spécifique dans votre type de sous-sol\n\nC'est pourquoi il est essentiel de **comparer au moins 3 installateurs certifiés** et de vérifier leurs références locales en plus de la certification."
      }
    ],
    "faq": [
      {
        "question": "La certification QualiPAC est-elle obligatoire ?",
        "answer": "Oui, pour bénéficier de MaPrimeRénov' et des CEE. Sans installateur RGE QualiPAC, vous perdez entre 7 000 et 15 000€ d'aides."
      }
    ]
  },
  {
    "slug": "deroulement-chantier-geothermique",
    "title": "Déroulement d'un chantier géothermique : les 8 étapes clés",
    "description": "De la visite technique à la mise en service : chronologie détaillée d'une installation géothermique.",
    "heroImage": "/images/guides/chantier-etapes.png",
    "readTime": "10 min",
    "sections": [
      {
        "title": "Les 8 étapes du chantier",
        "content": "**Étape 1 — Visite technique** (J-90) : L'installateur évalue le terrain, l'installation existante et dimensionne le projet. Gratuit.\n\n**Étape 2 — Devis et montage aides** (J-60) : Devis détaillé + dépôt MaPrimeRénov' + choix CEE. Ne signez qu'après l'accord.\n\n**Étape 3 — Déclaration DREAL** (J-30) : Pour les forages > 10 m. Délai : 1 mois.\n\n**Étape 4 — Forage** (J, durée 1-3 jours) : La foreuse arrive, fore les puits, insère les sondes et cimente.\n\n**Étape 5 — Raccordements extérieurs** (J+3) : Tranchées entre forages et PAC, pose des collecteurs.\n\n**Étape 6 — Installation PAC** (J+5) : Pose de la PAC intérieure, raccordements hydrauliques et électriques.\n\n**Étape 7 — Mise en service** (J+6) : Remplissage circuit, test d'étanchéité, programmation régulation.\n\n**Étape 8 — Réception** (J+7) : PV de réception, formation utilisateur, remise du dossier technique."
      },
      {
        "title": "Préparation du terrain avant forage",
        "content": "Pour que le chantier se passe bien :\n\n- **Accès foreuse** : passage de 3 m minimum, portance sol suffisante\n- **Distance bâtiment** : minimum 3 m entre forage et fondations\n- **Réseaux enterrés** : localisation obligatoire (DICT)\n- **Évacuation des boues** : prévoir une zone de stockage temporaire\n- **Eau** : raccordement eau potable nécessaire pour le forage\n- **Électricité** : alimentation triphasée pour la foreuse\n\nVotre installateur coordonne ces aspects lors de la visite technique."
      }
    ],
    "faq": [
      {
        "question": "Combien de temps durent les travaux ?",
        "answer": "5 à 7 jours ouvrés pour l'ensemble : 1-3 jours de forage, 2-3 jours d'installation PAC et raccordements, 1 jour de mise en service."
      }
    ]
  },
  {
    "slug": "contrat-entretien-pac-geothermique",
    "title": "Contrat d'entretien PAC géothermique : que vérifier avant de signer",
    "description": "De 150 à 400€/an. Ce que doit inclure un bon contrat de maintenance géothermique.",
    "heroImage": "/images/guides/contrat-entretien.png",
    "readTime": "8 min",
    "sections": [
      {
        "title": "L'entretien est obligatoire",
        "content": "Depuis le décret du 30 juillet 2020, l'entretien d'une PAC géothermique est **obligatoire tous les 2 ans** si elle contient plus de 2 kg de fluide frigorigène.\n\n**Prix** :\n- Entretien ponctuel : 150 à 300€/intervention\n- Contrat de maintenance : 200 à 400€/an\n\nLe contrat est recommandé car il inclut le dépannage prioritaire et souvent des pièces d'usure."
      },
      {
        "title": "Ce que doit inclure un bon contrat",
        "content": "Un contrat de maintenance complet comprend :\n\n✅ **Visite annuelle** : contrôle complet du système\n✅ **Circuit frigorigène** : vérification étanchéité, charge de fluide\n✅ **Circuit hydraulique** : pression, débit, niveau de glycol\n✅ **Performances** : mesure COP réel vs données constructeur\n✅ **Régulation** : vérification courbe de chauffe\n✅ **Dépannage prioritaire** : intervention sous 24-48h\n✅ **Pièces d'usure** : incluses ou à prix préférentiel\n❌ **À éviter** : contrats qui excluent le circuit de captage (sondes/glycol)"
      },
      {
        "title": "Comparer les contrats d'entretien",
        "content": "3 critères pour comparer les offres :\n\n1. **Délai d'intervention** : 24h (excellent), 48h (bon), 72h+ (insuffisant)\n2. **Pièces incluses** : sonde de pression, vanne, circulateur — ou facturées en sus ?\n3. **Garantie prolongée** : certains contrats prolongent la garantie constructeur\n\nPrivilégiez l'installateur qui a posé votre PAC : il connaît votre installation et intervient plus vite."
      }
    ],
    "faq": [
      {
        "question": "Combien coûte l'entretien annuel d'une PAC géothermique ?",
        "answer": "150 à 300€ en intervention ponctuelle, 200 à 400€/an en contrat tout compris. Le contrat inclut le dépannage prioritaire."
      }
    ]
  },
  {
    "slug": "comparatif-pac-geothermiques-2026",
    "title": "Comparatif PAC géothermiques 2026 : Viessmann vs NIBE vs Vaillant",
    "description": "Les 6 meilleures PAC géothermiques du marché. Prix, COP, puissance et fiabilité comparés.",
    "heroImage": "/images/guides/comparatif-pac.png",
    "readTime": "12 min",
    "sections": [
      {
        "title": "Le top 6 des PAC géothermiques",
        "content": "**1. Viessmann Vitocal 300-G** : la référence haut de gamme\n- COP : 4,8 | Puissance : 5,8-17,2 kW\n- Prix : 10 000-14 000€ (hors pose)\n- Forces : fiabilité, silence, régulation Vitotronic\n\n**2. NIBE F1255** : le meilleur rapport qualité/prix\n- COP : 4,6 | Puissance : 6-16 kW\n- Prix : 8 000-12 000€\n- Forces : compacte, connectée, pilotage à distance\n\n**3. Vaillant flexoTHERM exclusive** : l'innovation allemande\n- COP : 4,7 | Puissance : 5,2-19,2 kW\n- Prix : 9 000-13 000€\n- Forces : haute température (65°C), Green iQ"
      },
      {
        "title": "Comparatif détaillé",
        "content": "**4. Atlantic Alfea Extensa AI** : le choix français\n- COP : 4,4 | Puissance : 6-14 kW\n- Prix : 7 000-10 000€\n- Forces : fabrication française, réseau SAV dense\n\n**5. Stiebel Eltron WPF** : la précision suisse/allemande\n- COP : 4,9 | Puissance : 5-13 kW\n- Prix : 11 000-16 000€\n- Forces : meilleur COP du marché, qualité premium\n\n**6. Daikin Altherma 3 Geo** : le géant japonais\n- COP : 4,5 | Puissance : 6-16 kW\n- Prix : 8 000-12 000€\n- Forces : technologie Inverter, régulation cloud"
      },
      {
        "title": "Quelle marque choisir ?",
        "content": "**Budget limité** → Atlantic Alfea (bon SAV, prix accessible)\n**Meilleur rapport qualité/prix** → NIBE F1255 (compacte, connectée)\n**Performance maximale** → Stiebel Eltron WPF (COP 4,9)\n**Fiabilité éprouvée** → Viessmann Vitocal 300-G (référence du marché)\n**Haute température (rénovation)** → Vaillant flexoTHERM (65°C)\n**Innovation technologique** → Daikin Altherma 3 Geo (Inverter)\n\nVotre installateur RGE vous orientera selon votre configuration et sa maîtrise des marques."
      }
    ],
    "faq": [
      {
        "question": "Quelle est la meilleure PAC géothermique ?",
        "answer": "La Stiebel Eltron WPF offre le meilleur COP (4,9) mais est la plus chère. Le NIBE F1255 est le meilleur rapport qualité/prix. La Viessmann Vitocal 300-G est la référence en fiabilité."
      }
    ]
  },
  {
    "slug": "assurance-decennale-geothermie",
    "title": "Assurance décennale géothermie : protections et garanties",
    "description": "L'assurance décennale couvre le forage et la PAC pendant 10 ans. Ce qu'elle protège et comment vérifier.",
    "heroImage": "/images/guides/assurance-decennale.png",
    "readTime": "7 min",
    "sections": [
      {
        "title": "Ce que couvre la décennale",
        "content": "L'assurance décennale est **obligatoire** pour tout artisan du bâtiment. Elle couvre pendant 10 ans les dommages qui :\n\n- Compromettent la solidité de l'ouvrage\n- Rendent l'ouvrage impropre à sa destination\n\nPour la géothermie, cela inclut :\n- **Défaut de forage** : effondrement, contamination de nappe\n- **Défaut d'étanchéité des sondes** : fuite de glycol\n- **Sous-dimensionnement** : PAC qui ne chauffe pas suffisamment\n- **Défaut de raccordement** : fuites hydrauliques ou frigorifiques"
      },
      {
        "title": "Comment vérifier l'assurance",
        "content": "Avant de signer le devis :\n\n1. **Demandez l'attestation** d'assurance décennale en cours de validité\n2. **Vérifiez les activités couvertes** : \"forage géothermique\" et \"installation PAC\" doivent figurer explicitement\n3. **Vérifiez les montants de garantie** : minimum 150 000€\n4. **Contactez l'assureur** si doute : le numéro figure sur l'attestation\n\nUn installateur qui refuse de fournir son attestation décennale est un signal d'alerte majeur."
      }
    ],
    "faq": [
      {
        "question": "L'assurance décennale couvre-t-elle le forage ?",
        "answer": "Oui, si l'attestation mentionne explicitement le forage géothermique. Vérifiez que cette activité figure dans les garanties couvertes."
      }
    ]
  },
  {
    "slug": "sav-depannage-pac-geothermique",
    "title": "SAV et dépannage PAC géothermique : vos droits et recours",
    "description": "Panne, sous-performance, litige : que faire et quels sont vos droits avec un installateur.",
    "heroImage": "/images/guides/sav-depannage.png",
    "readTime": "8 min",
    "sections": [
      {
        "title": "Vos garanties après installation",
        "content": "Après l'installation, vous bénéficiez de plusieurs niveaux de garantie :\n\n- **Garantie de parfait achèvement** (1 an) : l'installateur corrige tout défaut signalé\n- **Garantie biennale** (2 ans) : couvre les équipements dissociables (régulation, circulateur)\n- **Garantie décennale** (10 ans) : couvre les défauts structurels (forage, sondes)\n- **Garantie constructeur PAC** (2 à 5 ans, extensible) : couvre le compresseur et les composants\n\nConservez toutes les factures et le PV de réception : ils sont indispensables pour faire jouer les garanties."
      },
      {
        "title": "Que faire en cas de panne",
        "content": "**Étape 1** : Vérifiez les points simples (disjoncteur, pression circuit, thermostat)\n**Étape 2** : Contactez votre installateur (contrat d'entretien = intervention prioritaire)\n**Étape 3** : Si indisponible, contactez le SAV du fabricant (numéro sur la PAC)\n**Étape 4** : En urgence hiver, un chauffagiste local peut intervenir sur le circuit hydraulique\n\n**Délai normal** : 24-48h avec contrat, 3-5 jours sans contrat."
      },
      {
        "title": "Recours en cas de litige",
        "content": "Si l'installateur ne répond pas ou refuse d'intervenir :\n\n1. **Mise en demeure** par courrier recommandé (obligatoire avant toute action)\n2. **Médiation de la consommation** : gratuit, obligatoire pour le professionnel\n3. **Organisme certificateur** : signalez à Qualit'EnR — risque de retrait RGE\n4. **Assurance décennale** : saisissez directement l'assureur de l'installateur\n5. **Tribunal judiciaire** : en dernier recours, pour les litiges > 5 000€"
      }
    ],
    "faq": [
      {
        "question": "Que faire si mon installateur ne répond plus ?",
        "answer": "Envoyez une mise en demeure par recommandé, puis saisissez son assurance décennale directement. Signalez aussi à Qualit'EnR pour risque de retrait de certification."
      }
    ]
  },
  {
    "slug": "renovation-remplacement-fioul-gaz",
    "title": "Rénovation : quand la géothermie remplace le fioul ou le gaz",
    "description": "Guide pratique du remplacement de chaudière par une PAC géothermique. Compatibilité, budget et artisans.",
    "heroImage": "/images/guides/renovation-remplacement.png",
    "readTime": "10 min",
    "sections": [
      {
        "title": "Pourquoi remplacer maintenant",
        "content": "3 raisons de passer du fioul/gaz à la géothermie en 2026 :\n\n**1. Interdiction progressive du fioul** : plus d'installation de chaudières fioul neuves depuis 2022. Remplacement encouragé par des aides massives.\n\n**2. Hausse du prix du gaz** : +50% en 3 ans. La géothermie fixe votre coût de chauffage à 500-700€/an d'électricité.\n\n**3. Aides maximales** : le remplacement d'une énergie fossile bénéficie des montants les plus élevés de MaPrimeRénov' (jusqu'à 11 000€)."
      },
      {
        "title": "Compatibilité avec l'existant",
        "content": "Votre système de distribution existant est-il compatible ?\n\n- **Plancher chauffant** (35-40°C) → PAC standard, COP optimal\n- **Radiateurs basse température** (45-55°C) → PAC standard, COP bon\n- **Radiateurs haute température** (65-75°C) → PAC haute température (Vaillant flexoTHERM, Viessmann Vitocal 300-G HT)\n- **Radiateurs en fonte** → remplacement recommandé par des modèles basse température (+1 500 à 3 000€)\n\nVotre installateur RGE évaluera la compatibilité lors de la visite technique gratuite."
      },
      {
        "title": "Le rôle clé de l'installateur en rénovation",
        "content": "En rénovation, l'installateur doit maîtriser :\n\n- **Dépose de l'ancienne chaudière** (500-1 500€) et cuvelage cuve fioul (1 000-3 000€)\n- **Adaptation hydraulique** : raccordement sur le circuit existant\n- **Équilibrage des radiateurs** : réglage des débits pour optimiser le COP\n- **Gestion de la bivalence** : certaines rénovations conservent un appoint électrique\n- **Montage administratif complet** : DREAL, MaPrimeRénov', CEE, éco-PTZ\n\nChoisissez un artisan expérimenté en rénovation, pas uniquement en construction neuve."
      }
    ],
    "faq": [
      {
        "question": "La géothermie fonctionne-t-elle avec mes radiateurs existants ?",
        "answer": "Oui, avec une PAC haute température (65°C) pour les radiateurs classiques, ou une PAC standard pour les planchers chauffants et radiateurs basse température."
      }
    ]
  }
];
export function getAllGuides() { return guides; }
