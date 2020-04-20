// this is the base-config for resource-finder
// the point of this file is that it will move outside the project
// (so that settings we put in it can be used by other projects)
// and be pulled in with an axios call or something
// (we might not need to use axios with new vue async tools)
// if that is not needed, we can move this info to main.js


// import pinboard
import pinboard from '@phila/pinboard/src/main.js';

// import greeting from './general/greeting';
import legendControls from './general/legendControls';

// data-sources
import seniorSites from './data-sources/senior-sites';
import distributionSites from './data-sources/distribution-sites';
import schoolMealSites from './data-sources/school-meal-sites';
import youthActivitySites from './data-sources/youth-activity-sites';
import compiled from './data-sources/compiled';
var BASE_CONFIG_URL = 'https://cdn.jsdelivr.net/gh/cityofphiladelphia/mapboard-default-base-config@6126861722cee9384694742363d1661e771493b9/config.js';

pinboard({
  // baseConfig: null,
  markerType: 'circle-marker',
  legendControls,
  locationSlots: {
    title: function(state, item) {
      let indexVal = item._featureId.indexOf('-', item._featureId.indexOf('-') + 1);
      if (item._featureId.slice(0, indexVal) === 'feat-seniorSites') {
        return item.site_name;
      } else if (item._featureId.slice(0, indexVal) === 'feat-distributionSites') {
        return item.Location;
      } else if (item._featureId.slice(0, indexVal) === 'feat-schoolMealSites') {
        return item.SCHOOL_NAME;
      } else if (item._featureId.slice(0, indexVal) === 'feat-youthActivitySites') {
        return item.ASSET_NAME;
      }
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
    seniorSites,
    distributionSites,
    schoolMealSites,
    youthActivitySites,
    compiled,
  },
  router: {
    enabled: false,
  },
  app: {
    title: 'Free meals resource finder',
    tagLine: 'Find free meals in the City',
    logoAlt: 'City of Philadelphia',
    type: 'compiled',
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
  circleColors: {
    'feat-seniorSites': 'yellow',
    'feat-distributionSites': 'orange',
    'feat-schoolMealSites': 'purple',
    'feat-youthActivitySites': 'red',
  },
  i18n: {
    header: 'i18nBanner',
    data: {
      locale: 'en-US',
      messages: {
        'en-US': {
          language: 'English',
          title: 'Free meals resource finder',
          greeting: '\
            <h2>\
              About the food sites:\
            </h2>\
            <div class="callout">\
              <ul>\
                <li>\
                  Sites are open Mondays and Thursdays from 10 a.m. – 12 p.m.\
                </li>\
                <li>\
                  Residents can pick up one box per household\
                </li>\
                <li>\
                  Boxes contain non-perishable items on Mondays and fresh produce on Thursdays\
                </li>\
                <li>\
                  Residents do not need to present an ID or proof of income for eligibility\
                </li>\
                <li>\
                  Food sites are supported by the City, Share Food Program, and Philabundance\
                </li>\
                <li>\
                  These food sites are supplementary to the existing food pantry network. To find a food pantry closest to you, call 311\
                </li>\
              </ul>\
            </div>\
            <p>\
              To get started, click anywhere on the map, or type an address, intersection, property assessment account number, or Department of Records Map Registry number into the search box.\
            </p>\
          ',
        },
        'es': {
          language: 'Espanol',
          title: 'Free Spanish meals resource finder',
          greeting: '\
            <h2>\
              Acerca de los centros de distribución de alimentos:\
            </h2>\
            <div class="callout">\
              <ul>\
                <li>\
                  Los centros de distribución de alimento están abiertos los lunes y los jueves de 10 de al mañana al mediodía.\
                </li>\
                <li>\
                  Los residentes pueden recoger una caja por hogar.  Los suministros duran hasta 5 días.\
                </li>\
                <li>\
                  Los residentes no necesitan presentar ninguna identificación ni prueba de ingresos para ser elegible.\
                </li>\
                <li>\
                  Los sitios de comida están respaldados por la Ciudad, el programa de Share Food y  Philabundance.\
                </li>\
              </ul>\
            </div>\
            <p>\
              Por favor ten en cuenta que la Ciudad está trabajando para expandir esta lista de sitios.  Consúltela frecuentemente.\
            </p>\
          ',
        },
        'fr': {
          language: 'Francais',
          title: 'French Free meals resource finder',
          greeting: '\
            <h2>\
              À propos des sites de restauration:\
            </h2>\
            <div class="callout">\
              <ul>\
                <li>\
                  Les sites sont ouverts les lundis et jeudis de 10h à 12h.\
                </li>\
                <li>\
                  Les résidents peuvent prendre une boîte par ménage. Les provisions dureront jusqu’à cinq jours.\
                </li>\
                <li>\
                  Les boîtes contiennent des produits non périssables les lundis et des produits frais les jeudis.\
                </li>\
                <li>\
                  Les résidents n’ont pas besoin de présenter une pièce d’identité ou une preuve de revenu pour être admissible.\
                </li>\
                <li>\
                  Les sites de restauration sont soutenus par la Ville, le Share Food Program et Philabundance.\
                </li>\
                <li>\
                  Ces sites de restauration complètent le réseau existant de garde-manger. Pour trouver un garde-manger près de chez vous, composez le 311.\
                </li>\
              </ul>\
            </div>\
            <p>\
              Veuillez noter que- la Ville s’efforce d’élargir cette liste de sites. Revenez souvent.\
            </p>\
          ',
        },
        'ru': {
          language: 'Russian',
          title: 'Free Russian meals resource finder',
          greeting: '\
            <h2>\
              Продовольственные участки (food sites):\
            </h2>\
            <div class="callout">\
              <ul>\
                <li>\
                  Продовольственные участки открыты по понедельникам и четвергам с 10:00 до 12:00 (10am-12pm)\
                </li>\
                <li>\
                  Жители могут брать одну коробку на семью. Запас питания в пакете  рассчитан на 5 дней.\
                </li>\
                <li>\
                  Коробки содержат непортящиеся продукты – по понедельникам, свежие (скоропортящиеся) – по четвергам.\
                </li>\
                <li>\
                  Жители не обязаны представлять удостоверение личности, или демонстрировать уровень своего дохода для получения права пользования участком.\
                </li>\
                <li>\
                  Продовольственные участки обеспечиваются городскими властями, Share Food Program, и Philabundance.\
                </li>\
                <li>\
                  Эти участки являются дополнением к ныне действующей сети продовольственных складов. В целях поиска ближайшего продовольственного склада, звоните по номеру 311.\
                </li>\
              </ul>\
            </div>\
            <p>\
              Просим обратить внимание: власти города трудятся над расширением этого листа. Проверяйте его регулярно.\
            </p>\
          ',
        },
        'vi': {
          language: 'Vienamise',
          title: 'Free Vienamise meals resource finder',
          greeting: '\
            <h2>\
              Về địa điểm thực phẩm:\
            </h2>\
            <div class="callout">\
              <ul>\
                <li>\
                  Địa điểm mở cửa những ngày thứ hai và những ngày thứ năm từ 10 giờ sáng đến 12 giờ trưa.\
                </li>\
                <li>\
                  Cư dân có thể đến lấy một hộp mỗi một hộ gia đình. Thực phẩm sẽ có kéo dài đến 5 ngày.\
                </li>\
                <li>\
                  Cư dân không cần trình ID hoặc bằng chứng thu nhập để có đủ điều kiện.\
                </li>\
                <li>\
                  Địa điểm thực phẩm được chính quyền thành phố, chương trình Shared Food, và Philabundance ủng hộ.\
                </li>\
              </ul>\
            </div>\
            <p>\
              Xin ghi chú – chính quyền thành phố đang làm việc để mở rộng danh sách của tất cả địa điểm. Xin trở lại xét thường xuyên.\
            </p>\
          ',
        },
        'ch': {
          language: 'Chinese',
          title: 'Free Chinese meals resource finder',
          greeting: '\
            <h2>\
              有关食物领取点信息：\
            </h2>\
            <div class="callout">\
              <ul>\
                <li>\
                  领取点的开放时间为每周一和周四的上午10点至下午12点。\
                </li>\
                <li>\
                  每户居民可领取一箱食物。食物最长可以维持居民五天生活。\
                </li>\
                <li>\
                  居民无需出示身份证或收入证明即可领取食物。\
                </li>\
                <li>\
                  费城市、共享食品计划（Share Food Program）及Philabundance慈善组织负责食物领取点的运营。\
                </li>\
              </ul>\
            </div>\
            <p>\
              请注意——费城市正在努力增加食物领取点数量。请经常回来查看信息。\
            </p>\
          ',
        },
      },
    },
  },
});
