import { format, parseISO } from 'date-fns';

export default {
  date: {
    transform: function (value) {
      let valueTransformed;
      // console.log('date transform running, value:', value, 'typeof value:', typeof value);
      if (typeof value === 'string') {
        valueTransformed = format(parseISO(value), 'MM/dd/yyyy');
      } else {
        valueTransformed = format(value, 'MM/dd/yyyy');
      }
      return valueTransformed;
    },
  },
  toLocaleDateString: {
    transform: function(epoch){
      // console.log('toLocaleDateString transform, epoch:', epoch, typeof epoch);
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
};
