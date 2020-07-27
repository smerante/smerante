import { Component, OnInit, Input, Renderer2, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

let uniqueId = 0;
@Component({
  selector: 'sm-button',
  templateUrl: './button.component.html'
})
export class SMButtonComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() field_id = `sm-button-${uniqueId++}`;
  @Input() type: 'secondary' | 'tertiary';

  clickListener;

  constructor(private renderer: Renderer2, private host: ElementRef) { }

  ngOnInit(): void {
    this.clickListener = this.onClick.bind(this);
    const buttonElement = (this.host.nativeElement as HTMLElement).querySelector('button');
    this.renderer.addClass(buttonElement, `sm-button--${this.type}`);
  }

  ngAfterViewInit(): void {
    document.getElementById(this.field_id).addEventListener('click', this.clickListener);
  }

  onClick() {
    document.getElementById(this.field_id).focus();
  }

  ngOnDestroy(): void {
    if (document.getElementById(this.field_id))
      document.getElementById(this.field_id).removeEventListener('click', this.clickListener);
  }
}
