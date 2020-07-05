import { Component, OnInit, Input, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'sm-card',
  templateUrl: './card.component.html',
  host: { '[class.sm-card]': 'true'},
})
export class SMCardsComponent implements OnInit {

  @Input('imgSrc') imgSrc: string;
  @Input('placement') placement: string;
  
  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'card-header',
  template: '<ng-content></ng-content>',
  host: { '[class.sm-card--header]': 'true' },
})
export class SMCardsHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'card-body',
  template: '<ng-content></ng-content>',
  host: { '[class.sm-card--body]': 'true' },
})
export class SMCardsBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


@Component({
  selector: 'card-footer',
  template: '<ng-content></ng-content>',
  host: { '[class.sm-card--footer]': 'true' },
})
export class SMCardsFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


