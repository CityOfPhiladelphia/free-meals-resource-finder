<template>
  <div>
    <!-- <div :class="isMobile ? 'main-content-mobile' : 'main-content'"> -->
      
      
    <!-- <div class="columns top-section">
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
        </div> -->
    <!-- <div> -->
    <div :class="isMobile ? 'main-content-mobile' : 'main-content'">
      <print-share-section
        :item="item"
      />

      <!-- <callout
        v-if="closureMessage != null"
        :message="closureMessage"
        type="warning"
      /> -->

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
            v-if="item.attributes.phone_number"
            class="columns is-mobile"
          >
            <div class="column is-1">
              <font-awesome-icon icon="phone" />
            </div>
            <div class="column">
              {{ item.attributes.phone_number }}
            </div>
          </div>
        </div>

        <div class="column is-6">
          <div
            v-if="item.attributes.category && item.attributes.category !== 'General Food Site'"
            class="columns is-mobile"
          >
            <div class="column is-1">
              <font-awesome-icon icon="hand-holding-heart" />
            </div>
            <div class="column is-11">
              <!-- <a
                v-if="item.attributes.website"
                target="_blank"
                :href="item.attributes.website"
              >
                {{ $t('sections.' + section + '.subsections[\'' + item.attributes.category + '\'].name') }}
                <font-awesome-icon icon="external-link-alt" />
              </a> -->
              <span
                v-html="$t('sections.' + section + '.subsections[\'' + item.attributes.category + '\'].name')"
              />
              <!-- v-if="!item.attributes.website" -->
            </div>
          </div>

          <div
            v-if="item.attributes.website"
            class="columns is-mobile website-div"
          >
            <div class="column is-1">
              <font-awesome-icon icon="globe" />
            </div>
            <div class="column is-11">
              <a
                target="_blank"
                :href="makeValidUrl(item.attributes.website)"
              >
                {{ item.attributes.website }}
                <font-awesome-icon icon="external-link-alt" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="item.attributes.TEMPCLOSE !== null && item.attributes.TEMPCLOSE >= currentUnixDate"
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
          <div>{{ $t('closure') }}: {{ transforms.toLocaleDateString.transform(item.attributes.TEMPCLOSE) }}</div>
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

<script>

import LocalSharedFunctions from './mixins/LocalSharedFunctions.vue';

import transforms from '../general/transforms.js';
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
// import RecreationCentersSchoolCard from './RecreationCentersSchoolCard.vue';
// import SeniorMealSitePprCard from './SeniorMealSitePprCard.vue';
// import CharterSchoolCard from './CharterSchoolCard.vue';
// import PsdSchoolCard from './PsdSchoolCard.vue';
// import OtherSchoolCard from './OtherSchoolCard.vue';

import PrintShareSection from '@phila/pinboard/src/components/PrintShareSection';
import {
  Callout,
} from '@phila/phila-ui';

