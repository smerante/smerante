import { NgModule } from '@angular/core';
import { SMButtonComponent } from './components/button/button.component';
import { SMInputComponent } from './components/input/input.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


const components =
  [
    SMButtonComponent,
    SMInputComponent
  ];

@NgModule({
  declarations: [components],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [components]
})
export class SMComponentsModule { }
