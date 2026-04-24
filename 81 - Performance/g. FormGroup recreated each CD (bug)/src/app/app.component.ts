/*! Copyright © 2026 Rick Beerendonk !*/

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface Row {
  id: number;
  name: string;
}

let buildCount = 0;

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  template: `
    <h1>Bug: FormGroup recreated on every change-detection cycle</h1>
    <p>
      <code>buildGroup(row)</code> is called from the template, so a new
      <code>FormGroup</code> is created for every row on every CD cycle. Try to
      type — characters disappear and the UI stalls. Watch the browser console
      for the build counter.
    </p>

    <button type="button" (click)="nudge = nudge + 1">Trigger CD</button>
    <span>nudges: {{ nudge }}</span>

    <ul>
      @for (row of rows; track row.id) {
        <!-- ❌ buildGroup() runs on every CD cycle -->
        <li [formGroup]="buildGroup(row)">
          <span>#{{ row.id }}</span>
          <input formControlName="name" />
        </li>
      }
    </ul>
  `,
  styles: [
    `
      ul {
        list-style: none;
        padding: 0;
      }
      li {
        display: flex;
        gap: 8px;
        padding: 4px 0;
      }
      input {
        flex: 1;
      }
    `
  ]
})
export class AppComponent {
  rows: Row[] = Array.from({ length: 1_000 }, (_, i) => ({
    id: i + 1,
    name: `Row ${i + 1}`
  }));

  nudge = 0;

  buildGroup(row: Row): FormGroup<{ name: FormControl<string> }> {
    buildCount++;
    if (buildCount % 1_000 === 0) {
      console.warn(`buildGroup has now been called ${buildCount} times`);
    }
    return new FormGroup({
      name: new FormControl(row.name, { nonNullable: true })
    });
  }
}
