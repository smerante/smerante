import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CtaDemoComponent } from './cta-demo/cta-demo.component';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { TabDemoComponent } from './tab-demo/tab-demo.component';


const routes: Routes = [
  { path: 'cta', component: CtaDemoComponent },
  { path: 'input', component: InputDemoComponent },
  { path: 'tab', component: TabDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
