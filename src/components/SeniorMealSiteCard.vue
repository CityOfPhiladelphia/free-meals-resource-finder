<script setup>

import { computed } from 'vue';
import $config from '../main.js';

const props = defineProps({
  item: {
    type: Object,
    default: function(){
      return {};
    },
  },
  pickupDetails: {
    type: Object,
    default: function(){
      return {};
    },
  },
});

const subsections = computed(() => {
  return $config.subsections;
});

const section = computed(() => {
  return subsections.value[props.item.properties['category']];
});

const subsection = computed(() => {
  // special cases allow picking meals up
  // non-special cases must be eaten on site
  let specialCases = [
    'Southwest Senior Center',
    'Firehouse Active Adult Center',
    'Nativity Satellite Program',
    'St. Edmonds Senior Community Center Catholic Housing and Community Services',
    'Catholic Housing and Community Services Star Harbor Senior Center Satellite',
    'Juniata Park Older Adult Center',
    'Center in the Park',
    'The Center at Journey’s Way',
    'Northern Living Center',
    'Marconi Older Adult Program',
    'Lutheran Settlement House',
    'West Philadelphia Senior Community Center',
    'Peter Brassi NE Senior Center',
  ];
  if (specialCases.includes(props.item.properties['site_name'])) {
    return 'specialPCA';
  }
  return props.item.properties.category;
});

</script>

<template>
  <section class="services">
    <h3>{{ $t('eligibility') }}</h3>

    <div
      class="table-intro"
      v-html="$t('sections.'+section+'.subsections.'+subsection+'.eligibility.li1')"
    />
    <div
      class="table-intro"
      v-html="$t('sections.'+section+'.eligibility.p2')"
    />
    <div
      v-if="$config.i18n.data.messages['en-US'].sections[section].subsections[subsection].eligibility.p2"
      class="table-intro"
      v-html="$t('sections.'+section+'.subsections.'+subsection+'.eligibility.p2')"
    />

    <h3>{{ $t('pickupDetails') }}</h3>

    <div class="table-intro">
      <!-- class="table-intro" -->
      <span
        v-html="$t('sections.'+section+'.subsections.'+subsection+'.pickupDetails.p1')"
      />&ZeroWidthSpace;
  
      <!-- class="table-intro" -->
      <span
        v-html="$t('daysAndTimesVaryBySite')"
      />
    </div>

    <div
      v-if="$config.i18n.data.messages['en-US'].sections[section].subsections[subsection].pickupDetails.p3"
      class="table-intro"
      v-html="$t('sections.'+section+'.subsections.'+subsection+'.pickupDetails.p3')"
    />

    <div
      v-if="$config.i18n.data.messages['en-US'].sections[section].subsections[subsection].pickupDetails.p4"
      class="table-intro"
      v-html="$t('sections.'+section+'.subsections.'+subsection+'.pickupDetails.p4')"
    />
  </section>
</template>
