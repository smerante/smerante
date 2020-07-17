import { Component, OnInit, Input, EventEmitter, Output, HostListener } from '@angular/core';

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom' | false;

let uniqueID = 0;

@Component({
  selector: 'sm-drawer',
  templateUrl: './drawer.component.html'
})
export class SMDrawerComponent implements OnInit {

  triggerElement: Element;

  @Input() drawerID = `sm-drawer-${uniqueID++}`;
  @Input() position: DrawerPosition;
  @Input() noOverlay: boolean = false;

  _open: boolean;
  @Input()
  get open() {
    return this._open;
  }
  set open(val: boolean) {
    if (val) {
      this.triggerElement = document.activeElement;
      setTimeout(() => {
        console.warn(document.getElementById(this.drawerID));
        document.getElementById(this.drawerID).focus();
        console.warn(document.activeElement);
      });
    } else if (this.triggerElement) {
      (this.triggerElement as HTMLElement).focus();
    }

    this._open = val;
  }

  @Output() openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeDrawer() {
    this.open = false;
    this.openChange.emit(this.open);
  }

  @HostListener('document:touchend', ['$event.target'])
  @HostListener('document:click', ['$event.target'])
  handleClickEvent(targetElement) {
    if (!this.noOverlay && !document.getElementById(this.drawerID).contains(targetElement)) {
      this.closeDrawer();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeDrawer();
  }

}
