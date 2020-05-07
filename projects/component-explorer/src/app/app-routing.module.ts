import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CtaDemoComponent } from './cta-demo/cta-demo.component';
import { InputDemoComponent } from './input-demo/input-demo.component';


const routes: Routes = [
  { path: 'cta', component: CtaDemoComponent },
  { path: 'input', component: InputDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
