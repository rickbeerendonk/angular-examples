/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

interface Row {
  id: number;
  name: string;
}

type RowGroup = FormGroup<{ name: FormControl<string> }>;

let buildCount = 0;

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  template: `
    <h1>Solution: build the form once, outside the template</h1>
    <p>
      Form controls are built <strong>once</strong> in <code>ngOnInit</code> and
      stored in a <code>FormArray</code>. The template only reads them — change
      detection no longer recreates any controls. Typing is smooth.
    </p>

    <button type="button" (click)="nudge = nudge + 1">Trigger CD</button>
    <span>nudges: {{ nudge }} · builds: {{ buildCount }}</span>

    <ul>
      @for (group of form.controls; track rows[$index].id) {
        <li [formGroup]="group">
          <span>#{{ rows[$index].id }}</span>
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
export class AppComponent implements OnInit {
  rows: Row[] = Array.from({ length: 5_000 }, (_, i) => ({
    id: i + 1,
    name: `Row ${i + 1}`
  }));

  form = new FormArray<RowGroup>([]);

  nudge = 0;

  get buildCount(): number {
    return buildCount;
  }

  ngOnInit(): void {
    // ✅ Build controls ONCE — never inside the template.
    for (const row of this.rows) {
      this.form.push(this.createGroup(row.name));
    }
  }

  private createGroup(name: string): RowGroup {
    buildCount++;
    return new FormGroup({
      name: new FormControl(name, { nonNullable: true })
    });
  }
}
