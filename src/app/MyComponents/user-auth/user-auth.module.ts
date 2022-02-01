import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    LoginComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    LoginComponent
  ]
})
export class UserAuthModule { }
