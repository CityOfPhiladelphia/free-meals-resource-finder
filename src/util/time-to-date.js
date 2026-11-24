import isValidTime from './is-valid-time';

// Returns today's date at the time in an hours field like "13:30", or undefined if the field has no valid time
export default function (value) {
  if (!isValidTime(value)) {
    return undefined;
  }
  const [ hours, minutes ] = value.split(':');
  const date = new Date();
  date.setHours(parseInt(hours), parseInt(minutes), 0, 0);
  return date;
}
