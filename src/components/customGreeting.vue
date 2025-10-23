<script setup>

import { onMounted, watch, ref, computed, defineEmits } from 'vue';

import $config from '../main.js';

const $emit = defineEmits(['view-list']);

const props = defineProps({
  database: {
    type: Array,
  },
  isMobile: {
    type: Boolean,
    default: false,
  },
});

const sections = ref({});
const subsections = ref({});

watch(
  () => props.database,
  async nextDatabase => {
    subsections.value = getCounts();
  },
);

const isSummer = computed(() => {
  const today = new Date();
  const summerMealsBegin = new Date("2025-06-18");
  const summerMealsEnd = new Date("2025-08-29");
  return (summerMealsBegin < today) && (today < summerMealsEnd)
});

onMounted(async () => {
  sections.value = $config.sections;
});

// METHODS
const getCounts = () => {
  console.log('customGreeting.vue getCounts is running');
  const refineData = props.database;
  let service = '';

  console.log('in getRefineSearchList, refineData:', refineData);
  refineData.forEach((arrayElem) => {
    if (arrayElem.services_offered) {
      service += `${arrayElem.services_offered},`;
    } else if (arrayElem.properties.category) {
      service += `${arrayElem.properties.category},`;
    }
  });

  // TODO: break into smaller chunks
  // let serviceArray = service.split(/(,|;)/);
  let serviceArray = service.split(',');
  serviceArray = serviceArray.map(s => s.trim());

  let countObject = serviceArray.reduce(function (acc, curr) {
    if (curr) {
      if (typeof acc[curr] == 'undefined') {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }
    }
    return acc;
  }, {});

  return countObject;
}

</script>

