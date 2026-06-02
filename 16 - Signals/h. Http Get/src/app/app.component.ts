/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { httpResource } from '@angular/common/http';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // httpResource: signal-native HTTP GET with built-in loading/error state
  todos = httpResource<Todo[]>(
    () => 'https://jsonplaceholder.typicode.com/todos'
  );
}
