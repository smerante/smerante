import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DatePickerInputComponent } from './date-picker-input/date-picker-input.component';
import { DatePickerComponent } from './date-picker.component';
import { DatePickerCalendarComponent } from './date-picker-calendar/date-picker-calendar.component';
import { CalendarNavComponent } from './date-picker-calendar/calendar-nav/calendar-nav.component';
import { CalendarDayViewComponent, SMDayViewDate } from './date-picker-calendar/calendar-day-view/calendar-day-view.component';
import { CalendarYearViewComponent } from './date-picker-calendar/calendar-year-view/calendar-year-view.component';
import { SMDatePipe } from './sm-date.pipe';

const components = [
  DatePickerComponent,
  DatePickerInputComponent,
  DatePickerCalendarComponent,
  CalendarNavComponent,
  CalendarDayViewComponent,
  CalendarYearViewComponent,
  SMDayViewDate,
  SMDatePipe
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: components,
  exports: components,
  providers: [SMDatePipe, DatePipe]
})
export class SMDatePickerModule {}
