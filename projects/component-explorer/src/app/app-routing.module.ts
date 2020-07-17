import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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



const routes: Routes = [
  { path: 'button', component: CtaDemoComponent },
  { path: 'card', component: CardsDemoComponent },
  { path: 'datepicker', component: DatepickerDemoComponent },
  { path: 'drawer', component: DrawerDemoComponent },
  { path: 'checkbox', component: CheckboxDemoComponent },
  { path: 'input', component: InputDemoComponent },
  { path: 'modal', component: ModalDemoComponent },
  { path: 'radio', component: RadioDemoComponent },
  { path: 'tab', component: TabDemoComponent },
  { path: 'toggle', component: ToggleDemoComponent },
  { path: 'tooltip', component: TooltipDemoComponent },
  { path: 'theme', component: TextstyleDemoComponent },
  { path: '', component: CtaDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
