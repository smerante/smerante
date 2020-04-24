import { NgModule } from '@angular/core';
import { SMButtonComponent } from './components/button/button.component';
import { SMMainComponent } from './components/main.component';


const components = 
[
  SMButtonComponent,
  SMMainComponent
];

@NgModule({
  declarations:[components],
  imports: [],
  exports: [components]
})
export class SMComponentsModule { }
