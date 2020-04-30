// this is the base-config for resource-finder
// the point of this file is that it will move outside the project
// (so that settings we put in it can be used by other projects)
// and be pulled in with an axios call or something
// (we might not need to use axios with new vue async tools)
// if that is not needed, we can move this info to main.js

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
import seniorSites from './data-sources/senior-sites';
import distributionSites from './data-sources/distribution-sites';
import schoolMealSites from './data-sources/school-meal-sites';
import youthActivitySites from './data-sources/youth-activity-sites';
import covidFreeMealSites from './data-sources/covid-free-meal-sites';
import compiled from './data-sources/compiled';
var BASE_CONFIG_URL = 'https://cdn.jsdelivr.net/gh/cityofphiladelphia/mapboard-default-base-config@6126861722cee9384694742363d1661e771493b9/config.js';

import expandCollapseContent from './components/ExpandCollapseContent.vue';
import customGreeting from './components/customGreeting.vue';
const customComps = {
  'expandCollapseContent': expandCollapseContent,
  'customGreeting': customGreeting,
};

pinboard({
  // baseConfig: null,
  comboSearch: {
    dropdown: [ 'address' ],
    position: 'right',
    placeholderText: 'Search by address',
  },
  // addressInput: {
  //   type: 'address',
  //   width: 465,
  //   position: 'right',
  //   autocompleteEnabled: false,
  //   autocompleteMax: 15,
  //   placeholder: ' ',
  // },
  customComps,
  // refineCategories: [ 'hotdogs', 'ice cream', 'ding dongs', 'chicken tenders', 'tofu', 'rice noodles', 'chili beans', 'jelly beans', 'taffy' ],
  markerType: 'circle-marker',
  legendControls,
  locationSlots: {
    title: function(state, item) {
      // let indexVal = item._featureId.indexOf('-', item._featureId.indexOf('-') + 1);
      // if (item._featureId.slice(0, indexVal) === 'feat-seniorSites') {
      //   return item.site_name;
      // } else if (item._featureId.slice(0, indexVal) === 'feat-distributionSites') {
      //   return item.Location;
      // } else if (item._featureId.slice(0, indexVal) === 'feat-schoolMealSites') {
      //   return item.SCHOOL_NAME;
      // } else if (item._featureId.slice(0, indexVal) === 'feat-youthActivitySites') {
      //   return item.ASSET_NAME;
      // } else if (item._featureId.slice(0, indexVal) === 'feat-covidFreeMealSites') {
      return item.attributes.site_name;
      // }
    },
  },
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
  // greeting,
  dataSources: {
    covidFreeMealSites,
  },
  router: {
    enabled: false,
  },
  app: {
    title: 'Free meals resource finder',
    tagLine: 'Find free meals in the City',
    logoAlt: 'City of Philadelphia',
    type: 'covidFreeMealSites',
    // type: 'compiled',
  },
  projection: '3857',
  geocoder: {
    url(input) {
      const inputEncoded = encodeURIComponent(input);
      return `//api.phila.gov/ais/v1/search/${inputEncoded}`;
    },
    params: {
      gatekeeperKey: process.env.VUE_APP_GATEKEEPER_KEY,
      include_units: true,
    },
  },
  infoCircles: {},
  map: {
    defaultBasemap: 'pwd',
    center: [ -75.163471, 39.953338 ],
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
  circleMarkers:{
    circleColors: {
      'Food Site': '#0F4D90',
      'Senior Meal Site': '#D67D00',
      'Student Meal Site': '#721817',
      'Outdoor Meal Site': '#506D0A',
    },
    weight: 0,
    radius: 8,
  },
  sections: {
    foodSites: {
      title: 'Food sites',
      titleSingular: 'FOOD SITE',
      color: '#0F4D90',
      subsections: [ 'none' ],
    },
    studentMealSites: {
      title: 'Student meal sites',
      titleSingular: 'STUDENT MEAL SITE',
      color: '#721817',
      subsections: [ 'PSD', 'PHA', 'PPR', 'CHARTER' ],
    },
    seniorMealSites: {
      title: 'Senior meal sites',
      titleSingular: 'SENIOR MEAL SITE',
      color: '#D67D00',
      subsections: [ 'PCA', 'PPR_Senior' ],
    },
    outdoorMealSites: {
      title: 'Outdoor meal sites',
      titleSingular: 'OUTDOOR MEAL SITE',
      color: '#506D0A',
      subsections: [[ 'Broad Street Ministry', 'Muslims Serve', 'Kensington Meal Partners' ]],
    },
  },
  subsections: {
    '': 'foodSites',
    'Broad Street Ministry': 'outdoorMealSites',
    'CHARTER': 'studentMealSites',
    'Kensington Meal Partners': 'outdoorMealSites',
    'Muslims Serve': 'outdoorMealSites',
    'PHA': 'studentMealSites',
    'PHILABUNDANCE': 'foodSites',
    'PHILABUNDANCE/SHARE FOOD PROGRAM': 'foodSites',
    'PPR': 'studentMealSites',
    'PSD': 'studentMealSites',
    'SENIOR SITE': 'seniorMealSites',
    'SHARE FOOD PROGRAM': 'foodSites',
    'PCA': 'seniorMealSites',
    'PPR_Senior': 'seniorMealSites',
  },
  i18n: {
    header: 'i18nBanner',
    data: {
      locale: 'en-US',
      messages: {
        'en-US': {
          language: 'English',
          title: 'Food resource finder',
          subtitle: 'Find free food and meals during COVID-19',
          refine: 'Refine',
          clearAll: 'Clear all',
          about: 'About this finder',
          feedback: 'Feedback',
          searchPlaceholder: 'Search by address',
          viewMap: 'View map',
          viewList: 'View list',
          applyFilters: 'Apply filters',
          randomWords: {
            betaTag: 'Beta',
            eligibility: 'Eligibility',
            pickupDetails: 'Pickup Details',
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
            tenMeals: '10 meals per child',
            oneMeal: '1 meal per resident',
            tagOutdoor: 'Outdoor meal site',
            tagFood: 'Food site',
            tagStudent: 'Student meal site',
            tagSenior: 'Senior meal site',
          },
          sections: {
            foodSites: {
              header: 'Food sites',
              eligibility: 'Any resident is eligible. No ID or proof of income is required.',
              pickupDetails: 'Residents can get one box per household.',
              subsections: {},
            },
            studentMealSites: {
              header: 'Student meal sites',
              eligibility: 'All children and youth are eligible. No ID is required.',
              pickupDetails: '',
              subsections: {
                'PSD': {
                  name: 'Philadelphia School District schools',
                  pickupDetails: '',
                },
                'PHA': {
                  name: 'Philadelphia Housing Authority (PHA) community centers',
                  pickupDetails: '',
                },
                'PPR': {
                  name: 'Philadelphia Parks & Recreation centers',
                  pickupDetails: '',
                },
                'CHARTER': {
                  name: 'Charter schools',
                  pickupDetails: '',
                },
              },
            },
            seniorMealSites: {
              header: 'Senior meal sites',
              eligibility: '\
                Adults 60 and over are eligible at sites supported by the Philadelphia\
                Corporation for Aging (PCA). \
                <i><b>Seniors must call ahead to reserve meals prior to pickup.</b></i><br><br>\
                Adults 55 and over are eligible at the Parks & Recreation older adult centers.<br>\
                <i><b>No reservation necessary</b></i>\
              ',
              pickupDetails: '',
              subsections: {
                'PCA': {
                  name: 'PCA-supported sites',
                  eligibility: '\
                    Adults 60 and over are eligible at sites supported by the Philadelphia\
                    Corporation for Aging (PCA). \
                    <i><b>Seniors must call ahead to reserve meals prior to pickup.</b></i><br><br>\
                  ',
                  pickupDetails: "\
                    Seniors can reserve 5 to 7 meals per week.<br>\
                    Pickup dates and times vary by site.\
                    For more information and to reserve meals, contact a specfic site.<br>\
                    A senior's family may pick up meals, with prior arrangement.\
                    Meals may also be home delivered if needed.<br>\
                    To get help in languages other than English, call the PCA helpline at\
                    <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a></b>.\
                  ",
                },
                'PPR_Senior': {
                  name: 'Philadelphia Parks & Recreation older adult centers',
                  eligibility: '\
                    Adults 55 and over are eligible at the Parks & Recreation older adult centers.<br>\
                    <i><b>No reservation necessary.</b></i>\
                  ',
                  pickupDetails: '\
                    Seniors can pick up 5 meals per week at most sites.\
                  ',
                },
              },
            },
            outdoorMealSites: {
              header:  'Outdoor meal sites',
              eligibility: 'Any resident is eligible. No ID or proof of income is required.',
              pickupDetails: '',
              subsections: {
                'compiled': {
                  name: 'Temporary outdoor sites',
                  pickupDetails: 'Days and times vary by site. One meal per resident.',
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
          title: 'Lugares de distribución de alimentos',
          subtitle: 'Obtenga alimentos y comidas gratis durante la epidemia de la COVID-19',
          refine: 'Ajustar',
          clearAll: 'Eliminar todo',
          about: 'Sobre este buscador',
          feedback: 'Comentarios',
          searchPlaceholder: 'Buscar por dirección',
          viewMap: 'Ver mapa',
          viewList: 'Ver lista',
          applyFilters: 'Aplicar filtros',
          randomWords: {
            betaTag: 'Beta',
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
            tenMeals: '10 comidas por niño',
            oneMeal: 'comida por residente', //not sure where this is in the doc
            tagOutdoor: 'Lugar de comidas al aire libre',
            tagFood: 'Lugar de alimentos',
            tagStudent: 'Lugar de comidas para estudiantes',
            tagSenior: 'Lugar de comidas para adultos mayores',
          },
          sections: {
            foodSites: {
              header: 'Lugar de alimentos',
              eligibility: 'Cualquier residente es elegible. No se necesita identificación ni prueba de ingresos.',
              pickupDetails: 'Los residentes pueden obtener una caja por hogar.',
              subsections: {},
            },
            studentMealSites: {
              header: 'Lugar de comidas para estudiantes',
              eligibility: 'Todos los niños y jóvenes son elegibles. No se necesita identificación.',
              pickupDetails: '',
              subsections: {
                'PSD': {
                  name: 'escuelas del Distrito Escolar de Filadelfia',
                  pickupDetails: '',
                },
                'PHA': {
                  name: 'centros comunitarios de la Autoridad de Vivienda de Filadelfia (PHA)',
                  pickupDetails: '',
                },
                'PPR': {
                  name: 'centros de Parques y Recreación de Filadelfia',
                  pickupDetails: '',
                },
                'CHARTER': {
                  name: 'escuelas charter',
                  pickupDetails: '',
                },
              },
            },
            seniorMealSites: {
              header: 'Lugares de comidas para adultos mayores',
              eligibility: 'Los adultos de 60 años o más son elegibles en los lugares patrocinados por la Philadelphia Corporation for Aging (PCA). <b><i>Los adultos mayores deben llamar para reservar la comida con anticipación antes de retirarla.</i></b>',
              pickupDetails: '',
              subsections: {
                'PCA': {
                  name: 'Lugares patrocinados por la PCA',
                  eligibility: '\
                  Los adultos de 60 años o más son elegibles en los lugares patrocinados por la Philadelphia Corporation for Aging (PCA).\
                  <i><b>Los adultos mayores deben llamar para reservar la comida con anticipación  antes de retirarla.</b></i><br><br>\
                ',
                  pickupDetails: "\
                  Los adultos mayores pueden llamar con anticipación y reservar de 5 a 7 comidas por semana. <br>\
                  Los horarios de retiro varían según el lugar. Para obtener más información o reservar comidas, comuníquese con el lugar específico. <br>\
                  Un familiar del adulto mayor puede retirar las comidas con previo acuerdo. Las comidas también se pueden enviar a domicilio si es necesario. <br>\
                  Para recibir ayuda en otro idioma que no sea inglés, llame a la línea de ayuda de la PCA al <a class=\"underlined\" href=\"tel:+1 (215) 765-9040\">(215) 765-9040</a>.",
                },
                'PPR_Senior': {
                  name: 'centros para adultos mayores de Parques y Recreación',
                  eligibility: '\
                  Los adultos de 55 años o más son elegibles en los centros para adultos mayores de Parques y Recreación. <br>\
                  <i><b>No es necesario reservar.</b></i>',
                  pickupDetails: 'Los adultos mayores pueden retirar hasta 5 comidas por semana en la mayoría de los lugares.',
                },
              },
            },

            outdoorMealSites: {
              header:  'Lugares de comidas al aire libre',
              eligibility: 'Cualquier residente es elegible. No se necesita identificación ni prueba de ingresos.',
              pickupDetails: '',
              subsections: {
                'compiled': {
                  name: 'Lugares temporales al aire libre',
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
          title: '食品分发地点',
          subtitle: '在冠状病毒-19期间查找免费食物和餐点',
          refine: '细化',
          clearAll: '全部清除',
          about: '有关这个搜索工具',
          feedback: '反馈',
          searchPlaceholder: '按地址搜索',
          viewMap: '看地图',
          viewList: '看列单',
          applyFilters: '使用过滤器',
          randomWords: {
            betaTag: '贝塔',
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
            tenMeals: '10 每个儿童的用餐',
            oneMeal: '1 每个居民用餐',
            tagOutdoor: '户外用餐场所',
            tagFood: 'Food site',
            tagStudent: '学生用餐场所',
            tagSenior: '年长者用餐场所',
          },
          sections: {
            foodSites: {
              header: '食品地点',
              eligibility: '所有居民都合格。 不需身份证或收入证明。',
              pickupDetails: '凡是居民每户都可以得到一盒食品。',
              subsections: {},
            },
            studentMealSites: {
              header: '学生用餐场所',
              eligibility: '所有儿童和青年人都合格。 不需要出示身份证件。',
              pickupDetails: '',
              subsections: {
                'PSD': {
                  name: '费城学区',
                  pickupDetails: '',
                },
                'PHA': {
                  name: '费城住房管理局(PHA)社区中心',
                  pickupDetails: '',
                },
                'PPR': {
                  name: '费城公园和娱乐中心',
                  pickupDetails: '',
                },
                'CHARTER': {
                  name: '特许学校',
                  pickupDetails: '',
                },
              },
            },
            seniorMealSites: {
              header: '年长者用餐场所',
              eligibility: '\
              60岁及60岁以上的成年人可去费城老龄者公司（PCA）支持的场所。\
                <i><b>老年人需事先打电话预定餐点然后去取餐。</b></i><br><br>\
                55岁和55岁以上的成年人可去公园和娱乐中心的成人中心。 <br>\
                <i><b>不需事先预订。</b></i>\
              ',
              pickupDetails: '',
              subsections: {
                'PCA': {
                  name: '费城老龄者公司（PCA）支持的场所',
                  eligibility: '\
                  60岁及60岁以上的成年人可去费城老龄者公司（PCA）支持的场所。老年人需事先打电话预定餐点然后去取餐。 \
                    <i><b>老年人需事先打电话预定餐点然后去取餐。</b></i><br><br>\
                  ',
                  pickupDetails: "\
                  老龄者每周可先去电预订5到7餐。<br>\
                  取餐时间根据每个地点而有所不同。 想获得更多信息和预订餐点，请与具体场所联系。<br>\
                  如事先作好安排，老龄者的家人可以代为去取餐食。 如果需要，餐食也可被送上府。\
                  如需帮助以得到用英语以外的语言来沟通，请去电费城老龄者公司的帮助热线\
                  <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a></b>.\
                  ",
                },
                'PPR_Senior': {
                  name: '公园和娱乐中心的成人中心',
                  eligibility: '\
                  55岁和55岁以上的成年人可去公园和娱乐中心的成人中心。 <br>\
                    <i><b>不需事先预订。</b></i>\
                  ',
                  pickupDetails: '\
                  在多数场所，老龄者每周可去取5餐。\
                  ',
                },
              },
            },
            outdoorMealSites: {
              header:  '户外用餐场所',
              eligibility: '任何居民均合格。 不需身份证或收入证明。',
              pickupDetails: '',
              subsections: {
                'compiled': {
                  name: '临时的户外场所',
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
          title: 'Vienamise food resource finder',
          sections: {
            foodSites: 'Vienamise Food sites',
            outdoorMealSites: 'Vienamise Outdoor meal sites',
            seniorMealSites: 'Vienamise Senior meal sites',
            studentMealSites: 'Vienamise Student meal sites',
          },
          subtitle: 'Vienamise Find free food and meals during COVID-19',
        },
        'ru': {
          language: 'Pусский',
          title: 'Russian food resource finder',
          sections: {
            foodSites: 'Russian Food sites',
            outdoorMealSites: 'Russian Outdoor meal sites',
            seniorMealSites: 'Russian Senior meal sites',
            studentMealSites: 'Russian Student meal sites',
          },
          subtitle: 'Russian Find free food and meals during COVID-19',
        },
        'fr': {
          language: 'Français',
          title: 'French food resource finder',
          sections: {
            foodSites: 'French Food sites',
            outdoorMealSites: 'French Outdoor meal sites',
            seniorMealSites: 'French Senior meal sites',
            studentMealSites: 'French Student meal sites',
          },
          subtitle: 'French Find free food and meals during COVID-19',
        },
      },
    },
  },
});
