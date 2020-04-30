<template>
  <div class="grid-x grid-padding-x">
    <div class="cell medium-12">
      <div
        v-if="item.attributes.address"
        class="detail"
      >
        <font-awesome-icon icon="map-marker-alt" />
        <!-- <span v-html="parseAddress(item.attributes.address)"> -->
        <span>
          <!-- {{ parseAddress(item.attributes.address) }} -->
          {{ item.attributes.address }}<br>
          Philadelphila, PA {{ item.attributes.ZIP2 }}
        </span>
      </div>
    </div>
    <div class="cell medium-12">
      <div
        v-if="item.attributes.CATEGORY"
        class="detail"
      >
        <font-awesome-icon icon="hand-holding-heart" />
        <span>{{ item.attributes.CATEGORY }}</span>
      </div>
      <div
        v-if="item.attributes.phone_number"
        class="detail"
      >
        <font-awesome-icon icon="phone" />
        <span>{{ item.attributes.phone_number }}</span>
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
      v-if="subsection === 'PPR'"
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
  </div>
</template>

<script>

import SeniorMealSiteCard from './SeniorMealSiteCard.vue';
import FoodSiteCard from './FoodSiteCard.vue';
import CharterSchoolCard from './CharterSchoolCard.vue';
import PprSchoolCard from './PprSchoolCard.vue';
import PsdSchoolCard from './PsdSchoolCard.vue';
import PhaSchoolCard from './PhaSchoolCard.vue';

export default {
  name: 'ExpandCollapseContent',
  components: {
    SeniorMealSiteCard,
    FoodSiteCard,
    CharterSchoolCard,
    PprSchoolCard,
    PsdSchoolCard,
    PhaSchoolCard,
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
    subsections() {
      return this.$config.subsections;
    },
    section() {
      return this.subsections[this.$props.item.attributes['CATEGORY']];
    },
    subsection() {
      return this.$props.item.attributes.CATEGORY;
    },
  },
  methods: {
    parseAddress(address) {
      const formattedAddress = address.replace(/(Phila.+)/g, city => `<div>${city}</div>`).replace(/^\d+\s[A-z]+\s[A-z]+/g, lineOne => `<div>${lineOne}</div>`).replace(/,/, '');
      return formattedAddress;
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
