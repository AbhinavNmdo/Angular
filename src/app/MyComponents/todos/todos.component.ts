import { Component, OnInit } from '@angular/core';
import Todo from '../../Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "this is title 1",
        desc: "this is desc 1",
        active: true
      },
      {
        sno: 2,
        title: "this is title 2",
        desc: "this is desc 2",
        active: false
      },
      {
        sno: 2,
        title: "this is title 2",
        desc: "this is desc 2",
        active: true
      },
    ]
  }

  ngOnInit(): void {
  }

}
