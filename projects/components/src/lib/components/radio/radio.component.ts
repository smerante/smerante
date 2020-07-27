import { Component, OnInit, Input, ViewEncapsulation, ContentChildren, QueryList, AfterContentInit, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'sm-radio-btn',
  templateUrl: './radio.component.html',
  host: {
    '[class.sm-radio-btn]': 'true'
  },
})
export class SMRadioButton implements OnInit {

  @Input() label: string;
  @Input() field_id: string;

  @HostBinding('class.sm-radio-btn-disabled') @Input() disabled = false;

  checked: boolean;
  groupLabel: string;

  constructor(private parent: SMRadioGroupComponent) { }

  ngOnInit() {
  }

  @HostListener('click')
  click() {
    if (!this.disabled) {
      this.parent.check(this.field_id);
      this.checked = true;
    }
  }
}

@Component({
  selector: 'sm-radio-group',
  template: `
    <span class="sm-group-label">{{groupLabel}}</span>
    <ng-content></ng-content>
  `,
  host: {
    '[class.sm-radio-group]': 'true'
  },
})
export class SMRadioGroupComponent implements AfterContentInit {

  @Input() groupLabel;
  @ContentChildren(SMRadioButton) comps: QueryList<SMRadioButton>;

  constructor() { }

  ngAfterContentInit() {
    this.comps.forEach(
      (comp: SMRadioButton) => {
        comp.groupLabel = this.groupLabel;
      });
  }

  check(id: string) {
    this.comps.forEach(
      (comp: SMRadioButton) => {
        comp.checked = false;
        if (comp.field_id === id) {
          comp.checked = true;
        }
      });
  }

}
