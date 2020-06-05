import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sm-tab-content',
  templateUrl: './tab-content.component.html'
})
export class SMTabContentComponent implements OnInit {

  active: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  setActive(val: boolean) {
    this.active = val;
  }

}
