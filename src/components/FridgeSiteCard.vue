<script setup>

import { computed } from 'vue';
import { useConfigStore } from '../../node_modules/@phila/pinboard/src/stores/ConfigStore.js';
const ConfigStore = useConfigStore();
const $config = ConfigStore.config;
  
const props = defineProps({
  item: {
    type: Object,
    default: function(){
      return {};
    },
  }
});

const subsections = computed(() => {
  return this.$config.subsections;
});

const section = computed(() => {
  return this.subsections[this.$props.item.properties['category']];
});

const subsection = computed(() => {
  return this.$props.item.properties.category;
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
