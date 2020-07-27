import { Component, OnInit, ElementRef, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let uniqueId = 0;

@Component({
  selector: 'sm-input',
  templateUrl: './input.component.html',
  host: { class: 'sm-input--wrapper' },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SMInputComponent),
      multi: true
    }
  ]

})
export class SMInputComponent implements OnInit, ControlValueAccessor {

  @Input() field_id = `sm-${uniqueId++}`;
  @Input() label = `Enter Label`;
  @Input() input = '';
  @Input() focus: boolean;
  @Input() type = 'text';

  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() focusChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private host: ElementRef) { }

  ngOnInit(): void {
    this.focus = false;
  }

  onFocused() {
    this.focus = true;
    this.focusChanged.emit(this.focus);
    (this.host.nativeElement as HTMLElement).setAttribute('focus', '');
  }

  onBlured() {
    this.focus = false;
    this.focusChanged.emit(this.focus);
    (this.host.nativeElement as HTMLElement).removeAttribute('focus');
  }

  onInput($event: Event) {
    this.input = $event.target['value'];
    this.inputChange.emit(this.input);
  }

  writeValue(obj: any): void {

  }

  registerOnChange(fn: any): void { }
  registerOnTouched(fn: any): void { }
  setDisabledState(isDisabled: boolean): void { }
}
