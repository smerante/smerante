import { Component, OnInit, Input, HostBinding, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'sm-modal',
  templateUrl: './modal.component.html',
  host: { '[class.sm-modal-wrapper]': 'true' },
})
export class SMModalComponent implements OnInit {

  @HostBinding('class.sm-modal-wrapper-open') opened = false;
  @Input() imgURL: string;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  open() {
    setTimeout(() => {
      this.opened = true;
      this.renderer.addClass(document.querySelector('body'), 'modal-open');
    });
  }

  close() {
    this.opened = false;
    this.renderer.removeClass(document.querySelector('body'), 'modal-open');
  }

  @HostListener('document:keydown.escape') 
  onKeydownHandler() {
    this.close();
  }
}

@Component({
  selector: 'sm-modal-header',
  template: '<ng-content></ng-content>',
  host: { '[class.sm-modal-header]': 'true' },
})
export class SMModalHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
@Component({
  selector: 'sm-modal-body',
  template: '<ng-content></ng-content>',
  host: { '[class.sm-modal-body]': 'true' },
})
export class SMModalBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
@Component({
  selector: 'sm-modal-footer',
  template: '<ng-content></ng-content>',
  host: { '[class.sm-modal-footer]': 'true' },
})
export class SMModalFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}




