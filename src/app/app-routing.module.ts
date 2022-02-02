import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { ChildComponent } from './MyComponents/user-auth/child/child.component';
import { LoginComponent } from './MyComponents/user-auth/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'todo', component: TodosComponent},
  {path: 'about', component: AboutComponent},
  {path: ':slug', component: ChildComponent},
  {path: '**', component: ChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
