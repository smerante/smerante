import { Component, OnInit, Directive, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sm-toggle',
  templateUrl: './toggle.component.html',
  host: { '[class.sm-toggle-wrapper]': 'true' },
})
export class SMToggleComponentWrapper implements OnInit {

  @Input() field_id: string;
  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }

}

@Directive({
  selector: '[sm-toggle]',
})
export class SMToggleComponent implements OnInit {

  @HostBinding('class.sm-toggle--field') @Input() default = true;

  constructor() { }

  ngOnInit() {
  }

}