<template>
  <div class="main-greeting">
    <div class="data-section">
      <div class="exclamation-holder columns is-mobile is-vcentered">
        <div class="column is-narrow">
          <font-awesome-icon icon="exclamation-triangle" class="fa-3x" />
        </div>
        <div class="column exclamation-details">
          <ul class="bullet-list">
            <li>{{ $t('checkSite') }}</li>
            <li v-html="$t('snapLink')"></li>
          </ul>
        </div>
      </div>

      <div class="has-text-centered container">
        <button class="button greeting-button" @click="$emit('view-list')" v-html="$t('app.viewList')" />
        <button v-if="isMobile" class="button greeting-button" @click="$emit('view-map')" v-html="$t('app.viewMap')" />
      </div>
    </div>

    <!-- foodSites -->
    <div class="section-header" :style="{ 'background-color': $config.sections.foodSites.color }">
      <b>{{ $t('sections.foodSites.header') }}</b>
    </div>
    <!-- eligibility -->
    <div class="columns big-cell-pad">
      <div class="column is-3 small-cell-pad" v-html="$t('eligibility')" />
      <div class="column small-cell-pad" v-html="$t('sections.foodSites.eligibility')" />
    </div>
    <hr class="no-margin">
    <!-- pickup details -->
    <div class="columns big-cell-pad">
      <div class="column is-3 small-cell-pad" v-html="$t('details')" />
      <div class="column small-cell-pad">
        <span v-html="$t('sections.foodSites.pickupDetails.p1')" />&ZeroWidthSpace;
        <span v-html="$t('daysAndTimesVaryBySite')" />
        <div v-html="$t('sections.foodSites.pickupDetails.p3')" />
        <ul class="bullet-list">
          <li v-html="$t('sections.foodSites.pickupDetails.li1')" />
          <li v-html="$t('sections.foodSites.pickupDetails.li2')" />
          <li v-html="$t('sections.foodSites.pickupDetails.li3')" />
        </ul>
      </div>
    </div>

    <!-- generalMealSites -->
    <div class="section-header" :style="{ 'background-color': $config.sections.generalMealSites.color }">
      <b>{{ $t('sections.generalMealSites.header') }}</b>
    </div>
    <!-- eligibility -->
    <div class="columns big-cell-pad">
      <div class="column is-3 small-cell-pad" v-html="$t('eligibility')" />
      <div class="column small-cell-pad" v-html="$t('sections.generalMealSites.eligibility')" />
    </div>
    <hr class="no-margin">
    <!-- pickup details -->
    <div class="columns big-cell-pad">
      <div class="column is-3 small-cell-pad" v-html="$t('details')" />
      <div class="column small-cell-pad">
        <span v-html="$t('sections.generalMealSites.pickupDetails.p1')" />&ZeroWidthSpace;
        <span v-html="$t('daysAndTimesVaryBySite')" />
      </div>
    </div>

    <!-- olderAdultMealSites -->
    <div class="section-header" :style="{ 'background-color': $config.sections.olderAdultMealSites.color }">
      <b>{{ $t('sections.olderAdultMealSites.header') }}</b>
    </div>
    <!-- eligibility -->
    <div class="columns big-cell-pad">
      <div class="column is-3 small-cell-pad" v-html="$t('eligibility')" />
      <div class="column small-cell-pad">
        <div v-html="$t('sections.olderAdultMealSites.eligibility.p1')" />
        <ul class="bullet-list">
          <li v-html="$t('sections.olderAdultMealSites.subsections.PCA.eligibility.li1')" />
          <li v-html="$t('sections.olderAdultMealSites.subsections.PPR_Senior.eligibility.li1')" />
        </ul>
        <div v-html="$t('sections.olderAdultMealSites.eligibility.p2')" />
      </div>
    </div>
    <hr class="no-margin">
    <!-- pickup details -->
    <div class="columns big-cell-pad">
      <div class="column is-3 small-cell-pad" v-html="$t('details')" />
      <div class="column small-cell-pad">
        <span v-html="$t('sections.olderAdultMealSites.pickupDetails.p1')" />&ZeroWidthSpace;
        <span v-html="$t('daysAndTimesVaryBySite')" />
        <div v-html="$t('sections.olderAdultMealSites.pickupDetails.p4')" />
      </div>
    </div>

    <!-- studentMealSites -->
    <div class="section-header" :style="{ 'background-color': $config.sections.studentMealSites.color }">
      <b>{{ $t('sections.studentMealSites.header') }}</b>
    </div>

    <!-- text from end of summer -->
    <template v-if="!isSummer">
      <!-- <br> -->
      <div class="custom-section">
        <div v-html="$t('sections.studentMealSites.offSeason.p1')" />
        <div v-html="$t('sections.studentMealSites.offSeason.p2')" />
      </div>
      <br>
    </template>

    <template v-if="isSummer">
      <!-- eligibility -->
      <div class="columns big-cell-pad">
        <div class="column is-3 small-cell-pad" v-html="$t('eligibility')" />
        <div class="column small-cell-pad">
          <div v-html="$t('sections.studentMealSites.eligibility')" />
        </div>
      </div>
      <hr class="no-margin">
      <!-- pickup details -->
      <div class="columns big-cell-pad">
        <div class="column is-3 small-cell-pad" v-html="$t('details')" />
        <div class="column small-cell-pad">
          <span v-html="$t('sections.studentMealSites.pickupDetails.p1')" />&ZeroWidthSpace;
          <span v-html="$t('daysAndTimesVaryBySite')" />
        </div>
      </div>

      <hr class="no-margin">
      <div class="columns big-cell-pad">
        <div class="column is-3 small-cell-pad" v-html="$t('otherResources')" />
        <div class="column small-cell-pad">
          <div v-html="$t('sections.studentMealSites.otherResources.p1')" />
          <ul>
            <li v-html="$t('sections.studentMealSites.otherResources.li2')" />
            <li v-html="$t('sections.studentMealSites.otherResources.li4')" />
          </ul>
        </div>
      </div>
    </template>
    <!-- publicBenefits -->
    <div class="section-header" :style="{ 'background-color': $config.sections.publicBenefits.color }">
      <b>{{ $t('sections.publicBenefits.header') }}</b>
    </div>
    <!-- eligibility -->
    <div class="columns big-cell-pad">
      <div class="column is-3 small-cell-pad" v-html="$t('eligibility')" />
      <div class="column small-cell-pad" v-html="$t('sections.publicBenefits.eligibility')" />
    </div>
    <hr class="no-margin">
    <!-- pickup details -->
    <div class="columns big-cell-pad">
      <div class="column is-3 small-cell-pad" v-html="$t('details')" />
      <div class="column small-cell-pad">
        <div v-html="$t('sections.publicBenefits.pickupDetails.p1')" />
        <ul class="bullet-list">
          <li v-html="$t('sections.publicBenefits.pickupDetails.li1')" />
          <li v-html="$t('sections.publicBenefits.pickupDetails.li2')" />
          <li v-html="$t('sections.publicBenefits.pickupDetails.li3')" />
        </ul>
        <div v-html="$t('sections.publicBenefits.pickupDetails.p2')" />
      </div>
    </div>

    <!-- more resources section -->
    <div class="section-header" :style="{ 'background-color': '#F0F0F0', 'color': 'black' }">
      <b>{{ $t('sections.moreResources.header') }}</b>
    </div>
    <div class="custom-section">
      <div v-html="$t('sections.moreResources.p1')" />
    </div>
  </div>
</template>

<style scoped>

.custom-section {
  padding-top: .75rem;
}

</style>
