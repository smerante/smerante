import { Pipe, PipeTransform } from '@angular/core';
import { isNumber } from 'util';
import { Moment } from 'moment';
import * as moment_ from 'moment';
const moment = moment_;

@Pipe({ name: 'smDate' })
export class SMDatePipe implements PipeTransform {
  transform(date: Date | string | number | Moment, format?: string) {
    format = format ? format : 'll';
    if (moment.isMoment(date)) {
      return date.format(format);
    } else if (date instanceof Date) {
      return moment(date).format(format);
    } else if (typeof date === 'number') {
      return moment.utc(date).format(format);
    } else {
      return date;
    }
  }
}
