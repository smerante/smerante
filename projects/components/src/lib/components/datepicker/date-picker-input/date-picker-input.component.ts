import { DatePickerDisableDateFilter } from './../date.filters';
import { SMDatePipe } from '../sm-date.pipe';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostBinding,
  ViewChild
} from '@angular/core';
import { Moment } from 'moment';
import * as moment_ from 'moment';

const moment = moment_;

@Component({
  selector: 'sm-date-picker-input',
  templateUrl: './date-picker-input.component.html'
})
export class DatePickerInputComponent  {
  @HostBinding('class.sm-date-picker-input') readonly defaultHostClass = true;

  @Input() inputLabel;
  @Input() inputID: string;
  private _date: Moment;

  @Input()
  get date(): Moment {
    return this._date;
  }
  set date(value: Moment) {
    this._date = !!value ? value : moment();
    this.updateInputField();
  }

  @Input() calendarViewLabel: string;
  @Input() fromDate: Moment = moment();
  @Input() toDate: Moment = moment();
  @Input() range: boolean;
  @Input() min: number;
  @Input() max: number;
  @Input() disabled = false;
  @Input() dateWasSelected = false;
  @Input() inputPlaceholder: string;
  @Input() inputFormat: string | string[];
  @Input() displayFormat: string;
  @Input() strictMode = true;
  @Input() error: boolean;
  @Input() disableDateFilter: DatePickerDisableDateFilter;

  @Output() errorChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clearDate: EventEmitter<void> = new EventEmitter<void>();
  @Output() openChange: EventEmitter<void> = new EventEmitter<void>();
  @Output() dateChange: EventEmitter<Moment> = new EventEmitter<Moment>();
  @Output() fromDateChange: EventEmitter<Moment> = new EventEmitter<Moment>();
  @Output() toDateChange: EventEmitter<Moment> = new EventEmitter<Moment>();
  @Output() resetCalendar: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('dpInputField', { static: false }) dpInputField: ElementRef<any>;
  inputValue: any = '';

  constructor(public elRef: ElementRef, private smDatePipe: SMDatePipe) {}

  onOpen() {
    this.openChange.emit();
  }

  updateValidState(date: Moment) {
    this.error = !this.isValidNewDate(date);
  }

  onBlur($event: Event) {
    const dateEntered: Moment = $event.target['value']
      ? moment($event.target['value'], this.inputFormat, this.strictMode)
      : null;
    if ($event.target['value'] === '') {
      this.clearDate.emit();
      return;
    }
    if (!this.range && dateEntered !== null && dateEntered.isValid()) {
      if (!this.date) {
        this.date = moment(dateEntered);
      } else {
        this.date = moment(dateEntered).locale(this.date.locale());
      }
      this.updateValidState(this.date.clone());
      if (this.date.year() > 9999) this.date.set('year', 9999);
      this.dateChange.emit(this.date);
      this.errorChange.emit(false);
      this.updateInputField();
    } else if ((<string>$event.target['value']).split(' - ').length > 1) {
      const fromDate = new Date(
        (<string>$event.target['value']).split(' - ')[0]
      );
      const toDate = new Date((<string>$event.target['value']).split(' - ')[1]);
      if (!isNaN(fromDate.getTime()) && !isNaN(toDate.getTime())) {
        if (!this.fromDate) {
          this.fromDate = moment(fromDate);
        } else {
          this.fromDate = moment(fromDate).locale(this.fromDate.locale());
        }
        if (!this.toDate) {
          this.toDate = moment(toDate);
        } else {
          this.toDate = moment(toDate).locale(this.toDate.locale());
        }
        if (this.fromDate.isValid() && this.toDate.isValid()) {
          this.fromDateChange.emit(this.fromDate);
          this.toDateChange.emit(this.toDate);
          this.dateChange.emit(this.toDate);
          this.errorChange.emit(false);
          this.updateInputField();
        } else {
          this.errorChange.emit(true);
        }
      } else {
        this.errorChange.emit(true);
      }
    } else {
      this.errorChange.emit(true);
      this.resetCalendar.emit();
    }
  }

  updateInputField() {
    setTimeout(() => {
      if (this.dpInputField.nativeElement.value !== this.getValue()) {
        this.dpInputField.nativeElement.value = this.getValue();
      }
    });
  }

  focus(): void {
    this.dpInputField.nativeElement.focus();
  }

  getValue() {
    this.inputValue = '';
    if (this.dateWasSelected) {
      this.inputValue = this.range
        ? `${this.smDatePipe.transform(
            this.fromDate,
            this.displayFormat
          )} - ${this.smDatePipe.transform(this.toDate, this.displayFormat)}`
        : this.smDatePipe.transform(
            moment(this.date, this.inputFormat),
            this.displayFormat
          );
    }
    return this.inputValue;
  }

  isValidNewDate(newDate: Moment): boolean {
    if (this.invalidBounds(newDate)) return false;
    if (this.disableDateFilter && this.disableDateFilter(newDate)) return false;
    return true;
  }

  invalidBounds(newDate: Moment): boolean {
    return !moment(newDate).isBetween(this.min, this.max, 'day', '[]');
  }
}
