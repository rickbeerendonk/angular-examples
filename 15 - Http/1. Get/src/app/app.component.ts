/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { AsyncPipe, NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  imports: [NgForOf, AsyncPipe],

  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private baseUrl = 'https://jsonplaceholder.typicode.com/todos'; // Free online service
  todos$: Observable<Todo[]>;

  constructor(http: HttpClient) {
    this.todos$ = http.get<Todo[]>(this.baseUrl);
  }
}
