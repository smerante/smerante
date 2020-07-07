import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SMModalComponent, SMModalHeaderComponent, SMModalBodyComponent, SMModalFooterComponent } from './modal.component';

let comps = [
  SMModalComponent,
  SMModalHeaderComponent,
  SMModalBodyComponent,
  SMModalFooterComponent
];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: []
})
export class SMModalModule { }
