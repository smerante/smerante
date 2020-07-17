import { DatePickerDisableDateFilter } from './date.filters';
import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  HostListener,
  ViewChild,
  Output,
  EventEmitter,
  forwardRef,
  Inject,
  LOCALE_ID,
  HostBinding,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  Validator,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS
} from '@angular/forms';
import { DatePickerInputComponent } from './date-picker-input/date-picker-input.component';
import { DatePickerCalendarComponent } from './date-picker-calendar/date-picker-calendar.component';
import { Moment } from 'moment';
import * as moment_ from 'moment';
const moment = moment_;
let uniqueInputId = 0;

export type DateType = Date | Moment | number;

@Component({
  selector: 'sm-date-picker',
  templateUrl: './date-picker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent
  implements
  OnInit,
  AfterViewInit,
  OnChanges,
  ControlValueAccessor,
  Validator {
  @HostBinding('class.sm-date-picker') readonly defaultHostClass = true;

  private _date: DateType;
  private _fromDate: DateType;
  private _toDate: DateType;

  @Input()
  get date(): DateType {
    return this._date;
  }
  set date(value: DateType) {
    this._date = value;
    this.setInitialDateType();
    this.convertDatesToMoments();
  }

  @Input()
  get fromDate(): DateType {
    return this._fromDate;
  }
  set fromDate(value: DateType) {
    this._fromDate = value;
    this.setInitialDateType();
    this.convertDatesToMoments();
  }

  @Input()
  get toDate(): DateType {
    return this._toDate;
  }
  set toDate(value: DateType) {
    this._toDate = value;
    this.convertDatesToMoments();
    this.checkValidRange();
  }

  @Input() utc = false;
  @Input() open = false;
  @Input() range = false;
  @Input() dpID = `sm-dp-${uniqueInputId++}`;
  @Input() ariaLabelPrevMonth = 'Previous';
  @Input() ariaLabelNextMonth = 'Next';
  @Input() calendarViewLabel = 'Calendar view';
  @Input() min: number = moment()
    .subtract(150, 'years')
    .valueOf();
  @Input() max: number = moment()
    .add(100, 'years')
    .valueOf();
  @Input() inputLabel = '';
  @Input() disabled = false;
  @Input() inputPlaceholder = '';
  @Input() inputFormat: string | string[] = 'll';
  @Input() displayFormat = 'll';
  @Input() strictMode = false;
  @Input() resetOnError = false;

  _error: boolean;
  @Input()
  get error(): boolean {
    return this._error;
  }
  set error(val: boolean) {
    this._error = val;
    if (val && this.resetOnError) this.onChange(null);
    this.errorChange.emit(this._error);
  }

  @Input() disableDateFilter: DatePickerDisableDateFilter;

  @Output() errorChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() dateChange: EventEmitter<DateType> = new EventEmitter<DateType>();
  @Output() fromDateChange: EventEmitter<DateType> = new EventEmitter<
    DateType
  >();
  @Output() toDateChange: EventEmitter<DateType> = new EventEmitter<DateType>();

  @ViewChild(DatePickerCalendarComponent, { static: false })
  dpCalendar: DatePickerCalendarComponent;
  @ViewChild(DatePickerInputComponent, { static: false })
  dpInput: DatePickerInputComponent;

  initialDate: DateType;
  initialDateType: string;
  dateWasSelected = false;

  constructor(@Inject(LOCALE_ID) public locale: string) {
    moment.locale(locale);
  }

  ngOnInit() {
    if (this._date || (this._fromDate && this._toDate)) {
      this.dateWasSelected = true;
    }
    this.initDates();
    this.setInitialDateType();
    this.convertDatesToMoments();
  }

  ngAfterViewInit(): void {
    if (this.range && this._fromDate) {
      this.updateState(this._fromDate as Moment);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      if (this.dpCalendar) this.dpCalendar.dateChanged(this._date as Moment);
    }
  }

  updateState(updatedDate?: Moment) {
    if (this.dpCalendar)
      this.dpCalendar.dateChanged(
        updatedDate ? updatedDate : (this._date as Moment)
      );
  }

  initDates() {
    if (this._date === undefined) {
      this.initialDate = moment();
    }
  }

  /* NG_VALIDATORS */
  validate(control: AbstractControl): ValidationErrors | null {
    return this.error ? { invalidDate: this.error } : null;
  }
  /* NG_VALIDATORS */

  /* NG_VALUE_ACCESSOR */
  onChange = (val?: any) => { };

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnTouched() { }

  writeValue(val) {
    if (!!val) {
      const modalDate = new Date(val);
      if (modalDate !== null && !isNaN(modalDate.getTime())) {
        this._date = val;
        this.dateWasSelected = true;
        this.initialDateType = undefined;
        this.setInitialDateType();
        this._date = this.convertToMoment(modalDate);
        if (this.dpCalendar)
          this.dpCalendar.navComponent.updateMonthLabel(this._date);
      } else {
        if (val['fromDate']) {
          this._fromDate = val['fromDate'];
          this.initialDateType = undefined;
          this.setInitialDateType();
        }
        this.updateRangeFromModel(val);
        this.convertDatesToMoments();
        this.checkValidRange();
      }
    } else {
      this.resetDP();
    }
  }

  /* Core */
  dateSelected() {
    this.error = false;
    this.open = false;
    document.body.classList.remove('sm-date-picker-open');
    this.convertDatesToMoments();
    this.emitEventBasedOnType(this.dateChange, <Moment>this._date);
    if (!this.range) {
      this.updateModelBasedOnType(<Moment>this._date);
    }
    if (this.dpCalendar)
      this.dpCalendar.navComponent.updateMonthLabel(<Moment>this._date);
    this.dpInput.updateValidState(<Moment>this._date);
    this.dateWasSelected = true;
  }

  fromDateChanged($event: Moment, changedFromCalendar: boolean = false) {
    this.fromDate = $event;
    this.dpInput.updateValidState(<Moment>this._fromDate);
    this.updateDPInput($event, <Moment>this._toDate, changedFromCalendar);

    this.dpCalendar.dayViewComponent.fromDate = this.fromDate
      ? moment(this.fromDate)
      : undefined;
    this.dpCalendar.dayViewComponent.selectingFromDate = false;
    this.dpCalendar.dayViewComponent.updateMonths(
      this.dpCalendar.dayViewComponent.internalDate
    );
    if (!!this._fromDate)
      this.emitEventBasedOnType(this.fromDateChange, <Moment>this._fromDate);
  }

  toDateChanged($event: Moment, changedFromCalendar: boolean = false) {
    this._toDate = $event;

    this.emitEventBasedOnType(this.fromDateChange, <Moment>this._fromDate);
    this.emitEventBasedOnType(this.toDateChange, this._toDate);
    this.updateModelBasedOnType(<Moment>this._fromDate, this._toDate);
    this.dpInput.updateValidState(<Moment>this._toDate);
    this.updateDPInput(<Moment>this._fromDate, $event, changedFromCalendar);
    this.dpCalendar.dayViewComponent.toDate = this.toDate
      ? moment(this.toDate)
      : undefined;
    this.dpCalendar.dayViewComponent.selectingFromDate = true;
    this.dpCalendar.dayViewComponent.updateMonths(
      this.dpCalendar.dayViewComponent.internalDate
    );
  }

  /* UX Listeners */
  @HostListener('keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.open) {
      return;
    }
    this.onEscape(event);
  }

  @HostListener('document:touchend', ['$event'])
  @HostListener('document:click', ['$event'])
  handleClickEvent(event: Event) {
    if (!this.open) {
      return;
    }
    if (this.onBlur(event)) {
      this.open = false;
      this.resetDates();
      document.body.classList.remove('sm-date-picker-open');
    }
  }

  /* Helper Functions */
  checkValidRange() {
    this.convertDatesToMoments();
    if (
      !!this._fromDate &&
      !!this._toDate &&
      (<Moment>this._fromDate).isSame(this._toDate, 'day')
    ) {
      this._toDate = (<Moment>this._toDate).clone().add(1, 'day');
      this.emitEventBasedOnType(this.fromDateChange, <Moment>this._fromDate);
      this.emitEventBasedOnType(this.fromDateChange, this._toDate);
    }
  }

  resetDates() {
    if (this.range && !!this.dpCalendar) {
      this.dpCalendar.dayViewComponent.fromDate = this.fromDate
        ? moment(this.fromDate)
        : undefined;
      this.dpCalendar.dayViewComponent.toDate = this.toDate
        ? moment(this.toDate)
        : undefined;
      this.dpCalendar.dayViewComponent.selectingFromDate = true;
      this.dpCalendar.dayViewComponent.updateMonths(
        this.dpCalendar.dayViewComponent.internalDate
      );
    }
  }

  resetDP(closeDp?: Boolean) {
    this.resetDates();
    this.error = false;
    this.date = undefined;
    if (this.dpCalendar) {
      this.dpCalendar.dayViewComponent.resetDP();
    }
    this.dateChange.emit(this._date);
    if (this.range) {
      this.fromDateChange.emit(this._date);
      this.toDateChange.emit(this._date);
    }
    this.dateWasSelected = false;
    this.onChange(this._date);
    if (closeDp) {
      this.open = false;
    }
  }

  resetCalendarView() {
    if (this.dpCalendar) {
      this.dpCalendar.dayViewComponent.resetDP();
    }
  }

  updateDPInput(
    fromDate: Moment,
    toDate: Moment,
    changedFromCalendar: boolean
  ) {
    this.dpInput.fromDate = changedFromCalendar
      ? fromDate
      : this.dpInput.fromDate;
    this.dpInput.toDate = changedFromCalendar ? toDate : this.dpInput.toDate;
  }

  calenderViewOpen() {
    this.open = !this.open;
    if (this.open) {
      document.body.classList.add('sm-date-picker-open');
    } else {
      document.body.classList.remove('sm-date-picker-open');
    }

    this.convertDatesToMoments();
  }

  setInitialDateType() {
    if (this.initialDateType === undefined) {
      if (!this.range && this._date instanceof Date) {
        this.initialDateType = 'date';
      } else if (!this.range && typeof this._date === 'number') {
        this.initialDateType = 'utc';
      } else if (!this.range && moment.isMoment(this._date)) {
        this.initialDateType = 'moment';
      } else if (!!this._fromDate && typeof this._fromDate === 'number') {
        this.initialDateType = 'utc';
      } else if (!!this._fromDate && moment.isMoment(this._fromDate)) {
        this.initialDateType = 'moment';
      } else if (!!this._fromDate && this._fromDate instanceof Date) {
        this.initialDateType = 'date';
      }
    }
  }

  onBlur(event) {
    const clickContained =
      (<HTMLElement>event.target).classList.contains(
        'calendar-year-view-years'
      ) ||
      (<HTMLElement>event.target).classList.contains(
        'calendar-day-view-days'
      ) ||
      this.dpCalendar.elRef.nativeElement.contains(event.target) ||
      this.dpInput.elRef.nativeElement.contains(event.target);
    return !clickContained;
  }

  onEscape(event: KeyboardEvent) {
    if (event.key === 'Esc' || event.key === 'Escape') {
      this.open = false;
      this.resetDates();
      document.body.classList.remove('sm-date-picker-open');
    }
  }

  convertDatesToMoments() {
    if (
      (!!this._date && !moment.isMoment(this._date)) ||
      typeof this._date === 'number'
    ) {
      this._date = this.convertToMoment(this._date);
    }
    if (!!this._fromDate && !moment.isMoment(this._fromDate)) {
      this._fromDate = this.convertToMoment(this._fromDate);
    }
    if (!!this._toDate && !moment.isMoment(this._toDate)) {
      this._toDate = this.convertToMoment(this._toDate);
    }
  }

  convertToMoment(date: DateType) {
    if (typeof date === 'number') {
      return moment.utc(date);
    } else {
      return moment(date);
    }
  }

  updateRangeFromModel(modelVal: any) {
    if (modelVal['fromDate']) {
      this._fromDate = this.convertToMoment(modelVal['fromDate']);
      this.updateModelBasedOnType(this._fromDate, <Moment>this._toDate);
    }
    if (modelVal['toDate']) {
      this._toDate = this.convertToMoment(modelVal['toDate']);
      this._date = this._toDate;
      this.updateModelBasedOnType(<Moment>this._fromDate, this._toDate);
      this.dateSelected();
    }
  }

  emitEventBasedOnType(eventEmitter: EventEmitter<DateType>, date: Moment) {
    if (this.utc === true) {
      eventEmitter.emit(date.valueOf());
    } else if (this.initialDateType === 'moment') {
      eventEmitter.emit(date);
    } else if (this.initialDateType === 'utc') {
      eventEmitter.emit(date.valueOf());
    } else {
      eventEmitter.emit(date.toDate());
    }
  }

  updateModelBasedOnType(date: Moment, toDate?: Moment) {
    if (!!toDate) {
      if (this.utc === true || this.initialDateType === 'utc') {
        this.onChange({
          fromDate: date.valueOf(),
          toDate: toDate.valueOf()
        });
      } else {
        this.onChange({
          fromDate: this.initialDateType === 'moment' ? date : date.toDate(),
          toDate: this.initialDateType === 'moment' ? toDate : toDate.toDate()
        });
      }
    } else if (this.utc === true || this.initialDateType === 'utc') {
      this.onChange(date.valueOf());
    } else if (this.initialDateType === 'moment') {
      this.onChange(date);
    } else {
      this.onChange(date.toDate());
    }
  }

  focus() {
    this.dpInput.focus();
  }
}
