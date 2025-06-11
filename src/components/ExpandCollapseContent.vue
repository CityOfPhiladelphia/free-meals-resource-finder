<script setup>

// import { useRoute, useRouter } from 'vue-router';

import useLocalSharedFunctions from '../composables/useLocalSharedFunctions.js';
const { getPickupDetails, parseTimeRange, parseException } = useLocalSharedFunctions();

import transforms from '../util/transforms.js';
import { format } from 'date-fns';

import SeniorMealSiteCard from './SeniorMealSiteCard.vue';
import FoodSiteCard from './FoodSiteCard.vue';
import PprSchoolCard from './PprSchoolCard.vue';
import PhaSchoolCard from './PhaSchoolCard.vue';
import PlaystreetsSchoolCard from './PlaystreetsSchoolCard.vue';
import NdsSchoolCard from './NdsSchoolCard.vue';
import GeneralSiteCard from './GeneralSiteCard.vue';
import FridgeSiteCard from './FridgeSiteCard.vue';
import PublicBenefitsSiteCard from './PublicBenefitsSiteCard.vue';

import $config from '../main.js';

const props = defineProps({
  item: {
    type: Object,
    default: function(){
      return {};
    },
  }
});

// const isMobile = computed(() => {
//   return MainStore.isMobileDevice;
// });

const currentUnixDate = computed (() => {
  let currentYear = format(new Date(), 'yyyy');
  let currentMonth = format(new Date(), 'MM');
  let currentDay = format(new Date(), 'dd');
  let dateStart = new Date(2023, 5, 8);
  // if (import.meta.env.VITEDEBUG) console.log('currentYear:', currentYear, 'currentMonth:', currentMonth, 'currentDay:', currentDay, 'dateStart:', dateStart, 'dateStartUnix:', parseInt(format(dateStart, 'T')));
  return parseInt(format(dateStart, 'T'));
});

const futureHolidayClosure = computed (() => {
  let holiday = this.$store.state.holiday;
  if (holiday.coming_soon) {
    return true;
  } 
  return false;
});

const currentHolidayClosure = computed (() => {
  let holiday = this.$store.state.holiday;
  if (holiday.current) {
    return true;
  } 
  return false;
});

const currentWeatherClosure = computed (() => {
  if (this.item.properties.close_weather_start != null && this.item.properties.close_weather_end != null) {
    if (this.currentUnixDate >= this.item.properties.close_weather_start && this.currentUnixDate <= this.item.properties.close_weather_end) {
      return true;
    } 
    return false;
  } 
  return false;
});

const currentTemporaryClosure = computed (() => {
  if (this.item.properties.close_temporary_start != null && this.item.properties.close_temporary_end != null) {
    if (this.currentUnixDate >= this.item.properties.close_temporary_start && this.currentUnixDate <= this.item.properties.close_temporary_end) {
      return true;
    } 
    return false;
  } 
  return false;
});

const closureMessage = computed (() => {
  let holiday = this.$store.state.holiday;
  let message;
  if (this.currentHolidayClosure) {
    message = this.$t('holidayClosure') + holiday.holiday_label + ' ' + holiday.start_date;
  } else if (this.futureHolidayClosure) {
    message = this.$t('futureHolidayClosure') + holiday.holiday_label + ' ' + holiday.start_date;
    // message = this.$t('futureHolidayClosure') + transforms.toLocaleDateString.transform(this.item.properties.close_holiday_start);
  } else if (this.currentWeatherClosure) {
    message = this.$t('weatherClosure');
  } else if (this.currentTemporaryClosure) {
    message = this.$t('temporaryClosure');
  } else {
    message = null;
  }
  return message;
});

// const transforms = computed(() => {
//   return transforms;
// });

const subsections = computed(() => {
  return $config.subsections;
});

const section = computed (() => {
  return subsections.value[props.item.properties['category']];
});

const subsection = computed (() => {
  return props.item.properties.category;
});

const address = computed (() => {
  // let value;
  // // if (props.item._featureId.includes('covidFreeMealSites')) {
  // value = props.item.properties['address'];//.address;
  // // } //else if (props.item._featureId.includes('parksSites')) {
  // //   value = transforms.titleCase.transform(props.item.properties.site_name);
  // // }
  // return value;
  if (props.item.properties) {
    return props.item.properties.address;
  }
});

