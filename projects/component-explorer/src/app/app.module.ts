import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SMComponentsModule } from 'components';
import { CtaDemoComponent } from './cta-demo/cta-demo.component';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { TabDemoComponent } from './tab-demo/tab-demo.component';
import { TextstyleDemoComponent } from './textstyle-demo/textstyle-demo.component';
import { CardsDemoComponent } from './cards-demo/cards-demo.component';
import { RadioDemoComponent } from './radio-demo/radio-demo.component';
import { CheckboxDemoComponent } from './checkbox-demo/checkbox-demo.component';
import { ToggleDemoComponent } from './toggle-demo/toggle-demo.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { ModalDemoComponent } from './modal-demo/modal-demo.component';
import { DatepickerDemoComponent } from './datepicker-demo/datepicker-demo.component';
import { DrawerDemoComponent } from './drawer-demo/drawer-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CtaDemoComponent,
    InputDemoComponent,
    TabDemoComponent,
    TextstyleDemoComponent,
    CardsDemoComponent,
    RadioDemoComponent,
    CheckboxDemoComponent,
    ToggleDemoComponent,
    TooltipDemoComponent,
    ModalDemoComponent,
    DatepickerDemoComponent,
    DrawerDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SMComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
