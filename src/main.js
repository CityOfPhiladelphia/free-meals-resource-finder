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
import { faAngleDown as farAngleDown } from '@fortawesome/pro-regular-svg-icons/faAngleDown';
import { faAngleUp as farAngleUp } from '@fortawesome/pro-regular-svg-icons/faAngleUp';
import { faTimes as farTimes } from '@fortawesome/pro-regular-svg-icons/faTimes';
import { faPlus as farPlus } from '@fortawesome/pro-regular-svg-icons/faPlus';
import { faMinus as farMinus } from '@fortawesome/pro-regular-svg-icons/faMinus';

library.add(faExclamationTriangle, faHandHoldingHeart, farAngleDown, farAngleUp, farTimes, farPlus, farMinus);


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

import i18n from './i18n/i18n';
console.log('main.js i18n:', i18n);

pinboard({
  i18n: i18n.i18n,
  app: {
    logoAlt: 'City of Philadelphia',
    type: 'covidFreeMealSites',
    // type: 'compiled',
  },
  gtag: {
    category: 'rf-food',
  },
  // comboSearch: {
  //   dropdown: [ 'address' ],
  // },
  searchBar: {
    placeholder: 'Search by address',
    searchTypes: [ 'address' ],
    labelText:  {
      address: 'Search by address',
    },
    placeholderText: {
      address: 'Search by address',
    },
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
      } else if (item.attributes.category_type == "Food Site") {
        value = "Food site";
      } else if (item.attributes.category_type == "Student Meal Site") {
        value = "Student meal site";
      } else if (item.attributes.category_type == "General Meal Site") {
        value = "General meal site";
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
      header: 'Fourth of July closures',
      body: '<p>Most food and meal sites will be closed for the 4th of July. Please contact the site before you go to get the most up to date schedule.</p>',
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
      'Senior Meal Site': '#a86518',
      // 'Senior Meal Site': '#D67D00',
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
  footer: [
    {
      type: "native",
      href: "https://www.phila.gov/",
      attrs: {
        target: "_blank",
      },
      text: "cityOfPhiladelphia",
    },
    {
      type: "native",
      href: "https://www.phila.gov/food/",
      text: "about",
    },
    {
      type: "native",
      href: "https://www.phila.gov/feedback/",
      attrs: {
        target: "_blank",
      },
      text: "feedback",
    },
    {
      type: "native",
      href: 'https://www.phila.gov/programs/coronavirus-disease-2019-covid-19/updates/how-you-can-help/covid-19-food-distribution-sites/#/',
      text: "viewAccessible",
    },
  ],
  // footer: {
  //   'HowToUse': false,
  //   'OtherLinks': {
  //     locations: {
  //       text: 'viewAccessible',
  //       link: 'https://www.phila.gov/programs/coronavirus-disease-2019-covid-19/support-for-the-community/services-and-support-for-residents/covid-19-food-distribution-sites/#/',
  //     },
  //   },
  // },
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
      titleSingular: 'Food site',
      color: '#0F4D90',
      subsections: [ 'Small Things Philly' ],
    },
    studentMealSites: {
      title: 'Student meal sites',
      titleSingular: 'Student meal site',
      color: '#721817',
      subsections: [ 'PSD', 'PHA', 'CHARTER', 'Recreation Center', 'playstreets', 'NDS', 'Other Summer Meal Sites', 'Philabundance Summer Meal Sites', 'Caring for Friends' ],
      // subsections: [],
    },
    olderAdultMealSites: {
      title: 'Older adult meal sites',
      titleSingular: 'Older adult meal site',
      // color: '#D67D00',
      color: '#a86518',
      subsections: [ 'PCA', 'PPR_Senior' ],
    },
    generalMealSites: {
      title: 'General meal sites',
      titleSingular: 'General meal site',
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
    'Philabundance Summer Meal Sites': 'studentMealSites',
    'Caring for Friends': 'studentMealSites',
    'Other Summer Meal Sites': 'studentMealSites',
    'Student Meal Site': 'studentMealSites',
    'PPR': 'foodSites',
    'PSD': 'studentMealSites',
    'SENIOR SITE': 'olderAdultMealSites',
    'SHARE FOOD PROGRAM': 'foodSites',
    'Nutritional Development Services': 'foodSites',
    'PCA': 'olderAdultMealSites',
    'PPR_Senior': 'olderAdultMealSites',
    'PPR_StudentMeals': 'studentMealSites',
    'playstreets': 'studentMealSites',
    'Recreation Center': 'studentMealSites',
    'Small Things Philly': 'foodSites',
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
});
