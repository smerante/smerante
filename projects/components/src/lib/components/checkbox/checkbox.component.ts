import { Component, OnInit, HostBinding, Input, Directive, ViewEncapsulation, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'sm-checkbox',
  templateUrl: './checkbox.component.html',
  host: { '[class.sm-checkbox-wrapper]': 'true' },
})
export class SMCheckboxComponentWrapper implements OnInit {

  @Input() field_id: string;
  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }

}
@Directive({
  selector: '[sm-checkbox]',
})
export class SMCheckboxComponent implements OnInit {

  @HostBinding('class.sm-checkbox--field') @Input() default = true;

  constructor() { }

  ngOnInit() {
  }

}
