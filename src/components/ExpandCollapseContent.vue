<template>
  <div class="grid-x grid-padding-x">
    <div class="cell medium-12">
      <!-- v-if="item.attributes.address" -->
      <div
        v-if="address"
        class="grid-x detail"
      >
        <div class="small-2">
          <font-awesome-icon icon="map-marker-alt" />
        </div>
        <div class="small-22">
          <!-- {{ item.attributes.address }}<br> -->
          {{ address }}<br>
          <!-- Philadelphia, PA {{ item.attributes.ZIP2 }} -->
          Philadelphia, PA {{ zipcode }}
        </div>
      </div>
    </div>

    <div class="cell medium-12">
      <!-- v-if="getCategory(item)" -->
      <div
        v-if="item.attributes.CATEGORY"
        class="grid-x detail"
      >
        <div class="small-2">
          <font-awesome-icon icon="hand-holding-heart" />
        </div>
        <div
          class="small-22"
          v-html="$t('sections.' + section + '.subsections[\'' + item.attributes.CATEGORY + '\'].name')"
        />
        <!-- v-html="$t('sections.' + section + '.subsections[\'' + getCategory(item) + '\'].name')" -->
      </div>

      <div
        v-if="item.attributes.phone_number"
        class="grid-x detail"
      >
        <div class="small-2">
          <font-awesome-icon icon="phone" />
        </div>
        <div class="small-22">
          {{ item.attributes.phone_number }}
        </div>
      </div>
    </div>

    <!-- v-if="item.attributes.TEMPCLOSE !== null" -->
    <div
      v-if="item.attributes.TEMPCLOSE !== null && item.attributes.TEMPCLOSE >= currentUnixDate"
      class="grid-x temp-close-section"
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
      v-if="section === 'seniorMealSites'"
      :item="item"
    />

    <food-site-card
      v-if="section === 'foodSites'"
      :item="item"
    />

    <charter-school-card
      v-if="subsection === 'CHARTER'"
      :item="item"
    />

    <ppr-school-card
      v-if="section === 'studentMealSites' && subsection === 'PPR_StudentMeals'"
      :item="item"
    />

    <psd-school-card
      v-if="subsection === 'PSD'"
      :item="item"
    />

    <pha-school-card
      v-if="subsection === 'PHA'"
      :item="item"
    />

    <playstreets-school-card
      v-if="subsection === 'playstreets'"
      :item="item"
    />

    <nds-school-card
      v-if="subsection === 'NDS'"
      :item="item"
    />

    <outdoor-site-card
      v-if="section === 'outdoorMealSites'"
      :item="item"
    />
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
import PlaystreetsSchoolCard from './PlaystreetsSchoolCard.vue';
import NdsSchoolCard from './NdsSchoolCard.vue';
import OutdoorSiteCard from './OutdoorSiteCard.vue';

export default {
  name: 'ExpandCollapseContent',
  components: {
    SeniorMealSiteCard,
    FoodSiteCard,
    CharterSchoolCard,
    PprSchoolCard,
    PsdSchoolCard,
    PhaSchoolCard,
    PlaystreetsSchoolCard,
    NdsSchoolCard,
    OutdoorSiteCard,
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
      let dateStart = new Date(currentYear, currentMonth-1, currentDay);
      return parseInt(format(dateStart, 'T'));
    },
    transforms() {
      return transforms;
    },
    subsections() {
      return this.$config.subsections;
    },
    section() {
      return this.subsections[this.$props.item.attributes['CATEGORY']];
    },
    subsection() {
      return this.$props.item.attributes.CATEGORY;
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
          value = item.attributes.CATEGORY;
        }
      } else {
        value = item.attributes.CATEGORY;
      }
      return value;
    },
  },
};

</script>

<style lang="scss">
.location-item {
  position: relative;
  border-bottom: 1px solid black;
  height:100%;

  &:hover::after {
    color: white;
  }

  .temp-close-section {
    width: 100%;
  }

  .card-exclamation-holder {
    padding: 20px;
    background-color: #CC3000;
    text-align: center;
  }

  .fa-icon-class {
    color: white;
    text-align: center;
  }

  .card-exclamation-details {
    padding: 10px;
    background-color: #F5D6CC;
  }

  .location-title {
    cursor: pointer;
    padding: 1rem;
    margin-bottom: 0;
    &:hover{
      background: #2176d2;
      color: white;
    }
  }

  &::after{
    position: absolute;
    right:1rem;
    top: 0;
    content: '+';
    font-weight: 900;
    font-size:1.5rem;
    z-index: 100;
    color: color(dark-ben-franklin)
  }
  &.open{
    h2{
      color:white;
      background-color: color(ben-franklin-blue);
      font-weight: 900;
    }
    &::after{
      content: '-';
      color:white;
    }
  }
  .location-content{
    overflow: hidden;
    height:0;

    &.location-open{
      padding: 1rem;
      height: 100%;
      overflow: initial;
    }
  }
}
</style>
