import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CtaDemoComponent } from './cta-demo/cta-demo.component';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { TabDemoComponent } from './tab-demo/tab-demo.component';
import { TextstyleDemoComponent } from './textstyle-demo/textstyle-demo.component';
import { CardsDemoComponent } from './cards-demo/cards-demo.component';
import { RadioDemoComponent } from './radio-demo/radio-demo.component';
import { CheckboxDemoComponent } from './checkbox-demo/checkbox-demo.component';


const routes: Routes = [
  { path: 'button', component: CtaDemoComponent },
  { path: 'card', component: CardsDemoComponent },
  { path: 'checkbox', component: CheckboxDemoComponent },
  { path: 'input', component: InputDemoComponent },
  { path: 'radio', component: RadioDemoComponent },
  { path: 'tab', component: TabDemoComponent },
  { path: 'theme', component: TextstyleDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
