<script setup>

import { computed } from 'vue';
import $config from '../main.js';
  
const props = defineProps({
  item: {
    type: Object,
    default: function(){
      return {};
    },
  }
});

const subsections = computed(() => {
  return $config.subsections;
});

const section = computed(() => {
  return subsections[props.item.properties['category']];
});

const subsection = computed(() => {
  return props.item.properties.category;
});

</script>

<template>
  <section class="services">
    <h3>{{ $t('eligibility') }}</h3>

    <div
      class="table-intro"
      v-html="$t(`sections.foodSites.subsections['Community Refrigerators'].eligibility`)"
    />

    <h3>{{ $t('pickupDetails') }}</h3>

    <div
      class="table-intro"
      v-html="$t(`sections.foodSites.subsections['Community Refrigerators'].pickupDetails`)"
    />
  </section>
</template>
