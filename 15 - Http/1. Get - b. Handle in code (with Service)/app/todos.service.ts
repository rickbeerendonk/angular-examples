/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class Todo {
  constructor(
    public userId: number,
    public id: number,
    public title: string,
    public completed: boolean
  ) {}
}

// Must be added (comment this code and run to see why):
@Injectable()
export class TodosService {
  private baseUrl: string = 'https://jsonplaceholder.typicode.com/todos'; // Free online service

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Array<Todo>> {
    return this.http.get(this.baseUrl) as Observable<Array<Todo>>;
  }
}
