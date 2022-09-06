<script>
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
      let allDays = [ 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY' ];
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

        if ((normallyOpen || (!siteIsException && holidayYesterday && normallyOpenYesterday)) && (!holidayToday || siteIsException)) {

          let hours;
          if ((normallyOpen && !holidayToday) || (normallyOpen && siteIsException)) {
            hours = item.attributes[day];
          } else if (!normallyOpen && holidayYesterday) {
            hours = item.attributes[yesterday];
          }

          // this section is vestigial, but left in in case it ever needs to be re-added
          let details;
          if (day === 'MONDAY' || (holidayYesterday && yesterday === 'MONDAY')) {
            details = 'nonPerish';
          } else {
            details = 'freshOnly';
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
