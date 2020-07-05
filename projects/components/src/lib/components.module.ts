import { NgModule } from '@angular/core';
import { SMButtonComponent } from './components/button/button.component';
import { SMInputComponent } from './components/input/input.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SMTabComponent } from './components/tabs/tab/tab.component';
import { SMTabsComponent } from './components/tabs/tabs.component';
import { SMTabContentComponent } from './components/tabs/tab-content/tab-content.component';
import { SMCardsComponent, SMCardsHeaderComponent, SMCardsBodyComponent, SMCardsFooterComponent } from './components/card/card.component';


const components =
  [
    SMButtonComponent,
    SMInputComponent,
    SMTabComponent,
    SMTabsComponent,
    SMTabContentComponent,
    SMCardsComponent,
    SMCardsHeaderComponent,
    SMCardsBodyComponent,
    SMCardsFooterComponent
  ];

@NgModule({
  declarations: [components],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [components]
})
export class SMComponentsModule { }