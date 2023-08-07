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

<script>

import SharedFunctions from '@phila/pinboard/src/components/mixins/SharedFunctions.vue';

export default {
  name: 'PprSchoolCard',
  // components: {},
  mixins: [ SharedFunctions ],
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
      return this.subsections[this.$props.item.attributes['category']];
    },
    subsection() {
      return this.$props.item.attributes.category;
    },
  },
};

</script>
