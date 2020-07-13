import { Moment } from 'moment';

export type DatePickerDisableDateFilter = (day: Moment) => boolean;

export const disableWeekends: DatePickerDisableDateFilter = (
  day: Moment
): boolean => {
  if (day) return day.day() === 6 || day.day() === 0;
  else return false;
};
