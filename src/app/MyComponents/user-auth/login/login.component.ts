import { Component, OnInit } from '@angular/core';

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


}
