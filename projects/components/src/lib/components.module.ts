import { NgModule } from '@angular/core';
import { SMButtonComponent } from './components/button/button.component';
import { SMInputComponent } from './components/input/input.component';
import { CommonModule } from '@angular/common';


const components =
  [
    SMButtonComponent,
    SMInputComponent
  ];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components]
})
export class SMComponentsModule { }
