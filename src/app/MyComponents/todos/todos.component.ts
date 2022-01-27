import { Component, OnInit } from '@angular/core';
import Todo from '../../Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  localItems:string|null;
  todos:Todo[];
  constructor() {
    this.localItems = localStorage.getItem("todos");
    if(this.localItems == null){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItems);
    }
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    console.log(todo)
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  editTodo(todo: Todo){
    console.log(todo);
  }
  addTodo(todo: Todo){
    const length = this.todos.length;
    todo.sno = length + 1;
    console.log(todo)
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  checkTodo(todo: Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log("todo Checked")
  }

}
