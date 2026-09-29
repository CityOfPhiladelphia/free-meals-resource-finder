import { parseISO, isValid } from 'date-fns';

// hours fields are strings like "11:30"; anything else (null, "<Null>", "TBD") means no hours
export default function (value) {
  return /^\d{2}:\d{2}/.test(value) && isValid(parseISO('2022-05-24T' + value));
}
