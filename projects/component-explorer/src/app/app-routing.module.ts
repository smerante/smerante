import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CtaDemoComponent } from './cta-demo/cta-demo.component';
import { InputDemoComponent } from './input-demo/input-demo.component';
import { TabDemoComponent } from './tab-demo/tab-demo.component';
import { TextstyleDemoComponent } from './textstyle-demo/textstyle-demo.component';


const routes: Routes = [
  { path: 'cta', component: CtaDemoComponent },
  { path: 'input', component: InputDemoComponent },
  { path: 'tab', component: TabDemoComponent },
  { path: 'theme', component: TextstyleDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
