import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'This is Kru',
        desc: 'Description1',
        active: true,
      },
      {
        sno: 2,
        title: 'This is Rah',
        desc: 'Description2',
        active: true,
      },
    ];
  }

  ngOnInit(): void {}

  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1)
  }
}
