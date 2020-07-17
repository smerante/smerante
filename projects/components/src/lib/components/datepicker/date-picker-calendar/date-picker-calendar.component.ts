import { DatePickerDisableDateFilter } from './../date.filters';
import { CalendarYearViewComponent } from './calendar-year-view/calendar-year-view.component';
import { CalendarNavComponent } from './calendar-nav/calendar-nav.component';
import {
  Component,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  ElementRef,
  Inject,
  LOCALE_ID,
  ViewChild
} from '@angular/core';
import { CalendarDayViewComponent } from './calendar-day-view/calendar-day-view.component';
import { Moment } from 'moment';
import * as moment_ from 'moment';
const moment = moment_;

@Component({
  selector: 'sm-date-picker-calendar',
  templateUrl: './date-picker-calendar.component.html'
})
export class DatePickerCalendarComponent {
  @HostBinding('class.sm-date-picker-calendar')
  readonly defaultHostClass = true;

  private _internalDate: Moment = moment();
  @Input()
  get internalDate(): Moment {
    return this._internalDate;
  }
  set internalDate(date: Moment) {
    this._internalDate = date;
  }
  private _date: Moment;
  @Input()
  get date(): Moment {
    return this._date;
  }
  set date(date: Moment) {
    if (date) {
      this._date = date;
      this.internalDate = date;
    }
    if (this.dayViewComponent) this.dayViewComponent.internalDate = date;
  }

  @Input() fromDate: Moment;
  @Input() toDate: Moment;
  @Input() range = false;

  private _open = false;
  @Input()
  get open(): boolean {
    return this._open;
  }
  set open(open: boolean) {
    this.dayView = this.open ? this.dayView : true;
    this._open = open;
  }

  clearLabel = 'Reset';

  @Input() calendarID: string;
  @Input() ariaLabelNextMonth: string;
  @Input() ariaLabelPrevMonth: string;
  @Input() min: number;
  @Input() max: number;
  @Input() disableDateFilter: DatePickerDisableDateFilter;

  @Output() dateChange: EventEmitter<Moment> = new EventEmitter<Moment>();
  @Output() dateSelect: EventEmitter<Moment> = new EventEmitter<Moment>();
  @Output() fromDateChange: EventEmitter<Moment> = new EventEmitter<Moment>();
  @Output() toDateChange: EventEmitter<Moment> = new EventEmitter<Moment>();

  @ViewChild(CalendarDayViewComponent, { static: false })
  dayViewComponent: CalendarDayViewComponent;
  @ViewChild(CalendarYearViewComponent, { static: true })
  yearViewComponent: CalendarYearViewComponent;
  @ViewChild(CalendarNavComponent, { static: true })
  navComponent: CalendarNavComponent;

  dayView = true;

  constructor(
    public elRef: ElementRef,
    @Inject(LOCALE_ID) public locale: string
  ) {
    if (this.locale.slice(0, 2) === 'fr') {
      this.clearLabel = 'Effacer';
    }
  }

  @HostBinding('class.hidden') get calendarOpen() {
    return !this.open;
  }

  dateChanged($event: Moment) {
    this.date = $event;
    this.dateChange.emit(this.date);
    if (this.navComponent) {
      this.navComponent.updateMonthLabel(this.date);
    }
    if (this.yearViewComponent) {
      this.yearViewComponent.updateYears(this.date);
    }
  }

  viewChanged($event: boolean) {
    this.dayView = $event;
  }

  fromDateChanged($event: Moment) {
    this.fromDateChange.emit($event);
  }

  toDateChanged($event: Moment) {
    this.toDateChange.emit($event);
  }

  dateSelected($event: Moment) {
    this.dateSelect.emit($event);
  }

  yearSelected($event: Moment) {
    this.dayView = true;
    this.internalDate = $event;
  }

}
