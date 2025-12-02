/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, Signal } from '@angular/core';
import { NgForOf } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  imports: [NgForOf],

  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private baseUrl = 'https://jsonplaceholder.typicode.com/todos'; // Free online service
  todos: Signal<Todo[] | undefined>;

  constructor(http: HttpClient) {
    this.todos = toSignal(http.get<Todo[]>(this.baseUrl));
  }
}
