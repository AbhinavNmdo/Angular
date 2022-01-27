import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Todo from '../../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todoTitle:string;
  todoDesc:string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {
      sno: 4,
      title: this.todoTitle,
      desc: this.todoDesc,
      active: true
    }
    this.todoAdd.emit(todo);
  }

}
