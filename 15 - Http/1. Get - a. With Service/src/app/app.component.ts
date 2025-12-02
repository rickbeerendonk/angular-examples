/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { AsyncPipe, NgForOf } from '@angular/common';
import { Observable } from 'rxjs';

import { Todo, TodosService } from './todos.service';

@Component({
  imports: [NgForOf, AsyncPipe],

  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  todos$: Observable<Todo[]>;

  constructor(todosService: TodosService) {
    this.todos$ = todosService.getTodos();
  }
}