export default {
  name: 'ExpandCollapseContent',
  components: {
    SeniorMealSiteCard,
    FoodSiteCard,
    PprSchoolCard,
    PhaSchoolCard,
    PlaystreetsSchoolCard,
    NdsSchoolCard,
    GeneralSiteCard,
    FridgeSiteCard,
    PublicBenefitsSiteCard,
    PrintShareSection,
    Callout,
    // RecreationCentersSchoolCard,
    // SeniorMealSitePprCard,
    // CharterSchoolCard,
    // PsdSchoolCard,
    // OtherSchoolCard,
  },
  mixins: [
    // SharedFunctions,
    LocalSharedFunctions,
  ],
  props: {
    item: {
      type: Object,
      default: function(){
        return {};
      },
    },
  },
  computed: {
    currentUnixDate() {
      let currentYear = format(new Date(), 'yyyy');
      let currentMonth = format(new Date(), 'MM');
      let currentDay = format(new Date(), 'dd');
      // let dateStart = new Date(currentYear, currentMonth-1, currentDay);
      let dateStart = new Date(2023, 5, 8);
      console.log('currentYear:', currentYear, 'currentMonth:', currentMonth, 'currentDay:', currentDay, 'dateStart:', dateStart, 'dateStartUnix:', parseInt(format(dateStart, 'T')));
      return parseInt(format(dateStart, 'T'));
    },
    // holidayWeek() {
    //   if (this.item.attributes.close_holiday_start != null)
    // },
    futureHolidayClosure() {
      let holiday = this.$store.state.holiday;
      if (holiday.coming_soon) {
        return true;
      } 
      return false;
      
      // if (this.item.attributes.close_holiday_start) {
      //   if (this.currentUnixDate < this.item.attributes.close_holiday_start) {
      //     return true;
      //   } 
      //   return false;
      // } 
      // return false;
    },
    currentHolidayClosure() {
      let holiday = this.$store.state.holiday;
      if (holiday.current) {
        return true;
      } 
      return false;
      
      // if (this.item.attributes.close_holiday_start != null && this.item.attributes.close_holiday_end != null) {
      //   if (this.currentUnixDate >= this.item.attributes.close_holiday_start && this.currentUnixDate <= this.item.attributes.close_holiday_end) {
      //     return true;
      //   } 
      //   return false;
      // } 
      // return false;
    },
    currentWeatherClosure() {
      if (this.item.attributes.close_weather_start != null && this.item.attributes.close_weather_end != null) {
        if (this.currentUnixDate >= this.item.attributes.close_weather_start && this.currentUnixDate <= this.item.attributes.close_weather_end) {
          return true;
        } 
        return false;
      } 
      return false;
    },
    currentTemporaryClosure() {
      if (this.item.attributes.close_temporary_start != null && this.item.attributes.close_temporary_end != null) {
        if (this.currentUnixDate >= this.item.attributes.close_temporary_start && this.currentUnixDate <= this.item.attributes.close_temporary_end) {
          return true;
        } 
        return false;
      } 
      return false;
    },
    closureMessage() {
      let holiday = this.$store.state.holiday;
      let message;
      if (this.currentHolidayClosure) {
        message = this.$t('holidayClosure') + holiday.holiday_label + ' ' + holiday.start_date;
      } else if (this.futureHolidayClosure) {
        message = this.$t('futureHolidayClosure') + holiday.holiday_label + ' ' + holiday.start_date;
        // message = this.$t('futureHolidayClosure') + transforms.toLocaleDateString.transform(this.item.attributes.close_holiday_start);
      } else if (this.currentWeatherClosure) {
        message = this.$t('weatherClosure');
      } else if (this.currentTemporaryClosure) {
        message = this.$t('temporaryClosure');
      } else {
        message = null;
      }
      return message;
    },
    transforms() {
      return transforms;
    },
    subsections() {
      return this.$config.subsections;
    },
    section() {
      return this.subsections[this.$props.item.attributes['category']];
    },
    subsection() {
      return this.$props.item.attributes.category;
    },
    address() {
      let value;
      if (this.$props.item._featureId.includes('covidFreeMealSites')) {
        value = this.$props.item.attributes.address;
      } else if (this.$props.item._featureId.includes('parksSites')) {
        value = transforms.titleCase.transform(this.$props.item.attributes.site_name);
      }
      return value;
    },
    zipcode() {
      let value;
      if (this.$props.item.attributes.zip_code) {
        value = this.$props.item.attributes.zip_code;
      } else if (this.$props.item.attributes.ZIP_CODE) {
        value = this.$props.item.attributes.ZIP_CODE;
      }
      return value;
    },
    daysKey() {
      return {
        'mon': 'monday',
        'tues': 'tuesday',
        'wed': 'wednesday',
        'thurs': 'thursday',
        'fri': 'friday',
        'sat': 'saturday',
        'sun': 'sunday',
      };
    },
    // daysKey() {
    //   return {
    //     'monday': 'mon',
    //     'tuesday': 'tues',
    //     'wednesday': 'wed',
    //     'thursday': 'thurs',
    //     'friday': 'fri',
    //     'saturday': 'sat',
    //     'sunday': 'sun',
    //   };
    // },
    exceptionsList() {
      // let days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
      // let days = [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday' ];
      let days = [ 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun' ];
      let exceptionsArray = [];
      for (let day of days) {
        let dayException = this.item.attributes['hours_' + day + '_exceptions'];
        if (dayException) {
          exceptionsArray.push(dayException);
        }
      }
      let exceptionsSet = new Set(exceptionsArray);
      let exceptionsSetArray = [ ...exceptionsSet ];
      return exceptionsSetArray;
    },
    exceptionsByDay() {
      // let days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
      // let days = [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday' ];
      let days = [ 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun' ];
      let exceptions = {};
      for (let day of days) {
        let dayException = this.item.attributes['hours_' + day + '_exceptions'];
        if (dayException) {
          exceptions[day] = dayException;
        }
      }
      return exceptions;
    },
    exceptionsWithCounter() {
      let exceptionsWithCounter = {};
      for (let day = 0; day < Object.keys(this.exceptionsByDay).length; day++) {
        exceptionsWithCounter[Object.keys(this.exceptionsByDay)[day]] = {
          value: Object.keys(this.exceptionsByDay)[day],
          counter: 1+this.exceptionsList.indexOf(this.exceptionsByDay[Object.keys(this.exceptionsByDay)[day]]),
        };
      }
      console.log('exceptionsWithCounter:', exceptionsWithCounter);
      return exceptionsWithCounter;
    },
    pickupDetails() {
      return this.getPickupDetails();
    },
  },
  methods: {
    parseAddress(address) {
      const formattedAddress = address.replace(/(Phila.+)/g, city => `<div>${city}</div>`).replace(/^\d+\s[A-z]+\s[A-z]+/g, lineOne => `<div>${lineOne}</div>`).replace(/,/, '');
      return formattedAddress;
    },
    getCategory(item) {
      let value;
      if (this.$config.categoryExceptions) {
        if (this.$config.categoryExceptions.condition(item)) {
          value = this.$config.categoryExceptions.value;
          // console.log('getCategory is running, item:', item, 'value:', value);
        } else {
          value = item.attributes.category;
        }
      } else {
        value = item.attributes.category;
      }
      return value;
    },
    makeValidUrl(url) {
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
    },
  },
};

</script>

<style lang="scss" scoped>
// @import "../../node_modules/@phila/pinboard/src/assets/scss/expandCollapse.scss";

.location-content {
  // font-size: 14px;
}

</style>
