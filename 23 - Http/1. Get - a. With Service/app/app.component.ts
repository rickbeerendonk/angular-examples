/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Todo, TodosService } from './todos.service';

class Todo {
  constructor(
    public userId: number,
    public id: number,
    public title: string,
    public completed: boolean
  ) {}
}

@Component({
  moduleId: __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private todosService: TodosService) {}

  todos: Observable<Array<Todo>> = this.todosService.getTodos();
}
