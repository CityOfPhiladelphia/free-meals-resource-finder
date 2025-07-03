// this is the base-config for resource-finder
// the point of this file is that it will move outside the project
// (so that settings we put in it can be used by other projects)
// and be pulled in with an axios call or something
// (we might not need to use axios with new vue async tools)
// if that is not needed, we can move this info to main.js

import isMac from './util/is-mac';
if (isMac()) {
  import('./assets/mac-style.scss')
}

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown as farAngleDown } from '@fortawesome/pro-regular-svg-icons';
import { faAngleUp as farAngleUp } from '@fortawesome/pro-regular-svg-icons';
import { faTimes as farTimes } from '@fortawesome/pro-regular-svg-icons';
import { faPlus as farPlus } from '@fortawesome/pro-regular-svg-icons';
import { faMinus as farMinus } from '@fortawesome/pro-regular-svg-icons';
import { markRaw } from 'vue';
library.add(faExclamationTriangle, faHandHoldingHeart, farAngleDown, farAngleUp, farTimes, farPlus, farMinus);

// use these if running off unlinked package
import pinboard from '@phila/pinboard';
import '../node_modules/@phila/pinboard/dist/style.css';
// OR
// use this if running off linked package
// import pinboard from '../node_modules/@phila/pinboard/src/main.js';

import legendControl from './general/legendControl';

// data-sources
import covidFreeMealSites from './data-sources/covid-free-meal-sites';

import expandCollapseContent from './components/ExpandCollapseContent.vue';
import customGreeting from './components/customGreeting.vue';
const customComps = markRaw({
  'expandCollapseContent': expandCollapseContent,
  'customGreeting': customGreeting,
});

import i18n from './i18n/i18n';
// if (import.meta.env.VITE_DEBUG) console.log('main.js i18n:', i18n);

