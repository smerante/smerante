import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, Renderer2, Injectable, Inject } from '@angular/core';

let uniqueId = 0;
@Component({
  selector: 'sm-tooltip',
  templateUrl: './tooltip.component.html',
  host: {
    class: 'sm-tooltip'
  }
})
export class SMTooltipComponent implements OnInit {
  @Input('tooltipId') tooltipId: string = 'sm-tooltip-' + (++uniqueId);
  @Input('tooltipLabel') tooltipLabel: string = 'Label ' + uniqueId;
  @Input('tooltipAriaLabel') tooltipAriaLabel: string = this.tooltipLabel + '. Open tooltip';
  @ViewChild('tooltipContainer', { static: true }) tooltipContainer: ElementRef;

  contentOpen: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  closeTooltip() {
    this.contentOpen = false;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.updateContainerPos();
  }

  updateContainerPos() {
    let top = (<HTMLElement>document.getElementById(this.tooltipId)).getBoundingClientRect().top;
    let height = window.innerHeight;
    this.renderer.setStyle(this.tooltipContainer.nativeElement, 'bottom', (height - top) + 16 + 'px');

    let left = (<HTMLElement>document.getElementById(this.tooltipId)).getBoundingClientRect().left;
    let width = this.tooltipContainer.nativeElement.getBoundingClientRect().width;
    this.renderer.setStyle(this.tooltipContainer.nativeElement, 'left', left - (width / 2) + 'px');
  }

  toggleTooltip() {
    this.contentOpen = !this.contentOpen;
    if (!this.contentOpen) {
      (<HTMLElement>document.getElementById(this.tooltipId)).focus();
    } else {
      setTimeout(() => {
        this.updateContainerPos();
      });
    }
  }

  @HostListener('document:keydown.escape')
  onKeydownHandler() {
    this.closeTooltip();
  }
}
