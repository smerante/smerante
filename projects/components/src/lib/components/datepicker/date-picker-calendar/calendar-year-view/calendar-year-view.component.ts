import {
  OnInit,
  Output,
  EventEmitter,
  QueryList,
  ViewChildren,
  ElementRef,
  HostBinding,
  Renderer2
} from '@angular/core';
import { Component, Input, HostListener } from '@angular/core';
import { Moment } from 'moment';
import * as moment_ from 'moment';
const moment = moment_;

export interface Year {
  date: Moment;
  year: number;
  today: boolean;
  tabIndex: number;
  dateID: string;
  disabled: boolean;
  disabledFocus: boolean;
  selectedDate: boolean;
}
@Component({
  selector: 'sm-calendar-year-view',
  templateUrl: './calendar-year-view.component.html'
})
export class CalendarYearViewComponent implements OnInit {
  @HostBinding('class.sm-date-picker-calendar-year-view')
  readonly defaultHostClass = true;
  private _date: Moment;

  @Input()
  get date(): Moment {
    return this._date;
  }
  set date(value: Moment) {
    this._date = !!value ? value : null;
    if (this._date && this._date.year() > 9999) this._date.set('year', 9999);
  }

  private _internalDate: Moment;
  @Input()
  get internalDate(): Moment {
    return this._internalDate;
  }
  set internalDate(date: Moment) {
    this._internalDate = date;
    this.startYear = -150;
    this.endYear = 100;
    if (this._internalDate && this._internalDate.year() > 9999)
      this._internalDate.set('year', 9999);
    this.updateYears(date);
  }

  @Input() yearViewID: string;
  @Input() min: number;
  @Input() max: number;

  private _yearView = false;

  @HostBinding('class.opened')
  @Input()
  get yearView(): boolean {
    return this._yearView;
  }
  set yearView(yearView: boolean) {
    this._yearView = yearView;
    if (this._yearView) {
      this.startYear = -150;
      this.endYear = 100;
      this.updateYears();
      this.focusOnSelectedDay();
    }
  }

  private scrollDirection = 0;
  private scrollOffset = 0;
  private startYear = -150;
  private endYear = 100;

  @Output() yearSelect: EventEmitter<Moment> = new EventEmitter<Moment>();
  @Output() internalDateChange: EventEmitter<Moment> = new EventEmitter<
    Moment
  >();

  @ViewChildren('yearButtons') yearButtons: QueryList<ElementRef>;

