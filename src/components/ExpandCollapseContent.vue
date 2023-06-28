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
        </div>

        <div class="column is-6">
          <div
            v-if="item.attributes.category"
            class="columns is-mobile"
          >
            <div class="column is-1">
              <font-awesome-icon icon="hand-holding-heart" />
            </div>
            <div class="column is-11">
              <a
                v-if="item.attributes.Website"
                target="_blank"
                :href="item.attributes.Website"
              >
                {{ $t('sections.' + section + '.subsections[\'' + item.attributes.category + '\'].name') }}
                <font-awesome-icon icon="external-link-alt" />
              </a>
              <span
                v-if="!item.attributes.Website"
                v-html="$t('sections.' + section + '.subsections[\'' + item.attributes.category + '\'].name')"
              />
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
      />

      <food-site-card
        v-if="section === 'foodSites'"
        :item="item"
      />

      <charter-school-card
        v-if="section === 'studentMealSites' && subsection === 'CHARTER'"
        :item="item"
      />

      <ppr-school-card
        v-if="section === 'studentMealSites' && subsection === 'Recreation Center'"
        :item="item"
      />

      <psd-school-card
        v-if="section === 'studentMealSites' && subsection === 'PSD'"
        :item="item"
      />

      <pha-school-card
        v-if="section === 'studentMealSites' && subsection === 'PHA'"
        :item="item"
      />

      <other-school-card
        v-if="section === 'studentMealSites' && subsection === 'Other'"
        :item="item"
      />

      <playstreets-school-card
        v-if="section === 'studentMealSites' && subsection === 'playstreets'"
        :item="item"
      />

      <nds-school-card
        v-if="section === 'studentMealSites' && subsection === 'NDS'"
        :item="item"
      />

      <nds-school-card
        v-if="section === 'studentMealSites' && subsection === 'Philabundance Summer Meal Sites'"
        :item="item"
      />

      <nds-school-card
        v-if="section === 'studentMealSites' && subsection === 'Caring for Friends'"
        :item="item"
      />

      <ppr-school-card
        v-if="section === 'studentMealSites' && subsection === 'Other Summer Meal Sites'"
        :item="item"
      />

      <general-site-card
        v-if="section === 'generalMealSites'"
        :item="item"
      />

      <fridge-site-card
        v-if="section === 'communityRefrigerators'"
        :item="item"
      />
    </div>
  </div>
</template>

<script>

import transforms from '../general/transforms.js';
import { format } from 'date-fns';

import SeniorMealSiteCard from './SeniorMealSiteCard.vue';
import FoodSiteCard from './FoodSiteCard.vue';
import CharterSchoolCard from './CharterSchoolCard.vue';
import PprSchoolCard from './PprSchoolCard.vue';
import PsdSchoolCard from './PsdSchoolCard.vue';
import PhaSchoolCard from './PhaSchoolCard.vue';
import OtherSchoolCard from './OtherSchoolCard.vue';
import RecreationCentersSchoolCard from './RecreationCentersSchoolCard.vue';
import PlaystreetsSchoolCard from './PlaystreetsSchoolCard.vue';
import NdsSchoolCard from './NdsSchoolCard.vue';
import GeneralSiteCard from './GeneralSiteCard.vue';
import FridgeSiteCard from './FridgeSiteCard.vue';


import PrintShareSection from '@phila/pinboard/src/components/PrintShareSection';
import {
  Callout,
} from '@phila/phila-ui';

export default {
  name: 'ExpandCollapseContent',
  components: {
    SeniorMealSiteCard,
    FoodSiteCard,
    CharterSchoolCard,
    PprSchoolCard,
    PsdSchoolCard,
    PhaSchoolCard,
    OtherSchoolCard,
    RecreationCentersSchoolCard,
    PlaystreetsSchoolCard,
    NdsSchoolCard,
    GeneralSiteCard,
    FridgeSiteCard,
    PrintShareSection,
    Callout,
  },
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
      if (this.$props.item.attributes.ZIP2) {
        value = this.$props.item.attributes.ZIP2;
      } else if (this.$props.item.attributes.ZIP_CODE) {
        value = this.$props.item.attributes.ZIP_CODE;
      }
      return value;
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
  },
};

</script>

<style lang="scss" scoped>
// @import "../../node_modules/@phila/pinboard/src/assets/scss/expandCollapse.scss";

.location-content {
  // font-size: 14px;
}

</style>
