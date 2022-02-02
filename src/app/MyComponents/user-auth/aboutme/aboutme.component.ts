import { Component, OnInit } from '@angular/core';
import { UserDataServiceService } from 'src/app/services/user-data-service.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  users:any;
  constructor(private userData:UserDataServiceService) {
    console.log(userData.users());
    this.users = userData.users();
  }

  ngOnInit(): void {
  }

}
