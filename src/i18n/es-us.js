
export default {
  language: "Español",
  app: {
    title: "Buscador de comidas y alimentos",
    subtitle: "Obtenga alimentos, servicios de nutrición y beneficios públicos gratuitos",
    "bannerAlert": "Muchos establecimientos están cerrados hoy. Consulte los detalles específicos del establecimiento para obtener más información.",
    "noResults": "Lo sentimos, no se han encontrado resultados para esa búsqueda. Ajuste los filtros que ha seleccionado y vuelva a intentarlo.",
  },
  "categoryType": {
    category: "Categoría",
    "generalMealSite": "Establecimiento de comida general",
    "foodSite": "Establecimiento de distribución de alimentos",
    "studentMealSite": "Establecimiento de comida para estudiantes",
    "olderAdultMealSite": "Establecimiento de comida para adultos mayores",
    "communityRefrigerator": "Refrigerador comunitario",
    "publicBenefits": "Asistencia alimentaria y beneficios",
  },
  eligibility: "Elegibilidad",
  // "pickupDetails": "Detalles de la recogida",
  pickupDetails: "Detalles",
  details: "Detalles",
  "beforeYouGo": "Antes de ir",
  change: "Programe el cambio",
  closure: "Cierre temporal",
  "holidayClosure": "Este sitio está temporalmente cerrado por ",
  "futureHolidayClosure": "Este sitio estará temporalmente cerrado por ",
  "weatherClosure": "Este sitio está temporalmente cerrado debido al clima.",
  "temporaryClosure": "Este sitio está temporalmente cerrado.",
  schedule: "Programa",
  "nonPerish": "solo artículos no perecederos",
  "freshOnly": "solo productos frescos",
  "breakfastLunch": "Desayuno y almuerzo",
  "tenMeals": "Los establecimientos brindan 7 desayunos, 7 almuerzos y fruta fresca cada semana.",
  "oneMeal": "1 comida por residente.",
  "driveThrough": {
    dt: "Servicio en el auto",
    wu: "Servicio a pie",
    both: "Servicio en el auto y a pie",
  },
  "daysAndTimesVaryBySite": "Los días y los horarios varían según el establecimiento.",
  sections: {
    "foodSites": {
      header: "Establecimientos de distribución de alimentos",
      eligibility: "Cualquier residente es apto. No se requiere identificación o comprobante de ingresos.",
      "pickupDetails": {
        "p1": "Los establecimientos de distribución de alimentos ofrecen alimentos y comestibles complementarios.",
        "p3": "Según la ubicación, los residentes pueden recibir:",
        "li1": "Cajas de alimentos preenvasadas.",
        "li2": "Los alimentos que elijan de una despensa.",
        "li3": "Los alimentos que elijan de un refrigerador comunitario.",
      },
      subsections: {
        "PHILABUNDANCE": {
          name: "Philabundance",
        },
        "PHILABUNDANCE/SHARE FOOD PROGRAM": {
          name: "Philabundance/Programa Compartir alimentos",
        },
        "SHARE FOOD PROGRAM": {
          name: "Programa Compartir alimentos",
        },
        "Nutritional Development Services": {
          name: "Servicios de Desarrollo Nutricional",
        },
        "Small Things Philly": {
          name: "Small Things Philly",
        },
        "Community Refrigerators": {
          name: "Refrigerador comunitario",
          eligibility: "Cualquier persona puede visitar el refrigerador comunitario para retirar alimentos.",
          "pickupDetails": "Los refrigeradores comunitarios están abiertos las 24 horas del día, los 7 días de la semana y cualquier persona puede retirar los alimentos disponibles en cualquier momento.             Los refrigeradores comunitarios están a cargo de organizaciones enfocadas en la comunidad y voluntarios.             La disponibilidad de alimentos dependerá de las donaciones.             Visite el sitio web de cada refrigerador comunitario para obtener más información.",
        },
      },
    },
    "generalMealSites": {
      header: "Establecimientos de comida general",
      eligibility: "Cualquier residente es apto. No se requiere identificación o comprobante de ingresos.",
      "pickupDetails": {
        "p1": "Los establecimientos de comida general ofrecen comidas listas para consumir.",
      },
      subsections: {
        "Office of Homeless Services": {
          name: "Oficina de Servicios para las Personas sin Hogar",
        },
      },
    },
    olderAdultMealSites: {
      header: "Establecimientos de comida para la tercera edad",
      eligibility: {
        p1: "La edad de elegibilidad varía según el establecimiento.",
      },
      pickupDetails: {
        p1: "Los establecimientos de comida para adultos mayores ofrecen comidas listas para consumir.",
        p3: "Los residentes pueden retirar cinco comidas por semana en la mayoría de los establecimientos. En algunos casos, se deben reservar las comidas con antelación.",
      },
      subsections: {
        'PCA': {
          name: "Establecimientos con apoyo de PCA",
          eligibility: {
            li1: "Los adultos a partir de 60 años son aptos para los establecimientos que apoya la Philadelphia Corporation for Aging (PCA). Sus cónyuges son aptos también, independientemente de su edad.",
            p2: "Para obtener información sobre otros servicios o para obtener ayuda en otro idioma, llame a la línea de ayuda de la PCA al <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a>.",
          },
          pickupDetails: {
            p1: "Los establecimientos de comida para adultos mayores ofrecen comidas listas para consumir.",
            p3: "En algunos casos, se deben reservar las comidas con antelación.",
          },
        },
        'specialPCA': {
          eligibility: {
            li1: "Los adultos a partir de 60 años son aptos para los establecimientos que apoya la Philadelphia Corporation for Aging (PCA). Sus cónyuges son aptos también, independientemente de su edad.",
            p2: "Para obtener información sobre otros servicios o para obtener ayuda en otro idioma, llame a la línea de ayuda de la PCA al <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a>.",
          },
          pickupDetails: {
            p1: "Los establecimientos de comida para adultos mayores ofrecen comidas listas para consumir.",
            p3: 'Los residentes pueden recoger cinco comidas por semana en este sitio. Las comidas deben reservarse con anticipación.',
          },
        },
        'PPR_Senior': {
          name: "Centros para adultos mayores de Parques y Recreación de Filadelfia",
          eligibility: {
            li1: "Los adultos a partir de 55 años son aptos para los centros para adultos mayores de Parques y Recreación de Filadelfia.",
            p2: "Para obtener información sobre otros servicios o para obtener ayuda en otro idioma, llame a la línea de ayuda de la PCA al <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a>.",
          },
          pickupDetails: {
            p1: "Los establecimientos de comida para adultos mayores ofrecen comidas listas para consumir.",
            p3: "Los residentes pueden retirar cinco comidas por semana en la mayoría de los establecimientos.",
          },
        },
      },
    },
    "studentMealSites": {
      header: "Establecimientos de comida para estudiantes",
      eligibility: "Los niños y los jóvenes hasta los 18 años inclusive son aptos. No es necesario tener identificación.",
      "pickupDetails": {
        "p1": "Los establecimientos de comida para estudiantes ofrecen comidas listas para consumir.",
      },
      "otherResources": {
        "p1": "Para encontrar más comidas de verano para personas jóvenes:",
        "li1": "Llame a la Línea directa de Comidas de Verano al <a href=\"tel:215-770-4659\">(215) 770-4659</a>.",
        "li2": "Mensaje de texto “ALIMENTOS” o “COMIDA” al <a href=\"tel:304-304\">304-304</a>.",
        "li3": "Visite <a target=\"_blank\" href=\"http://www.phillysummermeals.org\">www.phillysummermeals.org</a>.",
      },
      subsections: {
        "PHA": {
          name: "Centros comunitarios de la Autoridad de Vivienda de Filadelfia (PHA)",
          "pickupDetails": "Las comidas se deben consumir en el lugar. Para obtener más información, visite el sitio.",
        },
        playstreets: {
          name: "Programa Playstreets",
          "pickupDetails": "El programa Playstreets está abierto de lunes a viernes, de 10:00 a.m. a 4:00 p.m. Las calles se cierran al tráfico automovilístico. Los horarios de las comidas varían según el establecimiento. Para obtener más información, visite Playstreet.<br>            El programa Playstreets sirve almuerzos y refrigerios.",
        },
        "NDS": {
          name: "Servicios de Desarrollo Nutricional",
          "pickupDetails": "Las comidas se deben consumir en el lugar. Para obtener más detalles, comuníquese con NDS.",
        },
        "Recreation Center": {
          name: "Centros de recreación",
          "pickupDetails": "De lunes a viernes, de 9:00 a.m. a 3:00 p.m. Los horarios de las comidas varían según el establecimiento. Las comidas se deben consumir en el lugar. Para obtener más información, llame o visite el Centro de Recreación.",
        },
        "Caring for Friends": {
          name: "Caring for Friends",
          "pickupDetails": "Las comidas se deben consumir en el lugar. Para obtener más detalles, comuníquese con el establecimiento.",
        },
        "Philabundance Summer Meal Sites": {
          name: "Establecimientos de comidas de verano de Philabundance",
          "pickupDetails": "Para obtener más detalles, comuníquese con el establecimiento.",
        },
        "Other Summer Meal Sites": {
          name: "Otros establecimientos de comida de verano",
          "pickupDetails": "Los horarios de las comidas varían según el establecimiento. Las comidas se deben consumir en el lugar. Para obtener más información, visite el sitio de comidas de verano.",
        },
      },
    },
    "publicBenefits": {
      header: "Asistencia alimentaria y beneficios",
      eligibility: "La elegibilidad varía según el establecimiento.",
      "pickupDetails": {
        "p1": "Según la ubicación, los residentes pueden:",
        "li1": "Conocer los beneficios públicos e inscribirse.",
        "li2": "Obtener servicios de nutrición y apoyo.",
        "li3": "Obtener referencias de servicios sociales o atención de la salud.",
        "p2": "Los días, los horarios y los servicios varían según el establecimiento.",
      },
      subsections: {
        "WIC": {
          name: "WIC",
          eligibility: "WIC atiende a personas embarazadas o que han tenido un bebé recientemente y niños menores de cinco años, incluidos los niños de crianza. Para recibir WIC, debe cumplir <a href=\"https://pawic.com/IncomeGuidelines.aspx\" target=\"_blank\">las pautas de ingresos</a>.            ",
          "pickupDetails": "WIC proporciona servicios de nutrición, apoyo a la lactancia y referencias para atención médica y servicios sociales. Además, a través de WIC puede recibir beneficios que lo ayuden a comprar alimentos saludables. Para empezar, llame a la oficina de WIC que planea visitar.            ",
        },
        "BenePhilly": {
          name: "BenePhilly",
          eligibility: "Cualquier residente es apto para visitar un centro BenePhilly.            ",
          "pickupDetails": "BenePhilly ofrece apoyo personal gratuito para ayudar a los residentes a inscribirse en los beneficios públicos. Estos programas pueden ayudarle a pagar comestibles, medicamentos, seguro médico y servicios públicos. Los días y los horarios varían según el lugar.<br><br>Antes de ir, llame al centro BenePhilly que planea visitar.            ",
        },
      },
    },
    "moreResources": {
      header: "Más recursos",
      "p1": "¿Desea obtener más información? Explore otras opciones para obtener <a href=\"https://www.phila.gov/services/mental-physical-health/find-free-food-or-meals/\" target=\"_blank\">alimentos gratuitos y apoyo adicional</a> o ayuda para <a href=\"https://www.phila.gov/services/payments-assistance-taxes/financial-services-for-residents/get-free-help-applying-for-public-benefits/\" target=\"_blank\">solicitar beneficios públicos</a>.",
    },
  },
  time: {
    category: "Horarios",
    morning: "Mañana (antes del mediodía)",
    afternoon: "Tarde (desde el mediodía hasta las 5:00 p.m.)",
    evening: "Noche (después de las 5:00 p.m.)",
  },
  "checkSite": "Los detalles del establecimiento están sujetos a cambios. Antes de ir, comuníquese con el establecimiento para confirmar los horarios y servicios.",
  "otherResources": "Otros recursos",
};