import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SMComponentsModule } from 'components';
import { NavComponent } from './nav/nav.component';
import { CtaDemoComponent } from './cta-demo/cta-demo.component';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { TabDemoComponent } from './tab-demo/tab-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CtaDemoComponent,
    InputDemoComponent,
    TabDemoComponent
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
