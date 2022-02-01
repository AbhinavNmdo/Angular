import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // events
  getPress(){
    console.warn("button clicked");
  }

  getData(value:string){
    console.warn(value);
  }

  // ifelse first condition
  show:null|boolean=false;

  // ifelse second condition
  color:string = "blue";

  // SwitchCase
  switchColor:string="asdf";

  // For loop
  users:string[] = ["abhay", "ashu", "papaji", "mummyji"];
  employees = [
    {name: "abhay", number: 123412341234, socialmedia:['insta', 'whatsapp', 'github']},
    {name: "papaji", number: 123412341234, socialmedia:['youtube', 'facebook', 'zee']},
    {name: "ashu", number: 123412341234, socialmedia:['snap', 'tinder', 'signal']},
    {name: "abhay", number: 123412341234, socialmedia:['insta', 'whatsapp', 'facebook']},
  ]

  // Style Binding
  styleColor = 'red';
  styleBgColor = 'blue';

  // Login Form
  loginData:{username: string, email: string, number: number} = {username: '', email: '', number:0}
  login(data:{username: string, email: string, number: number}){
    this.loginData = data;
    console.log(data);
  }

  // Event Emitter
  updateData(data:any){
    console.log(data);
  }

  // Two Way Binding
  name:any;

}
