<template>
  <div>
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
      <!-- <template v-slot:component1>
        <div class="table-slot">
          <div
            v-for="(subsection, key) in section.subsections"
            :key="key"
            class="subsection-content"
          >
            {{ $t('sections.' + header + '.subsection.' + subsection + '.eligibility') }}
          </div>
        </div>
      </template> -->

      <template>
        <div class="table-slot">
          <!-- pickupDetails if there are no subsections -->
          <div>
            {{ $t('sections.' + header + '.pickupDetails') }}
          </div>

          <!-- subsections -->
          <div
            v-for="(subsection, key) in section.subsections"
            :key="key"
            class="subsection-content"
          >
            <!-- subsections that are written out -->
            <div
              v-if="subsectionCountsFromProps[subsection]"
            >
              <b>{{ subsectionCountsFromProps[subsection] }} {{ $t('sections.' + header + '.subsections.' + subsection + '.name') }}</b>
              <div
                v-html="$t('sections.' + header + '.subsections.' + subsection + '.pickupDetails')"
              />
            </div>

            <!-- subsections that are compiled (because multiple subsubsections make 1 subsection) -->
            <div
              v-if="subsectionCountsFromProps.compiled"
            >
              <b>{{ subsectionCountsFromProps.compiled }} {{ $t('sections.' + header + '.subsections.compiled.name') }}</b>
              <div
                v-html="$t('sections.' + header + '.subsections.compiled.pickupDetails')"
              />
            </div>
          </div>

          <!-- pickupDetails if there are no subsections -->
          <!-- <div>
            {{ $t('sections.' + header + '.pickupDetails') }}
          </div> -->
        </div>
      </template>

      <!-- <horizontal-table-light
        class="print-padding"
        :options="insideHorizontalTableOptions"
        :slots="insideHorizontalTableSlots"
      /> -->

      <!-- <vertical-table-light
        class="print-padding"
        :slots="insideVerticalTableSlots"
      /> -->
    </vertical-table-light>
  </div>
</template>

<script>

import TopicComponent from '@phila/vue-comps/src/components/TopicComponent.vue';

export default {
  name: 'GreetingSection',
  components: {
    VerticalTableLight: () => import(/* webpackChunkName: "pvc_VerticalTableLight" */'@phila/vue-comps/src/components/VerticalTableLight.vue'),
    // HorizontalTableLight: () => import(/* webpackChunkName: "pvc_HorizontalTableLight" */'@phila/vue-comps/src/components/HorizontalTableLight.vue'),
  },
  mixins: [ TopicComponent ],
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
  // data() {
  //   let data = {
  //     subsectionsData: {},
  //   };
  //   return data;
  // },
  // watch: {
  //   subsectionsFromStore(nextSubsections) {
  //     this.$data.subsectionsData = nextSubsections;
  //   }
  // },
  computed: {
    subsectionsData() {
      return this.$store.state.subsections || [];
    },
    subsectionCountsFromProps() {
      let subsections = this.$props.section.subsections || [];
      let compiled = 0;
      let value = {};
      if (Array.isArray(subsections[0])) {
        for (let subsubsection of subsections[0]) {
          compiled += this.subsectionsData[subsubsection];
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
            'font-size': '14px',
            'min-width': '45px !important',
            'max-width': '50px !important',
            'width': '10% !important',
          },
          td: {
            'font-size': '14px',
          },
        },
      };
    },
    mainVerticalTableSlots() {
      return {
        id: 'mainTable',
        fields: [
          {
            label: 'randomWords.eligibility',
            labelType: 'i18n',
            value: 'sections.' + this.$props.header + '.eligibility',
            valueType: 'i18n',
            // valueType: 'component1',
            // value: 'component value',
          },
          {
            label: 'randomWords.pickupDetails',
            labelType: 'i18n',
            valueType: 'component',
            value: 'component value',
          },
        ],
      };
    },

    // insideVerticalTableSlots() {
    //   return {
    //     id: 'insideTable',
    //     fields: [
    //       {
    //         label: 'Monday',
    //         value: 'test1',
    //         value1: 'test2',
    //         // value: function(state) {
    //         //   return state.sources.covidFreeMealSites.data.features[0].attributes.MONDAY;
    //         // },
    //       },
    //       {
    //         label: 'Tuesday',
    //         // valueType: 'i18n',
    //         value: function(state) {
    //           return state.sources.covidFreeMealSites.data.features[0].attributes.TUESDAY;
    //         },
    //       }
    //     ]
    //   }
    // },
    // insideHorizontalTableOptions() {
    //   return {
    //     id: 'daysAndHours',
    //     showOnlyIfData: true,
    //     limit: 5,
    //     fields: [
    //       {
    //         label: 'Day',
    //         value: function(state, item){
    //           return item.attributes.CATEGORY;
    //         },
    //         nullValue: 'no date available',
    //       },
    //       {
    //         label: 'Hours',
    //         value: function(state, item){
    //           return item.attributes.CATEGORY;
    //         },
    //         nullValue: 'no date available',
    //       },
    //       {
    //         label: 'Info',
    //         value: function(state, item){
    //           return item.attributes.CATEGORY;
    //         },
    //         nullValue: 'no date available',
    //       },
    //     ]
    //   }
    // },
    // insideHorizontalTableSlots() {
    //   return {
    //     // title: 'testtesttest',
    //     items: function(state) {
    //       let rows = {};
    //       if (state.sources.covidFreeMealSites.data) {
    //         var data = state.sources.covidFreeMealSites.data.features;
    //         rows = data.map(function(row){
    //           var itemRow = row;
    //           return itemRow;
    //         });
    //       }
    //       return rows;
    //     },
    //   }
    // }
  },
};
</script>

<style>

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
