import { format, parseISO } from 'date-fns';

export default {
  date: {
    transform: function (value) {
      let valueTransformed;
      console.log('date transform running, value:', value, 'typeof value:', typeof value);
      if (typeof value === 'string') {
        valueTransformed = format(parseISO(value), 'MM/dd/yyyy');
      } else {
        valueTransformed = format(value, 'MM/dd/yyyy');
      }
      return valueTransformed;
    },
  },
  toLocaleDateString:{
    transform: function(epoch){
      console.log('toLocaleDateString transform, epoch:', epoch, typeof epoch);
      let value;
      if (typeof epoch !== 'number') {
        value = epoch;
      } else {
        let utcDate = new Date(0);
        utcDate.setUTCMilliseconds(epoch);
        utcDate = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000);
        value = utcDate.toLocaleDateString();
      }
      return value;
    },
  },
  dayofweek: {
    // a list of global objects this transform depends on
    transform: function (value) {
      switch(value) {
      case "FRI":
        value = "Friday";
        break;
      case "SAT":
        value = "Saturday";
        break;
      case "SUN":
        value = "Sunday";
        break;
      case "MON":
        value = "Monday";
        break;
      case "TUE":
        value = "Tuesday";
        break;
      case "WED":
        value = "Wednesday";
        break;
      case "THU":
        value = "Thursday";
      }
      return value;
    },
  },
};