const zipcode = computed (() => {
  let value;
  if (props.item.properties.zip_code) {
    value = props.item.properties.zip_code;
  } else if (props.item.properties.ZIP_CODE) {
    value = props.item.properties.ZIP_CODE;
  }
  return value;
});

const daysKey = computed (() => {
  return {
    'mon': 'monday',
    'tues': 'tuesday',
    'wed': 'wednesday',
    'thurs': 'thursday',
    'fri': 'friday',
    'sat': 'saturday',
    'sun': 'sunday',
  };
});

const exceptionsList = computed (() => {
  let days = [ 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun' ];
  let exceptionsArray = [];
  for (let day of days) {
    let dayException = props.item.properties['hours_' + day + '_exceptions'];
    if (dayException) {
      exceptionsArray.push(dayException);
    }
  }
  let exceptionsSet = new Set(exceptionsArray);
  let exceptionsSetArray = [ ...exceptionsSet ];
  return exceptionsSetArray;
});

const exceptionsByDay = computed (() => {
  let days = [ 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun' ];
  let exceptions = {};
  for (let day of days) {
    let dayException = props.item.properties['hours_' + day + '_exceptions'];
    if (dayException) {
      exceptions[day] = dayException;
    }
  }
  return exceptions;
});

const exceptionsWithCounter = computed (() => {
  let exceptionsWithCounter = {};
  for (let day = 0; day < Object.keys(exceptionsByDay.value).length; day++) {
    exceptionsWithCounter[Object.keys(exceptionsByDay.value)[day]] = {
      value: Object.keys(exceptionsByDay.value)[day],
      counter: 1+exceptionsList.value.indexOf(exceptionsByDay.value[Object.keys(exceptionsByDay.value)[day]]),
    };
  }
  // if (import.meta.env.VITEDEBUG) console.log('exceptionsWithCounter:', exceptionsWithCounter);
  return exceptionsWithCounter;
});

const pickupDetails = computed (() => {
  return getPickupDetails(props.item, daysKey.value, exceptionsWithCounter.value);
});



const parseAddress = (address) => {
  const formattedAddress = address.replace(/(Phila.+)/g, city => `<div>${city}</div>`).replace(/^\d+\s[A-z]+\s[A-z]+/g, lineOne => `<div>${lineOne}</div>`).replace(/,/, '');
  return formattedAddress;
};

const getCategory = (item) => {
  let value;
  if (this.$config.categoryExceptions) {
    if (this.$config.categoryExceptions.condition(item)) {
      value = this.$config.categoryExceptions.value;
      // if (import.meta.env.VITEDEBUG) console.log('getCategory is running, item:', item, 'value:', value);
    } else {
      value = item.properties.category;
    }
  } else {
    value = item.properties.category;
  }
  return value;
};

const makeValidUrl = (url) => {
  let newUrl = window.decodeURIComponent(url);
  newUrl = newUrl
    .trim()
    .replace(/\s/g, '');
  if (/^(:\/\/)/.test(newUrl)) {
    return `http${newUrl}`;
  }
  if (!/^(f|ht)tps?:\/\//i.test(newUrl)) {
    return `http://${newUrl}`;
  }
  return newUrl;
};

</script>

<template>
  <div>
    <!-- <div :class="isMobile ? 'main-content-mobile' : 'main-content'"> -->
    <div class="main-ec-content">
      <div class="columns">
        <div class="column is-6">
          <div
            v-if="address"
            class="columns is-mobile"
          >
            <div class="column is-1">
              <font-awesome-icon icon="map-marker-alt" />
            </div>
            <div class="column">
              {{ address }}<br>
              Philadelphia, PA {{ zipcode }}<br>
            </div>
          </div>

          <div
            v-if="item.properties.phone_number"
            class="columns is-mobile"
          >
            <div class="column is-1">
              <font-awesome-icon icon="phone" />
            </div>
            <div class="column">
              {{ item.properties.phone_number }}
            </div>
          </div>
        </div>

        <div class="column is-6">
          <div
            v-if="item.properties.category && item.properties.category !== 'General Food Site'"
            class="columns is-mobile"
          >
            <div class="column is-1">
              <font-awesome-icon icon="hand-holding-heart" />
            </div>
            <div class="column is-11">
              <!-- <a
                v-if="item.properties.website"
                target="_blank"
                :href="item.properties.website"
              >
                {{ $t('sections.' + section + '.subsections[\'' + item.properties.category + '\'].name') }}
                <font-awesome-icon icon="external-link-alt" />
              </a> -->
              <span
                v-html="$t('sections.' + section + '.subsections[\'' + item.properties.category + '\'].name')"
              />
              <!-- v-if="!item.properties.website" -->
            </div>
          </div>

          <div
            v-if="item.properties.website"
            class="columns is-mobile website-div"
          >
            <div class="column is-1">
              <font-awesome-icon icon="globe" />
            </div>
            <div class="column is-11">
              <a
                target="_blank"
                :href="makeValidUrl(item.properties.website)"
              >
                {{ item.properties.website }}
                <font-awesome-icon icon="external-link-alt" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="item.properties.TEMPCLOSE !== null && item.properties.TEMPCLOSE >= currentUnixDate"
        class="temp-close-section"
      >
        <div class="card-exclamation-holder small-5">
          <font-awesome-icon
            icon="exclamation-triangle"
            class="fa-2x fa-icon-class"
          />
        </div>
        <div class="grid-y card-exclamation-details small-19">
          <div><b>{{ $t('change') }}:</b></div>
          <div>{{ $t('closure') }}: {{ transforms.toLocaleDateString.transform(item.properties.TEMPCLOSE) }}</div>
        </div>
      </div>

      <senior-meal-site-card
        v-if="section === 'olderAdultMealSites'"
        :item="item"
        :pickup-details="pickupDetails"
      />

      <food-site-card
        v-if="section === 'foodSites' && subsection !== 'Community Refrigerators'"
        :item="item"
        :exceptions-list="exceptionsList"
        :pickup-details="pickupDetails"
      />

      <ppr-school-card
        v-if="section === 'studentMealSites' && subsection === 'Recreation Center'"
        :item="item"
        :pickup-details="pickupDetails"
      />

      <pha-school-card
        v-if="section === 'studentMealSites' && subsection === 'PHA'"
        :item="item"
        :exceptions-list="exceptionsList"
        :pickup-details="pickupDetails"
      />

      <playstreets-school-card
        v-if="section === 'studentMealSites' && subsection === 'playstreets'"
        :item="item"
        :pickup-details="pickupDetails"
      />

      <nds-school-card
        v-if="section === 'studentMealSites' && subsection === 'NDS'"
        :item="item"
        :exceptions-list="exceptionsList"
        :pickup-details="pickupDetails"
      />

      <nds-school-card
        v-if="section === 'studentMealSites' && subsection === 'Philabundance Summer Meal Sites'"
        :item="item"
        :exceptions-list="exceptionsList"
        :pickup-details="pickupDetails"
      />

      <nds-school-card
        v-if="section === 'studentMealSites' && subsection === 'Caring for Friends'"
        :item="item"
        :exceptions-list="exceptionsList"
        :pickup-details="pickupDetails"
      />

      <nds-school-card
        v-if="section === 'studentMealSites' && subsection === 'JSJ Food Bank'"
        :item="item"
        :exceptions-list="exceptionsList"
        :pickup-details="pickupDetails"
      />

      <ppr-school-card
        v-if="section === 'studentMealSites' && subsection === 'Other Summer Meal Sites'"
        :item="item"
        :pickup-details="pickupDetails"
      />

      <general-site-card
        v-if="section === 'generalMealSites'"
        :item="item"
        :exceptions-list="exceptionsList"
        :pickup-details="pickupDetails"
      />

      <fridge-site-card
        v-if="section === 'foodSites' && subsection === 'Community Refrigerators'"
        :item="item"
        :pickup-details="pickupDetails"
      />

      <public-benefits-site-card
        v-if="section === 'publicBenefits'"
        :item="item"
        :exceptions-list="exceptionsList"
        :pickup-details="pickupDetails"
      />

      <!-- <senior-meal-site-ppr-card
        v-if="section === 'olderAdultMealSites' && subsection === 'PPR_Senior'"
        :item="item"
        :pickup-details="pickupDetails"
      /> -->

      <!-- <charter-school-card
        v-if="section === 'studentMealSites' && subsection === 'CHARTER'"
        :item="item"
        :pickup-details="pickupDetails"
      /> -->

      <!-- <psd-school-card
        v-if="section === 'studentMealSites' && subsection === 'PSD'"
        :item="item"
        :pickup-details="pickupDetails"
      /> -->

      <!-- <other-school-card
        v-if="section === 'studentMealSites' && subsection === 'Other'"
        :item="item"
        :pickup-details="pickupDetails"
      /> -->
    </div>
  </div>
</template>
