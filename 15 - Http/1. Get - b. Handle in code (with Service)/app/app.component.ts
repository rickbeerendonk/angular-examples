/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component, OnDestroy } from '@angular/core';

import { Todo, TodosService } from './todos.service';

@Component({
  moduleId:
    __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
  private subscriber: any;
  public todos: Array<Todo> = [];

  constructor(todosService: TodosService) {
    this.subscriber = todosService
      .getTodos()
      .subscribe((todos: Array<Todo>) => {
        this.todos = todos;
      });
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
