/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

class Todo {
  constructor(
    public userId: number,
    public id: number,
    public title: string,
    public completed: boolean
  ) {}
}

@Component({
  moduleId:
    __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private baseUrl: string = 'https://jsonplaceholder.typicode.com/todos'; // Free online service

  todos: Observable<Array<Todo>> = this.http.get(this.baseUrl) as Observable<
    Todo[]
  >;

  constructor(private http: HttpClient) {}
}
