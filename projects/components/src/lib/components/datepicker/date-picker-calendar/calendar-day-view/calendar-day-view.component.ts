import { DatePickerDisableDateFilter } from './../../date.filters';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
  HostBinding
} from '@angular/core';
import { Moment } from 'moment';
import * as moment_ from 'moment';
import { DayViewDate } from './day-view.directive';
const moment = moment_;

export interface CalendarDay {
  dateID: string;
  date: Moment;
  inMonth: boolean;
  isToday: boolean;
  isFromDate: boolean;
  isInRangeFromDate?: boolean;
  isToDate: boolean;
  isLastOfWeek: boolean;
  isInRange: boolean;
  tabIndex: number;
  disabled: boolean;
  disabledFocused: boolean;
  lastSelectedDate: boolean;
}

@Component({
  selector: 'sm-calendar-day-view',
  templateUrl: './calendar-day-view.component.html'
})
export class CalendarDayViewComponent {
  @HostBinding('class.sm-date-picker-calendar-day-view')
  readonly defaultHostClass = true;

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
  }

  private _internalDate: Moment;
  @Input()
  get internalDate(): Moment {
    return this._internalDate;
  }
  set internalDate(date: Moment) {
    if (date) {
      this._internalDate = date;
      this.setupMonth(
        this.internalDate,
        this.internalDate.month(),
        this.internalDate.year()
      );
      this.setupTabIndex();
    }
  }

  private _viewOpened = false;
  @Input()
  get viewOpened(): boolean {
    return this._viewOpened;
  }
  set viewOpened(isOpen: boolean) {
    this._viewOpened = isOpen;
    this.focusOnDate();
  }

  @Input()
  set calendarOpened(isOpen: boolean) {
    if (!isOpen && this.date) {
      this.internalDate = this.date.clone();
      this.internalDateChange.emit(this.internalDate);
    }
  }

  private _fromDate: Moment;

  @Input()
  set fromDate(val: Moment) {
    this._fromDate = val;
  }
  get fromDate() {
    return this._fromDate;
  }
  private _toDate: Moment;

  @Input()
  set toDate(val: Moment) {
    this._toDate = val;
    if (
      this._toDate &&
      this._fromDate &&
      this._toDate.isSame(this._fromDate, 'day')
    )
      this._toDate = this._toDate.add(1, 'day').clone();
  }
  get toDate() {
    return this._toDate;
  }

  private _disableDateFilter: DatePickerDisableDateFilter;
  @Input()
  set disableDateFilter(callBackFunction: DatePickerDisableDateFilter) {
    this._disableDateFilter = callBackFunction;
    this.updateMonths(this.internalDate);
  }
  get disableDateFilter(): DatePickerDisableDateFilter {
    return this._disableDateFilter;
  }

  @Input() dayView = false;
  @Input() dayViewID: string;
  @Input() range = false;

  private _min: number;
  @Input()
  set min(min: number) {
    this._min = min;
    this.updateMonths(this.internalDate);
  }
  get min(): number {
    return this._min;
  }

  private _max: number;
  @Input()
  set max(max: number) {
    this._max = max;
    this.updateMonths(this.internalDate);
  }
  get max(): number {
    return this._max;
  }

  @Output() dateChange: EventEmitter<Moment> = new EventEmitter<Moment>();
  @Output() internalDateChange: EventEmitter<Moment> = new EventEmitter<
    Moment
  >();
  @Output() dateSelect: EventEmitter<Moment> = new EventEmitter<Moment>();

  @Output() fromDateChange: EventEmitter<Moment> = new EventEmitter<Moment>();
  @Output() toDateChange: EventEmitter<Moment> = new EventEmitter<Moment>();

  @ViewChildren(DayViewDate) dayButtons: QueryList<DayViewDate>;

  lastSelectedDate: Moment = moment();
  hoverDate: Moment = moment();
  currentDateID: string;
  selectingFromDate = true;

  daysInMonth: Array<CalendarDay> = [];
  currentFocusDateIndex: number;

  constructor() {}

  isValidNewDate(newDate: Moment): boolean {
    if (!this.validBounds(newDate)) return false;

    return true;
  }

  validBounds(newDate: Moment): boolean {
    return newDate.isBetween(this.min, this.max, 'day', '[]');
  }

  resetDP() {
    this._date = null;
    this._fromDate = null;
    this._toDate = null;
    this._viewOpened = false;
    this.dayView = false;
    this.internalDate = moment();
  }

  updateOnDateChange(date: Moment, keyBoardInteraction?: boolean) {
    if (!keyBoardInteraction) this.internalDate = date.clone();
    this.lastSelectedDate = this.internalDate;
    this.currentDateID =
      this.dayViewID +
      '-' +
      this.lastSelectedDate.month() +
      '-' +
      this.lastSelectedDate.date();

    if (!keyBoardInteraction) this.setupMonth(date, date.month(), date.year());
    this.updateMonths(date, keyBoardInteraction);
    if (keyBoardInteraction) this.focusOnDate();
  }

  focusOnDate() {
    setTimeout(() => {
      if (this.dayButtons.toArray()[this.currentFocusDateIndex]) {
        this.dayButtons.toArray()[this.currentFocusDateIndex].focus();
      }
    }, 0);
  }

  /*
    Sets up the month based on sunday being first day of week to Sat being last day of week
  */
  setupMonth(date: Moment, month: number, year: number) {
    const momentDay = moment()
      .locale(date.locale())
      .month(month)
      .year(year);
    const dayOfMonth = momentDay
      .clone()
      .startOf('month')
      .startOf('week');
    const endOfMonth = momentDay
      .clone()
      .endOf('month')
      .endOf('week');
    this.daysInMonth = [];
    let index = 0;
    while (dayOfMonth.clone().isSameOrBefore(endOfMonth)) {
      const inMonth =
        dayOfMonth.isSameOrAfter(momentDay.clone().startOf('month')) &&
        dayOfMonth.isSameOrBefore(momentDay.clone().endOf('month'));
      const isToday = dayOfMonth.isSame(moment(), 'day');
      const isFromDate =
        this.range && this.fromDate && dayOfMonth.isSame(this.fromDate, 'day');
      const isToDate =
        this.range && this.toDate && dayOfMonth.isSame(this.toDate, 'day');
      const isLastOfWeek = dayOfMonth.weekday() === 6;

      const isInRangeFromDate =
        isFromDate &&
        (this.fromDate.isBefore(this.hoverDate, 'day') ||
          this.fromDate.isBefore(this.toDate));

      const isInRange =
        this.range &&
        (dayOfMonth.isBetween(this.fromDate, this.toDate) ||
          (!this.selectingFromDate &&
            dayOfMonth.isBetween(this.fromDate, this.hoverDate)));
      const dateID = this.dayView
        ? dayOfMonth.isSame(date, 'day')
          ? this.dayViewID + '-sm-dp-selected-day'
          : this.dayViewID + '-' + dayOfMonth.month() + '-' + dayOfMonth.date()
        : '';
      let disabled = this.isDateDisabled(dayOfMonth);

      let disabledFocused = false;
      if (disabled && dayOfMonth.isSame(date, 'day')) {
        disabledFocused = true;
        disabled = false;
      }

      if (dayOfMonth.isSame(date, 'day')) {
        this.currentFocusDateIndex = index;
      }

      const lastSelectedDate = this.date
        ? dayOfMonth.isSame(this.date, 'day')
        : false;
      const tabIndex = this.wasLastSelected(dayOfMonth) ? 0 : -1;
      this.daysInMonth.push({
        date: dayOfMonth.clone(),
        inMonth: inMonth,
        isToday: isToday,
        isFromDate: isFromDate,
        isToDate: isToDate,
        isLastOfWeek: isLastOfWeek,
        isInRange: isInRange,
        dateID: dateID,
        tabIndex: tabIndex,
        disabled: disabled,
        disabledFocused: disabledFocused,
        lastSelectedDate: lastSelectedDate,
        isInRangeFromDate: isInRangeFromDate
      });

      dayOfMonth.add(1, 'day');
      index++;
    }
  }

  resetMonth() {
    this.daysInMonth.forEach(day => {
      day.lastSelectedDate = false;
      day.disabled = this.isDateDisabled(day.date);
    });
  }

  setupTabIndex() {
    let resetFocus = false;
    this.daysInMonth.forEach(day => {
      if (day.inMonth && !day.disabled && !resetFocus) {
        resetFocus = true;
        day.tabIndex = 0;
      }
    });
  }

  updateMonths(date: Moment, keyBoardInteraction?: boolean) {
    this.daysInMonth.forEach((day, index) => {
      const inMonth =
        day.date.isSameOrAfter(date.clone().startOf('month')) &&
        day.date.isSameOrBefore(date.clone().endOf('month'));
      const isToday = day.date.isSame(moment(), 'day');
      const isFromDate =
        this.range && this.fromDate && day.date.isSame(this.fromDate, 'day');
      const isInRangeFromDate =
        isFromDate &&
        (this.fromDate.isBefore(this.hoverDate, 'day') ||
          this.fromDate.isBefore(this.toDate));
      const isToDate =
        (this.range && this.toDate && day.date.isSame(this.toDate, 'day')) ||
        (day.date.isAfter(this.fromDate, 'day') &&
          !this.selectingFromDate &&
          day.date.isSame(this.hoverDate, 'day'));
      const isLastOfWeek = day.date.weekday() === 6;
      const isInRange =
        this.range &&
        (day.date.isBetween(this.fromDate, this.toDate) ||
          (!this.selectingFromDate &&
            day.date.isBetween(this.fromDate, this.hoverDate)));
      const dateID = this.dayView
        ? day.date.isSame(date, 'day')
          ? this.dayViewID + '-sm-dp-selected-day'
          : this.dayViewID + '-' + day.date.month() + '-' + day.date.date()
        : '';
      const tabIndex = this.wasLastSelected(day.date) ? 0 : -1;

      let disabled = this.isDateDisabled(day.date);
      const lastSelectedDate = keyBoardInteraction
        ? day.lastSelectedDate
        : this.date
        ? day.date.isSame(this.date, 'day')
        : false;
      let disabledFocused = false;
      if (disabled && day.date.isSame(date, 'day')) {
        disabledFocused = true;
        disabled = false;
      }

      if (day.date.isSame(date, 'day')) {
        this.currentFocusDateIndex = index;
      }

      day.inMonth = inMonth;
      day.isToday = isToday;
      day.isFromDate = isFromDate;
      day.isInRangeFromDate = isInRangeFromDate;
      day.isToDate = isToDate;
      day.isLastOfWeek = isLastOfWeek;
      day.isInRange = isInRange;
      day.dateID = dateID;
      day.tabIndex = tabIndex;
      day.disabled = disabled;
      day.disabledFocused = disabledFocused;
      day.lastSelectedDate = lastSelectedDate;
    });
  }

  isDateDisabled(date: Moment): boolean {
    let disabled = false;
    if (this.min && this.max)
      disabled = !date.isBetween(this.min, this.max, 'day', '[]');
    else if (this.min) disabled = !date.isBefore(this.min, 'day');
    else if (this.max) disabled = !date.isAfter(this.max, 'day');
    if (this.disableDateFilter) {
      disabled = disabled || this.disableDateFilter(date);
    }
    return disabled;
  }

  selectDate(d: Moment) {
    if (this.range) {
      this.selectDateRange(d);
    } else {
      this.date = d;
      this.updateOnDateChange(this.validateDate(d));
      this.dateChange.emit(d);
      this.dateSelect.emit(d);
    }
  }

  selectDateRange(d: Moment) {
    if (this.selectingFromDate) {
      this.fromDate = d;
      this.toDate = null;
      this._date = null;
      this.selectingFromDate = false;
      this.updateMonths(d);
      this.fromDateChange.emit(this.fromDate);
    } else {
      this.toDate = moment(this.fromDate).isBefore(d, 'day')
        ? d
        : this.fromDate.clone().add(1, 'day');
      this.fromDateChange.emit(this.fromDate);
      this.toDateChange.emit(this.toDate);
      this.updateOnDateChange(this.validateDate(d));
      this.dateChange.emit(d);
      this.dateSelect.emit(d);
      this.selectingFromDate = true;
    }
  }

  dateHover(d: Moment, mouseEnter: boolean) {
    this.hoverDate = mouseEnter
      ? d.clone()
      : this.range
      ? this.fromDate
      : this.lastSelectedDate;
    if (this.range) this.updateMonths(d);
  }

  selectNewMonthDate(newDate: Moment) {
    this.updateOnDateChange(newDate, true);
    this.setupMonth(newDate, newDate.month(), newDate.year());
    this.internalDate = newDate;
    this.internalDateChange.emit(newDate);
  }

  validateDate(newDate: Moment) {
    return moment(newDate).valueOf() > this.max
      ? moment(this.max)
      : moment(newDate).valueOf() < this.min
      ? moment(this.min)
      : moment(newDate);
  }

  wasLastSelected(d: Moment) {
    return d.isSame(this.lastSelectedDate, 'day');
  }

  onKeyDown($event: KeyboardEvent, date: Moment) {
    let newDateID: Moment;
    switch ($event.key) {
      case 'ArrowDown':
      case 'Down':
        newDateID = date.clone().add(7, 'day');
        if (!this.daysInMonth[this.currentFocusDateIndex + 7]) {
          this.selectNewMonthDate(newDateID);
          this.lastSelectedDate = newDateID;
          this.updateOnDateChange(newDateID, true);
        }
        break;
      case 'ArrowUp':
      case 'Up':
        newDateID = date.clone().subtract(7, 'day');
        if (!this.daysInMonth[this.currentFocusDateIndex - 7]) {
          this.selectNewMonthDate(newDateID);
          this.lastSelectedDate = newDateID;
          this.updateOnDateChange(newDateID, true);
        }
        break;
      case 'ArrowLeft':
      case 'Left':
        newDateID = date.clone().subtract(1, 'day');
        if (!this.daysInMonth[this.currentFocusDateIndex - 1]) {
          this.selectNewMonthDate(newDateID);
          this.lastSelectedDate = newDateID;
          this.updateOnDateChange(newDateID, true);
        }
        break;
      case 'ArrowRight':
      case 'Right':
        newDateID = date.clone().add(1, 'day');
        if (!this.daysInMonth[this.currentFocusDateIndex + 1]) {
          this.selectNewMonthDate(newDateID);
          this.lastSelectedDate = newDateID;
          this.updateOnDateChange(newDateID, true);
        }
        break;
      case 'Home':
        newDateID = date.clone().startOf('month');
        break;
      case 'End':
        newDateID = date.clone().endOf('month');
        break;
      case 'PageUp':
        newDateID = $event.shiftKey
          ? date.clone().subtract(1, 'year')
          : date.clone().subtract(1, 'month');
        break;
      case 'PageDown':
        newDateID = $event.shiftKey
          ? date.clone().add(1, 'year')
          : date.clone().add(1, 'month');
        break;
    }

    if (newDateID) {
      const dateBtnID = `${
        this.dayViewID
      }-${newDateID.month()}-${newDateID.date()}`;
      let foundInMonth = false;
      this.hoverDate = newDateID;
      this.dayButtons.forEach((dButton, index: number) => {
        if (this.daysInMonth[index]) {
          const dBtnId =
            this.dayViewID +
            '-' +
            this.daysInMonth[index].date.month() +
            '-' +
            this.daysInMonth[index].date.date();
          if (
            !foundInMonth &&
            dBtnId === dateBtnID &&
            dButton.smCalendarDay.inMonth &&
            newDateID.year() === this.daysInMonth[index].date.year()
          ) {
            foundInMonth = true;
            this.updateOnDateChange(newDateID, true);
          }
        }
      });

      if (!foundInMonth) {
        this.selectNewMonthDate(newDateID);
        this.lastSelectedDate = newDateID;
        this.updateOnDateChange(newDateID, true);
      }
    }
  }
}
