<script setup>

import $config from '../main.js';

import useLocalSharedFunctions from '../composables/useLocalSharedFunctions.js';
const { parseException } = useLocalSharedFunctions();

import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance();

const i18nLocale = computed(() => {
  return instance.appContext.config.globalProperties.$i18n.locale;
});

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
  exceptionsList: {
    type: Array,
    default: function(){
      return [];
    },
  },
})

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

    <div
      class="table-intro"
      v-html="$t('sections.'+section+'.eligibility')"
    />
    <!-- v-html="$t('sections.'+section+'.subsections.'+subsection+'.eligibility')" -->

    <h3>{{ $t('pickupDetails') }}</h3>

    <div
      class="table-intro"
      v-html="$t('sections.'+section+'.subsections.'+subsection+'.pickupDetails')"
    />

    <vue-good-table
      :columns="pickupDetails.columns"
      :rows="pickupDetails.rows"
      :sort-options="{ enabled: false }"
      style-class="table"
    >
      <template #table-column="props">
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

      <template #table-row="props">
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
        {{ parseException(exception, index+1, i18nLocale) }}
      </div>
    </div>
  </section>
</template>
