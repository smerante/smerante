import { NgModule } from '@angular/core';
import { SMButtonComponent } from './components/button/button.component';
import { SMInputComponent } from './components/input/input.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SMTabComponent } from './components/tabs/tab/tab.component';
import { SMTabsComponent } from './components/tabs/tabs.component';
import { SMTabContentComponent } from './components/tabs/tab-content/tab-content.component';
import { SMCardsComponent, SMCardsHeaderComponent, SMCardsBodyComponent, SMCardsFooterComponent } from './components/card/card.component';
import { SMRadioButton, SMRadioGroupComponent } from './components/radio/radio.component';
import { SMCheckboxComponent, SMCheckboxComponentWrapper } from './components/checkbox/checkbox.component';
import { SMToggleComponent, SMToggleComponentWrapper } from './components/toggle/toggle.component';
import { SMTooltipComponent } from './components/tooltip/tooltip.component';
import { SMModalModule } from './components/modal/modal.module';
import { SMDatePickerModule } from './components/datepicker/date-picker.module';
import { SMDrawerComponent } from './components/drawer/drawer.component';
import { SMSideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';

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
    SMCardsFooterComponent,
    SMRadioButton,
    SMRadioGroupComponent,
    SMCheckboxComponent,
    SMCheckboxComponentWrapper,
    SMToggleComponent,
    SMToggleComponentWrapper,
    SMTooltipComponent,
    SMDrawerComponent,
    SMSideNavComponent,
  ];

@NgModule({
  declarations: [components],
  imports: [RouterModule, CommonModule, ReactiveFormsModule, FormsModule, SMModalModule, SMDatePickerModule],
  exports: [components, SMModalModule, SMDatePickerModule]
})
export class SMComponentsModule { }
