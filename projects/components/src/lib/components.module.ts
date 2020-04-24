import { NgModule } from '@angular/core';
import { SMButtonComponent } from './components/button/button.component';


const components = 
[
  SMButtonComponent
];

@NgModule({
  declarations:[components],
  imports: [],
  exports: [components]
})
export class SMComponentsModule { }
