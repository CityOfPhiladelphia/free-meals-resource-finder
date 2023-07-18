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
  publicPath: process.env.VUE_APP_PUBLICPATH,
  app: {
    logoAlt: 'City of Philadelphia',
    type: 'covidFreeMealSites',
    // type: 'compiled',
  },
  allowPrint: true,
  showBuffers: true,
  retractableRefine: true,
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
    type: 'multipleFieldGroups',
    columns: true,
    multipleFieldGroups: {
      categoryType: {
        columns: 2,
        radio: {
          'foodSite': {
            unique_key: 'categoryType_foodSite',
            i18n_key: 'categoryType.foodSite',
            value: function(item) {
              return item.attributes.category_type == "Food Site";
            },
          },
          'generalMealSite': {
            unique_key: 'categoryType_generalMealSite',
            i18n_key: 'categoryType.generalMealSite',
            value: function(item) {
              return item.attributes.category_type == "General Meal Site";
            },
          },
          'studentMealSite': {
            unique_key: 'categoryType_studentMealSite',
            i18n_key: 'categoryType.studentMealSite',
            value: function(item) {
              return item.attributes.category_type == "Student Meal Site";
            },
          },
          'olderAdultMealSite': {
            unique_key: 'categoryType_olderAdultMealSite',
            i18n_key: 'categoryType.olderAdultMealSite',
            value: function(item) {
              // return item.attributes.category_type == "Older Adult Meal Site";
              return item.attributes.category_type == "Senior Meal Site";
            },
          },
          'publicBenefits': {
            unique_key: 'categoryType_publicBenefits',
            i18n_key: 'categoryType.publicBenefits',
            value: function(item) {
              return item.attributes.category_type == "Public Benefits";
            },
          },
        },
      },
      weekday: {
        columns: 2,
        radio: {
          'monday': {
            unique_key: 'weekday_monday',
            i18n_key: 'weekday.monday',
            value: function(item) {
              let na_category = [ 'playstreets', 'Community Refrigerators' ].includes(item.attributes.category);
              let na_category_type = [].includes(item.attributes.category_type);
              let day = item.attributes.hours_mon_start1 != null;
              // console.log('monday, item.attributes.category_type:', item.attributes.category_type, 'category_type:', category_type, 'category_type || day', category_type || day);
              return na_category || na_category_type || day;
            },
          },
          'tuesday': {
            unique_key: 'weekday_tuesday',
            i18n_key: 'weekday.tuesday',
            value: function(item) {
              let na_category = [ 'playstreets', 'Community Refrigerators' ].includes(item.attributes.category);
              let na_category_type = [].includes(item.attributes.category_type);
              let day = item.attributes.hours_tues_start1 != null;
              return na_category || na_category_type || day;
            },
          },
          'wednesday': {
            unique_key: 'weekday_wednesday',
            i18n_key: 'weekday.wednesday',
            value: function(item) {
              let na_category = [ 'playstreets', 'Community Refrigerators' ].includes(item.attributes.category);
              let na_category_type = [].includes(item.attributes.category_type);
              let day = item.attributes.hours_wed_start1 != null;
              return na_category || na_category_type || day;
            },
          },
          'thursday': {
            unique_key: 'weekday_thursday',
            i18n_key: 'weekday.thursday',
            value: function(item) {
              let na_category = [ 'playstreets', 'Community Refrigerators' ].includes(item.attributes.category);
              let na_category_type = [].includes(item.attributes.category_type);
              let day = item.attributes.hours_thurs_start1 != null;
              return na_category || na_category_type || day;
            },
          },
          'friday': {
            unique_key: 'weekday_friday',
            i18n_key: 'weekday.friday',
            value: function(item) {
              let na_category = [ 'playstreets', 'Community Refrigerators' ].includes(item.attributes.category);
              let na_category_type = [].includes(item.attributes.category_type);
              let day = item.attributes.hours_fri_start1 != null;
              return na_category || na_category_type || day;
            },
          },
          'saturday': {
            unique_key: 'weekday_saturday',
            i18n_key: 'weekday.saturday',
            value: function(item) {
              // let na_category = false;
              let na_category = [ 'Community Refrigerators' ].includes(item.attributes.category);
              let na_category_type = [].includes(item.attributes.category_type);
              let day = item.attributes.hours_sat_start1 != null;
              return na_category || na_category_type || day;
            },
          },
          'sunday': {
            unique_key: 'weekday_sunday',
            i18n_key: 'weekday.sunday',
            value: function(item) {
              // let na_category = false;
              let na_category = [ 'Community Refrigerators' ].includes(item.attributes.category);
              let na_category_type = [].includes(item.attributes.category_type);
              let day = item.attributes.hours_sun_start1 != null;
              return na_category || na_category_type || day;
            },
          },
        },
      },
      time: {
        radio: {
          'morning': {
            unique_key: 'time_morning',
            i18n_key: 'time.morning',
            dependentGroups: [ 'weekday' ],
            value: function(item, dependentServices) {
              let na_category = [ 'playstreets', 'Community Refrigerators' ].includes(item.attributes.category);
              let na_category_type = [].includes(item.attributes.category_type);
              let dayAndTime =false;
              let days = {
                'monday': 'mon',
                'tuesday': 'tues',
                'wednesday': 'wed',
                'thursday': 'thurs',
                'friday': 'fri',
                'saturday': 'sat',
                'sunday': 'sun',
              };
              if (dependentServices.length) {
                let day = dependentServices[0];
                days = {
                  day: days[dependentServices[0]],
                };
              }

              let noon = new Date();
              noon.setHours(12, 0, 0, 0);

              for (let day of Object.keys(days)) {
                let startTime1 = item.attributes['hours_' + days[day] + '_start1'];
                let startTime1Split;
                let st1;
                if (typeof(startTime1) !== "undefined" && startTime1 != null) {
                  startTime1Split = startTime1.split(':');
                  // console.log('startTime1[0]:', startTime1[0], 'parseInt(startTime1[0]):', parseInt(startTime1[0]));
                  st1 = new Date();
                  st1.setHours(parseInt(startTime1Split[0]), parseInt(startTime1Split[1]), 0, 0);
                }
                if (st1 < noon) {
                  console.log('st1:', st1, 'noon:', noon);
                  dayAndTime = true;
                  break;
                }
                // console.log('noon:', noon, 'startTime1Split:', startTime1Split, 'd:', d, 'selectedDay:', selectedDay, "item.attributes['hours_' + selectedDay + '_start1']", item.attributes['hours_' + selectedDay + '_start1']);
                // if (item.attributes['hours_' + selectedDay + '_start1'] );
              }
              // console.log('site_name:', item.attributes.site_name, 'dependentServices:', dependentServices, 'startTimes1:', startTimes1);
              // let day = 1 != null;
              return na_category || na_category_type || dayAndTime;
            },
          },
          'afternoon': {
            unique_key: 'time_afternoon',
            i18n_key: 'time.afternoon',
            dependentGroups: [ 'weekday' ],
            value: function(item, dependentServices) {
              let na_category = [ 'playstreets', 'Community Refrigerators' ].includes(item.attributes.category);
              let na_category_type = [].includes(item.attributes.category_type);
              let dayAndTime =false;
              let days = {
                'monday': 'mon',
                'tuesday': 'tues',
                'wednesday': 'wed',
                'thursday': 'thurs',
                'friday': 'fri',
                'saturday': 'sat',
                'sunday': 'sun',
              };
              if (dependentServices.length) {
                let day = dependentServices[0];
                days = {
                  day: days[dependentServices[0]],
                };
              }

              let noon = new Date();
              noon.setHours(12, 0, 0, 0);
              let fivePm = new Date();
              fivePm.setHours(17, 0, 0, 0);

              for (let day of Object.keys(days)) {
                let startTime1 = item.attributes['hours_' + days[day] + '_start1'];
                let endTime1 = item.attributes['hours_' + days[day] + '_end1'];
                let startTime2 = item.attributes['hours_' + days[day] + '_start2'];
                let endTime2 = item.attributes['hours_' + days[day] + '_end2'];
                let startTime1Split, endTime1Split, startTime2Split, endTime2Split;
                let st1, et1, st2, et2;

                if (typeof(startTime1) !== "undefined" && startTime1 != null) {
                  startTime1Split = startTime1.split(':');
                  st1 = new Date();
                  st1.setHours(parseInt(startTime1Split[0]), parseInt(startTime1Split[1]), 0, 0);
                }
                if (typeof(endTime1) !== "undefined" && endTime1 != null) {
                  endTime1Split = endTime1.split(':');
                  et1 = new Date();
                  et1.setHours(parseInt(endTime1Split[0]), parseInt(endTime1Split[1]), 0, 0);
                }
                if (typeof(startTime2) !== "undefined" && startTime2 != null) {
                  startTime2Split = startTime2.split(':');
                  st2 = new Date();
                  st2.setHours(parseInt(startTime2Split[0]), parseInt(startTime2Split[1]), 0, 0);
                }
                if (typeof(endTime2) !== "undefined" && endTime2 != null) {
                  endTime2Split = endTime2.split(':');
                  et2 = new Date();
                  et2.setHours(parseInt(endTime2Split[0]), parseInt(endTime2Split[1]), 0, 0);
                }

                if (et1 > noon && et1 < fivePm || et2 > noon && et2 < fivePm || st1 > noon && st1 < fivePm || st2 > noon && st2 < fivePm) {
                  dayAndTime = true;
                  break;
                }
              }
              return na_category || na_category_type || dayAndTime;
            },
          },
          'evening': {
            unique_key: 'time_evening',
            i18n_key: 'time.evening',
            dependentGroups: [ 'weekday' ],
            value: function(item, dependentServices) {
              // let na_category = false;
              let na_category = [ 'Community Refrigerators' ].includes(item.attributes.category);
              let na_category_type = [].includes(item.attributes.category_type);
              let dayAndTime =false;
              let days = {
                'monday': 'mon',
                'tuesday': 'tues',
                'wednesday': 'wed',
                'thursday': 'thurs',
                'friday': 'fri',
                'saturday': 'sat',
                'sunday': 'sun',
              };
              if (dependentServices.length) {
                let day = dependentServices[0];
                days = {
                  day: days[dependentServices[0]],
                };
              }

              let noon = new Date();
              noon.setHours(12, 0, 0, 0);
              let fivePm = new Date();
              fivePm.setHours(17, 0, 0, 0);

              for (let day of Object.keys(days)) {
                let startTime1 = item.attributes['hours_' + days[day] + '_start1'];
                let endTime1 = item.attributes['hours_' + days[day] + '_end1'];
                let startTime2 = item.attributes['hours_' + days[day] + '_start2'];
                let endTime2 = item.attributes['hours_' + days[day] + '_end2'];
                let startTime1Split, endTime1Split, startTime2Split, endTime2Split;
                let st1, et1, st2, et2;

                if (typeof(startTime1) !== "undefined" && startTime1 != null) {
                  startTime1Split = startTime1.split(':');
                  st1 = new Date();
                  st1.setHours(parseInt(startTime1Split[0]), parseInt(startTime1Split[1]), 0, 0);
                }
                if (typeof(endTime1) !== "undefined" && endTime1 != null) {
                  endTime1Split = endTime1.split(':');
                  et1 = new Date();
                  et1.setHours(parseInt(endTime1Split[0]), parseInt(endTime1Split[1]), 0, 0);
                }
                if (typeof(startTime2) !== "undefined" && startTime2 != null) {
                  startTime2Split = startTime2.split(':');
                  st2 = new Date();
                  st2.setHours(parseInt(startTime2Split[0]), parseInt(startTime2Split[1]), 0, 0);
                }
                if (typeof(endTime2) !== "undefined" && endTime2 != null) {
                  endTime2Split = endTime2.split(':');
                  et2 = new Date();
                  et2.setHours(parseInt(endTime2Split[0]), parseInt(endTime2Split[1]), 0, 0);
                }

                if (et1 > fivePm || et2 > fivePm) {
                  dayAndTime = true;
                  break;
                }
              }
              return na_category || na_category_type || dayAndTime;
            },
          },
        },
      },
    },
    // type: 'categoryField_value',
    // value: function(item) {
    //   // console.log('value is running, item:', item);
    //   let value;
    //   if (item.attributes.category_type == "Senior Meal Site") {
    //     value = "Older adult meal site";
    //   } else if (item.attributes.category_type == "Food Site") {
    //     value = "Food site";
    //   } else if (item.attributes.category_type == "Student Meal Site") {
    //     value = "Student meal site";
    //   } else if (item.attributes.category_type == "General Meal Site") {
    //     value = "General meal site";
    //   } else if (item.attributes.category_type == "Community Refrigerators") {
    //     value = "Community refrigerator";
    //   } else if (item.attributes.category_type) {
    //     value = item.attributes.category_type;
    //   } else if (item.attributes.category_type) {
    //     value = item.attributes.category_type;
    //   }
    //   return value;
    // },
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
      // 'Community Refrigerators': '#444444',
      'Public Benefits': 'purple',
    },
    borderColor: 'white',
    weight: 1,
    radius: 8,
    mobileRadius: 12,
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
  // projection: function(item) {
  //   if (item._featureId.includes('covidFreeMealSites')) {
  //     return '3857';
  //   } else if (item._featureId.includes('parksSites')) {
  //     return '2272';
  //   }
  // },
  projection: '3857',
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
    // {
    //   type: "native",
    //   href: 'https://www.phila.gov/programs/coronavirus-disease-2019-covid-19/updates/how-you-can-help/covid-19-food-distribution-sites/#/',
    //   text: "viewAccessible",
    // },
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
      subsections: [ 'Community Refrigerators' ],
    },
    generalMealSites: {
      title: 'General meal sites',
      titleSingular: 'General meal site',
      color: '#506D0A',
      subsections: [[ 'Broad Street Ministry', 'Muslims Serve', 'Kensington Meal Partners', 'SEAMAAC South Philly', 'Office of Homeless Services' ]],
    },
    studentMealSites: {
      title: 'Student meal sites',
      titleSingular: 'Student meal site',
      color: '#721817',
      // subsections: [ 'PSD', 'PHA', 'CHARTER', 'Recreation Center', 'playstreets', 'NDS', 'Other Summer Meal Sites', 'Philabundance Summer Meal Sites', 'Caring for Friends' ],
      subsections: [ 'PHA', 'Recreation Center', 'playstreets', 'NDS', 'Other Summer Meal Sites', 'Philabundance Summer Meal Sites', 'Caring for Friends' ],
      hideCounts: false,
    },
    olderAdultMealSites: {
      title: 'Older adult meal sites',
      titleSingular: 'Older adult meal site',
      color: '#a86518',
      subsections: [ 'PCA', 'PPR_Senior' ],
    },
    publicBenefits: {
      title: 'Public Benefits',
      titleSingular: 'Public Benefits',
      color: 'purple',
      subsections: [ 'WIC', 'BenePhilly' ],
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
    'Community Refrigerators': 'foodSites',
    'WIC': 'publicBenefits',
    'BenePhilly': 'publicBenefits',
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
