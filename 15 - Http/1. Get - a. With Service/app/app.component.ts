/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo, TodosService } from './todos.service';

@Component({
  moduleId:
    __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  todos: Observable<Todo[]>;

  constructor(todosService: TodosService) {
    this.todos = todosService.getTodos();
  }
}
