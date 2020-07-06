import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SMComponentsModule } from 'components';
import { NavComponent } from './nav/nav.component';
import { CtaDemoComponent } from './cta-demo/cta-demo.component';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { TabDemoComponent } from './tab-demo/tab-demo.component';
import { TextstyleDemoComponent } from './textstyle-demo/textstyle-demo.component';
import { CardsDemoComponent } from './cards-demo/cards-demo.component';
import { RadioDemoComponent } from './radio-demo/radio-demo.component';
import { CheckboxDemoComponent } from './checkbox-demo/checkbox-demo.component';
import { ToggleDemoComponent } from './toggle-demo/toggle-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CtaDemoComponent,
    InputDemoComponent,
    TabDemoComponent,
    TextstyleDemoComponent,
    CardsDemoComponent,
    RadioDemoComponent,
    CheckboxDemoComponent,
    ToggleDemoComponent
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