let $config = {
  i18n: i18n.i18n,
  publicPath: import.meta.env.VITE_PUBLICPATH,
  app: {
    logoAlt: 'City of Philadelphia',
    type: 'covidFreeMealSites',
    subtitle: 'i18n',
  },
  anySearch: true,
  allowZipcodeSearch: true,
  allowPrint: true,
  retractableRefine: true,
  gtag: {
    category: 'rf-food',
  },
  searchBar: {
    searchTypes: [ 'address', 'zipcode' ],
    searchDistance: 1,
  },
  fieldsUsed: {
    section: 'category_type',
    subsection: 'category',
  },
  locationInfo: {
    siteName: function(item) { return item.properties.site_name },
    siteNameField: 'site_name',
  },
  hiddenRefine: {
    Closed: function(item) {
      return ![
        'Queen Memorial Library',
        'Greater Olney Library',
        'Joseph E Coleman Branch Library',
        'McPherson Free Library Of Philadelphia',
        'Haverford Library',
      ].includes(item.properties.site_name);
    },
  },
  customComps,
  refine: {
    type: 'multipleFieldGroups',
    columns: true,
    multipleFieldGroups: {
      categoryType: {
        radio: {
          'foodSite': {
            unique_key: 'categoryType_foodSite',
            i18n_key: 'categoryType.foodSite',
            value: function(item) {
              return item.properties.category_type == "Food Site";
            },
          },
          'generalMealSite': {
            unique_key: 'categoryType_generalMealSite',
            i18n_key: 'categoryType.generalMealSite',
            value: function(item) {
              return item.properties.category_type == "General Meal Site";
            },
          },
          'studentMealSite': {
            unique_key: 'categoryType_studentMealSite',
            i18n_key: 'categoryType.studentMealSite',
            value: function(item) {
              return item.properties.category_type == "Student Meal Site";
            },
          },
          'olderAdultMealSite': {
            unique_key: 'categoryType_olderAdultMealSite',
            i18n_key: 'categoryType.olderAdultMealSite',
            value: function(item) {
              return item.properties.category_type == "Senior Meal Site";
            },
          },
          'publicBenefits': {
            unique_key: 'categoryType_publicBenefits',
            i18n_key: 'categoryType.publicBenefits',
            value: function(item) {
              return item.properties.category_type == "Public Benefits";
            },
          },
        },
        columns: 2,
      },
      weekday: {
        radio: {
          'monday': {
            unique_key: 'weekday_monday',
            i18n_key: 'weekday.monday',
            value: function(item) {
              let na_category = [ 'playstreets', 'Community Refrigerators', 'Recreation Center' ].includes(item.properties.category);
              let na_category_type = [].includes(item.properties.category_type);
              let day = item.properties.hours_mon_start1 != null;
              // console.log('monday, item.properties.category_type:', item.properties.category_type, 'category_type:', category_type, 'category_type || day', category_type || day);
              return na_category || na_category_type || day;
            },
          },
          'tuesday': {
            unique_key: 'weekday_tuesday',
            i18n_key: 'weekday.tuesday',
            value: function(item) {
              let na_category = [ 'playstreets', 'Community Refrigerators', 'Recreation Center' ].includes(item.properties.category);
              let na_category_type = [].includes(item.properties.category_type);
              let day = item.properties.hours_tues_start1 != null;
              return na_category || na_category_type || day;
            },
          },
          'wednesday': {
            unique_key: 'weekday_wednesday',
            i18n_key: 'weekday.wednesday',
            value: function(item) {
              let na_category = [ 'playstreets', 'Community Refrigerators', 'Recreation Center' ].includes(item.properties.category);
              let na_category_type = [].includes(item.properties.category_type);
              let day = item.properties.hours_wed_start1 != null;
              return na_category || na_category_type || day;
            },
          },
          'thursday': {
            unique_key: 'weekday_thursday',
            i18n_key: 'weekday.thursday',
            value: function(item) {
              let na_category = [ 'playstreets', 'Community Refrigerators', 'Recreation Center' ].includes(item.properties.category);
              let na_category_type = [].includes(item.properties.category_type);
              let day = item.properties.hours_thurs_start1 != null;
              return na_category || na_category_type || day;
            },
          },
          'friday': {
            unique_key: 'weekday_friday',
            i18n_key: 'weekday.friday',
            value: function(item) {
              let na_category = [ 'playstreets', 'Community Refrigerators', 'Recreation Center' ].includes(item.properties.category);
              let na_category_type = [].includes(item.properties.category_type);
              let day = item.properties.hours_fri_start1 != null;
              return na_category || na_category_type || day;
            },
          },
          'saturday': {
            unique_key: 'weekday_saturday',
            i18n_key: 'weekday.saturday',
            value: function(item) {
              // let na_category = false;
              let na_category = [ 'Community Refrigerators' ].includes(item.properties.category);
              let na_category_type = [].includes(item.properties.category_type);
              let day = item.properties.hours_sat_start1 != null;
              return na_category || na_category_type || day;
            },
          },
          'sunday': {
            unique_key: 'weekday_sunday',
            i18n_key: 'weekday.sunday',
            value: function(item) {
              // let na_category = false;
              let na_category = [ 'Community Refrigerators' ].includes(item.properties.category);
              let na_category_type = [].includes(item.properties.category_type);
              let day = item.properties.hours_sun_start1 != null;
              return na_category || na_category_type || day;
            },
          },
        },
        columns: 2,
      },
      time: {
        radio: {
          'morning': {
            unique_key: 'time_morning',
            i18n_key: 'time.morning',
            dependentGroups: [ 'weekday' ],
            value: function(item, dependentServices) {
              let na_category = [ 'playstreets', 'Community Refrigerators', 'Recreation Center' ].includes(item.properties.category);
              let na_category_type = [].includes(item.properties.category_type);
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
                let startTime1 = item.properties['hours_' + days[day] + '_start1'];
                let startTime1Split;
                let st1;
                if (typeof(startTime1) !== "undefined" && startTime1 != null) {
                  startTime1Split = startTime1.split(':');
                  // console.log('startTime1[0]:', startTime1[0], 'parseInt(startTime1[0]):', parseInt(startTime1[0]));
                  st1 = new Date();
                  st1.setHours(parseInt(startTime1Split[0]), parseInt(startTime1Split[1]), 0, 0);
                }
                if (st1 < noon) {
                  // console.log('st1:', st1, 'noon:', noon);
                  dayAndTime = true;
                  break;
                }
                // console.log('noon:', noon, 'startTime1Split:', startTime1Split, 'd:', d, 'selectedDay:', selectedDay, "item.properties['hours_' + selectedDay + '_start1']", item.properties['hours_' + selectedDay + '_start1']);
                // if (item.properties['hours_' + selectedDay + '_start1'] );
              }
              // console.log('site_name:', item.properties.site_name, 'dependentServices:', dependentServices, 'startTimes1:', startTimes1);
              // let day = 1 != null;
              return na_category || na_category_type || dayAndTime;
            },
          },
          'afternoon': {
            unique_key: 'time_afternoon',
            i18n_key: 'time.afternoon',
            dependentGroups: [ 'weekday' ],
            value: function(item, dependentServices) {
              let na_category = [ 'playstreets', 'Community Refrigerators', 'Recreation Center' ].includes(item.properties.category);
              let na_category_type = [].includes(item.properties.category_type);
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
                let startTime1 = item.properties['hours_' + days[day] + '_start1'];
                let endTime1 = item.properties['hours_' + days[day] + '_end1'];
                let startTime2 = item.properties['hours_' + days[day] + '_start2'];
                let endTime2 = item.properties['hours_' + days[day] + '_end2'];
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
              let na_category = [ 'Community Refrigerators' ].includes(item.properties.category);
              let na_category_type = [].includes(item.properties.category_type);
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
                let startTime1 = item.properties['hours_' + days[day] + '_start1'];
                let endTime1 = item.properties['hours_' + days[day] + '_end1'];
                let startTime2 = item.properties['hours_' + days[day] + '_start2'];
                let endTime2 = item.properties['hours_' + days[day] + '_end2'];
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
    //   if (item.properties.category_type == "Senior Meal Site") {
    //     value = "Older adult meal site";
    //   } else if (item.properties.category_type == "Food Site") {
    //     value = "Food site";
    //   } else if (item.properties.category_type == "Student Meal Site") {
    //     value = "Student meal site";
    //   } else if (item.properties.category_type == "General Meal Site") {
    //     value = "General meal site";
    //   } else if (item.properties.category_type == "Community Refrigerators") {
    //     value = "Community refrigerator";
    //   } else if (item.properties.category_type) {
    //     value = item.properties.category_type;
    //   } else if (item.properties.category_type) {
    //     value = item.properties.category_type;
    //   }
    //   return value;
    // },
  },
  holidays: {
    forceBanner: false,
    forceBannerMessage: 'holidayClosureAllSites_weekend',
    automaticBanner: true,
    // current: true,
    // holidayName: 'holidayLaborDay',
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
      header: 'Student meal sites',
      body: '<ul class="alert-modal-list">\
          <li class="aml-odd">Starting on 6/17 use this app to find summer meals sites for youth.</li>\
          <li class="aml-even">A partir del 17 de junio, utilice esta aplicación para encontrar sitios de comidas de verano para jóvenes.</li>\
          <li class="aml-odd">从 6 月 17 日开始，使用此应用程序查找适合青少年的夏季聚餐网站.</li>\
          <li class="aml-even">Bắt đầu từ ngày 6/17 sử dụng ứng dụng này để tìm các trang web bữa ăn mùa hè cho thanh thiếu niên.</li>\
          <li class="aml-odd">Начиная с 17 июня используйте это приложение, чтобы найти сайты с летними блюдами для молодежи.</li>\
          <li class="aml-even">À partir du 17 juin, utilisez cette application pour trouver des sites de repas d\'été pour les jeunes.</li>\
        </ul>',
      // header: 'Fourth of July closures',
      // body: '<p>Most food and meal sites will be closed for the 4th of July. Please contact the site before you go to get the most up to date schedule.</p>',
      // header: 'Student meal sites',
      // body: '<ul><li>Effective September 3. Student ID is required.</li><li>To find additional food near you, text your zip code to <br>1 (800) 548-6479.</li></ul>',

    },
    header: {
      type: 'alertBanner',
      enabled: false,
      // enabled: function(state) {
      //   return state.alertResponse === 'alertHours';
      // },
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
  legendControl,
  dataSources: {
    covidFreeMealSites,
  },
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
  sections: {
    foodSites: {
      title: 'Food sites',
      titleSingular: 'foodSite',
      color: '#0F4D90',
      subsections: [ 'Community Refrigerators' ],
    },
    generalMealSites: {
      title: 'General meal sites',
      titleSingular: 'generalMealSite',
      color: '#506D0A',
      // subsections: [[ 'Broad Street Ministry', 'Muslims Serve', 'Kensington Meal Partners', 'SEAMAAC South Philly', 'Office of Homeless Services' ]],
      subsections: [ 'Broad Street Ministry', 'Office of Homeless Services' ],
    },
    studentMealSites: {
      title: 'Student meal sites',
      titleSingular: 'studentMealSite',
      color: '#721817',
      // subsections: [ 'PSD', 'PHA', 'CHARTER', 'Recreation Center', 'playstreets', 'NDS', 'Other Summer Meal Sites', 'Philabundance Summer Meal Sites', 'Caring for Friends' ],
      subsections: [ 'PHA', 'Recreation Center', 'playstreets', 'NDS', 'Other Summer Meal Sites', 'Philabundance Summer Meal Sites', 'Caring for Friends', 'JSJ Food Bank', 'ITAVTFOC Summer Meal Sites', 'Feed Philly Now Summer Meal Sites' ],
      hideCounts: false,
    },
    olderAdultMealSites: {
      title: 'Older adult meal sites',
      titleSingular: 'olderAdultMealSite',
      color: '#a86518',
      subsections: [ 'PCA', 'specialPCA', 'PPR_Senior' ],
    },
    publicBenefits: {
      title: 'Public Benefits',
      titleSingular: 'publicBenefits',
      color: '#444444',
      subsections: [ 'WIC', 'BenePhilly' ],
    },
  },
  subsections: {
    'PHILABUNDANCE': 'foodSites',
    'PHILABUNDANCE/SHARE FOOD PROGRAM': 'foodSites',
    'SHARE FOOD PROGRAM': 'foodSites',
    'Nutritional Development Services': 'foodSites',
    'Small Things Philly': 'foodSites',
    'Community Refrigerators': 'foodSites',
    'General Food Site': 'foodSites',
    'STP': 'generalMealSites',
    'Office of Homeless Services': 'generalMealSites',
    'Broad Street Ministry': 'generalMealSites',
    'PCA': 'olderAdultMealSites',
    'specialPCA': 'olderAdultMealSites',
    'PPR_Senior': 'olderAdultMealSites',
    'NDS': 'studentMealSites',
    'PHA': 'studentMealSites',
    'Philabundance Summer Meal Sites': 'studentMealSites',
    'Caring for Friends': 'studentMealSites',
    'JSJ Food Bank': 'studentMealSites',
    'Other Summer Meal Sites': 'studentMealSites',
    'playstreets': 'studentMealSites',
    'Recreation Center': 'studentMealSites',
    'WIC': 'publicBenefits',
    'BenePhilly': 'publicBenefits',
    'ITAVTFOC Summer Meal Sites': 'studentMealSites',
    'Feed Philly Now Summer Meal Sites': 'studentMealSites',
    // 'PPR': 'foodSites',
    // '': 'foodSites',
    // 'Student Meal Site': 'studentMealSites',
    // 'SEAMAAC South Philly': 'generalMealSites',
    // 'SENIOR SITE': 'olderAdultMealSites',
    // 'PPR_StudentMeals': 'studentMealSites',
    // 'Muslims Serve': 'generalMealSites',
    // 'Kensington Meal Partners': 'generalMealSites',
    // 'CHARTER': 'studentMealSites',
    // 'PSD': 'studentMealSites',
    // 'Other': 'studentMealSites',
  },
  pickupDetailsExceptions: {
    condition: function(item) {
      let value = false;
      if (item.properties.Site_Key === 163) {
        value = true;
      }
      return value;
    },
    value: 'dt',
  },
  mapLayer: {
    id: 'resources',
    source: 'resources',
    type: 'circle',
    paint: {
      'circle-radius': 7,
      'circle-color': [
        'match',
        ['get', 'category_type'],
        'Food Site',
        '#0F4D90',
        'Senior Meal Site',
        '#a86518',
        'Student Meal Site',
        '#721817',
        'General Meal Site',
        '#506D0A',
        'Public Benefits',
        '#444444',
        /* other */ '#000000'
      ],
      'circle-stroke-width': 1,
      'circle-stroke-color': 'white',
    },
  },
  footer: [
    {
      type: "native",
      href: "https://www.phila.gov/",
      attrs: {
        target: "_blank",
      },
      text: "app.cityOfPhiladelphia",
    },
    {
      type: "native",
      href: "https://www.phila.gov/food/",
      text: "app.about",
    },
    {
      type: "native",
      href: "https://www.phila.gov/feedback/",
      attrs: {
        target: "_blank",
      },
      text: "app.feedback",
    },
  ],
};

pinboard($config);
export default $config;

