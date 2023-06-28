<template>
  <section class="services">
    <h3>{{ $t('eligibility') }}</h3>

    <div
      class="table-intro"
      v-html="$t('sections.'+this.section+'.subsections.'+this.subsection+'.eligibility')"
    />

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
  </section>
</template>

<script>

import SharedFunctions from '@phila/pinboard/src/components/mixins/SharedFunctions.vue';
import LocalSharedFunctions from './mixins/LocalSharedFunctions.vue';
import { VueGoodTable } from 'vue-good-table';
// import 'vue-good-table/dist/vue-good-table.css';

export default {
  name: 'NdsSchoolCard',
  components: {
    VueGoodTable,
  },
  mixins: [
    SharedFunctions,
    LocalSharedFunctions,
  ],
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
      return this.subsections[this.$props.item.attributes['category']];
    },
    subsection() {
      return this.$props.item.attributes.category;
    },
    pickupDetails() {
      return this.getPickupDetails();
    },
    daysKey() {
      return {
        'Monday': 'Monday',
        'Tuesday': 'Tuesday',
        'Wednesday': 'Wednesday',
        'Thursday': 'Thursday',
        'Friday': 'Friday',
        'Saturday': 'Saturday',
        'Sunday': 'Sunday',
      };
    },
    exceptionsList() {
      let days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
      let exceptionsArray = [];
      for (let day of days) {
        let dayException = this.item.attributes[day + '_exceptions'];
        if (dayException) {
          exceptionsArray.push(dayException);
        }
      }
      let exceptionsSet = new Set(exceptionsArray);
      let exceptionsSetArray = [ ...exceptionsSet ];
      return exceptionsSetArray;
    },
    exceptionsByDay() {
      let days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
      let exceptions = {};
      for (let day of days) {
        let dayException = this.item.attributes[day + '_exceptions'];
        if (dayException) {
          exceptions[day] = dayException;
        }
      }
      return exceptions;
    },
    exceptionsWithCounter() {
      let exceptionsWithCounter = {};
      for (let day = 0; day < Object.keys(this.exceptionsByDay).length; day++) {
        exceptionsWithCounter[Object.keys(this.exceptionsByDay)[day]] = {
          value: Object.keys(this.exceptionsByDay)[day],
          counter: 1+this.exceptionsList.indexOf(this.exceptionsByDay[Object.keys(this.exceptionsByDay)[day]]),
        };
      }
      console.log('exceptionsWithCounter:', exceptionsWithCounter);
      return exceptionsWithCounter;
    },
  },
};

</script>
