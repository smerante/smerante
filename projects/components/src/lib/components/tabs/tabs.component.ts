import { Component, AfterViewInit, ContentChildren, QueryList, Input, HostListener } from '@angular/core';
import { SMTabComponent } from './tab/tab.component';
import { SMTabContentComponent } from './tab-content/tab-content.component';

@Component({
  selector: 'sm-tabs',
  templateUrl: './tabs.component.html'
})
export class SMTabsComponent implements AfterViewInit {

  @Input() initialTab: number = 0;

  currentActiveTab = 0;

  @ContentChildren(SMTabComponent) tabs: QueryList<SMTabComponent>;
  @ContentChildren(SMTabContentComponent) tabContents: QueryList<SMTabContentComponent>;

  constructor() { }

  ngAfterViewInit(): void {
    this.currentActiveTab = this.initialTab;
    this.tabs.forEach((tab: SMTabComponent, tabIndex: number) => {
      if (this.initialTab === tabIndex) {
        setTimeout(() => {
          tab.tabClicked();
        })
      }

      tab.clickEvent.subscribe(() => {
        this.tabClicked(tabIndex);
      })
    });
  }

  tabClicked(tabIndex: number, triggerClick?: boolean) {
    this.currentActiveTab = tabIndex;
    this.tabs.forEach((tab: SMTabComponent, tIndex: number) => {
      if (tabIndex !== tIndex) {
        tab.resetTab();
      }
      else if (triggerClick) {
        tab.setActive(true);
      }
    });
    this.tabContents.forEach((tabContent: SMTabContentComponent, tIndex: number) => {
      tabContent.setActive(tIndex === tabIndex);
    });
  }



  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    let componentFocused = false;
    this.tabs.forEach((tab: SMTabComponent) => {
      componentFocused = componentFocused || tab.isFocused();
    });
    if (componentFocused) {
      switch (event.key) {
        case 'ArrowRight':
          this.tabClicked((this.currentActiveTab + 1) % this.tabs.length, true);
          break;
        case 'ArrowLeft':
          this.tabClicked(this.currentActiveTab > 0 ? (this.currentActiveTab - 1) % this.tabs.length : this.tabs.length - 1, true);
          break;
        default:
          break;
      }
    }
  }

}
