
export default {
  language: "Français",
  app: {
    title: "Recherche de nourriture et de repas",
    subtitle: "Bénéficiez de nourriture, de services nutritionnels et d'avantages publics gratuits",
    "bannerAlert": "De nombreux sites sont fermés aujourd'hui. Pour plus d'informations, consultez les détails spécifiques du site.",
    "noResults": "Nous sommes désolés, mais cette recherche n'a donné aucun résultat. Modifiez les filtres que vous aviez sélectionnés et essayez à nouveau.",
    searchPlaceholders: {
      all: "Recherche par adresse ou code postal",
    },
  },
  "categoryType": {
    category: "Catégorie",
    "generalMealSite": "Site de repas général",
    "foodSite": "Site alimentaire",
    "studentMealSite": "Site de repas pour étudiants",
    "olderAdultMealSite": "Site de repas pour personnes âgées",
    "communityRefrigerator": "Réfrigérateur communautaire",
    "publicBenefits": "Aide alimentaire et aides sociales",
  },
  eligibility: "Admissibilité",
  // "pickupDetails": "Informations sur la collecte",
  pickupDetails: "Détails",
  details: "Détails",
  "beforeYouGo": "Avant de partir",
  change: "Modification des horaires",
  closure: "Fermeture temporaire",
  "holidayClosure": "À l'heure actuelle, ce site est fermé provisoirement pour ",
  "futureHolidayClosure": "Ce site sera fermé provisoirement pour ",
  holidayClosureAllSites_juneteenth: '19 juin - Les horaires peuvent changer pour les vacances du 19 juin. Contactez le site avant de partir.',
  holidayClosureAllSites_weekend: 'Les horaires peuvent changer pendant le week-end de vacances. Contactez le site avant de partir.',
  holidayClosureAllSites: 'Les horaires peuvent changer pendant le week-end de vacances. Contactez le site avant de partir.',
  winterHolidayClosureAllSites: "Christmas and New Year's Holidays - Les horaires peuvent changer pendant les vacances d'hiver. Contactez le site avant de partir.",
  futureHolidayClosureAllSites: 'Les horaires peuvent changer pendant le week-end de vacances. Contactez le site avant de partir.',
  "weatherClosure": "À l'heure actuelle, ce site est fermé provisoirement en raison des conditions météorologiques.",
  "temporaryClosure": "À l'heure actuelle, ce site est fermé provisoirement.",
  schedule: "Calendrier",
  "nonPerish": "produits non périssables uniquement",
  "freshOnly": "produits frais uniquement",
  "breakfastLunch": "Petit-déjeuner et déjeuner",
  "tenMeals": "Les sites fournissent 7 petits déjeuners et 7 déjeuners ainsi que des fruits frais chaque semaine.",
  "oneMeal": "1 repas par résident",
  "driveThrough": {
    dt: "Service au volant",
    wu: "Service à pied",
    both: "Service au volant et service à pied",
  },
  "daysAndTimesVaryBySite": "Les jours et les heures varient selon les sites.",
  sections: {
    "foodSites": {
      header: "Sites alimentaires",
      eligibility: "Tout résident est éligible. Aucune pièce d'identité ou preuve de revenu n'est requise.",
      "pickupDetails": {
        "p1": "Les sites alimentaires proposent des denrées alimentaires complémentaires et des produits d'épicerie.",
        "p3": "Selon le lieu, les résidents peuvent recevoir :",
        "li1": "Cartons d'aliments préemballés.",
        "li2": "La nourriture de leur choix provenant d'un garde-manger.",
        "li3": "La nourriture de leur choix provenant d'un Réfrigérateur communautaire.",
      },
      subsections: {
        "PHILABUNDANCE": {
          name: "Philabundance",
        },
        "PHILABUNDANCE/SHARE FOOD PROGRAM": {
          name: "Philabundance/Programme de partage alimentaire",
        },
        "SHARE FOOD PROGRAM": {
          name: "Programme de partage alimentaire",
        },
        "Nutritional Development Services": {
          name: "Services de développement nutritionnel",
        },
        "Small Things Philly": {
          name: "Small Things Philly",
        },
        "Community Refrigerators": {
          name: "Réfrigérateurs communautaires",
          eligibility: "Tout le monde peut se rendre dans un Réfrigérateur communautaire pour y prendre de la nourriture.",
          "pickupDetails": "Les Réfrigérateurs communautaires sont ouverts 24 heures sur 24, 7 jours sur 7, et tout le monde peut prendre les aliments disponibles à tout moment.             Les Réfrigérateurs communautaires sont gérés par des organisations communautaires et des bénévoles.             La disponibilité des aliments varie en fonction des dons.             Visitez le site Web de chaque Réfrigérateur communautaire pour plus d’informations.",
        },
      },
    },
    "generalMealSites": {
      header: "Site de repas général",
      eligibility: "Tout résident est éligible. Aucune pièce d'identité ou preuve de revenu n'est requise.",
      "pickupDetails": {
        "p1": "Les sites de repas généraux proposent des repas préparés.",
      },
      subsections: {
        "Office of Homeless Services": {
          name: "Bureau des services aux sans-abri",
        },
      },
    },
    olderAdultMealSites: {
      header: "Sites de repas pour personnes âgées",
      eligibility: {
        p1: "L'âge d'éligibilité varie selon les sites.",
        p2: "Les conjoints des adultes éligibles peuvent également recevoir des repas sur ces sites, quel que soit leur âge.",
      },
      pickupDetails: {
        p1: "Les sites de repas pour personnes âgées proposent des repas préparés.",
        // p3: "Les résidents peuvent recevoir cinq repas par semaine dans la plupart des sites. Dans certains cas, les repas doivent être réservés à l'avance.",
        p4: "Il est préférable que les résidents réservent leurs repas au moins une semaine à l'avance.",
      },
      subsections: {
        'PCA': {
          name: "Sites soutenus par la PCA",
          eligibility: {
            li1: "Les adultes de 60 ans et plus sont éligibles dans les sites soutenus par la Philadelphia Corporation for Aging (PCA).",
            p2: "Pour en savoir plus sur d'autres services ou pour obtenir de l'aide dans une autre langue, appelez la ligne d'assistance de la PCA à <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a>.",
          },
          pickupDetails: {
            p1: "Les sites de repas pour personnes âgées proposent des repas préparés.",
            // p3: "Dans certains cas, les repas doivent être réservés à l'avance.",
            p3: "Un résident peut prendre jusqu'à cinq repas par semaine à cet endroit. Les repas sont servis sur place.",
            p4: "Il est préférable que les résidents réservent leurs repas au moins une semaine à l'avance. Appelez le site pour en savoir plus et faire une réservation.",
          },
        },
        'specialPCA': {
          eligibility: {
            li1: "Les adultes de 60 ans et plus sont éligibles dans les sites soutenus par la Philadelphia Corporation for Aging (PCA).",
            p2: "Pour en savoir plus sur d'autres services ou pour obtenir de l'aide dans une autre langue, appelez la ligne d'assistance de la PCA à <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a>.",
          },
          pickupDetails: {
            p1: "Les sites de repas pour personnes âgées proposent des repas préparés.",
            // p3: "Les résidents peuvent se procurer cinq repas par semaine sur ce site. Les repas doivent être réservés à l'avance.",
            p3: "Un résident peut prendre jusqu'à sept repas par semaine à cet endroit. Cela comprend une combinaison de repas sur place et de plats à emporter.",
            p4: "Il est préférable que les résidents réservent leurs repas au moins une semaine à l'avance. Appelez le site pour en savoir plus et faire une réservation.",
          },
        },
        'PPR_Senior': {
          name: "Centres pour personnes âgées des parcs et loisirs de Philadelphie",
          eligibility: {
            li1: "Les adultes de 55 ans et plus sont éligibles dans les centres pour adultes des parcs et loisirs de Philadelphie",
            p2: "Pour en savoir plus sur d'autres services ou pour obtenir de l'aide dans une autre langue, appelez la ligne d'assistance de la PCA à <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a>.",
          },
          pickupDetails: {
            p1: "Les sites de repas pour personnes âgées proposent des repas préparés.",
            p3: "Les résidents peuvent recevoir cinq repas par semaine dans la plupart des sites.",
          },
        },
      },
    },
    "studentMealSites": {
      header: "Sites de repas pour étudiants",
      offSeason: {
        p1: `Tous les élèves du district scolaire de Philadelphie reçoivent le petit déjeuner et le déjeuner gratuits à l'école. Pour en savoir plus, consultez <a target="_blank" href="https://www.philasd.org/foodservices/">la page des services alimentaires du district.</a>`,
        p2: 'Les jeunes peuvent également se procurer des collations ou des repas dans <a target="_blank" href="https://www.phila.gov/ost/program-locator/#/">le cadre des programmes extrascolaires.</a>',
      },
      eligibility: "Les enfants et les jeunes âgés de 18 ans ou moins sont éligibles. Il n'est pas nécessaire de présenter une pièce d'identité.",
      "pickupDetails": {
        "p1": "Les sites de repas pour étudiants proposent des repas préparés.",
      },
      "otherResources": {
        "p1": "Pour trouver plus de repas servis durant l'été pour les jeunes :",
        "li1": "Appelez la Ligne d’assistance concernant les repas servis durant l’été au <a href=\"tel:215-770-4659\">(215) 770-4659</a>.",
        "li2": "Envoyez par SMS « FOOD » ou « COMIDA » au <a href=\"tel:304-304\">304-304</a>.",
        "li3": "Rendez-vous sur <a target=\"_blank\" href=\"http://www.phillysummermeals.org\">www.phillysummermeals.org</a>.",
        "li4": 'Rendez-vous <a target="_blank" href="https://www.fns.usda.gov/summer/sitefinder">sur www.fns.usda.gov/summer/sitefinder</a> pour trouver des repas d\'été gratuits pour les jeunes.',
      },
      subsections: {
        "PHA": {
          name: "Centres communautaires de la Philadelphia Housing Authority (PHA)",
          "pickupDetails": "Les repas doivent être consommés sur place. Pour plus d’informations, visitez le site.",
        },
        playstreets: {
          name: "Playstreets (rues sans voitures et jeux pour les enfants)",
          "pickupDetails": "Les Playstreets sont ouverts du lundi au vendredi de 10h à 16h. Les rues sont fermées à la circulation automobile. Les heures des repas varient selon le site. Pour plus d’informations, visitez le site Playstreet.<br>            Les Playstreets servent le déjeuner et un goûter.",
        },
        "NDS": {
          name: "Services de développement nutritionnel",
          "pickupDetails": "Les repas doivent être consommés sur place. Contactez NDS pour plus d’informations.",
        },
        "Recreation Center": {
          name: "Centres de loisirs",
          "pickupDetails": "Du lundi au vendredi de 9h00 à 15h00. Les heures des repas varient selon le site. Les repas doivent être consommés sur place. Pour plus d'informations, appelez le centre de loisirs ou rendez-vous sur place.",
        },
        "Caring for Friends": {
          name: "Caring For Friends",
          "pickupDetails": "Les repas doivent être consommés sur place. Contactez le site pour plus d’informations.",
        },
        "Philabundance Summer Meal Sites": {
          name: "Sites de Philabundance qui servent des repas durant l’été",
          "pickupDetails": "Contactez le site pour plus d’informations.",
        },
        "Other Summer Meal Sites": {
          name: "Autres sites servant des repas durant l'été",
          "pickupDetails": "Les heures des repas varient selon le site. Les repas doivent être consommés sur place. Pour plus d’informations, rendez-vous sur le site qui sert des repas durant l’été.",
        },
      },
    },
    "publicBenefits": {
      header: "Aide alimentaire et aides sociales",
      eligibility: "Les critères d'admissibilité varient selon les sites.",
      "pickupDetails": {
        "p1": "Selon le lieu, les résidents peuvent :",
        "li1": "S'informer sur les prestations publiques et en faire la demande.",
        "li2": "Obtenir des services et une aide en matière de nutrition.",
        "li3": "Obtenir des recommandations en matière de soins de santé ou de services sociaux.",
        "p2": "Les jours, les heures et les services varient selon les sites.",
      },
      subsections: {
        "WIC": {
          name: "WIC",
          eligibility: "              WIC s'adresse aux femmes enceintes, aux femmes qui viennent d'accoucher et aux enfants de moins de cinq ans, y compris les enfants placés en famille d'accueil. Pour bénéficier du programme WIC, vous devez répondre              <a href=\"https://pawic.com/IncomeGuidelines.aspx\" target=\"_blank\">aux critères de revenus</a>.            ",
          "pickupDetails": "              WIC offre des services de nutrition, d'aide à l'allaitement et de recommandations en matière de soins de santé et de services sociaux. Grâce au programme WIC, vous pouvez également bénéficier d'aides sociales pour vous aider à              acheter des aliments sains. Commencez par appeler le bureau WIC où vous prévoyez de vous rendre.            ",
        },
        "BenePhilly": {
          name: "BenePhilly (aide pour la demande d'allocations publiques)",
          eligibility: "              Tout résident peut se rendre dans un centre BenePhilly.            ",
          "pickupDetails": "              Les centres BenePhilly offrent un soutien individuel gratuit pour aider les résidents à faire une demande de prestations publiques. Ces programmes peuvent vous aider à payer les courses, les médicaments, l'assurance maladie              et les factures. Les jours et les heures varient selon les sites.<br><br>Avant de partir, appelez le centre BenePhilly              où vous comptez vous rendre.            ",
        },
      },
    },
    "moreResources": {
      header: "Autres ressources",
      "p1": "Vous voulez en savoir plus ? Explorez d'autres options pour obtenir <a href=\"https://www.phila.gov/services/mental-physical-health/find-free-food-or-meals/\" target=\"_blank\">de la nourriture gratuitement et une aide supplémentaire</a> ou pour obtenir de l'aide dans votre <a href=\"https://www.phila.gov/services/payments-assistance-taxes/financial-services-for-residents/get-free-help-applying-for-public-benefits/\" target=\"_blank\"> demande de prestations publiques</a>.",
    },
  },
  time: {
    category: "Heure de la journée",
    morning: "Matin (avant midi)",
    afternoon: "Après-midi (12h00 - 17h00)",
    evening: "Soir (après 17h00)",
  },
  "checkSite": "Les détails du site sont susceptibles d'être modifiés. Avant de partir, contactez le site pour confirmer ses heures d'ouverture et ses services.",
  "otherResources": "Autres ressources",
  exceptions: {
    "Open on second and fourth Tuesday of the month": "Ouvert les deuxième et quatrième mardis du mois",
    "Open on first and third Saturday of the month": "Ouvert le premier et le troisième samedi du mois",
    "Open on second and fourth Monday of the month": "Ouvert les deuxième et quatrième lundis du mois",
    "Open on first and third Wednesday of the month": "Ouvert le premier et le troisième mercredi du mois",
    "Open on first Monday of the month": "Ouvert le premier lundi du mois",
    "Open on first Tuesday of the month": "Ouvert le premier mardi du mois",
    "Open on third Thursday of the month": "Ouvert le troisième jeudi du mois",
    "Open on third and fourth Saturday of the month": "Ouvert les troisième et quatrième samedis du mois",
    "Open on first and third Mondays of the month": "Ouvert le premier et le troisième lundi du mois",
    "Open on the last Thursday of the month": "Ouvert le dernier jeudi du mois",
    "Open on first and third Friday of the month": "Ouvert le premier et le troisième vendredi du mois",
    "Open on second and fourth Saturday of the month": "Ouvert les deuxième et quatrième samedis du mois",
    "Open on first Friday of the month": "Ouvert le premier vendredi du mois",
    "Open on first and third Monday of the month": "Ouvert le premier et le troisième lundi du mois",
    "Open on third Saturday of the month": "Ouvert le troisième samedi du mois",
    "Open on second and fourth Wednesday of the month": "Ouvert les deuxième et quatrième mercredis du mois",
    "Open on second and fourth Saturdays of the month": "Ouvert les deuxième et quatrième samedis du mois",
  },
};