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
  footer: {
    'HowToUse': false,
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
  // refineCategories: [ 'tagFood', 'tagOutdoor', 'tagSenior', 'tagStudent'],
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
    mobileRadius: 12,
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
      subsections: [ 'PSD', 'PHA', 'CHARTER', 'PPR_StudentMeals' ],
    },
    seniorMealSites: {
      title: 'Senior meal sites',
      titleSingular: 'Senior Meal Site',
      color: '#D67D00',
      subsections: [ 'PCA', 'PPR_Senior' ],
    },
    outdoorMealSites: {
      title: 'Outdoor meal sites',
      titleSingular: 'Outdoor Meal Site',
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
    'PPR': 'foodSites',
    'PSD': 'studentMealSites',
    'SENIOR SITE': 'seniorMealSites',
    'SHARE FOOD PROGRAM': 'foodSites',
    'PCA': 'seniorMealSites',
    'PPR_Senior': 'seniorMealSites',
    'PPR_StudentMeals': 'studentMealSites',
  },
  i18n: {
    header: 'i18nBanner',
    app: true,
    refinePanel: true,
    expandCollapseTitle: true,
    footer: true,
    data: {
      locale: 'en-US',
      messages: {
        'en-US': {
          language: 'English',
          title: 'Food distribution sites',
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
            tenMeals: '10 meals per child',
            oneMeal: '1 meal per resident',
            'Outdoor Meal Site': 'Outdoor meal site',
            'Food Site': 'Food site',
            'Student Meal Site': 'Student meal site',
            'Senior Meal Site': 'Senior meal site',
          },
          sections: {
            foodSites: {
              header: 'Food sites',
              eligibility: 'Any resident is eligible. No ID or proof of income is required',
              pickupDetails: 'Residents can get one box per household',
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
              eligibility: 'All children and youth are eligible. No ID is required.',
              pickupDetails: 'Days and times vary by site.',
              subsections: {
                'PSD': {
                  name: 'Philadelphia School District schools',
                  pickupDetails: '',
                },
                'PHA': {
                  name: 'Philadelphia Housing Authority (PHA) community centers',
                  pickupDetails: '',
                },
                'CHARTER': {
                  name: 'Charter schools',
                  pickupDetails: '',
                },
                'PPR_StudentMeals': {
                  name: 'Philadelphia Parks & Recreation centers',
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
                No reservation necessary.\
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
                    For more information and to reserve meals, contact a specific site.\
                    A senior's family may pick up meals, with prior arrangement.\
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
                    Seniors can pick up 5 meals per week at most sites.\
                  ',
                },
                'SENIOR SITE': {
                  name: 'Senior site',
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
                'Broad Street Ministry': {
                  name: 'Broad Street Ministry',
                },
                'Kensington Meal Partners': {
                  name: 'Kensington Meal Partners',
                },
                'Muslims Serve': {
                  name: 'Muslims Serve',
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
            'oneMeal': 'comida por residente',
            'Outdoor Meal Site': 'Lugar de comidas al aire libre',
            'Food Site': 'Lugar de alimentos',
            'Student Meal Site': 'Lugar de comidas para estudiantes',
            'Senior Meal Site': 'Lugar de comidas para adultos mayores',
          },
          sections: {
            foodSites: {
              header: 'Lugar de alimentos',
              eligibility: 'Cualquier residente es elegible. No se necesita identificación ni prueba de ingresos.',
              pickupDetails: 'Los residentes pueden obtener una caja por hogar.',
              subsections: {
                'PPR': {
                  name: 'centros de Parques y Recreación de Filadelfia',
                  pickupDetails: '',
                },
              },
            },
            studentMealSites: {
              header: 'Lugar de comidas para estudiantes',
              eligibility: 'Todos los niños y jóvenes son elegibles. No se necesita identificación.',
              pickupDetails: 'Los días y horarios varían según el lugar.',
              subsections: {
                'PSD': {
                  name: 'escuelas del Distrito Escolar de Filadelfia',
                  pickupDetails: '',
                },
                'PHA': {
                  name: 'centros comunitarios de la Autoridad de Vivienda de Filadelfia (PHA)',
                  pickupDetails: '',
                },
                'CHARTER': {
                  name: 'escuelas charter',
                  pickupDetails: '',
                },
                'PPR_StudentMeals': {
                  name: 'centros de Parques y Recreación de Filadelfia',
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
                  No es necesario reservar.',
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
            'Outdoor Meal Site': '户外用餐场所',
            'Food Site': '食品地点',
            'Student Meal Site': '学生用餐场所',
            'Senior Meal Site': '年长者用餐场所',
          },
          sections: {
            foodSites: {
              header: '食品地点',
              eligibility: '所有居民都合格。 不需身份证或收入证明。',
              pickupDetails: '凡是居民每户都可以得到一盒食品。',
              subsections: {
                'PPR': {
                  name: '费城公园和娱乐中心',
                  pickupDetails: '',
                },
              },
            },
            studentMealSites: {
              header: '学生用餐场所',
              eligibility: '所有儿童和青年人都合格。 不需要出示身份证件。',
              pickupDetails: '日期和时间会根据场所而有所不同。',
              subsections: {
                'PSD': {
                  name: '费城学区',
                  pickupDetails: '',
                },
                'PHA': {
                  name: '费城住房管理局(PHA)社区中心',
                  pickupDetails: '',
                },
                'CHARTER': {
                  name: '特许学校',
                  pickupDetails: '',
                },
                'PPR_StudentMeals': {
                  name: '费城公园和娱乐中心',
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
                不需事先预订。\
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
                    不需事先预订。\
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
          title: 'Các điểm phân phát thực phẩm',
          subtitle: 'Tìm thực phẩm và bữa ăn miễn phí trong dịch COVID-19',
          refine: 'Tinh chỉnh',
          clearAll: 'Xóa hết',
          about: 'Giới thiệu công cụ tìm kiếm này',
          feedback: 'Ý kiến phản hồi',
          searchPlaceholder: 'Tìm kiểm theo địa chỉ',
          viewMap: 'Xem bản đồ',
          viewList: 'Xem danh sách',
          applyFilters: 'Áp dụng bộ lọc',
          randomWords: {
            betaTag: 'Bản Beta',
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
            tenMeals: '10 bữa ăn mỗi trẻ',
            oneMeal: '1 bữa ăn mỗi cư dân',
            'Outdoor Meal Site': 'Điểm phát bữa ăn ngoài trời',
            'Food Site': 'Điểm phát thực phẩm',
            'Student Meal Site': 'Điểm phát bữa ăn học sinh',
            'Senior Meal Site': 'Điểm phát bữa ăn cho người già',
          },
          sections: {
            foodSites: {
              header: 'Các điểm phát thực phẩm',
              eligibility: 'Bất cứ cư dân nào cũng đều đủ điều kiện. Không cần ID hay bằng chứng thu nhập.',
              pickupDetails: 'Các cư dân có thể nhận một hộp cho mỗi hộ gia đình.',
              subsections: {
                'PPR': {
                  name: 'Các trung tâm của Philadelphia Parks & Recreation',
                  pickupDetails: '',
                },
              },
            },
            studentMealSites: {
              header: 'Các điểm phát bữa ăn học sinh',
              eligibility: 'Tất cả trẻ em và thanh thiếu niên đều đủ điều kiện. Không cần ID.',
              pickupDetails: 'Ngày và giờ khác nhau giữa các điểm',
              subsections: {
                'PSD': {
                  name: 'Các trường của Học khu Philadelphia',
                  pickupDetails: '',
                },
                'PHA': {
                  name: 'Các trung tâm cộng đồng của Philadelphia Housing Authority (PHA)',
                  pickupDetails: '',
                },
                'CHARTER': {
                  name: 'Các trường công đặc quyền',
                  pickupDetails: '',
                },
                'PPR_StudentMeals': {
                  name: 'Các trung tâm của Philadelphia Parks & Recreation',
                  pickupDetails: '',
                },
              },
            },
            seniorMealSites: {
              header: 'Các điểm phát bữa ăn cho người già',
              eligibility: '\
              Người lớn từ 60 tuổi trở lên đủ điều kiện tại các điểm do Philadelphia Corporation for Aging (PCA) hỗ trợ.  \
                <i><b>Người già phải gọi điện trước để đặt bữa ăn trước khi đến nhận.</b></i><br><br>\
                Người lớn từ 55 tuổi trở lên đủ điều kiện tại các trung tâm dành cho người già của Parks & Recreation. <br>\
                Không cần đặt trước.\
              ',
              pickupDetails: '',
              subsections: {
                'PCA': {
                  name: 'Các điểm do PCA hỗ trợ',
                  eligibility: '\
                  Người lớn từ 60 tuổi trở lên đủ điều kiện tại các điểm do Philadelphia Corporation for Aging (PCA) hỗ trợ.  \
                    <i><b>Người già phải gọi điện trước để đặt bữa ăn trước khi đến nhận.</b></i><br><br>\
                  ',
                  pickupDetails: "\
                  Người già có thể gọi điện trước và đặt trước 5 đến 7 bữa ăn mỗi tuần.\
                  Giờ nhận khác nhau giữa các điểm. Để biết thêm thông tin và đặt trước bữa ăn, hãy liên hệ địa điểm cụ thể.<br>\
                  Người nhà của người già có thể nhận bữa ăn hộ, nếu bố trí từ trước. Các bữa ăn cũng có thể được chuyển tận nhà nếu cần.\
                  Để nhận trợ giúp ngôn ngữ ngoài Tiếng Anh, hãy gọi cho đường dây trợ giúp của PCA theo số \
                    <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a></b>.\
                  ",
                },
                'PPR_Senior': {
                  name: 'Các trung tâm dành cho người già của Parks & Recreation',
                  eligibility: '\
                  Người lớn từ 55 tuổi trở lên đủ điều kiện tại các trung tâm dành cho người già của Parks & Recreation. <br>\
                  Không cần đặt trước.\
                  ',
                  pickupDetails: '\
                  Người già có thể nhận năm bữa ăn mỗi tuần tại hầu hết các điểm.\
                  ',
                },
              },
            },
            outdoorMealSites: {
              header:  'Các điểm phát bữa ăn ngoài trời',
              eligibility: 'Bất cứ cư dân nào cũng đều đủ điều kiện. Không cần ID hay bằng chứng thu nhập.',
              pickupDetails: '',
              subsections: {
                'compiled': {
                  name: 'Các điểm ngoài trời tạm thời',
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
          title: 'Пункты выдачи продуктов',
          subtitle: 'Поиск пунктов бесплатного продовольствия и питания во время пандемии COVID-19',
          refine: 'Уточнить параметры поиска',
          clearAll: 'Очистить все',
          about: 'Об этом средстве поиска ',
          feedback: 'Обратная связь',
          searchPlaceholder: 'Поиск по адресу',
          viewMap: 'Посмотреть на карте',
          viewList: 'Посмотреть список',
          applyFilters: 'Применить фильтры',
          randomWords: {
            betaTag: 'Бета-версия',
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
            tenMeals: '10 количество порций на ребенка',
            oneMeal: '1 количество порций на жителя',
            'Outdoor Meal Site': 'Пункт выдачи питания под открытым небом',
            'Food Site': 'Пункт выдачи питания',
            'Student Meal Site': 'Пункт выдачи питания для учащихся',
            'Senior Meal Site': 'Пункт выдачи питания для пожилых людей',
          },
          sections: {
            foodSites: {
              header: 'Пункты выдачи продуктов',
              eligibility: 'Право на получение помощи есть у каждого местного жителя. Удостоверение личности или справка о доходах не требуется.',
              pickupDetails: 'Местные жители могут получить один продуктовый набор на семью.',
              subsections: {
                'PPR': {
                  name: 'Парки и центры отдыха и развлечений Филадельфии',
                  pickupDetails: '',
                },
              },
            },
            studentMealSites: {
              header: 'Пункты выдачи питания для учащихся',
              eligibility: 'Право на получение помощи есть у всех детей и подростков. Удостоверение личности не требуется.',
              pickupDetails: 'У каждого пункта свой график работы.',
              subsections: {
                'PSD': {
                  name: 'Школы школьного округа Филадельфии',
                  pickupDetails: '',
                },
                'PHA': {
                  name: 'Общественные центры Управления жилищного хозяйства Филадельфии (PHA)',
                  pickupDetails: '',
                },
                'CHARTER': {
                  name: 'Чартерные школы',
                  pickupDetails: '',
                },
                'PPR_StudentMeals': {
                  name: 'Парки и центры отдыха и развлечений Филадельфии',
                  pickupDetails: '',
                },
              },
            },
            seniorMealSites: {
              header: 'Пункты выдачи питания для пожилых людей',
              eligibility: '\
              Взрослые в возрасте 60 лет и старше могут получить помощь в пунктах, поддерживаемых Корпорацией помощи пожилым жителям Филадельфии (Philadelphia Corporation for Aging, PCA). \
                <i><b>Лица пожилого возраста должны позвонить заранее и заказать питание, прежде чем идти за ним.</b></i><br><br>\
                Лица в возрасте 55 лет и старше могут получить помощь в пунктах, размещенных в парках и центрах отдыха и развлечений для пожилых людей. <br>\
                Предварительный заказ не требуется.\
              ',
              pickupDetails: '',
              subsections: {
                'PCA': {
                  name: 'Пункты выдачи продуктов, поддерживаемые PCA',
                  eligibility: '\
                  Взрослые в возрасте 60 лет и старше могут получить помощь в пунктах, поддерживаемых Корпорацией помощи пожилым жителям Филадельфии (Philadelphia Corporation for Aging, PCA).  \
                    <i><b>Лица пожилого возраста должны позвонить заранее и заказать питание, прежде чем идти за ним.</b></i><br><br>\
                  ',
                  pickupDetails: "\
                  Лица пожилого возраста могут позвонить заранее и заказать 5-7 порций на неделю.<br>\
                  В каждом пункте питания свое время выдачи. Чтобы получить дополнительную информацию или заказать питание, обращайтесь в конкретный пункт.<br>\
                  По предварительной договоренности питание могут забрать родственники пожилого лица. В случае необходимости возможна доставка питания на дом.\
                  Чтобы получить помощь не на английском языке, позвоните на горячую линию PCA по номеру \
                    <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a></b>.\
                  ",
                },
                'PPR_Senior': {
                  name: 'Парки и центры отдыха и развлечений для пожилых людей',
                  eligibility: '\
                  Лица в возрасте 55 лет и старше могут получить помощь в пунктах, размещенных в парках и центрах отдыха и развлечений для пожилых людей. <br>\
                  Предварительный заказ не требуется.\
                  ',
                  pickupDetails: '\
                  Лица пожилого возраста могут получить пять порций в неделю в большинстве пунктов. \
                  ',
                },
              },
            },
            outdoorMealSites: {
              header:  'Пункты выдачи питания под открытым небом',
              eligibility: 'Право на получение помощи есть у каждого местного жителя. Удостоверение личности или справка о доходах не требуется.',
              pickupDetails: '',
              subsections: {
                'compiled': {
                  name: 'Временные пункты выдачи питания под открытым небом',
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
          title: 'Sites de distribution alimentaire',
          subtitle: 'Trouver de la nourriture et des repas gratuits pendant le COVID-19',
          refine: 'Raffiner',
          clearAll: 'Tout effacer',
          about: 'À propos de cet outil de recherche',
          feedback: 'Commentaires',
          searchPlaceholder: 'Recherche à partir de l’adresse',
          viewMap: 'Voir la carte',
          viewList: 'Voir la liste',
          applyFilters: 'Appliquer les filtres',
          randomWords: {
            betaTag: 'Bêta',
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
            tenMeals: '10 repas par enfant',
            oneMeal: '1 repas par habitant',
            'Outdoor Meal Site': 'Site extérieur de distribution de repas',
            'Food Site': 'Sites de distribution alimentaire',
            'Student Meal Site': 'Site de distribution de repas pour élèves',
            'Senior Meal Site': 'Site de distribution de repas pour personnes âgées',
          },
          sections: {
            foodSites: {
              header: 'Sites de distribution alimentaire',
              eligibility: 'Tous les habitants peuvent en bénéficier. Aucune pièce d’identité ni preuve de revenus n’est demandée.',
              pickupDetails: 'Les habitants peuvent recevoir une boîte par foyer.',
              subsections: {
                'PPR': {
                  name: 'Centres du service des parcs et loisirs de Philadelphie',
                  pickupDetails: '',
                },
              },
            },
            studentMealSites: {
              header: 'Sites de distribution de repas pour élèves',
              eligibility: 'Tous les enfants et les adolescents peuvent en bénéficier. Aucune pièce d’identité n’est demandée.',
              pickupDetails: 'Les jours et les horaires peuvent varier en fonction des sites.',
              subsections: {
                'PSD': {
                  name: 'Écoles du district scolaire de Philadelphie',
                  pickupDetails: '',
                },
                'PHA': {
                  name: 'Centres communautaires de la Housing Authority de Philadelphie (PHA)',
                  pickupDetails: '',
                },
                'CHARTER': {
                  name: 'Écoles à charte',
                  pickupDetails: '',
                },
                'PPR_StudentMeals': {
                  name: 'Centres du service des parcs et loisirs de Philadelphie',
                  pickupDetails: '',
                },
              },
            },
            seniorMealSites: {
              header: 'Sites de distribution de repas pour personnes âgées',
              eligibility: '\
              Les adultes âgés de 60 ans et plus peuvent bénéficier du programme aux sites parrainés par la PCA (Philadelphia Corporation for Aging).\
                <i><b>Les personnes âgées doivent appeler au préalable pour réserver les repas avant de venir les chercher.</b></i><br><br>\
                Les adultes âgés de 55 ans et plus peuvent bénéficier du programme aux centres des aînés du service des parcs et loisirs. .<br>\
                Aucune réservation exigée.\
              ',
              pickupDetails: '',
              subsections: {
                'PCA': {
                  name: 'sites parrainés par la PCA',
                  eligibility: '\
                  Les adultes âgés de 60 ans et plus peuvent bénéficier du programme aux sites parrainés par la PCA (Philadelphia Corporation for Aging). \
                    <i><b>Les personnes âgées doivent appeler au préalable pour réserver les repas avant de venir les chercher.</b></i><br><br>\
                  ',
                  pickupDetails: "\
                  Les personnes âgées peuvent appeler au préalable pour réserver 5 à 7 repas par semaine.<br>\
                  Les horaires de collecte varient en fonction du site. Pour obtenir de plus amples informations et réserver des repas, prière d’appeler un site particulier.\
                  Un membre de la famille de la personne âgée peut venir chercher les repas en ayant préalablement pris des dispositions. Les repas peuvent aussi être livrés à domicile si besoin est.\
                  Pour obtenir de l’aide dans des langues autres que l’anglais, prière d’appeler la ligne d’assistance de la PCA au \
                    <b><a class='underlined' href='tel:+12157659040'>(215) 765-9040</a></b>.\
                  ",
                },
                'PPR_Senior': {
                  name: 'Centres des aînés du service des parcs et loisirs',
                  eligibility: '\
                  Les adultes âgés de 55 ans et plus peuvent bénéficier du programme aux centres des aînés du service des parcs et loisirs. .<br>\
                  Aucune réservation exigée.\
                  ',
                  pickupDetails: '\
                  Les personnes âgées peuvent recevoir jusqu’à 5 repas par semaine à la plupart des sites.\
                  ',
                },
              },
            },
            outdoorMealSites: {
              header:  'Sites extérieurs de distribution de repas',
              eligibility: 'Tous les habitants peuvent en bénéficier. Aucune pièce d’identité ni preuve de revenus n’est demandée.',
              pickupDetails: '',
              subsections: {
                'compiled': {
                  name: 'Sites extérieurs temporaires',
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
