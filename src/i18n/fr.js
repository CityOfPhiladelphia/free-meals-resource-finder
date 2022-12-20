
export default {
  language: 'Français',
  app: {
    title: 'Sites de distribution alimentaire',
    subtitle: 'Trouver un repas gratuit',
    bannerAlert: 'De nombreux sites sont fermés aujourd’hui. Consultez les détails spécifiques au site pour obtenir de plus amples informations.',
  },
  'General meal site': 'Sites de restauration générale',
  'Food site': 'Sites de distribution alimentaire',
  'Student meal site': 'Site de distribution de repas pour élèves',
  'Older adult meal site': 'Site de distribution de repas pour personnes âgées',
  eligibility: 'Admissibilité au programme',
  pickupDetails: 'Détails de collecte',
  beforeYouGo: 'Avant de vous déplacer ',
  change: 'Changement d’horaire',
  closure: 'Fermeture temporaire',
  checkSite: 'Consulter les informations concernant le site donné. Les horaires peuvent changers.',
  hoursVary: 'Les horaires et la disponibilité varient.',
  MONDAY: 'Lundi',
  TUESDAY: 'Mardi',
  WEDNESDAY: 'Mercredi',
  THURSDAY: 'Jeudi',
  FRIDAY: 'Vendredi',
  SATURDAY: 'Samedi',
  SUNDAY: 'Dimanche',
  daysOfTheWeek: "Jour de la semaine",
  schedule: "Calendrier",
  nonPerish: 'articles non périssables seulement',
  freshOnly: 'produits frais seulement',
  breakfastLunch: 'petit déjeuner et déjeuner',
  tenMeals: 'Nourriture et repas frais fournis pour la semaine.',
  oneMeal: '1 repas par habitant',
  driveThrough:{
    dt: 'Drive',
    wu: 'Guichet',
    both: 'Drive et guichet',
  },
  sections: {
    foodSites: {
      header: 'Sites de distribution alimentaire',
      eligibility: 'Tous les habitants peuvent en bénéficier. Aucune pièce d’identité ni preuve de revenus n’est demandée.',
      pickupDetails: 'Les résidents peuvent se procurer de la nourriture supplémentaire pour leur foyer.',
      subsections: {
        'PPR': {
          name: 'Centres du service des parcs et loisirs de Philadelphie',
          pickupDetails: '',
        },
      },
    },
    studentMealSites: {
      header: 'Sites de distribution de repas pour élèves',
      eligibility: 'Les centres sont ouverts à tous les enfants et jeunes. Il n\'est pas nécessaire de présenter une pièce d\'identité. ',
      pickupDetails: 'Les jours et les horaires peuvent varier en fonction des sites.',
      subsections: {
        'PSD': {
          name: 'Écoles du district scolaire de Philadelphie',
          pickupDetails: 'La collecte peut se faire dans toute école du district sur la carte pour les élèves de maternelle à la 12e année du district scolaire de Philadelphie.\
          Il en va de même pour les élèves inscrits dans les écoles privées sous contrat suivantes :\
            <ul><li>KIPP West Philadelphia Preparatory Charter School</li> \
            <li>Philadelphia Electrical and Technology Charter School</li> \
            <li>Mathematics, Civics and Sciences Charter School</li> \
            <li>Preparatory Charter School of Mathematics, Science, Technology and Careers</li> \
            <li>Multicultural Academy Charter School</li></ul> \
            Tous les autres élèves devront contacter leur école pour en savoir plus sur la distribution des repas.\
          ',
          eligibility: 'Tous les enfants et les adolescents peuvent en bénéficier. Aucune pièce d’identité n’est demandée.',
        },
        'PHA': {
          name: 'Centres communautaires de la Housing Authority de Philadelphie (PHA)',
          pickupDetails: 'Lundi 9h00 – 10h00 et 12h00 – 14h00<br>\
          Mardi 9h00 – 10h00 et 12h00 – 14h00<br>\
          Mercredi 9h00 – 10h00 et 12h00 – 14h00<br>\
          Jeudi 9h00 – 10h00 et 12h00 – 14h00<br>\
          Vendredi 9h00 – 10h00 et 12h00 – 14h00<br>\
          Les repas doivent être consommés sur place. Pour plus d’informations, visitez le site.',
          eligibility: 'Tous les enfants et les adolescents peuvent en bénéficier. Aucune pièce d’identité n’est demandée.',

        },
        'CHARTER': {
          name: 'Écoles à charte',
          pickupDetails: '',
          eligibility: 'Tous les enfants et les adolescents peuvent en bénéficier. Aucune pièce d’identité n’est demandée.',

        },
        'PPR_StudentMeals': {
          name: 'Centres du service des parcs et loisirs de Philadelphie',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'Des repas sont disponibles les jours suivants :<br>\
          28 - 30 décembre, 3 janvier, 1erer février, 11 - 14 avril.<br>\
          Les horaires des centres de loisirs et leurs heures de repas varient selon les sites. Tous les repas doivent être consommés sur place. Pour plus d\'informations, appelez le centre de loisirs ou rendez-vous sur place.',
          eligibility: 'Tous les enfants et les adolescents peuvent en bénéficier. Aucune pièce d’identité n’est demandée.',

        },
        'playstreets': {
          name: 'Playstreets',
          pickupDetails: 'Les Playstreets sont ouverts du lundi au vendredi de 10h00 à 16h00. Les rues sont fermées à la circulation automobile. Les heures des repas varient selon le site. Pour plus d’informations, visitez le Playstreet.<br>\
          Les Playstreets servent le déjeuner et un goûter.',
          eligibility: 'Tous les enfants et les adolescents peuvent en bénéficier. Aucune pièce d’identité n’est demandée.',
        },
        'NDS': {
          name: 'Services de développement nutritionnel',
          pickupDetails: 'Los lugares podrán ofrecer comidas diarias o cajas de desayuno y almuerzo para 7 días. Contacte a los Servicios de Desarrollo Nutricional para obtener más información.',
          eligibility: 'Tous les enfants et les adolescents peuvent en bénéficier. Aucune pièce d’identité n’est demandée.',
        },
        'Other': {
          name: 'Autres pôles repas d\'été',
          pickupDetails: 'Les heures des repas varient selon les sites. Pour obtenir plus d\'informations, rendez-vous au pôle repas d\'été.',
          eligibility: 'Tous les enfants et les adolescents peuvent en bénéficier. Aucune pièce d’identité n’est demandée.',
        },
        'Recreation Center': {
          name: 'Centres aérés',
          pickupDetails: 'Du lundi au vendredi de 9h00 à 15h00.Les heures des repas varient selon le site. Les repas doivent être consommés sur place.Pour plus d\'informations, appelez le centre de loisirs ou rendez-vous sur place. ',
          eligibility: 'Tous les enfants et les adolescents peuvent en bénéficier. Aucune pièce d’identité n’est demandée.',
        },
        'Caring for Friends': {
          name: 'Caring for Friends',
          pickupDetails: 'Les repas doivent être consommés sur place. Contactez le site pour plus d’informations. ',
          eligibility: 'Les centres sont ouverts à tous les enfants et jeunes. Il n\'est pas nécessaire de présenter une pièce d\'identité.',
        },
        'Philabundance Summer Meal Sites': {
          name: 'Sites de Philabundance qui servent des repas durant l’été  ',
          pickupDetails: 'Contactez le site pour plus d’informations.',
          eligibility: 'Les centres sont ouverts à tous les enfants et jeunes. Il n\'est pas nécessaire de présenter une pièce d\'identité.',
        },
        'Other Summer Meal Sites':{
          name: 'Autres sites servant des repas durant l\'été',
          pickupDetails: 'Les heures des repas varient selon le site. Les repas doivent être consommés sur place. Pour plus d’informations, rendez-vous sur le site qui sert des repas durant l’été. ',
          eligibility: 'Les centres sont ouverts à tous les enfants et jeunes. Il n\'est pas nécessaire de présenter une pièce d\'identité.',
        },
      },
      custom: {
        info: 'Vérifiez les actualités concernant la distribution de repas pendant les vacances scolaires.<br>\
       </li></ul>',
        info: ' Visitez <a href="https://www.philasd.org/foodservices/">la page des services de restauration du district scolaire de Philadelphie</a> pour obtenir des informations sur le service de cantine scolaire pour les élèves. <br>\
        Les programmes de Temps extra-scolaire (OST) servent aussi des collations et des repas aux jeunes.  \
        Consultez le <a href="https://www.phila.gov/ost/program-locator/#/">Localisateur de programme OST</a> pour trouver un programme et en savoir plus.'
      },
    },
    olderAdultMealSites: {
      header: 'Sites de distribution de repas pour personnes âgées',
      eligibility: '\
      Les adultes âgés de 60 ans et plus peuvent bénéficier de repas dans les sites soutenus par la Philadelphia Corporation for Aging (PCA).\
        <i><b>Les personnes âgées doivent appeler à l\'avance pour réserver les repas avant de venir les chercher.</b></i><br><br>\
        Les adultes âgés de 55 ans et plus peuvent bénéficier de repas dans les centres pour personnes âgées du Service\
         des parcs et loisirs (Parks & Recreation Department).\
        Aucune réservation n\'est nécessaire.\
      ',
      pickupDetails: '',
      subsections: {
        'PCA': {
          name: 'sites parrainés par la PCA',
          eligibility: '\
          Les adultes âgés de 60 ans et plus peuvent bénéficier de repas dans les sites soutenus par la Philadelphia Corporation for Aging (PCA). \
            <i><b>Les personnes âgées doivent appeler à l\'avance pour réserver les repas avant de venir les chercher.</b></i><br><br>\
          ',
          pickupDetails: "\
          Les personnes âgées peuvent réserver 5 à 7 repas par semaine.\
          Les dates et heures de retrait varient selon les sites.\
           Pour plus d'informations et pour réserver des repas, contactez un site spécifique. \
           La famille d'une personne âgée peut venir chercher ses repas, sous réserve d'un accord préalable. \
           Pour obtenir de l'aide dans des langues autres que l'anglais, appelez la ligne d'assistance téléphonique de la PCA au \
          <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a></b>.\
          ",
        },
        'PPR_Senior': {
          name: 'Centres des aînés du service des parcs et loisirs',
          eligibility: '\
          Les adultes âgés de 55 ans et plus peuvent bénéficier de repas dans les centres pour personnes âgées du Service\
         des parcs et loisirs (Parks & Recreation Department).\
        Aucune réservation n\'est nécessaire.\
          ',
          pickupDetails: '\
          Les personnes âgées peuvent venir chercher 5 repas par semaine dans la plupart des sites.\
          ',
        },
      },
    },
    generalMealSites: {
      header:  'Sites de restauration générale',
      eligibility: 'Tous les habitants peuvent en bénéficier. Aucune pièce d’identité ni preuve de revenus n’est demandée.',
      pickupDetails: '',
      subsections: {
        'compiled': {
          name: 'Sites de restauration générale',
          pickupDetails: 'Les jours et les horaires peuvent varier en fonction des sites.',
        },
      },
    },
    foodPantries: {
      header: 'Trouver d\'autres sources de nourriture gratuite et d\'aide:',
      intro: '',
      li1: 'Appelez le  <a href="tel:+311">311</a>. Appelez la banque alimentaire au préalable pour vérifier ses horaires.',
      li2: '<a href="https://www.phila.gov/departments/office-of-homeless-services/">Le site Internet de l\'Office of Homeless Services (Bureau des services aux sans-abri)</a> recense d\'autres lieux offrant des repas gratuits. ',
      li3: '<a href="https://communityresourceconnects.org/">Le site Community Resource Connects </a> propose de la nourriture et d\'autres ressources.',
      h2:'Obtenir de l\'aide pour faire une demande de prestations: ',
      li21:'<a href="https://www.phila.gov/programs/benephilly/">BenePhilly</a> peut vous aider à faire une demande de prestations publiques. Appelez le 1-833-373-5868.',
      li22:'<a href="https://www.hungercoalition.org/">Coalition Against Hunger</a> peut vous aider à faire une demande de prestations SNAP (programme d\'aide alimentaire). Appelez le 215-430-0556.',
      li23:'Faites une demande préliminaire d\'aide alimentaire WIC (pour femmes, nourrissons et enfants) sur le site <a href="https://www.pawic.com/OnlineApplication.aspx">PA WIC.</a> Le programme WIC permet aux femmes, aux nourrissons et aux enfants de moins de 5 ans d\'accéder à une nourriture saine et à des informations nutritionnelles.',
    },
  },
};
