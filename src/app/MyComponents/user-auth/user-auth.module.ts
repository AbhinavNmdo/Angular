import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { MultiplierPipe } from 'src/app/pipes/multiplier.pipe';
import { RedEleDirective } from 'src/app/directives/red-ele.directive';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AboutyouComponent } from './aboutyou/aboutyou.component';



@NgModule({
  declarations: [
    LoginComponent,
    ChildComponent,
    MultiplierPipe,
    RedEleDirective,
    AboutmeComponent,
    AboutyouComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[
    LoginComponent
  ]
})
export class UserAuthModule { }
