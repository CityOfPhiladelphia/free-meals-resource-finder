// this is the base-config for resource-finder
// the point of this file is that it will move outside the project
// (so that settings we put in it can be used by other projects)
// and be pulled in with an axios call or something
// (we might not need to use axios with new vue async tools)
// if that is not needed, we can move this info to main.js

// turn off console logging in production
if (process.env.NODE_ENV === 'production') {
  console.log = console.info = console.debug = console.error = function () {};
}
console.log('main.js process.env.NODE_ENV:', process.env.NODE_ENV, 'process.env.VUE_APP_PUBLICPATH:', process.env.VUE_APP_PUBLICPATH);

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons/faHandHoldingHeart';
library.add(faExclamationTriangle, faHandHoldingHeart);


// import pinboard
import pinboard from '@phila/pinboard/src/main.js';

// import greeting from './general/greeting';
import legendControls from './general/legendControls';

// data-sources
// import seniorSites from './data-sources/senior-sites';
// import distributionSites from './data-sources/distribution-sites';
// import schoolMealSites from './data-sources/school-meal-sites';
// import youthActivitySites from './data-sources/youth-activity-sites';
import covidFreeMealSites from './data-sources/covid-free-meal-sites';
// import parksSites from './data-sources/parks-sites.js';
// import compiled from './data-sources/compiled';
var BASE_CONFIG_URL = 'https://cdn.jsdelivr.net/gh/cityofphiladelphia/mapboard-default-base-config@6126861722cee9384694742363d1661e771493b9/config.js';

import expandCollapseContent from './components/ExpandCollapseContent.vue';
import customGreeting from './components/customGreeting.vue';
const customComps = {
  'expandCollapseContent': expandCollapseContent,
  'customGreeting': customGreeting,
};

