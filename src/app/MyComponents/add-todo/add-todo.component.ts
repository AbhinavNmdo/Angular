import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
      sno: 2,
      title: this.todoTitle,
      desc: this.todoDesc,
      active: true
    }
    this.todoAdd.emit(todo);
  }

}
