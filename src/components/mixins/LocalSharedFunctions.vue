<script>

import { format, parseISO } from 'date-fns';
import { fr, vi, ru, es, enUS } from 'date-fns/locale';
import * as zh from 'date-fns/locale/zh-CN/index.js';

export default {
  methods: {
    getPickupDetails() {
      let columns = [
        {
          label: 'Days',
          i18nLabel: 'daysOfTheWeek',
          field: 'label',
          thClass: 'th-black-class',
          tdClass: 'table-text',
        },
        {
          label: 'Schedule',
          i18nLabel: 'schedule',
          field: 'value',
          thClass: 'th-black-class',
          tdClass: 'table-text',
        },
      ];
      let rows = [];
      let allDays = [ 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun' ];

      for (let [ index, day ] of allDays.entries()) {
        console.log('day:', day, 'index:', index);
        let scheduleOrClosed = this.parseTimeRange(day, this.item.attributes['hours_' + day + '_start1'], this.item.attributes['hours_' + day + '_end1'], this.item.attributes['hours_' + day + '_start2'], this.item.attributes['hours_' + day + '_end2']);
        // let scheduleOrClosed = this.parseTimeRange(day, this.item.attributes['hours_'+day+'_start'], this.item.attributes['hours_'+day+'_end']);
        if (scheduleOrClosed !== 'Closed') {
          rows.push({
            id: index + 1,
            days: 'weekday.' + this.daysKey[day],
            // days: day,
            schedule: scheduleOrClosed,
          });
        }
      }

      return { columns, rows };
    },
    parseTimeRange(day, rawStartTime, rawEndTime, rawStartTime2, rawEndTime2) {
      let exceptionDays = Object.keys(this.exceptionsWithCounter);
      let exceptionNumber;
      if (exceptionDays.includes(day)) {
        exceptionNumber = this.exceptionsWithCounter[day].counter;
      }
      console.log('parseTimeRange, day:', day, 'exceptionDays:', exceptionDays, 'exceptionNumber:', exceptionNumber, 'rawStartTime:', rawStartTime, 'rawEndTime:', rawEndTime);
      console.log("parseISO('2022-05-24T' + rawStartTime):", parseISO('2022-05-24T' + rawStartTime));
      let startTime, endTime, startTime2, endTime2, value;
      if (rawStartTime) {
        startTime = format(parseISO('2022-05-24T' + rawStartTime), 'h:mm aaaa');
      }
      if (rawEndTime) {
        endTime = format(parseISO('2022-05-24T' + rawEndTime), 'h:mm aaaa');
      }
      if (rawStartTime2) {
        startTime2 = format(parseISO('2022-05-24T' + rawStartTime2), 'h:mm aaaa');
      }
      if (rawEndTime2) {
        endTime2 = format(parseISO('2022-05-24T' + rawEndTime2), 'h:mm aaaa');
      }
      if (startTime && endTime) {
        value = startTime + ' - ' + endTime;
      } else {
        value = 'Closed';
      }

      if (startTime2 && endTime2) {
        value += ', ' + startTime2 + ' - ' + endTime2;
      }

      if (value && exceptionNumber) {
        for (let i=0; i<exceptionNumber; i++) {
          value += "*";
        }
      }
      return value;
    },
    parseException(exception, index) {
      let parsedException = '';
      for (let i=0; i<index; i++) {
        parsedException += "*";
      }
      if (this.$i18n.messages[this.i18nLocale].exceptions && this.$i18n.messages[this.i18nLocale].exceptions[exception]) {
        parsedException += ' ' + this.$i18n.messages[this.i18nLocale].exceptions[exception];
      } else {
        parsedException += ' ' + exception;
      }
      return parsedException;
    },
  },
};
</script>
