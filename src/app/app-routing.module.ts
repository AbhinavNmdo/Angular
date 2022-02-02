import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AboutmeComponent } from './MyComponents/user-auth/aboutme/aboutme.component';
import { AboutyouComponent } from './MyComponents/user-auth/aboutyou/aboutyou.component';
import { ChildComponent } from './MyComponents/user-auth/child/child.component';
import { LoginComponent } from './MyComponents/user-auth/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'todo', component: TodosComponent},
  {path: 'about', component: AboutComponent,children:[
    {path: 'me', component: AboutmeComponent},
    {path: 'you', component: AboutyouComponent}
  ]},
  {path: ':slug', component: ChildComponent},
  {path: '**', component: ChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
