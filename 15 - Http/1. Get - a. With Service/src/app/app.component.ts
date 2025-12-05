/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { TodosService } from './todos.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  providers: [TodosService]
})
export class AppComponent {
  private todosService = inject(TodosService);

  // Convert Observable to Signal using toSignal()
  todos = toSignal(this.todosService.getTodos(), { initialValue: [] });
}