pinboard({
  app: {
    logoAlt: 'City of Philadelphia',
    type: 'covidFreeMealSites',
    // type: 'compiled',
  },
  gtag: {
    category: 'rf-food',
  },
  comboSearch: {
    dropdown: [ 'address' ],
  },
  locationInfo: {
    siteName: function(item, transforms) {
      // console.log('in locationInfo.siteName, transforms:', transforms);
      let value;

      if (item._featureId.includes('covidFreeMealSites')) {
        value = item.attributes.site_name;
      } else if (item._featureId.includes('parksSites')) {
        value = transforms.titleCase.transform(item.attributes.site_name);
      }
      return value;
    },
  },
  customComps,
  // hiddenRefine: {
  //
  // },
  refine: {
    type: 'categoryField_value',
    value: function(item) {
      // console.log('value is running, item:', item);
      let value;
      // if (item.category_type) {
      //   value = item.category_type;
      // } else if (item.CATEGORY_TYPE) {
      //   value = item.CATEGORY_TYPE;
      // }
     
      if (item.attributes.category_type == "Senior Meal Site") {
        value = "Older adult meal site";
      } else

      if (item.attributes.category_type) {
        value = item.attributes.category_type;
      } else if (item.attributes.CATEGORY_TYPE) {
        value = item.attributes.CATEGORY_TYPE;
      }
      return value;
    },
  },
  holidays: {
    // days: [ 'MONDAY' ],
    // exceptions: [
    //   'Richard Allen Preparatory Charter School',
    //   'Westpark Apartments',
    //   'Raymond Rosen Manor',
    //   'Thomas Paine Plaza',
    //   'Philadephila Parking Authority lot',
    // ],
  },
  alerts: {
    modal: {
      enabled: false,
      header: 'Winter storm and site closures',
      body: '<p>Several food sites will be closed on Thursday, December 17 due to the forecasted storm. Check your preferred location to see if it will be closed. Please note that last-minute closures may occur.</p>',
      // header: 'Student meal sites',
      // body: '<ul><li>Effective September 3. Student ID is required.</li><li>To find additional food near you, text your zip code to <br>1 (800) 548-6479.</li></ul>',

    },
    header: {
      type: 'alertBanner',
      enabled: function(state) {
        return state.alertResponse === 'alertHours';
      },
      content: '<b>Until further notice:</b> Please call ahead or check hours of operation while business restrictions are still in effect.',
    },
    alertChecks: [
    //   {
    //     type: 'alertHours',
    //     condition: [
    //       {
    //         'day': 1,
    //         'startTime': '1:00',
    //         'endTime': '23:59',
    //       },
    //     ],
    //   },
    ],
  },
  markerType: 'circle-marker',
  circleMarkers:{
    circleColors: {
      'Food Site': '#0F4D90',
      'Senior Meal Site': '#D67D00',
      // 'Older Adult Meal Site': '#D67D00',
      'Student Meal Site': '#721817',
      'General Meal Site': '#506D0A',
    },
    weight: 0,
    size: 16,
    mobileSize: 20,
  },
  legendControls,
  baseConfig: BASE_CONFIG_URL,
  cyclomedia: {
    enabled: false,
    measurementAllowed: false,
    popoutAble: true,
    recordingsUrl: 'https://atlas.cyclomedia.com/Recordings/wfs',
    username: process.env.VUE_APP_CYCLOMEDIA_USERNAME,
    password: process.env.VUE_APP_CYCLOMEDIA_PASSWORD,
    apiKey: process.env.VUE_APP_CYCLOMEDIA_API_KEY,
  },
  dataSources: {
    covidFreeMealSites,
    // parksSites,
    // compiled,
  },
  router: {
    enabled: false,
  },
  projection: function(item) {
    if (item._featureId.includes('covidFreeMealSites')) {
      return '3857';
    } else if (item._featureId.includes('parksSites')) {
      return '2272';
    }
  },
  geocoder: {
    url(input) {
      const inputEncoded = encodeURIComponent(input);
      return `//api.phila.gov/finder/v1/search/${inputEncoded}`;
    },
    params: {
      include_units: true,
    },
  },
  footer: {
    'HowToUse': false,
    'OtherLinks': {
      locations: {
        text: 'viewAccessible',
        link: 'https://www.phila.gov/programs/coronavirus-disease-2019-covid-19/updates/how-you-can-help/covid-19-food-distribution-sites/#/',
      },
    },
  },
  map: {
    // type: 'leaflet',
    type: 'mapbox',
    containerClass: 'map-container',
    defaultBasemap: 'pwd',
    center: [ -75.163471, 39.953338 ],
    minZoom: 11,
    maxZoom: 25,
    shouldInitialize: true,

    zoom: 12,
    geocodeZoom: 15,
    imagery: {
      enabled: false,
    },
    basemaps: {
      pwd: {
        url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer',
        tiledLayers: [
          'cityBasemapLabels',
        ],
        type: 'featuremap',
        attribution: 'Parcels: Philadelphia Water',
      },
    },
    tiledLayers: {
      cityBasemapLabels: {
        url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer',
        zIndex: '3',
      },
    },
  },
  mbStyle: {
    version: 8,
    sources: {
      pwd: {
        tiles: [
          'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer/tile/{z}/{y}/{x}',
        ],
        type: 'raster',
        tileSize: 256,
      },
    },
    layers: [
      {
        id: 'pwd',
        type: 'raster',
        source: 'pwd',
      },
    ],
  },
  basemapSources: {
    pwd: {
      source: {
        tiles: [
          'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer/tile/{z}/{y}/{x}',
          // '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer/tile/{z}/{y}/{x}'
        ],
        type: 'raster',
        tileSize: 256,
      },
      layer: {
        id: 'pwd',
        type: 'raster',
      },
    },
    imagery2019: {
      source: {
        tiles: [
          'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2019_3in/MapServer/tile/{z}/{y}/{x}',
          // '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer/tile/{z}/{y}/{x}'
        ],
        type: 'raster',
        tileSize: 256,
      },
      layer: {
        id: 'imagery2019',
        type: 'raster',
      },
    },
  },
  basemapLabelSources:{
    cityBasemapLabels: {
      source: {
        tiles: [ 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer/tile/{z}/{y}/{x}' ],
        type: 'raster',
        tileSize: 256,
      },
      layer: {
        id: 'cityBasemapLabels',
        type: 'raster',
      },
    },
    imageryBasemapLabels: {
      source: {
        tiles: [ 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_Labels/MapServer/tile/{z}/{y}/{x}' ],
        type: 'raster',
        tileSize: 256,
      },
      layer: {
        id: 'imageryBasemapLabels',
        type: 'raster',
      },
    },
  },
  sections: {
    foodSites: {
      title: 'Food sites',
      titleSingular: 'Food Site',
      color: '#0F4D90',
      subsections: [ 'none' ],
    },
    studentMealSites: {
      title: 'Student meal sites',
      titleSingular: 'Student Meal Site',
      color: '#721817',
      subsections: [ 'PSD', 'PHA', 'CHARTER', 'PPR_StudentMeals', 'playstreets', 'NDS', 'Other' ],
    },
    olderAdultSites: {
      title: 'Older adult meal site',
      titleSingular: 'Older Adult Meal Site',
      color: '#D67D00',
      subsections: [ 'PCA', 'PPR_Senior' ],
    },
    generalMealSites: {
      title: 'General meal sites',
      titleSingular: 'General Meal Site',
      color: '#506D0A',
      subsections: [[ 'Broad Street Ministry', 'Muslims Serve', 'Kensington Meal Partners', 'SEAMAAC South Philly', 'Office of Homeless Services' ]],
    },
  },
  subsections: {
    '': 'foodSites',
    'Broad Street Ministry': 'generalMealSites',
    'CHARTER': 'studentMealSites',
    'Kensington Meal Partners': 'generalMealSites',
    'Muslims Serve': 'generalMealSites',
    'NDS': 'studentMealSites',
    'SEAMAAC South Philly': 'generalMealSites',
    'PHA': 'studentMealSites',
    'PHILABUNDANCE': 'foodSites',
    'PHILABUNDANCE/SHARE FOOD PROGRAM': 'foodSites',
    'PPR': 'foodSites',
    'PSD': 'studentMealSites',
    'SENIOR SITE': 'olderAdultSites',
    'SHARE FOOD PROGRAM': 'foodSites',
    'PCA': 'olderAdultSites',
    'PPR_Senior': 'olderAdultSites',
    'PPR_StudentMeals': 'studentMealSites',
    'playstreets': 'studentMealSites',
    'Recreation Center': 'studentMealSites',
    'Office of Homeless Services': 'generalMealSites',
    'Other': 'studentMealSites',
  },
  pickupDetailsExceptions: {
    condition: function(item) {
      let value = false;
      if (item.attributes.Site_Key === 163) {
        value = true;
      }
      return value;
    },
    value: 'dt',
  },
  i18n: {
    enabled: true,
    data: {
      locale: 'en-US',
      messages: {
        'en-US': {
          language: 'English',
          app: {
            title: 'Food distribution sites',
            subtitle: 'Find free food and meals',
            bannerAlert: 'Many sites are closed today. Check specific site details for more information.',
            noResults: 'We\'re sorry, there are no results for that search. Adjust the filters you\'ve selected and try again.',
          },
          viewAccessible: 'View accessible list of site locations',
          'General Meal Site': 'General meal site',
          'Food Site': 'Food site',
          'Student Meal Site': 'Student meal site',
          'Older Adult Meal Site': 'Older adult meal site',
          eligibility: 'Eligibility',
          betaTag: 'Beta',
          pickupDetails: 'Pickup details',
          beforeYouGo: 'Before you go',
          change: 'Schedule change',
          closure: 'Temporary closure',
          checkSite: 'Check the specific site information. Hours are subject to change.',
          hoursVary: 'Hours and availability varies.',
          MONDAY: 'Monday',
          TUESDAY: 'Tuesday',
          WEDNESDAY: 'Wednesday',
          THURSDAY: 'Thursday',
          FRIDAY: 'Friday',
          SATURDAY: 'Saturday',
          SUNDAY: 'Sunday',
          nonPerish: 'non-perishable items only',
          freshOnly: 'fresh produce only',
          breakfastLunch: 'Breakfast and lunch',
          ndsMeals: 'Sites may provide daily meals or 7-day breakfast and lunch boxes. Contact NDS for more details.',
          tenMeals: 'Sites provide 7 breakfast and 7 lunch meals and fresh fruit each week.',
          oneMeal: '1 meal per resident',
          driveThrough: {
            dt: 'Drive-thru',
            wu: 'Walk-up',
            both: 'Drive-thru & walk-up',
          },
          sections: {
            foodSites: {
              header: 'Food sites',
              eligibility: 'Any resident is eligible. No ID or proof of income is required.',
              pickupDetails: 'Residents can up pick supplemental food for their household.',
              subsections: {
                'PHILABUNDANCE': {
                  name: 'Philabundance',
                },
                'PHILABUNDANCE/SHARE FOOD PROGRAM': {
                  name: 'Philabundance/Share Food Program',
                },
                'SHARE FOOD PROGRAM': {
                  name: 'Share Food Program',
                },
                'PPR': {
                  name: 'Philadelphia Parks & Recreation centers',
                  pickupDetails: '',
                },
              },
            },
            studentMealSites: {
              header: 'Student meal sites',
              eligibility: 'Check the specific site information.',
              pickupDetails: '',
              subsections: {
                'PSD': {
                  name: 'Philadelphia School District schools',
                  pickupDetails: '',
                  eligibility: 'All children and youth are eligible. No ID is required.',
                },
                'PHA': {
                  name: 'Philadelphia Housing Authority (PHA) community centers',
                  pickupDetails: '',
                  eligibility: 'All children and youth are eligible. No ID is required.',
                },
                'PPR_StudentMeals': {
                  name: 'Philadelphia Parks & Recreation centers',
                  pickupDetails: 'Meals are available:<br>\
                  Dec 28 - 30, Jan 3, Feb 1, April 11-14.<br>\
                  Recreation Center hours and meal times vary by site. All meals must be eaten on site. For more information, call or visit the Recreation Center.',
                  eligibility: 'All children and youth are eligible. No ID is required.',
                },
                'CHARTER': {
                  name: 'Charter schools',
                  pickupDetails: '',
                  eligibility: 'All children and youth are eligible. No ID is required.',
                },
                'playstreets': {
                  name: 'Playstreets',
                  hidePickupDetailsInGreeting: true,
                  pickupDetails: 'Playstreets are open Monday to Friday between 10 a.m. to 4 p.m. Streets are closed to automobile traffic. Meal times vary by site. For more information, visit the Playstreet.<br><br>Playstreets serve lunch and a snack.',
                  eligibility: 'All children and youth are eligible. No ID is required.',
                },
                'NDS': {
                  name: 'Nutritional Development Services',
                  hidePickupDetailsInGreeting: true,
                  pickupDetails: 'Sites may provide daily meals or 7-day breakfast and lunch boxes. Contact Nutritional Development Services for more details.',
                  eligibility: 'All children and youth are eligible. No ID is required.',
                },
                'Other': {
                  name: 'Other Summer Meal Sites',
                  hidePickupDetailsInGreeting: true,
                  pickupDetails: 'Meal times vary by site. For more information, visit the summer meal site.',
                  eligibility: 'All children and youth are eligible. No ID is required.',
                },
                'Recreation Center': {
                  name: 'Recreation Centers',
                  hidePickupDetailsInGreeting: true,
                  pickupDetails: 'Recreation Centers are open Monday to Friday between 9 a.m. to 3 p.m. Meal times vary by site. For more information, call or visit the Recreation Center.',
                  eligibility: 'All children and youth are eligible. No ID is required.',
                },
              },
              custom: {
                info: '\
                Check back for updates on food distribution during school breaks.\
                <br>Visit the School District of Philadelphia\'s \
                <a href="https://www.philasd.org/foodservices">Food Services page</a>\
                for information about in-school meal service for students.\
                ',
              },
            },
            olderAdultSites: {
              header: 'Older adult meal sites',
              eligibility: '\
                Adults 60 and over are eligible at sites supported by the Philadelphia\
                Corporation for Aging (PCA). \
                <i><b>Older adults must call ahead to reserve meals prior to pickup.</b></i><br><br>\
                Adults 55 and over are eligible at the Parks & Recreation older adult centers.<br>\
                No reservation necessary.\
              ',
              pickupDetails: '',
              subsections: {
                'PCA': {
                  name: 'PCA-supported sites',
                  eligibility: '\
                    Adults 60 and over are eligible at sites supported by the Philadelphia\
                    Corporation for Aging (PCA). \
                    <i><b>Older adults must call ahead to reserve meals prior to pickup.</b></i><br><br>\
                  ',
                  pickupDetails: "\
                    Older adults can reserve 5 to 7 meals per week.<br>\
                    Pickup dates and times vary by site.\
                    For more information and to reserve meals, contact a specific site.\
                    An older adult's family may pick up meals, with prior arrangement.\
                    Meals may also be home delivered if needed.\
                    To get help in languages other than English, call the PCA helpline at\
                    <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a></b>.\
                  ",
                },
                'PPR_Senior': {
                  name: 'Philadelphia Parks & Recreation older adult centers',
                  eligibility: '\
                    Adults 55 and over are eligible at the Parks & Recreation older adult centers.<br>\
                    No reservation necessary.\
                  ',
                  pickupDetails: '\
                    Older adults can pick up 5 meals per week at most sites.\
                  ',
                },
                'SENIOR SITE': {
                  name: 'Older adult site',
                },

              },
            },
            generalMealSites: {
              header:  'General meal sites',
              eligibility: 'Any resident is eligible. No ID or proof of income is required.',
              pickupDetails: '',
              subsections: {
                'compiled': {
                  name: 'General sites',
                  pickupDetails: 'Days and times vary by site. One meal per resident.',
                },
                'Broad Street Ministry': {
                  name: 'Broad Street Ministry',
                },
                'Kensington Meal Partners': {
                  name: 'Kensington Meal Partners',
                },
                'Muslims Serve': {
                  name: 'Muslims Serve',
                },
                'SEAMAAC South Philly': {
                  name: 'SEAMAAC South Philly',
                },
                'Office of Homeless Services': {
                  name: 'Office of Homeless Services',
                },
              },
            },

            foodPantries: {
              header: 'Food pantries',
              intro: 'These sites supplement the existing food pantry network. To find a food pantry near you:',
              li1: 'Call <b><a class="underlined" href="tel:+311">311</a></b>. Make sure to call the pantry in advance to confirm their hours.',
              li2: 'Call the WhyHunger hotline at <b><a class="underlined" href="tel:+18005486479">1-800-5HUNGRY</a></b> or text your ZIP code to <b><a class="underlined" href="tel:+18005486479">1-800-548-6479</a></b> to receive a list of nearby food pantries.',
              li3: 'Visit the <b><a href="https://communityresourceconnects.org/" class="underlined">Community Resource Connects</a></b> website to find food and other resources in your area.',
            },
          },
        },
        'es': {
          language: 'Español',
          app: {
            title: 'Lugares de distribución de alimentos',
            subtitle: 'Encuentre alimentos y comidas gratuitas',
            bannerAlert: 'Muchos lugares están cerrados hoy. Consulte los detalles específicos del lugar para obtener más información.',
          },
          'General Meal Site': 'Lugares de comidas generales',
          'Food Site': 'Lugar de alimentos',
          'Student Meal Site': 'Lugar de comidas para estudiantes',
          'Older Adult Meal Site': 'Lugar de comidas para adultos mayores',
          eligibility: 'Elegibilidad',
          pickupDetails: 'Detalles y horarios de retiro',
          beforeYouGo: 'Antes de ir',
          change: 'Cambio de horarios',
          closure: 'Cierre temporal',
          checkSite: 'Verifique la información específica del lugar. Los horarios pueden cambiar.',
          hoursVary: 'Los horarios y la disponibilidad pueden variar.',
          MONDAY: 'Lunes',
          TUESDAY: 'Martes',
          WEDNESDAY: 'Miércoles',
          THURSDAY: 'Jueves',
          FRIDAY: 'Viernes',
          SATURDAY: 'Sábado',
          SUNDAY: 'Domingo',
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
              eligibility: 'Verifique la información específica del lugar.',
              pickupDetails: 'Los días y horarios varían según el lugar.',
              subsections: {
                'PSD': {
                  name: 'escuelas del Distrito Escolar de Filadelfia',
                  pickupDetails: '',
                  eligibility: 'Todos los niños y jóvenes son elegibles. No se necesita identificación.',

                },
                'PHA': {
                  name: 'centros comunitarios de la Autoridad de Vivienda de Filadelfia (PHA)',
                  pickupDetails: '',
                  eligibility: 'Todos los niños y jóvenes son elegibles. No se necesita identificación.',

                },
                'CHARTER': {
                  name: 'escuelas charter',
                  pickupDetails: '',
                  eligibility: 'Todos los niños y jóvenes son elegibles. No se necesita identificación.',

                },
                'PPR_StudentMeals': {
                  name: 'Centros de Recreación',
                  pickupDetails: 'Las comidas están disponibles:<br>\
                  Del 28 al 30 de dic, 3 de ene, 1 de feb, del 11 al 14 de abr.<br>\
                  Los horarios de los Centros de Recreación y de las comida varían según el sitio. Todas las comidas se deben consumir en el lugar. Para obtener más información, llame o visite el Centro de Recreación.',
                  eligibility: 'Todos los niños y jóvenes son elegibles. No se necesita identificación.',

                },
                'playstreets': {
                  name: 'Playstreets',
                  pickupDetails: 'Playstreets estarán abiertas de lunes a viernes de 10:00 a. m. a 4:00 p. m. Las calles permanecerán cerradas para la circulación de automóviles. Los horarios de comida variarán de acuerdo con el lugar. Para obtener más información, visite Playstreets.<br><br>En Playstreets se servirán almuerzos y meriendas.',
                  eligibility: 'Todos los niños y jóvenes son elegibles. No se necesita identificación.',
                },
                'NDS': {
                  name: 'Servicios de Desarrollo Nutricional',
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
                  pickupDetails: 'Los centros recreativos estarán abiertos de lunes a viernes de 9:00 a. m. a 3:00 p. m. Los horarios de comida varían según el lugar. Para obtener más información, llame o visite el centro recreativo.',
                  eligibility: 'Todos los niños y jóvenes son elegibles. No se necesita identificación.',
                },
              },
              custom: {
                info: '\
                Vuelva a consultar las actualizaciones sobre la distribución de comida durante los recreos. \
                <br>Visite la \
                <a href="https://www.philasd.org/foodservices">página del Servicio de Comida</a>\
                del Distrito Escolar de Filadelfia y obtenga información sobre el servicio de comidas en la escuela para los estudiantes.\
                ',
              },
            },
            olderAdultSites: {
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
                  pickupDetails: 'Los días y horarios varían según el lugar. 1 comida por residente',
                },
              },
            },
            foodPantries: {
              header:  'Bancos de alimentos',
              intro: 'Estos lugares complementan la red de bancos de alimentos existente. Para encontrar un banco de alimentos cerca de su ubicación:',
              li1: 'Llame al <b><a class="underlined" href="tel:+311">311</a></b>. Asegúrese de llamar al banco de alimentos con anticipación para confirmar sus horarios.',
              li2: 'Llame a la línea directa de WhyHunger al <b><a class="underlined" href="tel:+18005486479">1-800-5HUNGRY</a></b> o envíe un mensaje de texto con su código postal al <b><a class="underlined" href="tel:+18005486479">1-800-548-6479</a></b> para recibir una lista de los bancos de alimentos cercanos a su ubicación.',
              li3: 'Visite el sitio web <a class="underlined" href="https://communityresourceconnects.org/">Community Resource Connects</a> para encontrar alimentos y otros recursos en su zona.',
            },
          },
        },
        'ch': {
          language: '中文',
          app: {
            title: '食品分发地点',
            subtitle: '查找免费的食品和用餐服务',
            bannerAlert: '今天很多地点均关闭。有关更多信息，请查看具体地点详细信息。',
          },
          'General Meal Site': '常规餐食供应场所',
          'Food Site': '食品地点',
          'Student Meal Site': '学生用餐场所',
          'Older Adult Meal Site': '年长者用餐场所',
          eligibility: '合格标准',
          pickupDetails: '取餐详情及时间',
          beforeYouGo: '您出发前',
          change: '日程表变更',
          closure: '临时关闭',
          checkSite: '查看特定场所的信息。 时间有可能会变动。',
          hoursVary: '时间和可用性各不相同。',
          MONDAY: '星期一',
          TUESDAY: '星期二',
          WEDNESDAY: '星期三',
          THURSDAY: '星期四',
          FRIDAY: '星期五',
          SATURDAY: '星期六',
          SUNDAY: '星期日',
          nonPerish: '仅为非易腐物品',
          freshOnly: '仅为新鲜农产品',
          breakfastLunch: '早餐和午餐',
          tenMeals: '本周提供新鲜的食物和膳食。',
          oneMeal: '1 每个居民用餐',
          driveThrough: {
            dt: '免下车',
            wu: '步行',
            both: '免下车和步行',
          },
          sections: {
            foodSites: {
              header: '食品地点',
              eligibility: '所有居民都合格。 不需身份证或收入证明。',
              pickupDetails: '居民可以为他们的家庭领取补充食物。',
              subsections: {
                'PPR': {
                  name: '费城公园和娱乐中心',
                  pickupDetails: '',
                },
              },
            },
            studentMealSites: {
              header: '学生用餐场所',
              eligibility: '查看特定场所的信息。',
              pickupDetails: '日期和时间会根据场所而有所不同。',
              subsections: {
                'PSD': {
                  name: '费城学区',
                  pickupDetails: '',
                  eligibility: '所有儿童和青年人都合格。 不需要出示身份证件。',
                },
                'PHA': {
                  name: '费城住房管理局(PHA)社区中心',
                  pickupDetails: '',
                  eligibility: '所有儿童和青年人都合格。 不需要出示身份证件。',

                },
                'CHARTER': {
                  name: '特许学校',
                  pickupDetails: '',
                  eligibility: '所有儿童和青年人都合格。 不需要出示身份证件。',

                },
                'PPR_StudentMeals': {
                  name: '费城公园和娱乐中心',
                  pickupDetails: '提供餐食： 12月28日-30日、1月3日、2月1日、4月11日-14日 <br>\
                  娱乐中心的开放时间和用餐时间因地点而异。 所用餐食须在现场食用。 欲了解更多信息，请联系或访问娱乐中心。 ',
                  eligibility: '所有儿童和青年人都合格。 不需要出示身份证件。',

                },
                'playstreets': {
                  name: 'Playstreets',
                  pickupDetails: 'Playstreets 的开放时间为周一至周五上午 10 点至下午 4 点。在此期间，街道将禁行车辆。各个场所的供餐时间可能不同。如需更多信息，请访问 Playstreet。<br><br>Playstreets 供应午餐和小吃。',
                  eligibility: '所有儿童和青年人都合格。 不需要出示身份证件。',
                },
                'NDS': {
                  name: '营养发育服务',
                  pickupDetails: '餐饮场所可能供应一日三餐或一周七天的早餐和午餐餐盒。联系营养发育服务了解更多详情。',
                  eligibility: '所有儿童和青年人都合格。 不需要出示身份证件。',
                },
                'Other': {
                  name: '其他夏季餐饮场所',
                  pickupDetails: '各个场所的供餐时间可能不同。如需更多信息，请访问夏季餐饮场所。',
                  eligibility: '所有儿童和青年人都合格。 不需要出示身份证件。',
                },
                'Recreation Center': {
                  name: '康乐中心',
                  pickupDetails: '娱乐中心的开放时间为周一至周五上午 9 点至下午 3 点。各个场所的供餐时间可能不同。如需更多信息，请致电或访问康乐中心。',
                  eligibility: '所有儿童和青年人都合格。 不需要出示身份证件。',
                },
              },
              custom: {
                info: '\
                请在学校放假期间，再次查看关于食物分配的最新信息。 \
                <br>Visit the School District of Philadelphia\'s \
                访问 School District of Philadelphia（费城教育局）的 \
                <a href="https://www.philasd.org/foodservices">Food Services（食品服务）页面</a>，\
                了解关于学生在校用餐服务的信息。\
                ',
              },
            },
            olderAdultSites: {
              header: '年长者用餐场所',
              eligibility: '\
              60 岁及以上的长者有资格享受费城老龄公司 (Philadelphia Corporation for Aging, PCA) 支持站点提供的服务。 \
                <i><b>长者需要在取餐前提前打电话预约餐食。</b></i><br>\
                55 岁及以上的人群有资格享受公园与休闲老年人中心 (Parks & Recreation senior center) 提供的服务。<br> \
                无需预约。 \
              ',
              pickupDetails: '',
              subsections: {
                'PCA': {
                  name: '费城老龄者公司（PCA）支持的场所',
                  eligibility: '\
                  60 岁及以上的长者有资格享受费城老龄公司 (Philadelphia Corporation for Aging, PCA) 支持站点提供的服务。 \
                  <i><b>长者需要在取餐前提前打电话预约餐食。</b></i><br>\
                  ',
                  pickupDetails: "\
                  长者每周可预约 5-7 顿餐食。<br>\
                  取餐日期和次数因站点而异。 \
                  如需了解更多信息，或需要预约餐食，请联系具体站点。 \
                  经事先安排，可由长者的亲属取餐。 \
                  如需获得英语以外语言的帮助，请致电 PCA 帮助热线\
                  <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a></b>.\
                  ",
                },
                'PPR_Senior': {
                  name: '家费城公园与休闲老年人中心',
                  eligibility: '\
                  55 岁及以上的人群有资格享受公园与休闲老年人中心 (Parks & Recreation senior center) 提供的服务。 <br>\
                    无需预约。\
                  ',
                  pickupDetails: '\
                  大多数站点支持长者每周领取 5 顿餐食。\
                  ',
                },
              },
            },
            generalMealSites: {
              header:  '常规餐食供应场所',
              eligibility: '任何居民均合格。 不需身份证或收入证明。',
              pickupDetails: '',
              subsections: {
                'compiled': {
                  name: '常规餐食供应场所',
                  pickupDetails: '日期和时间会根据场所而有所不同。1 每个居民用餐',
                },
              },
            },
            foodPantries: {
              header: '食品分发站储藏室',
              intro: '这些站点补充现有的食品分发站网络。 要寻找您附近的食品储藏室：',
              li1: '拨打 <b><a class="underlined" href="tel:+311">311</a></b>. 请务必提前致电分发站以确认他们的工作时间。',
              li2: '-打电话<a class="underlined" href="tel:+18005486479">1-800-5HUNGRY</a></b>给“为何要饥饿”热线，或把您的邮政编码发短信给<b><a class="underlined" href="tel:+18005486479">1-800-548-6479</a></b>以取得您附近的食品分发站的单子',
              li3: '<b><a href="https://communityresourceconnects.org/" class="underlined">查阅“社区资源连接”网站，查找您所在地区的食物和其他资源。</a></b>',
            },
          },
        },
        'vi': {
          language: 'Tiếng Việt',
          app: {
            title: 'Các điểm phân phát thực phẩm',
            subtitle: 'Tìm Thực Phẩm và Bữa Ăn Miễn Phí',
            bannerAlert: 'Hôm nay, nhiều địa điểm đóng cửa. Hãy kiểm tra các chi tiết về địa điểm cụ thể để biết thêm thông tin.',
          },
          'General Meal Site': 'Các địa điểm cung cấp suất ăn theo bữa',
          'Food Site': 'Điểm phát thực phẩm',
          'Student Meal Site': 'Điểm phát bữa ăn học sinh',
          'Older Adult Meal Site': 'Điểm phát bữa ăn cho người già',
          eligibility: 'Điều kiện hội đủ',
          pickupDetails: 'Chi tiết',
          beforeYouGo: 'Trước khi đi',
          change: 'Đổi lịch',
          closure: 'Đóng cửa tạm thời',
          checkSite: 'Kiểm tra thông tin địa điểm cụ thể. Giờ hoạt động có thể thay đổi.',
          hoursVary: 'Giờ hoạt động và mức sẵn có khác nhau.',
          MONDAY: 'Thứ Hai',
          TUESDAY: 'Thứ Ba',
          WEDNESDAY: 'Thứ Tư',
          THURSDAY: 'Thứ Năm',
          FRIDAY: 'Thứ Sáu',
          SATURDAY: 'Thứ Bảy',
          SUNDAY: 'Chủ Nhật',
          nonPerish: 'chỉ có đồ ăn không dễ ôi thiu',
          freshOnly: 'chỉ có nông sản tươi',
          breakfastLunch: 'bữa sáng và bữa trưa',
          tenMeals: 'Thực phẩm tươi sống và các bữa ăn được cung cấp trong tuần.',
          oneMeal: '1 bữa ăn mỗi cư dân',
          driveThrough: {
            dt: 'Lái xe qua',
            wu: 'Đi bộ vào',
            both: 'Lái xe qua & đi bộ vào',
          },
          sections: {
            foodSites: {
              header: 'Các điểm phát thực phẩm',
              eligibility: 'Kiểm tra thông tin địa điểm cụ thể. ',
              pickupDetails: 'Cư dân có thể nhận thực phẩm bổ sung cho hộ gia đình của mình.',
              subsections: {
                'PPR': {
                  name: 'Các trung tâm của Philadelphia Parks & Recreation',
                  pickupDetails: '',
                },
              },
            },
            studentMealSites: {
              header: 'Các điểm phát bữa ăn học sinh',
              eligibility: 'Kiểm tra thông tin địa điểm cụ thể.',
              pickupDetails: 'Ngày và giờ khác nhau giữa các điểm',
              subsections: {
                'PSD': {
                  name: 'Các trường của Học khu Philadelphia',
                  pickupDetails: '',
                  eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',
                },
                'PHA': {
                  name: 'Các trung tâm cộng đồng của Philadelphia Housing Authority (PHA)',
                  pickupDetails: '',
                  eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',

                },
                'CHARTER': {
                  name: 'Các trường công đặc quyền',
                  pickupDetails: '',
                  eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',

                },
                'PPR_StudentMeals': {
                  name: 'Các trung tâm của Philadelphia Parks & Recreation',
                  pickupDetails: 'Các bữa ăn có sẵn:<br>\
                   28 - 30 tháng 12, 3 tháng 1, 1 tháng 2, 11 - 14 tháng 4. <br>\
                   Giờ ăn và giờ của Trung tâm Giải trí thay đổi tùy theo địa điểm. Tất cả các bữa ăn phải được ăn tại chỗ. Để biết thêm thông tin, vui lòng gọi hoặc truy cập Trung tâm Giải trí. ',
                  eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',

                },
                'playstreets': {
                  name: 'Playstreets (Chơi trên đường phố)',
                  pickupDetails: 'Mở từ Thứ Hai đến Thứ Sáu, từ 10 a.m. đến 4 p.m. Có bữa trưa và bữa điểm tâm chiều. Giờ phân phát bữa ăn khác nhau giữa các địa điểm.Playstreets hoạt động từ thứ Hai đến thứ Sáu, từ 10 giờ sáng đến 4 giờ chiều. Đường phố cấm xe cộ lưu thông. Giờ cung cấp bữa ăn thay đổi tùy theo địa điểm. Để biết thêm thông tin, hãy ghé thăm Playstreet.<br><br>Playstreets phục vụ bữa trưa và bữa ăn nhẹ.',
                  eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',
                },
                'NDS': {
                  name: 'Dịch vụ Phát triển Dinh dưỡng',
                  pickupDetails: 'Các địa điểm có thể cung cấp bữa ăn hàng ngày hoặc bữa sáng và hộp ăn trưa 7 ngày. Liên hệ với Dịch vụ Phát triển Dinh dưỡng để biết thêm thông tin chi tiết.',
                  eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',
                },
                'Other': {
                  name: 'Các Địa điểm Bữa ăn Mùa hè Khác',
                  pickupDetails: 'Giờ cung cấp bữa ăn thay đổi tùy theo địa điểm. Để biết thêm thông tin, hãy ghé thăm các địa điểm bữa ăn mùa hè.',
                  eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',
                },
                'Recreation Center': {
                  name: 'Trung tâm Giải trí',
                  pickupDetails: 'Các Trung tâm Giải trí hoạt động từ thứ Hai đến thứ Sáu, từ 9 giờ sáng đến 3 giờ chiều. Giờ cung cấp bữa ăn thay đổi tùy theo địa điểm. Để biết thêm thông tin, hãy gọi hoặc ghé thăm Trung tâm Giải trí.',
                  eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',
                },
              },
              custom: {
                info: '\
                Kiểm tra lại để biết thông tin cập nhật về hoạt động phân phối thực phẩm trong thời gian nghỉ ở trường. \
                <br>Truy cập trang\
                <a href="https://www.philasd.org/foodservices">Dịch Vụ Thực Phẩm của Học Khu Philadelphia</a> \
                để biết thông tin về dịch vụ bữa ăn tại trường cho học sinh. \
                ',
              },
            },
            olderAdultSites: {
              header: 'Các điểm phát bữa ăn cho người già',
              eligibility: '\
              Dành cho những người lớn từ 60 tuổi trở lên, tại các địa điểm được Hiệp Hội Người Cao Niên Philadelphia (Philadelphia Corporation for Aging, PCA) hỗ trợ. \
                <i><b>Người cao niên phải gọi điện trước để đặt trước bữa ăn trước khi đến nhận bữa ăn.</b></i><br>\
                Người lớn từ 55 tuổi trở lên đủ điều kiện tại các trung tâm dành cho người già của Parks & Recreation. <br>\
                Không cần đặt trước.\
              ',
              pickupDetails: '',
              subsections: {
                'PCA': {
                  name: 'Các điểm do PCA hỗ trợ',
                  eligibility: '\
                  Dành cho những người lớn từ 60 tuổi trở lên, tại các địa điểm được Hiệp Hội Người Cao Niên Philadelphia (Philadelphia Corporation for Aging, PCA) hỗ trợ. \
                  <i><b>Người cao niên phải gọi điện trước để đặt trước bữa ăn trước khi đến nhận bữa ăn.</b></i><br>\
                  ',
                  pickupDetails: "\
                  Người cao niên có thể đặt trước 5 đến 7 bữa ăn mỗi tuần.\
                  Ngày và giờ đến lấy bữa ăn sẽ khác nhau tùy theo địa điểm. \
                  Để biết thêm thông tin và đặt trước bữa ăn, vui lòng liên hệ với một địa điểm cụ thể.\
                  Gia đình của người lớn tuổi có thể đến nhận bữa ăn, nếu có sắp xếp trước. Để được trợ giúp bằng các \
                  ngôn ngữ khác ngoài tiếng Anh, hãy gọi đến đường dây trợ giúp của PCA theo số\
                    <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a></b>.\
                  ",
                },
                'PPR_Senior': {
                  name: 'Các trung tâm dành cho người già của Parks & Recreation',
                  eligibility: '\
                  Dành cho những người lớn từ 55 tuổi trở lên, tại các Trung tâm giải trí & Công viên dành cho người cao niên. Không cần đặt trước.\
                  ',
                  pickupDetails: '\
                  Người lớn tuổi có thể đến nhận 5 bữa ăn mỗi tuần tại hầu hết các địa điểm.\
                  ',
                },
              },
            },
            generalMealSites: {
              header:  'Các Các địa điểm cung cấp suất ăn theo bữa',
              eligibility: 'Bất cứ cư dân nào cũng đều đủ điều kiện. Không cần ID hay bằng chứng thu nhập.',
              pickupDetails: '',
              subsections: {
                'compiled': {
                  name: 'Các Các địa điểm cung cấp suất ăn theo bữa',
                  pickupDetails: 'Ngày và giờ khác nhau giữa các điểm. 1 bữa ăn mỗi cư dân.',
                },
              },
            },
            foodPantries: {
              header: 'Kho thực phẩm',
              intro: 'Các điểm này bổ sung cho mạng lưới kho thực phẩm hiện có. Để tìm kho thực phẩm gần chỗ quý vị:',
              li1: 'Gọi <b><a class="underlined" href="tel:+311">311</a></b>. Hãy nhớ gọi điện cho kho thực phẩm trước để xác nhận giờ làm việc của họ.',
              li2: 'Hãy gọi đường dây nóng WhyHunger theo số <b><a class="underlined" href="tel:+18005486479">1-800-5HUNGRY</a></b> hoặc nhắn tin mã ZIP của quý vị cho <b><a class="underlined" href="tel:+18005486479">1-800-548-6479</a> để nhận một danh sách các kho thực phẩm gần đó.',
              li3: '<b><a href="https://communityresourceconnects.org/" class="underlined">Truy cập trang web Community Resource Connects để tìm thực phẩm và các nguồn trợ giúp khác trong khu vực của quý vị.</a></b>',
            },
          },
        },
        'ru': {
          language: 'Pусский',
          app: {
            title: 'Пункты выдачи продуктов',
            subtitle: 'Найдите бесплатное продовольствие и питание',
            bannerAlert: 'Многие места сегодня закрыты. Для получения более подробной информации о месте отдыха просмотрите дополнительные сведения.',
          },
          'General Meal Site': 'Пункты выдачи еды',
          'Food Site': 'Пункт выдачи питания',
          'Student Meal Site': 'Пункт выдачи питания для учащихся',
          'Older Adult Meal Site': 'Пункт выдачи питания для пожилых людей',
          eligibility: 'Критерии получения помощи',
          pickupDetails: 'Информация о получении и время получения',
          beforeYouGo: 'Прежде чем идти',
          change: 'Изменение графика работы',
          closure: 'Временное закрытие',
          checkSite: 'уточните информацию по конкретному пункту. Часы работы могут меняться.',
          hoursVary: 'Время выдачи и имеющееся в наличии питание могут меняться.',
          MONDAY: 'Понедельник',
          TUESDAY: 'Вторник',
          WEDNESDAY: 'Среда',
          THURSDAY: 'Четверг',
          FRIDAY: 'Пятница',
          SATURDAY: 'Суббота',
          SUNDAY: 'Воскресенье',
          nonPerish: 'только продукты длительного хранения',
          freshOnly: 'только свежие продукты',
          breakfastLunch: 'завтрак и обед',
          tenMeals: 'Свежее питание и обеды на неделю.',
          oneMeal: '1 количество порций на жителя',
          driveThrough: {
            dt: 'Без выхода из машины',
            wu: 'Пункт внутри помещения',
            both: 'Обслуживание как без выхода из машины, так и внутри помещения',
          },
          sections: {
            foodSites: {
              header: 'Пункты выдачи продуктов',
              eligibility: 'уточните информацию по конкретному пункту..',
              pickupDetails: 'Жители могут получить дополнительное питание для своих семей.',
              subsections: {
                'PPR': {
                  name: 'Парки и центры отдыха и развлечений Филадельфии',
                  pickupDetails: '',
                },
              },
            },
            studentMealSites: {
              header: 'Пункты выдачи питания для учащихся',
              eligibility: 'Pre-K –12th grade. Must have School District of Philadelphia student ID number. Student does not need to be present.',
              pickupDetails: 'У каждого пункта свой график работы.',
              subsections: {
                'PSD': {
                  name: 'Школы школьного округа Филадельфии',
                  pickupDetails: '',
                  eligibility: 'Право на получение помощи есть у всех детей и подростков. Удостоверение личности не требуется.',
                },
                'PHA': {
                  name: 'Общественные центры Управления жилищного хозяйства Филадельфии (PHA)',
                  pickupDetails: '',
                  eligibility: 'Право на получение помощи есть у всех детей и подростков. Удостоверение личности не требуется.',

                },
                'CHARTER': {
                  name: 'Чартерные школы',
                  pickupDetails: '',
                  eligibility: 'Право на получение помощи есть у всех детей и подростков. Удостоверение личности не требуется.',

                },
                'PPR_StudentMeals': {
                  name: 'Парки и центры отдыха и развлечений Филадельфии',
                  pickupDetails: 'Питание предоставляется:<br>\
                  С 28 по 30 декабря, 3 января, 1 февраля, с 11 по 14 апреля. <br>\
                  Часы работы и время приема пищи в рекреационном центре зависят от конкретного места. Прием пищи должен осуществляться на месте. Для получения дополнительной информации звоните или приходите в рекреационный центр.',
                  eligibility: 'Право на получение помощи есть у всех детей и подростков. Удостоверение личности не требуется.',

                },
                'playstreets': {
                  name: 'Улицы Playstreet',
                  pickupDetails: 'Улицы Playstreet открыты с понедельника по пятницу с 10:00 до 16:00. Улицы закрыты для движения транспорта. Время раздачи питания различается в зависимости от конкретного адреса. Подробнее см. на сайте Playstreet.<br><br>На улицах Playstreet выдаются обеды и снеки.',
                  eligibility: 'Право на получение помощи есть у всех детей и подростков. Удостоверение личности не требуется.',
                },
                'NDS': {
                  name: 'Центры Nutritional Development Services',
                  pickupDetails: 'В центрах можно получить ежедневное питание или наборы для завтрака и обеда на 7 дней. Подробную информацию можно получить в организации Nutritional Development Services.',
                  eligibility: 'Право на получение помощи есть у всех детей и подростков. Удостоверение личности не требуется.',
                },
                'Other': {
                  name: 'Другие центры раздачи летнего питания',
                  pickupDetails: 'Время раздачи питания различается в зависимости от конкретного адреса. Подробную информацию можно узнать в соответствующем центре летнего питания.',
                  eligibility: 'Право на получение помощи есть у всех детей и подростков. Удостоверение личности не требуется.',
                },
                'Recreation Center': {
                  name: 'Центры отдыха',
                  pickupDetails: 'Центры отдыха открыты с понедельника по пятницу с 9:00 до 15:00. Время раздачи питания различается в зависимости от конкретного адреса. Чтобы получить подробную информацию, позвоните или зайдите в центр отдыха.',
                  eligibility: 'Право на получение помощи есть у всех детей и подростков. Удостоверение личности не требуется.',
                },
              },
              custom: {
                info: '\
                Следите за обновлениями о раздаче еды во время школьных каникул.\
                <br>Для получения информации об организации питания в школе для учащихся посетите \
                <a href="https://www.philasd.org/foodservices">страницу службы питания школьного округа Филадельфии.</a>\
                ',
              },
            },
            olderAdultSites: {
              header: 'Пункты выдачи питания для пожилых людей',
              eligibility: '\
              Взрослые старше 60 лет могут получить питание на площадках, с которыми сотрудничает Philadelphia Corporation for Aging (PCA).\
                <i><b>Чтобы получить питание, необходимо заранее позвонить представителям площадки и договориться о бронировании.</b></i><br>\
                Люди старше 55 лет могут получить питание в центрах отдыха и прогулок для пожилых.\
                Предварительное бронирование не требуется.\
              ',
              pickupDetails: '',
              subsections: {
                'PCA': {
                  name: 'Пункты выдачи продуктов, поддерживаемые PCA',
                  eligibility: '\
                  Взрослые старше 60 лет могут получить питание на площадках, с которыми сотрудничает Philadelphia Corporation for Aging (PCA).\
                    <i><b>Чтобы получить питание, необходимо заранее позвонить представителям площадки и договориться о бронировании.</b></i><br>\
                  ',
                  pickupDetails: "\
                  которыми работает PCA\
                  Пожилые могут забронировать 5–7 наборов питания в неделю.\
                  Даты и время выдачи на разных площадках отличаются. Чтобы узнать подробности и забронировать набор питания,\
                  свяжитесь с представителями площадки. Наборы питания, забронированные для пожилых,\
                  могут забрать их родственники по предварительному согласованию. Если вы не говорите по-английски и вам нужна помощь,\
                  позвоните в службу поддержки PCA по номеру\
                  <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a></b>.\
                  ",
                },
                'PPR_Senior': {
                  name: 'Парки и центры отдыха и развлечений для пожилых людей',
                  eligibility: '\
                  Люди старше 55 лет могут получить питание в центрах отдыха и прогулок для пожилых.\
                  Предварительное бронирование не требуется.\
                  ',
                  pickupDetails: '\
                    На большинстве площадок пожилым предоставляется пять наборов питания в неделю. \
                  ',
                },
              },
            },
            generalMealSites: {
              header:  'Пункты выдачи еды',
              eligibility: 'Право на получение помощи есть у каждого местного жителя. Удостоверение личности или справка о доходах не требуется.',
              pickupDetails: '',
              subsections: {
                'compiled': {
                  name: 'Пункты выдачи еды',
                  pickupDetails: 'У каждого пункта свой график работы',
                },
              },
            },
            foodPantries: {
              header: 'Бесплатные столовые',
              intro: 'Эти пункты выдачи питания дополняют существующую сеть бесплатных столовых. Чтобы найти бесплатную столовую в вашем районе проживания:',
              li1: 'позвоните по номеру <b><a class="underlined" href="tel:+311">311</a></b>. Обязательно позвоните в бесплатную столовую заранее, чтобы уточнить график ее работы.',
              li2: 'Позвоните по телефону горячей линии WhyHunger (<b><a class="underlined" href="tel:+18005486479">1-800-5HUNGRY</a></b>) или отправьте свой почтовый индекс (zip code) на номер <b><a class="underlined" href="tel:+18005486479">1-800-548-6479</a></b>, чтобы получить список ближайших бесплатных столовых.',
              li3: 'Посетите веб-сайт <b><a href="https://communityresourceconnects.org/" class="underlined">Community Resource Connects</a></b> чтобы узнать, где можно взять продукты, и получить информацию о прочих ресурсах в вашем районе.',
            },
          },
        },
        'fr': {
          language: 'Français',
          app: {
            title: 'Sites de distribution alimentaire',
            subtitle: 'Trouver un repas gratuit',
            bannerAlert: 'De nombreux sites sont fermés aujourd’hui. Consultez les détails spécifiques au site pour obtenir de plus amples informations.',
          },
          'General Meal Site': 'Sites de restauration générale',
          'Food Site': 'Sites de distribution alimentaire',
          'Student Meal Site': 'Site de distribution de repas pour élèves',
          'Older Adult Meal Site': 'Site de distribution de repas pour personnes âgées',
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
              eligibility: 'Consulter les informations concernant le site donné.',
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
                  pickupDetails: '',
                  eligibility: 'Tous les enfants et les adolescents peuvent en bénéficier. Aucune pièce d’identité n’est demandée.',

                },
                'CHARTER': {
                  name: 'Écoles à charte',
                  pickupDetails: '',
                  eligibility: 'Tous les enfants et les adolescents peuvent en bénéficier. Aucune pièce d’identité n’est demandée.',

                },
                'PPR_StudentMeals': {
                  name: 'Centres du service des parcs et loisirs de Philadelphie',
                  pickupDetails: 'Des repas sont disponibles les jours suivants :<br>\
                  28 - 30 décembre, 3 janvier, 1erer février, 11 - 14 avril.<br>\
                  Les horaires des centres de loisirs et leurs heures de repas varient selon les sites. Tous les repas doivent être consommés sur place. Pour plus d\'informations, appelez le centre de loisirs ou rendez-vous sur place.',
                  eligibility: 'Tous les enfants et les adolescents peuvent en bénéficier. Aucune pièce d’identité n’est demandée.',

                },
                'playstreets': {
                  name: 'Playstreets',
                  pickupDetails: 'Playstreets se déroule du lundi au vendredi, entre 10h et 16h. Les rues sont piétonnes. Les heures des repas varient selon les sites. Pour obtenir plus d\'informations, consultez Playstreets.<br><br>Playstreets offre le déjeuner et un goûter.',
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
                  pickupDetails: 'Les centres aérés sont ouverts du lundi au vendredi, entre 9h et 15h. Les heures des repas varient selon les sites. Pour obtenir plus d\'informations, appelez ou rendez-vous au centre aéré.',
                  eligibility: 'Tous les enfants et les adolescents peuvent en bénéficier. Aucune pièce d’identité n’est demandée.',
                },
              },
              custom: {
                info: '\
                Vérifiez les actualités concernant la distribution de repas pendant les vacances scolaires. \
                <br>Visitez \
                <a href="https://www.philasd.org/foodservices">la page des services de restauration<a> \
                du district scolaire de Philadelphie pour obtenir des informations sur le service de cantine scolaire pour les élèves. \
                ',
              },
            },
            olderAdultSites: {
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
                  pickupDetails: 'Les jours et les horaires peuvent varier en fonction des sites. 1 repas par habitant.',
                },
              },
            },
            foodPantries: {
              header: 'Banques alimentaires',
              intro: 'Ces sites viennent compléter le réseau existant de banques alimentaires. Pour trouver une banque alimentaire près de chez vous :',
              li1: 'appeler le <b><a class="underlined" href="tel:+311">311</a></b>. Assurez-vous d’appeler la banque alimentaire avant de vous y rendre afin de confirmer les heures d’ouverture.',
              li2: '- Appelez la ligne d’assistance WhyHunger au <b><a class="underlined" href="tel:+18005486479">1-800-5HUNGRY</a></b> ou envoyez votre code postal par SMS au <b><a class="underlined" href="tel:+18005486479">1-800-548-6479</a></b> pour recevoir une liste des banques alimentaires à proximité.',
              li3: 'Consultez le site Web de <b><a href="https://communityresourceconnects.org/" class="underlined">Community Resource Connects</a></b> pour trouver de la nourriture et d’autres ressources dans votre quartier.',
            },
          },
        },
      },
    },
  },
});
