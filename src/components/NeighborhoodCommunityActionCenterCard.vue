<script setup>

import { useConfigStore } from '@pinboard';
const $config = useConfigStore().config;

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
      class="table-intro"
      v-html="$t('sections.'+section+'.subsections.'+subsection+'.eligibility')"
    />

    <h3>{{ $t('pickupDetails') }}</h3>

    <div
      class="table-intro"
      v-html="$t('sections.'+section+'.subsections.'+subsection+'.pickupDetails')"
    />

  </section>
</template>

