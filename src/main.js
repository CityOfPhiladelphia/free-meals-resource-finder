// this is the base-config for resource-finder
// the point of this file is that it will move outside the project
// (so that settings we put in it can be used by other projects)
// and be pulled in with an axios call or something
// (we might not need to use axios with new vue async tools)
// if that is not needed, we can move this info to main.js

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
library.add(faExclamationTriangle);

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
      color: '#0F4D90',
      subsections: [ 'none' ],
    },
    studentMealSites: {
      title: 'Student meal sites',
      color: '#721817',
      subsections: [ 'PSD', 'PHA', 'PPR', 'CHARTER' ],
    },
    seniorMealSites: {
      title: 'Senior meal sites',
      color: '#D67D00',
      subsections: [ 'PCA', 'PPR_Senior' ],
    },
    outdoorMealSites: {
      title: 'Outdoor meal sites',
      color: '#506D0A',
      subsections: [[ 'Broad Street Ministry', 'Muslims Serve', 'Kensington Meal Partners' ]],
    },
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
          randomWords: {
            eligibility: 'Eligibility',
            pickupDetails: 'Pickup Details',
          },
          sections: {
            foodSites: {
              header: 'Food sites',
              eligibility: 'Any resident is eligible. No ID or proof of income is required',
              pickupDetails: 'Residents can get one box per household',
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
                  pickupDetails: '\
                    Seniors can pick up five meals per week at most sites.\
                  ',
                },
              },
            },
            outdoorMealSites: {
              header:  'Outdoor meal sites',
              eligibility: 'Any resident is eligible. No ID or proof of income is required',
              pickupDetails: '',
              subsections: {
                'compiled': {
                  name: 'temporary outdoor sites',
                  pickupDetails: 'Days and times vary by site. One meal per resident.',
                },
              },
            },
            foodPantries: {
              header:  'Food pantries',
              intro: 'These sites supplement the existing food pantry network. To find a food pantry near you:',
              li1: 'Call <b><a class="underlined" href="tel:+311">311</a></b>. Make sure to call the pantry in advance to confirm their hours.',
              li2: 'Call the WhyHunger hotline at <b><a class="underlined" href="tel:+18005486479">1-800-5HUNGRY</a></b> or text your ZIP code to <b><a class="underlined" href="tel:+18005486479">1-800-548-6479</a></b> to receive a list of nearby food pantries.',
              li3: 'Visit the <b><a class="underlined">Community Resource Connects</a></b> website to find food and other resources in your area.',
            },
          },
        },
        'es': {
          language: 'Español',
          title: 'Spanish food resource finder',
          subtitle: 'Spanish Find free food and meals during COVID-19',
          randomWords: {
            eligibility: 'Spanish eligibility',
            pickupDetails: 'Spanish pickup details',
          },
          sections: {
            foodSites: {
              header: 'Spanish Food sites',
              eligibility: 'Spanish Any resident is eligible. No ID or proof of income is required',
              pickupDetails: 'Spanish Residents can get one box per household',
              subsections: {},
            },
            studentMealSites: {
              header: 'Spanish Student meal sites',
              eligibility: 'Spanish All children and youth are eligible. No ID is required.',
              pickupDetails: '',
              subsections: {
                'PSD': {
                  name: 'Spanish Philadelphia School District schools',
                  pickupDetails: '',
                },
                'PHA': {
                  name: 'Spanish Philadelphia Housing Authority (PHA) community centers',
                  pickupDetails: '',
                },
                'PPR': {
                  name: 'Spanish Philadelphia Parks & Recreation centers',
                  pickupDetails: '',
                },
                'CHARTER': {
                  name: 'Spanish Charter schools',
                  pickupDetails: '',
                },
              },
            },
            seniorMealSites: {
              header: 'Spanish Senior meal sites',
              eligibility: '\
                Spanish Adults 60 and over are eligible at sites supported by the Philadelphia\
                Corporation for Aging (PCA).\
                <i><b>Seniors must call ahead to reserve meals prior to pickup.</b></i><br><br>\
                Adults 55 and over are eligible at the Parks & Recreation older adult center.<br>\
                <i><b>No reservation necessary</b></i>\
              ',
              pickupDetails: '',
              subsections: {
                'PCA': {
                  name: 'Spanish PCA-supported sites',
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
                  name: 'Spanish Philadelphia Parks & Recreation older adult centers',
                  pickupDetails: '\
                    Seniors can pick up five meals per week at most sites.\
                  ',
                },
              },
            },
            outdoorMealSites: {
              header:  'Spanish Outdoor meal sites',
              eligibility: 'Spanish Any resident is eligible. No ID or proof of income is required',
              pickupDetails: '',
              subsections: {
                'compiled': {
                  name: 'Spanish temporary outdoor sites',
                  pickupDetails: 'Spanish Days and times vary by site. One meal per resident.',
                },
              },
            },
            foodPantries: {
              header:  'Spanish Food pantries',
              intro: 'Spanish These sites supplement the existing food pantry network. To find a food pantry near you:',
              li1: 'Spanish Call <b><a class="underlined" href="tel:+311">311</a></b>. Make sure to call the pantry in advance to confirm their hours.',
              li2: 'Spanish Call the WhyHunger hotline at <b><a class="underlined" href="tel:+18005486479">1-800-5HUNGRY</a></b> or text your ZIP code to <b><a class="underlined" href="tel:+18005486479">1-800-548-6479</a></b> to receive a list of nearby food pantries.',
              li3: 'Spanish Visit the <b><a class="underlined">Community Resource Connects</a></b> website to find food and other resources in your area.',
            },
          },
        },
        'ch': {
          language: '中文',
          title: 'Chinese food resource finder',
          sections: {
            foodSites: 'Chinese Food sites',
            outdoorMealSites: 'Chinese Outdoor meal sites',
            seniorMealSites: 'Chinese Senior meal sites',
            studentMealSites: 'Chinese Student meal sites',
          },
          subtitle: 'Chinese Find free food and meals during COVID-19',
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
