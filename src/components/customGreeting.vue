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

const geocodeStatus = computed(() => {
  if (GeocodeStore.aisData.features && GeocodeStore.aisData.features.length) {
    return 'success';
  } else {
    return 'error';
  } 
});

const allExceptions = computed(() => {
  let exceptionsPreliminary = [];
  let exceptionFields = [
    'hours_mon_exceptions',
    'hours_tues_exceptions',
    'hours_wed_exceptions',
    'hours_thurs_exceptions',
    'hours_fri_exceptions',
    'hours_sat_exceptions',
    'hours_sun_exceptions',
  ];
  for (let location of props.database) {
    if (location) {
      // console.log('in loop, location:', location);
      for (let field of exceptionFields) {
        if (location.properties[field]) {
          exceptionsPreliminary.push(location.properties[field]);
        }
      }
    }
  }
  let exceptionsSet = new Set(exceptionsPreliminary);
  let exceptionsArray = [ ...exceptionsSet ];

  return exceptionsArray;
});

const hasError = computed(() => {
  return geocodeStatus.value === 'error';
});

const errorMessage = computed(() => {
  const input = GeocodeStore.aisData;
  return `
      <p>
        We couldn't find
        ${input ? '<strong>' + input + '</strong>' : 'that address'}.
        Are you sure everything was spelled correctly?
      </p>
      <p>
        Here are some examples of things you can search for:
      </p>
      <ul>
        <li>1234 Market St</li>
        <li>1001 Pine Street #201</li>
        <li>12th & Market</li>
        <li>883309050 (an OPA number with no hyphens or other characters)</li>
      </ul>
    `;
});

watch(
  () => props.database,
  async nextDatabase => {
    // let subsections = getCounts();
    subsections.value = getCounts();
    // $store.commit('setSubsections', subsections);
    // MainStore.subsections = subsections.value;
  },
);

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
    // console.log('arrayElem:', arrayElem);
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
        // console.log('Object.keys(acc)', Object.keys(acc), 'curr', curr);
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
  <div
    class="main-greeting"
  >
    <div class="data-section">
      <div class="exclamation-holder columns is-mobile">
        <div class="column is-narrow">
          <font-awesome-icon
            icon="exclamation-triangle"
            class="fa-3x"
          />
        </div>
        <div class="column exclamation-details">
          <div>{{ $t('checkSite') }}</div>
          <!-- <div>{{ $t('holidayLaborDay') }}</div> -->
        </div>
      </div>

      <div class="has-text-centered container">
        <button
          class="button greeting-button"
          @click="$emit('view-list')"
          v-html="$t('app.viewList')"
        />
        <button
          v-if="isMobile"
          class="button greeting-button"
          @click="$emit('view-map')"
          v-html="$t('app.viewMap')"
        />
      </div>
    </div>

    <!-- foodSites -->
    <div
      class="section-header"
      :style="{ 'background-color': $config.sections.foodSites.color }"
    >
      <b>{{ $t('sections.foodSites.header') }}</b>
    </div>
    <!-- eligibility -->
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('eligibility')"
      />
      <div
        class="column small-cell-pad"
        v-html="$t('sections.foodSites.eligibility')"
      />
    </div>
    <hr class="no-margin">
    <!-- pickup details -->
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('details')"
      />
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
    <div
      class="section-header"
      :style="{ 'background-color': $config.sections.generalMealSites.color }"
    >
      <b>{{ $t('sections.generalMealSites.header') }}</b>
    </div>
    <!-- eligibility -->
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('eligibility')"
      />
      <div
        class="column small-cell-pad"
        v-html="$t('sections.generalMealSites.eligibility')"
      />
    </div>
    <hr class="no-margin">
    <!-- pickup details -->
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('details')"
      />
      <div class="column small-cell-pad">
        <span v-html="$t('sections.generalMealSites.pickupDetails.p1')" />&ZeroWidthSpace;
        <span v-html="$t('daysAndTimesVaryBySite')" />
      </div>
    </div>

    <!-- olderAdultMealSites -->
    <div
      class="section-header"
      :style="{ 'background-color': $config.sections.olderAdultMealSites.color }"
    >
      <b>{{ $t('sections.olderAdultMealSites.header') }}</b>
    </div>
    <!-- eligibility -->
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('eligibility')"
      />
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
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('details')"
      />
      <div class="column small-cell-pad">
        <!-- <span v-html="$t('sections.olderAdultMealSites.pickupDetails.p1')" />&ZeroWidthSpace; -->
        <span v-html="$t('sections.olderAdultMealSites.pickupDetails.p1')" />&ZeroWidthSpace;
        <span v-html="$t('daysAndTimesVaryBySite')" />
        <div v-html="$t('sections.olderAdultMealSites.pickupDetails.p4')" />
      </div>
    </div>

    <!-- studentMealSites -->
    <div
      class="section-header"
      :style="{ 'background-color': $config.sections.studentMealSites.color }"
    >
      <b>{{ $t('sections.studentMealSites.header') }}</b>
    </div>

    <!-- text from end of summer -->
    <!-- <br>
    <div class="custom-section">
      <div v-html="$t('sections.studentMealSites.offSeason.p1')" />
      <div v-html="$t('sections.studentMealSites.offSeason.p2')" />
    </div>
    <br> -->

    <!-- eligibility -->
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('eligibility')"
      />
      <div class="column small-cell-pad">
        <div v-html="$t('sections.studentMealSites.eligibility')" />
      </div>
    </div>
    <hr class="no-margin">
    <!-- pickup details -->
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('details')"
      />
      <div class="column small-cell-pad">
        <span v-html="$t('sections.studentMealSites.pickupDetails.p1')" />&ZeroWidthSpace;
        <span v-html="$t('daysAndTimesVaryBySite')" />
      </div>
    </div>
    <hr class="no-margin">
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('otherResources')"
      />
      <div class="column small-cell-pad">
        <div v-html="$t('sections.studentMealSites.otherResources.p1')" />
        <ul>
          <li v-html="$t('sections.studentMealSites.otherResources.li2')" />
          <li v-html="$t('sections.studentMealSites.otherResources.li4')" />
        </ul>
      </div>
    </div>

    <!-- publicBenefits -->
    <div
      class="section-header"
      :style="{ 'background-color': $config.sections.publicBenefits.color }"
    >
      <b>{{ $t('sections.publicBenefits.header') }}</b>
    </div>
    <!-- eligibility -->
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('eligibility')"
      />
      <div
        class="column small-cell-pad"
        v-html="$t('sections.publicBenefits.eligibility')"
      />
    </div>
    <hr class="no-margin">
    <!-- pickup details -->
    <div class="columns big-cell-pad">
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('details')"
      />
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
    <div
      class="section-header"
      :style="{ 'background-color': '#F0F0F0', 'color': 'black' }"
    >
      <b>{{ $t('sections.moreResources.header') }}</b>
    </div>
    <div class="custom-section">
      <div v-html="$t('sections.moreResources.p1')" />
    </div>
  </div>
</template>
