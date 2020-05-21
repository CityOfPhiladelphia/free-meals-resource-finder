<script>
export default {
  methods: {
    createDays(item) {
      let allDays = [ 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY' ];
      let theFields = [];
      let days = {};

      let holidays = [];
      let exceptions = [];
      if (this.$config.holidays && this.$config.holidays.days) {
        holidays = this.$config.holidays.days;
      }
      if (this.$config.holidays && this.$config.holidays.exceptions) {
        exceptions = this.$config.holidays.exceptions;
      }
      let siteName = this.getSiteName(this.item);

      this.$config.holidays;
      for (let [ index, day ] of allDays.entries()) {
        // console.log('in days loop, siteName:', siteName, 'holidays:', holidays, 'exceptions:', exceptions, 'day:', day, 'index:', index);
        if (!holidays.includes(day) || exceptions.includes(this.getSiteName(this.item)) && (this.item.attributes[day] != null || holidays.includes(allDays[index-1]))){
        // if (this.item.attributes[day] != null){
          let dayObject = {
            label: day,
            labelType: 'i18n',
            value: function() {
              // console.log('allDays:', allDays, 'day:', day, 'index:', index, 'item.attributes:', item.attributes);
              let value;
              if (!holidays.includes(allDays[index-1])) {
                value = item.attributes[day];
              } else {
                value = item.attributes[allDays[index-1]];
              }
              return value;
            },
            // valueType: 'i18n',
          };
          theFields.push(dayObject);
        }
      }

      return theFields;
    },
  },
};
</script>
