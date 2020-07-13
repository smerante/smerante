import { HostBinding } from '@angular/core';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Moment } from 'moment';
import * as moment_ from 'moment';
const moment = moment_;

@Component({
  selector: 'sm-calendar-nav',
  templateUrl: './calendar-nav.component.html'
})
export class CalendarNavComponent implements OnInit {
  @HostBinding('class.sm-date-picker-calendar-nav')
  readonly defaultHostClass = true;

  private _internalDate: Moment;
  @Input()
  get internalDate(): Moment {
    return this._internalDate;
  }
  set internalDate(date: Moment) {
    this._internalDate = date;
    this.currentDateLabel = this._internalDate
      .clone()
      .format('dddd, MMMM Do YYYY');
    this.updateWeekdaysLabel();
    this.updateMonthLabel(date);
  }

  @HostBinding('class.sm-date-picker-calendar-nav--year-view')
  get getYearView() {
    return !this.dayView;
  }

  @Input() dayView = true;
  @Input() navID: string;

  @Input() ariaLabelNextMonth: string;
  @Input() ariaLabelPrevMonth: string;

  @Output() internalDateChange: EventEmitter<Moment> = new EventEmitter<
    Moment
  >();
  @Output() dayViewChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  prevMonthLabel: string;
  nextMonthLabel: string;
  monthViewLabel: string;

  daysOfWeekLabel: Array<string>;
  currentDateLabel: string;

  constructor() {
    this.daysOfWeekLabel = moment
      .weekdaysMin(true)
      .map(str => str.substr(0, 1).toUpperCase());
  }

  ngOnInit() {
    if (!!this.internalDate) {
      this.updateWeekdaysLabel();
      this.monthViewLabel = this.internalDate.clone().format('MMMM');
      this.currentDateLabel = this.internalDate
        .clone()
        .format('dddd, MMMM Do YYYY');
      this.prevMonthLabel = this.internalDate
        .clone()
        .subtract(1, 'month')
        .format('dddd, MMMM Do YYYY');
      this.nextMonthLabel = this.internalDate
        .clone()
        .add(1, 'month')
        .format('dddd, MMMM Do YYYY');
    }
  }

  updateWeekdaysLabel() {
    this.daysOfWeekLabel = (this.internalDate.localeData() as any)
      .weekdaysMin(true)
      .map(str => str.substr(0, 1).toUpperCase());
  }

  updateLabel(label: string) {
    if (label === 'prev') {
      this.prevMonthLabel = this.internalDate
        .clone()
        .subtract(1, 'month')
        .format('dddd, MMMM Do YYYY');
    } else {
      this.nextMonthLabel = this.internalDate
        .clone()
        .add(1, 'month')
        .format('dddd, MMMM Do YYYY');
    }
  }

  selectLeft() {
    if (this.dayView) {
      const newDate = this.internalDate.clone().subtract(1, 'month');
      this.internalDate = newDate;
      this.internalDateChange.emit(this.internalDate);
    } else {
      this.internalDate = this.internalDate.clone().subtract(1, 'year');
      this.internalDateChange.emit(this.internalDate);
    }

    this.monthViewLabel = this.internalDate.format('MMMM');
  }

  selectRight() {
    if (this.dayView) {
      const newDate = this.internalDate.clone().add(1, 'month');
      this.internalDate = newDate;
      this.internalDateChange.emit(this.internalDate);
    } else {
      this.internalDate = this.internalDate.clone().add(1, 'year');
      this.internalDateChange.emit(this.internalDate);
    }
    this.monthViewLabel = this.internalDate.format('MMMM');
  }

  public updateMonthLabel(date?: Moment) {
    this.monthViewLabel = date
      ? date.format('MMMM')
      : this.internalDate
      ? this.internalDate.format('MMMM')
      : moment().format('MMMM');
  }

  changeView() {
    this.dayView = !this.dayView;
    this.dayViewChange.emit(this.dayView);
  }
}
