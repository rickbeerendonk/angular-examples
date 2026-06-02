/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  private readonly http = inject(HttpClient);

  loadTodo(): Observable<unknown> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