  years: Array<Year>;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.updateYears();
    this.focusOnSelectedDay();
  }

  updateYears(newDate?: Moment) {
    if (newDate) {
      this._internalDate = newDate;
    }

    if (!!this.internalDate) {
      this.years = [];
      for (let i = this.startYear; i < this.endYear; i++) {
        if (
          i + this.internalDate.year() >= 0 &&
          i + this.internalDate.year() <= 9999
        )
          this.addYear(i);
      }
    }
  }

  addYear(i: number, unshift?: boolean, fromYear?: number) {
    const currentYear = fromYear ? fromYear : this.internalDate.year();
    const newDate = fromYear
      ? moment().set('year', fromYear)
      : this.internalDate.clone();
    if (unshift) {
      this.years.unshift({
        date: newDate.clone().add(i, 'year'),
        year: currentYear + i,
        today: moment().year() === currentYear + i,
        tabIndex:
          newDate
            .clone()
            .add(i, 'year')
            .year() === newDate.year()
            ? 0
            : -1,
        dateID:
          newDate
            .clone()
            .add(i, 'year')
            .year() === newDate.year()
            ? this.yearViewID + '-sm-dp-selected-day'
            : this.yearViewID +
              '-' +
              newDate
                .clone()
                .add(i, 'year')
                .year(),
        selectedDate: this.date
          ? newDate
              .clone()
              .add(i, 'year')
              .year() === this.date.year()
          : false,
        disabled:
          (newDate
            .clone()
            .add(i, 'year')
            .valueOf() < this.min ||
            newDate
              .clone()
              .add(i, 'year')
              .valueOf() > this.max) &&
          newDate
            .clone()
            .add(i, 'year')
            .year() !== newDate.year(),
        disabledFocus:
          (newDate
            .clone()
            .add(i, 'year')
            .valueOf() < this.min ||
            newDate
              .clone()
              .add(i, 'year')
              .valueOf() > this.max) &&
          newDate
            .clone()
            .add(i, 'year')
            .year() === newDate.year()
      });
    } else {
      this.years.push({
        date: newDate.clone().add(i, 'year'),
        year: currentYear + i,
        today: moment().year() === currentYear + i,
        tabIndex:
          newDate
            .clone()
            .add(i, 'year')
            .year() === newDate.year()
            ? 0
            : -1,
        dateID:
          newDate
            .clone()
            .add(i, 'year')
            .year() === newDate.year()
            ? this.yearViewID + '-sm-dp-selected-day'
            : this.yearViewID +
              '-' +
              newDate
                .clone()
                .add(i, 'year')
                .year(),
        selectedDate: this.date
          ? newDate
              .clone()
              .add(i, 'year')
              .year() === this.date.year()
          : false,
        disabled:
          (newDate
            .clone()
            .add(i, 'year')
            .valueOf() < this.min ||
            newDate
              .clone()
              .add(i, 'year')
              .valueOf() > this.max) &&
          newDate
            .clone()
            .add(i, 'year')
            .year() !== newDate.year(),
        disabledFocus:
          (newDate
            .clone()
            .add(i, 'year')
            .valueOf() < this.min ||
            newDate
              .clone()
              .add(i, 'year')
              .valueOf() > this.max) &&
          newDate
            .clone()
            .add(i, 'year')
            .year() === newDate.year()
      });
    }
  }

  selectedYear(date: Moment) {
    this.yearSelect.emit(date);
  }

  selectNewYear(year: Moment) {
    this.internalDate = year;
    this.internalDateChange.emit(year);
    this.updateYears();
    this.focusOnSelectedDay();
  }

  focusOnSelectedDay() {
    setTimeout(() => {
      this.yearButtons.forEach(year => {
        if (
          (<HTMLElement>year.nativeElement).id ===
          `${this.yearViewID}-sm-dp-selected-day`
        ) {
          (<HTMLElement>year.nativeElement).focus();
        }
      });
    }, 0);
  }

  onKeyDown($event: KeyboardEvent, date: Moment) {
    let newDateID: Moment;
    switch ($event.key) {
      case 'ArrowRight':
      case 'Right':
        newDateID = date.clone().add(4, 'year');
        break;
      case 'ArrowLeft':
      case 'Left':
        newDateID = date.clone().subtract(4, 'year');
        break;
      case 'ArrowUp':
      case 'Up':
        newDateID = date.clone().subtract(1, 'year');
        break;
      case 'ArrowDown':
      case 'Down':
        newDateID = date.clone().add(1, 'year');
        break;
    }

    if (newDateID) {
      const dateBtnID = `${this.yearViewID}-${newDateID.year()}`;
      this.yearButtons.forEach(year => {
        if ((<HTMLElement>year.nativeElement).id === dateBtnID) {
          this.selectNewYear(newDateID);
        }
      });
    }
  }

  endYearsInView(filterMaxYears: boolean): boolean {
    let yearInView = false;
    const calendarElement = (<HTMLElement>(
      this.element.nativeElement
    )).getBoundingClientRect();
    this.yearButtons
      .filter((item, index) => {
        return filterMaxYears
          ? index >= this.yearButtons.length - 30
          : index < 30;
      })
      .forEach(elmt => {
        const buttomElement = (<HTMLElement>(
          elmt.nativeElement
        )).getBoundingClientRect();
        if (
          buttomElement.top >= calendarElement.top &&
          buttomElement.bottom <= calendarElement.bottom
        ) {
          yearInView = yearInView || true;
        }
      });

    return yearInView;
  }

  /* Scrolling functionality below: */
  minYearHit(number): boolean {
    return this.years[0].year + number < 0;
  }

  maxYearHit(number): boolean {
    return this.years[this.years.length - 1].year + number > 9999;
  }

  updateYearsOnScroll(direction: number, scrollMultiplier: number) {
    let boundsHit = direction < 0 ? !this.minYearHit(-1) : !this.maxYearHit(1);
    for (let i = 0; boundsHit && i < Math.round(scrollMultiplier); i++) {
      this.startYear += direction;
      this.endYear += direction;
      if (direction < 0) {
        this.addYear(-1, true, this.years[0].year);
        this.years.pop();
      } else {
        this.years.shift();
        this.addYear(1, false, this.years[this.years.length - 1].year);
      }
      boundsHit = direction < 0 ? !this.minYearHit(-1) : !this.maxYearHit(1);
    }
  }

  @HostListener('scroll', ['$event'])
  onScroll($event): void {
    const scrollDown = this.scrollDirection < $event.target.scrollTop;
    const yearViewHeight = 260; //year button x5

    this.scrollOffset =
      this.scrollOffset === 0 ? $event.target.scrollTop : this.scrollOffset;

    this.scrollDirection = $event.target.scrollTop;

    if (scrollDown) {
      if (!this.endYearsInView(false)) {
        if (this.scrollDirection - this.scrollOffset > yearViewHeight) {
          const scrollMultiplier =
            (this.scrollDirection - this.scrollOffset) / 40;
          this.scrollOffset = 0;
          this.updateYearsOnScroll(1, scrollMultiplier);
        }
      } else {
        this.scrollOffset = 0;
      }
    } else {
      if (!this.endYearsInView(true)) {
        if (this.scrollOffset - this.scrollDirection > yearViewHeight) {
          const scrollMultiplier =
            (this.scrollOffset - this.scrollDirection) / 40;
          this.scrollOffset = 0;
          this.updateYearsOnScroll(-1, scrollMultiplier);
        }
      } else {
        this.scrollOffset = 0;
      }
    }
  }
}
