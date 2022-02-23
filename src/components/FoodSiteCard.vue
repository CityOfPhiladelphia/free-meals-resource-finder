<template>
  <section class="services">
    <vertical-table-light
      class="print-padding"
      :slots="mainVerticalTableSlots"
      :options="mainVerticalTableOptions"
    >
      <div class="table-slot">
        <span v-if="getPickupDetails(item)">
          {{ $t('driveThrough.' + getPickupDetails(item)) + '. ' }}
        </span>
        <span>
          {{ $t('sections.' + section + '.pickupDetails') }}
        </span>
        <vertical-table-3-cells-light
          class="print-padding"
          :slots="componentVerticalTableSlots"
          :options="componentVerticalTableOptions"
        />
      </div>
    </vertical-table-light>
  </section>
</template>

<script>

import SharedFunctions from '@phila/pinboard/src/components/mixins/SharedFunctions.vue';

export default {
  name: 'FoodSiteCard',
  components: {
    VerticalTableLight: () => import(/* webpackChunkName: "pvc_VerticalTable3CellsLight" */'../pvc/VerticalTableLight.vue'),
    VerticalTable3CellsLight: () => import(/* webpackChunkName: "pvc_VerticalTable3CellsLight" */'../pvc/VerticalTable3CellsLight.vue'),
  },
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
      return this.subsections[this.$props.item.attributes['CATEGORY']];
    },
    subsection() {
      return this.$props.item.attributes.CATEGORY;
    },
    mainVerticalTableOptions() {
      return {
        styles: {
          th: {
            'vertical-align': 'top',
            'font-size': '14px',
            'min-width': '40px !important',
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
            label: 'eligibility',
            labelType: 'i18n',
            value: 'sections.' + this.section + '.eligibility',
            valueType: 'i18n',
          },
          {
            label: 'pickupDetails',
            labelType: 'i18n',
            // value: 'sections.' + this.section + '.pickupDetails',
            valueType: 'component',
          },
        ],
      };
    },
    componentVerticalTableOptions() {
      return {
        styles: {
          th: {
            // 'vertical-align': 'top',
            'font-size': '14px',
            'min-width': '45px !important',
            'max-width': '50px !important',
            'width': '25% !important',
          },
          td: {
            'font-size': '14px',
            // 'width': '90%',
          },
        },
      };
    },
    componentVerticalTableSlots() {
      let allDays = [ 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY' ];
      let theFields = [];
      let days = {};

      let item = this.item;
      let holidays = [];
      let exceptions = [];
      if (this.$config.holidays && this.$config.holidays.days) {
        holidays = this.$config.holidays.days;
      }
      if (this.$config.holidays && this.$config.holidays.exceptions) {
        exceptions = this.$config.holidays.exceptions;
      }
      let siteName = this.getSiteName(this.item);

      for (let [ index, day ] of allDays.entries()) {
        let normallyOpen = item.attributes[day] != null;
        let holidayToday = holidays.includes(day);
        let yesterday = allDays[index-1];
        let normallyOpenYesterday = item.attributes[yesterday] != null;
        let holidayYesterday = holidays.includes(yesterday);
        let siteIsException = exceptions.includes(this.getSiteName(this.item));

        // if (this.item.attributes[day] != null){
        if ((normallyOpen || (!siteIsException && holidayYesterday && normallyOpenYesterday)) && (!holidayToday || siteIsException)) {

          let hours;
          if ((normallyOpen && !holidayToday) || (normallyOpen && siteIsException)) {
            hours = item.attributes[day];
          } else if (!normallyOpen && holidayYesterday) {
            hours = item.attributes[yesterday];
          }

          let details;
          if (day === 'MONDAY' || (holidayYesterday && yesterday === 'MONDAY')) {
            details = 'nonPerish';
          } else {
            details = 'freshOnly';
          }

          // let dayObject = {
          //   label: day,
          //   labelType: 'i18n',
          //   value: hours,
          //   value1: details,
          //   value1Type: 'i18n',
          // };
          //TODO: remove this temporary hack

          // if (day === 'THURSDAY') {

          let dayObject = {
            label: day,
            // label: "THURSDAY",
            labelType: "i18n",
            value: hours,
            // value: "10AM - 12PM",
            value1: "",
            value1Type: "i18n",
          };
          theFields.push(dayObject);
          // }


        }
      }

      return {
        id: 'mainTable',
        fields: theFields,
      };
    },
  },
  methods: {
    getPickupDetails(item) {
      let value;
      if (this.$config.pickupDetailsExceptions) {
        if (this.$config.pickupDetailsExceptions.condition(item)) {
          value = this.$config.pickupDetailsExceptions.value;
        }
      }
      return value;
    },
  },
};

</script>
