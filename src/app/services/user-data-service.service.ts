import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  constructor() {}
  users(){
    return[
      {name: 'Abhay', email: 'abhaynam22@gmail.com'},
      {name: 'Ashu', email: 'ashunam22@gmail.com'}
    ]
  }
}
