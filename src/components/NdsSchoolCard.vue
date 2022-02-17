<template>
  <section class="services">
    <vertical-table-light
      class="print-padding"
      :slots="mainVerticalTableSlots"
      :options="mainVerticalTableOptions"
    >
      <div class="table-slot">
        <vertical-table-light
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
  name: 'NdsSchoolCard',
  components: {
    VerticalTableLight: () => import(/* webpackChunkName: "pvc_VerticalTable3CellsLight" */'../pvc/VerticalTableLight.vue'),
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
    i18nLocale() {
      return this.$i18n.locale;
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
            value: 'sections.' + this.section + '.subsections.' + this.item.attributes.CATEGORY +  '.eligibility',
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
        let normallyOpen = item.attributes[day] != null && item.attributes[day] != 'NA';
        let holidayToday = holidays.includes(day);
        let yesterday = allDays[index-1];
        let normallyOpenYesterday = item.attributes[yesterday] != null;
        let holidayYesterday = holidays.includes(yesterday);
        let siteIsException = exceptions.includes(this.getSiteName(this.item));

        if ((normallyOpen || (!siteIsException && holidayYesterday && normallyOpenYesterday)) && (!holidayToday || siteIsException)) {

          let hours;
          if ((normallyOpen && !holidayToday) || (normallyOpen && siteIsException)) {
            hours = item.attributes[day];
          } else if (!normallyOpen && holidayYesterday) {
            hours = item.attributes[yesterday];
          }

          let dayObject = {
            label: day,
            labelType: 'i18n',
            value: hours,
            // valueType: 'i18n',
            // value1: 'tenMeals',
            // value1Type: 'i18n',
          };
          theFields.push(dayObject);
        }
      }

      let summary = this.$config.i18n.data.messages[this.i18nLocale].sections[this.section].subsections[this.item.attributes.CATEGORY].pickupDetails;
      // console.log('componentVerticalTableSlots, summary:', summary);

      return {
        id: 'mainTable',
        fields: theFields,
        subtitle: summary,
      };
    },
  },
};

</script>
