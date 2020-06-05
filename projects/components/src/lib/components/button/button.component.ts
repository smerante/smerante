import { Component, OnInit, Input, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

let uniqueId = 0;
@Component({
  selector: 'sm-button',
  templateUrl: './button.component.html'
})
export class SMButtonComponent implements OnInit, AfterViewInit {

  @Input() id = `sm-${uniqueId++}`;
  @Input() type: 'secondary' | 'tertiary';

  constructor(private renderer: Renderer2, private host: ElementRef) { }

  ngOnInit(): void {
    const buttonElement = (this.host.nativeElement as HTMLElement).querySelector('button');
    this.renderer.addClass(buttonElement, `sm-button--${this.type}`);
  }

  ngAfterViewInit(): void {
    document.getElementById(this.id + '-button').addEventListener('click', ($event) => {
      document.getElementById(this.id + '-button').focus();
    });
  }
}
