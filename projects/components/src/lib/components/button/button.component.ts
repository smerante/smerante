import { Component, OnInit, Input, Renderer2, ElementRef, AfterViewInit, OnDestroy, Output, EventEmitter } from '@angular/core';

let uniqueId = 0;
@Component({
  selector: 'sm-button',
  templateUrl: './button.component.html'
})
export class SMButtonComponent implements OnInit {

  @Input() field_id = `sm-button-${uniqueId++}`;
  @Input() type: 'secondary' | 'tertiary';
  @Output()
  onClick = new EventEmitter<Event>();


  constructor(private renderer: Renderer2, private host: ElementRef) { }

  ngOnInit(): void {
    const buttonElement = (this.host.nativeElement as HTMLElement).querySelector('button');
    this.renderer.addClass(buttonElement, `sm-button--${this.type}`);
  }

}
