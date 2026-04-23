/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, signal } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

interface RowForm {
  name: FormControl<string>;
  email: FormControl<string>;
}

@Component({
  selector: 'app-root',
  imports: [ScrollingModule, ReactiveFormsModule],
  template: `
    <h1>Many forms in a table</h1>
    <p>
      1 000 rows, each with a <code>FormGroup</code>. Without virtual scroll
      every row mounts the form on first render. Type in any field — only
      visible rows participate in change detection.
    </p>

    <cdk-virtual-scroll-viewport itemSize="40" class="viewport">
      @for (group of rows.controls; track $index) {
        <form [formGroup]="group" class="row">
          <input formControlName="name" placeholder="name" />
          <input formControlName="email" placeholder="email" />
        </form>
      }
    </cdk-virtual-scroll-viewport>

    <p>Dirty rows: {{ dirtyCount() }}</p>
  `,
  styles: [
    `
      .viewport {
        height: 400px;
        width: 600px;
        border: 1px solid #ccc;
      }
      .row {
        height: 40px;
        display: flex;
        gap: 8px;
        padding: 4px 8px;
        border-bottom: 1px solid #eee;
      }
      input {
        flex: 1;
      }
    `
  ]
})
export class AppComponent {
  rows = new FormArray<FormGroup<RowForm>>(
    Array.from(
      { length: 1_000 },
      (_, i) =>
        new FormGroup<RowForm>({
          name: new FormControl(`User ${i + 1}`, { nonNullable: true }),
          email: new FormControl(`user${i + 1}@example.com`, {
            nonNullable: true
          })
        })
    )
  );

  dirtyCount = signal(0);

  constructor() {
    this.rows.valueChanges.subscribe(() => {
      this.dirtyCount.set(this.rows.controls.filter(c => c.dirty).length);
    });
  }
}
