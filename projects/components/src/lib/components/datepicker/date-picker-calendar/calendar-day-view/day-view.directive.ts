import { ElementRef } from '@angular/core';
import { Directive, Input, HostBinding } from '@angular/core';
import { CalendarDay } from './calendar-day-view.component';

@Directive({
  selector: 'button[smCalendarDay], button[sm-day-view-date]'
})
export class DayViewDate {
  @HostBinding('class.calendar-day-view-days') readonly defaultHostClass = true;
  /**  @deprecated since 1.14.0, sm-day-view-date replaced by smCalendarDay */
  @Input('sm-day-view-date')
  set calendarDay(value: CalendarDay) {
    this.smCalendarDay = value;
  }
  get calendarDay() {
    return this.smCalendarDay;
  }

  @Input() smCalendarDay: CalendarDay;

  constructor(private host: ElementRef) {}

  @HostBinding('class.notInMonth') get getnotInMonth() {
    return !this.smCalendarDay.inMonth;
  }

  @HostBinding('class.today') get getToday() {
    return this.smCalendarDay.isToday;
  }

  @HostBinding('attr.tabindex') get getTabIndex() {
    return this.smCalendarDay.tabIndex;
  }

  @HostBinding('class.fromDate') get getFromDate() {
    return this.smCalendarDay.isFromDate;
  }

  @HostBinding('class.toDate') get getToDate() {
    return this.smCalendarDay.isToDate;
  }

  @HostBinding('class.last-of-week') get getlastOfWeek() {
    return this.smCalendarDay.isLastOfWeek;
  }

  @HostBinding('class.inRange') get getInRange() {
    return this.smCalendarDay.isInRange;
  }

  @HostBinding('class.disabled-focused') get getDisabledFocused() {
    return this.smCalendarDay.disabledFocused;
  }

  @HostBinding('class.date-selected') get getLastSelectedDate() {
    return this.smCalendarDay.lastSelectedDate;
  }

  focus() {
    (<HTMLElement>this.host.nativeElement).focus();
  }
}
