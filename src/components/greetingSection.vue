<script setup>

import { useConfigStore } from '@pinboard';
const $config = useConfigStore().config;
import { getCurrentInstance } from 'vue';

const props = defineProps({
  'header': {
    type: String,
    default: 'defaultTitle',
  },
  'color': {
    type: String,
    default: '#0F4D90',
  },
  'section': {
    type: Object,
    default: function(){
      return {};
    },
  },
});

const instance = getCurrentInstance();

const locale = computed(() => instance.appContext.config.globalProperties.$i18n.locale);

const subsectionsData = computed(() => {
  return $config.subsections || [];
});

const subsectionCountsFromProps = computed (() => {
  let subsections = props.section.subsections || [];
  let compiled = 0;
  let value = {};
  if (Array.isArray(subsections[0])) {
    for (let subsubsection of subsections[0]) {
      // console.log('subsubsection:', subsubsection, 'this.subsectionsData[subsubsection]:', this.subsectionsData[subsubsection]);
      if (subsectionsData.value[subsubsection]) {
        compiled += subsectionsData.value[subsubsection];
      }
    }
    value.compiled = compiled;
  } else {
    value = subsectionsData.value;
  }
  return value || {};
});

</script>

<template>
  <div class="greeting-section">
    <div
      class="section-header"
      :style="{ 'background-color': color }"
    >
      <b>{{ $t('sections.' + header + '.header') }}</b>
    </div>

    <!-- eligibility -->
    <div
      v-if="!$config.i18n.data.messages.en.sections[header].hidePickupDetailsInGreeting"
      class="columns big-cell-pad"
    >
      <div
        class="column is-3 small-cell-pad"
        v-html="$t('eligibility')"
      />
      <div
        class="column small-cell-pad"
        v-html="$t('sections.' + header + '.eligibility')"
      />
    </div>

    <hr class="no-margin">

    <!-- pickup details -->
    <div
      class="columns big-cell-pad"
    >
      <div
        v-if="!$config.i18n.data.messages.en.sections[header].hidePickupDetailsInGreeting"
        class="column is-3 small-cell-pad"
        v-html="$t('details')"
      />
      <div class="column small-cell-pad">
        <div class="table-slot">
          <!-- pickupDetails if there are no subsections -->
          <div
            v-html="$t('sections.' + header + '.pickupDetails')"
          />
          <!-- v-if="!$config.i18n.data.messages.en.sections[header].hidePickupDetailsInGreeting" -->

          <!-- subsections -->
          <!-- <div
            v-for="(subsection, key) in section.subsections"
            :key="key"
          >
            <div v-if="subsectionCountsFromProps[subsection]">
              <b>{{ subsectionCountsFromProps[subsection] }} {{ $t('sections.' + header + '.subsections.' + subsection + '.name') }}</b>
              <div
                v-if="!$config.i18n.data.messages.en.sections[header].subsections[subsection].hidePickupDetailsInGreeting"
                v-html="$t('sections.' + header + '.subsections.' + subsection + '.pickupDetails')"
              />
            </div> -->

          <!-- subsections that are compiled (because multiple subsubsections make 1 subsection) -->
          <!-- <div v-if="subsectionCountsFromProps.compiled">
              <b>{{ subsectionCountsFromProps.compiled }} {{ $t('sections.' + header + '.subsections.compiled.name') }}</b>
              <div
                v-html="$t('sections.' + header + '.subsections.compiled.pickupDetails')"
              />
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <div
      v-if="$config.i18n.data.messages.en.sections[header].custom"
      class="custom-section big-cell-pad"
    >
      <div v-html="$t('sections.' + $props.header + '.custom.info')" />
      <ul class="custom-ul">
        <li
          v-for="item of $config.i18n.data.messages[locale].sections[header].custom.list"
          :key="item"
          v-html="item"
        />
      </ul>
    </div>
  </div>
</template>

<style>

  .greeting-section {
    font-size: 14px;
  }

  .section-header {
    background-color: #0f4d90;
    font-size: 16px;
    color: white;
    padding: 4px;
    padding-left: 8px;
  }

  .underlined {
    text-decoration: underline;
  }

  .no-margin {
    margin: 0px;
  }

  .big-cell-pad {
    padding: 4px;
    margin: 0px !important;
  }

  .small-cell-pad {
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right: 4px;
    padding-left: 0px;
  }

</style>
