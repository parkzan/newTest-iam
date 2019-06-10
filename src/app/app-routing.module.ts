import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './conponents/page-home/page-home.component';
import { PageSystemComponent } from './conponents/page-system/page-system.component';
const routes: Routes = [
  {path: 'system',component: PageSystemComponent},
  {path: 'home' ,component:PageHomeComponent},
  {path: '' ,component:PageHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
