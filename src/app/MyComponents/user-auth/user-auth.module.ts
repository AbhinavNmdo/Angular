import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { MultiplierPipe } from 'src/app/pipes/multiplier.pipe';
import { RedEleDirective } from 'src/app/directives/red-ele.directive';



@NgModule({
  declarations: [
    LoginComponent,
    ChildComponent,
    MultiplierPipe,
    RedEleDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent
  ]
})
export class UserAuthModule { }
