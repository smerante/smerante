import { Component, OnInit } from '@angular/core';
import { DrawerPosition } from 'components';

@Component({
  selector: 'explorer-drawer-demo',
  templateUrl: './drawer-demo.component.html'
})
export class DrawerDemoComponent implements OnInit {

  code = ``;

  position: DrawerPosition = 'left';
  _open: boolean = false;
  get open() {
    return this._open;
  }
  set open(val: boolean) {
    this._open = val;
    this.code = `<sm-drawer open="${this.open}" position="${this.position}">
    your content goes here
  </sm-drawer>`;
  }

  constructor() { }

  ngOnInit(): void {
    this.code = `<sm-drawer open="${this.open}" position="${this.position}">
    your content goes here
  </sm-drawer>`;
  }

  openDrawer(val: DrawerPosition) {
    this.position = val;
    this.code = `<sm-drawer open="${!this.open}" position="${this.position}">
    your content goes here
  </sm-drawer>`;
    setTimeout(() => {
      this._open = !this._open;
    }, 0);
  }
}
