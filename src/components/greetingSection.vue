<template>
  <div class="greeting-section">
    <div
      class="section-header"
      :style="{ 'background-color': color }"
    >
      <b>{{ $t('sections.' + header + '.header') }}</b>
    </div>

    <vertical-table-light
      class="print-padding"
      :slots="mainVerticalTableSlots"
      :options="mainVerticalTableOptions"
    >
      <template>
        <div class="table-slot">
          <!-- pickupDetails if there are no subsections -->
          <div v-html="$t('sections.' + header + '.pickupDetails')" />

          <!-- subsections -->
          <div
            v-for="(subsection, key) in section.subsections"
            :key="key"
            class="subsection-content"
          >
            <!-- subsections that are written out -->
            <div v-if="subsectionCountsFromProps[subsection]">
              <b>{{ subsectionCountsFromProps[subsection] }} {{ $t('sections.' + header + '.subsections.' + subsection + '.name') }}</b>
              <div
                v-if="!$config.i18n.data.messages['en-US'].sections[header].subsections[subsection].hidePickupDetailsInGreeting"
                v-html="$t('sections.' + header + '.subsections.' + subsection + '.pickupDetails')"
              />
            </div>

            <!-- subsections that are compiled (because multiple subsubsections make 1 subsection) -->
            <div v-if="subsectionCountsFromProps.compiled">
              <b>{{ subsectionCountsFromProps.compiled }} {{ $t('sections.' + header + '.subsections.compiled.name') }}</b>
              <div
                v-html="$t('sections.' + header + '.subsections.compiled.pickupDetails')"
              />
            </div>
          </div>
        </div>
      </template>
    </vertical-table-light>

    <div
      v-if="$config.i18n.data.messages['en-US'].sections[header].custom"
      class="custom-section"
    >
      <div v-html="$t('sections.' + this.$props.header + '.custom.info')" />
      <ul class="custom-ul">
        <li
          v-for="item of $config.i18n.data.messages[i18nLocale].sections[header].custom.list"
          :key="item"
          v-html="item"
        />
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GreetingSection',
  components: {
    VerticalTableLight: () => import(/* webpackChunkName: "pvc_VerticalTable3CellsLight" */'../pvc/VerticalTableLight.vue'),
  },
  props: {
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
  },
  computed: {
    i18nLocale() {
      return this.$i18n.locale;
    },
    subsectionsData() {
      return this.$store.state.subsections || [];
    },
    subsectionCountsFromProps() {
      let subsections = this.$props.section.subsections || [];
      let compiled = 0;
      let value = {};
      if (Array.isArray(subsections[0])) {
        for (let subsubsection of subsections[0]) {
          // console.log('subsubsection:', subsubsection, 'this.subsectionsData[subsubsection]:', this.subsectionsData[subsubsection]);
          if (this.subsectionsData[subsubsection]) {
            compiled += this.subsectionsData[subsubsection];
          }
        }
        value.compiled = compiled;
      } else {
        value = this.subsectionsData;
      }
      return value || {};
    },
    mainVerticalTableOptions() {
      return {
        styles: {
          th: {
            'vertical-align': 'top',
            // 'font-size': '14px',
            'min-width': '45px !important',
            'max-width': '50px !important',
            'width': '10% !important',
          },
          td: {
            // 'font-size': '14px',
          },
        },
      };
    },
    mainVerticalTableSlots() {
      return {
        id: 'mainTable',
        fields: [
          {
            label: 'eligibility',
            labelType: 'i18n',
            value: 'sections.' + this.$props.header + '.eligibility',
            valueType: 'i18n',
            // valueType: 'component1',
            // value: 'component value',
          },
          {
            label: 'pickupDetails',
            labelType: 'i18n',
            valueType: 'component',
            value: 'component value',
          },
        ],
      };
    },

  },
};
</script>

<style>

  .greeting-section {
    font-size: 14px;
  }

  .section-header {
    background-color: #0f4d90;
    font-size: 16px;
    color: white;
    margin-top: 4px;
    margin-bottom: 4px;
    padding: 4px;
    padding-left: 8px;
  }

  .subsection-content{
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .underlined {
    text-decoration: underline;
  }

  .table-light table {
    width: 100% !important;
    margin-left: 0px !important;
  }

  /* .table-light th {
    max-width: 50px !important;
    width: 10% !important;
  } */

  .table-slot {
    margin-left: 8px;
    margin-top: 4px;
  }

</style>
