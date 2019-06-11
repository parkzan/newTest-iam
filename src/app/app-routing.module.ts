import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageSystemComponent } from './components/page-system/page-system.component';
import {PageRoleComponent} from './components/page-role/page-role.component';
import {PageObjectComponent} from './components/page-object/page-object.component';
const routes: Routes = [
  {path: 'system',component: PageSystemComponent},
  {path: 'home' ,component:PageHomeComponent},
  {path: 'role',component:PageRoleComponent},
  {path: 'object',component:PageObjectComponent},
  {path: '' ,component:PageHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
