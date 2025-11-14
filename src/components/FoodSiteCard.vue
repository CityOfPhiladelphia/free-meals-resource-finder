<script setup>

import { useConfigStore } from '@pinboard';
const $config = useConfigStore().config;

import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance();

const i18nLocale = computed(() => {
  return instance.appContext.config.globalProperties.$i18n.locale;
});

const zipcodesServed = computed(() => {
  return props.item.properties.zip_code_exceptions;
})

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
});

const parseException = (exception, index, i18nLocale) => {
  if (import.meta.env.VITE_DEBUG) console.log('i18nLocale', i18nLocale);
  let parsedException = '';
  for (let i=0; i<index; i++) {
    parsedException += "*";
  }
  if ($config.i18n.data.messages[i18nLocale].exceptions && $config.i18n.data.messages[i18nLocale].exceptions[exception]) {
    parsedException += ' ' + $config.i18n.data.messages[i18nLocale].exceptions[exception];
  } else {
    parsedException += ' ' + exception;
  }
  return parsedException;
};

</script>

<template>
  <section class="services">
    <h3>{{ $t('eligibility') }}</h3>

    <div
      v-if="!zipcodesServed"
      class="table-intro"
      v-html="$t('sections.foodSites.eligibility')"
    />
    <div
      v-else
      class="table-intro"
      v-html="$t('sections.foodSites.eligibilityZipCodeException') + zipcodesServed + '.'"
    />

    <h3>{{ $t('pickupDetails') }}</h3>

    <div
      class="table-intro"
      v-html="$t('sections.foodSites.pickupDetails.p1')"
    />
    <div
      class="table-intro"
      v-html="$t('checkSite')"
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
