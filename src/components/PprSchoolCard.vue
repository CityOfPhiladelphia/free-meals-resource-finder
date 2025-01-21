<script setup>

import $config from '../main.js';

const props = defineProps({
  item: {
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
  return props.item.properties.category;
});
  

</script>

<template>
  <section class="services">
    <h3>{{ $t('eligibility') }}</h3>

    <div class="table-intro">
      {{ $t('sections.'+this.section+'.eligibility') }}
    </div>
    <!-- {{ $t('sections.'+this.section+'.subsections.'+this.subsection+'.eligibility') }} -->

    <h3>{{ $t('pickupDetails') }}</h3>

    <div
      class="table-intro"
      v-html="$t('sections.'+this.section+'.subsections.'+this.subsection+'.pickupDetails')"
    />
  </section>
</template>
