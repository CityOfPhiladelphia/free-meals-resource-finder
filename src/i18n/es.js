
export default {
  language: 'Español',
  app: {
    title: 'Lugares de distribución de alimentos',
    subtitle: 'Encuentre alimentos y comidas gratuitas',
    bannerAlert: 'Muchos lugares están cerrados hoy. Consulte los detalles específicos del lugar para obtener más información.',
    noResults: "Spanish We're sorry, there are no results for that search. Adjust the filters you've selected and try again.",
  },
  categoryType: {
    category: 'Categoría',
    generalMealSite: 'Lugares de comidas generales',
    foodSite: 'Lugar de alimentos',
    studentMealSite: 'Lugar de comidas para estudiantes',
    olderAdultMealSite: 'Lugar de comidas para adultos mayores',
    communityRefrigerator: 'Refrigeradores comunitarios',
    publicBenefits: 'Prestaciones públicas',
  },
  'General meal site': 'Lugares de comidas generales',
  'Food site': 'Lugar de alimentos',
  'Student meal site': 'Lugar de comidas para estudiantes',
  'Older adult meal site': 'Lugar de comidas para adultos mayores',
  'Community refrigerator': 'Refrigeradores comunitarios',
  'Public Benefits': 'Prestaciones públicas',
  eligibility: 'Elegibilidad',
  pickupDetails: 'Detalles y horarios de retiro',
  details: 'Detalles',
  beforeYouGo: 'Antes de ir',
  change: 'Cambio de horarios',
  closure: 'Cierre temporal',
  holidayClosure: 'Spanish This site is currently temporarily closed for a holiday.',
  futureHolidayClosure: 'Spanish This site will by temporarily closed for a holiday on ',
  weatherClosure: 'Spanish This site is currently temporarily closed due to weather.',
  temporaryClosure: 'Spanish This site is currently temporarily closed.',
  checkSite: 'Verifique la información específica del lugar. Los horarios pueden cambiar.',
  hoursVary: 'Los horarios y la disponibilidad pueden variar.',
  MONDAY: 'Lunes',
  TUESDAY: 'Martes',
  WEDNESDAY: 'Miércoles',
  THURSDAY: 'Jueves',
  FRIDAY: 'Viernes',
  SATURDAY: 'Sábado',
  SUNDAY: 'Domingo',
  daysOfTheWeek: "Día de la semana",
  schedule: "Programar",
  nonPerish: 'únicamente alimentos no perecederos',
  freshOnly: 'únicamente productos frescos',
  breakfastLunch: 'desayuno y almuerzo',
  tenMeals: 'Alimentos frescos y comidas para la semana.',
  oneMeal: 'comida por residente',
  driveThrough: {
    dt: 'En vehículo',
    wu: 'A pie',
    both: 'En vehículo y a pie',
  },
  sections: {
    foodSites: {
      header: 'Lugar de alimentos',
      eligibility: 'Cualquier residente es elegible. No se necesita identificación ni prueba de ingresos.',
      pickupDetails: 'Los residentes pueden recoger alimentos complementarios para su hogar.',
      subsections: {
        'PPR': {
          name: 'centros de Parques y Recreación de Filadelfia',
          pickupDetails: '',
        },
      },
    },
    studentMealSites: {
      header: 'Lugar de comidas para estudiantes',
      eligibility: 'Todos los niños y jóvenes son elegibles. No es necesaria la identificación. ',
      pickupDetails: '',
      subsections: {
        'PSD': {
          name: 'escuelas del Distrito Escolar de Filadelfia',
          hidePickupDetailsInGreeting: true,
          pickupDetails: '',
          eligibility: 'Todos los niños y jóvenes son elegibles. No se necesita identificación.',

        },
        'PHA': {
          name: 'centros comunitarios de la Autoridad de Vivienda de Filadelfia (PHA)',
          hidePickupDetailsInGreeting: true,
          // pickupDetails: 'Lunes 9:00 A.M. – 10:00 A.M. y 12:00 P.M. – 2:00 P.M. <br>  \
          // Martes 9:00 A.M. – 10:00 A.M. y 12:00 P.M. – 2:00 P.M. <br>\
          // Miércoles 9:00 A.M. – 10:00 A.M. y 12:00 P.M. – 2:00 P.M. <br>\
          // Jueves 9:00 A.M. – 10:00 A.M. y 12:00 P.M. – 2:00 P.M. <br>\
          // Viernes 9:00 A.M. – 10:00 A.M. y 12:00 P.M. – 2:00 P.M. <br>\
          pickupDetails: 'Las comidas se deben consumir en el lugar. Para obtener más información, visite el sitio.',
          eligibility: 'Todos los niños y jóvenes son elegibles. No se necesita identificación.',

        },
        'CHARTER': {
          name: 'escuelas charter',
          pickupDetails: '',
          eligibility: 'Todos los niños y jóvenes son elegibles. No se necesita identificación.',
          hidePickupDetailsInGreeting: true,
        },
        'PPR_StudentMeals': {
          name: 'Centros de Recreación',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'Las comidas están disponibles:<br>\
          Del 28 al 30 de dic, 3 de ene, 1 de feb, del 11 al 14 de abr.<br>\
          Los horarios de los Centros de Recreación y de las comida varían según el sitio. Todas las comidas se deben consumir en el lugar. Para obtener más información, llame o visite el Centro de Recreación.',
          eligibility: 'Todos los niños y jóvenes son elegibles. No se necesita identificación.',

        },
        'playstreets': {
          name: 'Playstreets',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'Playstreets está abierto de lunes a viernes entre las 10 a.m. y las 4 p.m. Las calles están cerradas al tráfico de automóviles. Las comidas varían según el sitio. Para obtener más información, visite el Playstreet.<br>\
          Playstreets sirve almuerzos y refrigerios.',
          eligibility: 'Todos los niños y jóvenes son elegibles. No se necesita identificación.',
        },
        'NDS': {
          name: 'Servicios de Desarrollo Nutricional',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'Los lugares podrán ofrecer comidas diarias o cajas de desayuno y almuerzo para 7 días. Contacte a los Servicios de Desarrollo Nutricional para obtener más información.',
          eligibility: 'Todos los niños y jóvenes son elegibles. No se necesita identificación.',
        },
        'Other': {
          name: 'Otros sitios para comer durante el verano',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'Meal times vary by site. For more information, visit the summer meal site.',
          eligibility: 'Todos los niños y jóvenes son elegibles. No se necesita identificación.',
        },
        'Recreation Center': {
          name: 'Centros recreativos',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'De lunes a viernes entre las 9A.M. a 3 P.M.  Las comidas varían según el sitio. Las comidas se deben consumir en el lugar.Para obtener más información, llame o visite el Centro de Recreación.',
          eligibility: 'Todos los niños y jóvenes son elegibles. No se necesita identificación.',
        },
        'Caring for Friends': {
          name: 'Caring for Friends',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'Las comidas se deben consumir en el lugar. Comúniquese con los sitios para obtener más detalles. ',
          eligibility: 'Todos los niños y jóvenes son elegibles. No es necesaria la identificación. ',
        },
        'Philabundance Summer Meal Sites': {
          name: 'Sitios de Comidas de Verano Philabundance ',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'Comúniquese con los sitios para obtener más detalles.',
          eligibility: 'Todos los niños y jóvenes son elegibles. No es necesaria la identificación. ',
        },
        'Other Summer Meal Sites':{
          name: 'Other Summer Meal Sites',
          hidePickupDetailsInGreeting: true,
          pickupDetails: 'Las comidas varían según el sitio. Las comidas se deben consumir en el lugar. Para obtener más información, visite el sitio de comidas de verano. ',
          eligibility: 'Todos los niños y jóvenes son elegibles. No es necesaria la identificación. ',
        },
      },
      custom: {
        info: '\
        Para encontrar más sitios de comidas de verano gratuitas para niños y jóvenes:  \
        <br><ul><li>Llame a la Línea Directa de Comidas de Verano al <a href="tel:215-770-4659">215-770-4659.</a></li>   \
        <li>Envíe “FOOD” o “COMIDA” al <a href="tel:304-304">304-304</a> para recibir una lista de sitios de comida cercanos.</li> \
        <li>Visite <a target="_blank" href="http://www.phillysummermeals.org">www.phillysummermeals.org</a> para encontrar sitios de comidas de verano gratuitas y jóvenes.</li></ul>\
        ',
        // info: ' Visite la <a href="https://www.philasd.org/foodservices/">página del Servicio de Comida del Distrito Escolar de Filadelfia</a> y obtenga información sobre el servicio de comidas en la escuela para los estudiantes.<br>\
        // Además, los programas de Horas Extraescolares ofrecen refrigerios y comidas a los jóvenes. \
        // Visite el <a href="https://www.phila.gov/ost/program-locator/#/">Localizador de Programas OST</a> para encontrar un programa y obtener más información.',
      },
    },
    olderAdultMealSites: {
      header: 'Lugares de comidas para adultos mayores',
      eligibility: '  Los adultos de 60 años o más son elegibles en los lugares patrocinados por la Philadelphia Corporation for Aging (PCA).\
      <i><b>Los adultos mayores deben llamar para reservar la comida con anticipación  antes de recogerlas.</b></i><br><br>\
      Los adultos de 55 años o más son elegibles en los centros para adultos mayores de Parques y Recreación. <br>\
      No es necesario realizar una reserva.',
      pickupDetails: '',
      subsections: {
        'PCA': {
          name: 'Lugares patrocinados por la PCA',
          eligibility: '\
          Los adultos de 60 años o más son elegibles en los lugares patrocinados por la Philadelphia Corporation for Aging (PCA).\
          <i><b>Los adultos mayores deben llamar para reservar la comida con anticipación  antes de recogerlas.</b></i><br><br>\
         ',
          pickupDetails: "\
          Los adultos mayores pueden reservar de 5 a 7 comidas a la semana.\
          Las fechas y horarios de búsqueda varían según el sitio. Para obtener más información y reservar comidas,\
          comuníquese con un sitio específico. La familia de un adulto mayor puede recoger las comidas, previo aviso.\
          Para obtener ayuda en otros idiomas que no sean el inglés, llame a la línea de ayuda de la PCA al \
          <a class=\"underlined\" href=\"tel:+1 (215) 765-9040\">(215) 765-9040</a>.",
        },
        'PPR_Senior': {
          name: 'centros para adultos mayores de Parques y Recreación',
          eligibility: '\
          Los adultos de 55 años o más son elegibles en los centros para adultos mayores de Parques y Recreación. <br>\
          No es necesario realizar una reserva.',
          pickupDetails: 'Los adultos mayores pueden recoger 5 comidas por semana en la mayoría de los sitios.',
        },
      },
    },

    generalMealSites: {
      header:  'Lugares de comidas generales',
      eligibility: 'Cualquier residente es elegible. No se necesita identificación ni prueba de ingresos.',
      pickupDetails: '',
      subsections: {
        'compiled': {
          name: 'Lugares de comidas generales',
          pickupDetails: 'Los días y horarios varían según el lugar.',
        },
      },
    },
    communityRefrigerators: {
      header:  'Refrigeradores comunitarios',
      eligibility: 'Cualquier persona puede visitar el refrigerador comunitario para retirar comida.',
      pickupDetails: 'Los refrigeradores comunitarios están abiertos las 24 horas al día, los 7 días de la semana, por lo que cualquier persona puede llevarse la comida disponible en cualquier momento.  \
      Los refrigeradores comunitarios están a cargo de voluntarios y organizaciones enfocados en la comunidad.  \
      La disponibilidad de comida dependerá de las donaciones.  \
      Visite el sitio web de cada una de las organizaciones a cargo de los refrigeradores comunitarios para obtener más información.',
      subsections: {
        'compiled': {
          name: 'Refrigeradores comunitarios',
          pickupDetails: '',
        },
        'Bebashi': {
          name: 'Bebashi',
        },
        'East Falls Community Fridge': {
          name: 'East Falls Community Fridge',
        },
        'Germantown Community Fridge': {
          name: 'Germantown Community Fridge',
        },
        'South Philadelphia Community Fridge': {
          name: 'South Philadelphia Community Fridge',
        },
        'Umoja Community Fridge': {
          name: 'Umoja Community Fridge',
        },
        'Fridges and Family': {
          name: 'Fridges and Family',
        },
      },
    },
    foodPantries: {
      header: 'Encuentre más recursos alimentarios y otras ayudas gratuitos:',
      intro: '',
      li1: 'Llame al <a href="tel:+311">311</a>. Llame a la despensa por anticipado para confirmar los horarios.',
      li2: 'El <a target="_blank" href="https://www.phila.gov/departments/office-of-homeless-services/">sitio web de la Oficina de Servicios para las Personas sin Hogar</a> contiene una lista de más sitios de comidas gratuitas.  ',
      li3: '<a target="_blank" href="https://communityresourceconnects.org/">Recursos Comunitarios Conecta</a> tiene alimentos y otros recursos. ',
      li4: "Encuentre un mercado de agricultores en el buscador de mercados de <a target='_blank' href='https://www.phila.gov/farmers-markets/' target='_blank'>agricultores</a> de la ciudad de Filadelfia.",
      h2:'Obtenga ayuda para solicitar beneficios: ',
      li21:'<a target="_blank" href="https://www.phila.gov/programs/benephilly/">BenePhilly</a> ayuda a solicitar beneficios públicos. Llame al 1-833-373-5868.  ',
      li22:'<a target="_blank" href="https://www.hungercoalition.org/">La Coalición contra el Hambre</a> ayuda a solicitar el SNAP. Llame al 215-430-0556 ',
      li23:'Solicite el WIC por adelantado en <a target="_blank" href="https://www.pawic.com/OnlineApplication.aspx">PA WIC.</a> El programa WIC ayuda a mujeres, infantes y niños menores de 5 años a obtener alimentos saludables e información sobre nutrición.  ',
    },
    publicBenefits: {
      header: 'Prestaciones públicas',
      eligibility: '',
      pickupDetails: '',
      subsections: {
        'compiled': {
          name: 'Prestaciones públicas',
          pickupDetails: '',
        },
        'WIC': {
          name: 'WIC',
          hidePickupDetailsInGreeting: true,
        },
        'BenePhilly': {
          name: 'BenePhilly',
          hidePickupDetailsInGreeting: true,
        },
      },
    },
  },
};
