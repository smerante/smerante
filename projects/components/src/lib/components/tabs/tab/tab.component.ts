import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'sm-tab',
  templateUrl: './tab.component.html'
})
export class SMTabComponent implements OnInit {

  active: boolean;
  @ViewChild('tabButton') tabButton: ElementRef<any>;
  @Output('clickEvent') clickEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  tabClicked() {
    this.active = true;
    this.clickEvent.emit();
  }

  setActive(val: boolean) {
    this.active = val;
    if (val)
      this.tabButton.nativeElement.focus();
  }

  resetTab() {
    this.active = false;
    this.tabButton.nativeElement.blur();
  }

  isFocused(): boolean {
    return this.tabButton.nativeElement === document.activeElement;
  }
}
