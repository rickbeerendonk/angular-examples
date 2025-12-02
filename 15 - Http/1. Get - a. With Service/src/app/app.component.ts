/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { Todo, TodosService } from './todos.service';

@Component({
  imports: [AsyncPipe],

  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  todos$: Observable<Todo[]>;

  constructor(todosService: TodosService) {
    this.todos$ = todosService.getTodos();
  }
}
