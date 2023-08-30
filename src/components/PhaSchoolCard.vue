<template>
  <section class="services">
    <h3>{{ $t('eligibility') }}</h3>

    <div
      class="table-intro"
      v-html="$t('sections.'+this.section+'.eligibility')"
    />
    <!-- v-html="$t('sections.'+this.section+'.subsections.'+this.subsection+'.eligibility')" -->

    <h3>{{ $t('pickupDetails') }}</h3>

    <div
      class="table-intro"
      v-html="$t('sections.'+this.section+'.subsections.'+this.subsection+'.pickupDetails')"
    />

    <vue-good-table
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

      <template
        slot="table-row"
        slot-scope="props"
      >
        <span
          v-if="props.column.field == 'label'"
          class="table-text"
        >
          {{ $t(props.row.days) }}
        </span>
        <div
          v-if="props.column.field == 'value'"
          class="table-text"
        >
          {{ props.row.schedule }}
        </div>
      </template>
    </vue-good-table>
    <div class="exceptions-holder">
      <div
        v-for="(exception, index) of exceptionsList"
        :key="index"
      >
        {{ parseException(exception, index+1) }}
      </div>
    </div>
  </section>
</template>

<script>

import { VueGoodTable } from 'vue-good-table';
import LocalSharedFunctions from './mixins/LocalSharedFunctions.vue';

export default {
  name: 'PhaSchoolCard',
  components: {
    VueGoodTable,
  },
  mixins: [
    LocalSharedFunctions,
  ],
  props: {
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
    exceptionsList: {
      type: Array,
      default: function(){
        return [];
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
      return this.subsections[this.$props.item.attributes['category']];
    },
    subsection() {
      return this.$props.item.attributes.category;
    },
  },
};

</script>
