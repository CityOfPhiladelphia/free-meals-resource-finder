<template>
  <section class="services">
    <h3>{{ $t('eligibility') }}</h3>

    <div
      class="table-intro"
      v-html="$t('sections.'+this.section+'.subsections.'+this.subsection+'.eligibility')"
    />

    <h3>{{ $t('pickupDetails') }}</h3>

    <div
      class="table-intro"
      v-html="$t('sections.'+this.section+'.subsections.'+this.subsection+'.pickupDetails')"
    />

    <!-- <vue-good-table
      :columns="pickupDetails.columns"
      :rows="pickupDetails.rows"
      :sort-options="{ enabled: false }"
      style-class="vgt-table condensed"
    >
      <template
        slot="table-column"
        slot-scope="props"
      >
        <span
          v-if="props.column.label =='Days'"
          class="table-header-text"
        >
          {{ $t(props.column.i18nLabel) }}
        </span>
        <span
          v-if="props.column.label =='Schedule'"
          class="table-header-text"
        >
          {{ $t(props.column.i18nLabel) }}
        </span>
      </template>
    </vue-good-table> -->
  </section>
</template>

<script>

import SharedFunctions from '@phila/pinboard/src/components/mixins/SharedFunctions.vue';
import LocalSharedFunctions from './mixins/LocalSharedFunctions.vue';
import { VueGoodTable } from 'vue-good-table';
// import 'vue-good-table/dist/vue-good-table.css';

export default {
  name: 'PhaSchoolCard',
  components: {
    VueGoodTable,
  },
  mixins: [
    SharedFunctions,
    LocalSharedFunctions,
  ],
  props: {
    item: {
      type: Object,
      default: function(){
        return {};
      },
    },
  },
  computed: {
    i18nLocale() {
      return this.$i18n.locale;
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
    pickupDetails() {
      return this.getPickupDetails();
    },
  },
};

</script>
