<template>
  <section class="services">
    <h3>{{ $t('eligibility') }}</h3>

    <div
      class="table-intro"
      v-html="$t('sections.'+this.section+'.subsections.'+this.subsection+'.eligibility')"
    />

    <h3>{{ $t('pickupDetails') }}</h3>

    <!-- <div
      class="table-intro"
      v-html="$t('sections.'+this.section+'.subsections.'+this.subsection+'.pickupDetails')"
    /> -->

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
    </vue-good-table>

    <div
      class="table-intro"
      v-html="$t('tenMeals')"
    />
  </section>
</template>

<script>

import SharedFunctions from '@phila/pinboard/src/components/mixins/SharedFunctions.vue';
import { VueGoodTable } from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css';
import './mixins/table.css';

export default {
  name: 'PsdSchoolCard',
  components: {
    VueGoodTable,
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
      let columns = [
        {
          label: 'Days',
          i18nLabel: 'daysOfTheWeek',
          field: 'label',
          thClass: 'th-black-class',
        },
        {
          label: 'Schedule',
          i18nLabel: 'schedule',
          field: 'value',
          thClass: 'th-black-class',
        },
      ];
      let rows = [];
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
            id: index,
            label: this.$i18n.messages[this.i18nLocale][day],
            value: hours,
          };
          rows.push(dayObject);
        }
      }

      return { columns, rows };
    },
  },
};

</script>
