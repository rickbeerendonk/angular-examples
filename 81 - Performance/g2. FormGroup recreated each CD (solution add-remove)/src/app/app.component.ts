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
    <h1>Solution: build the form once + add/remove rows</h1>
    <p>
      Form controls are built <strong>once</strong> in <code>ngOnInit</code> and
      stored in a <code>FormArray</code>. Adding or removing a row only mutates
      the array — existing controls are never recreated, so typing stays smooth
      even with thousands of rows.
    </p>

    <div class="toolbar">
      <button type="button" (click)="addRow('top')">Add row (top)</button>
      <button type="button" (click)="addRow('bottom')">Add row (bottom)</button>
      <button type="button" (click)="nudge = nudge + 1">Trigger CD</button>
      <span
        >rows: {{ rows.length }} · nudges: {{ nudge }} · builds:
        {{ buildCount }}</span
      >
    </div>

    <ul>
      @for (group of form.controls; track rows[$index].id) {
        <li [formGroup]="group">
          <span>#{{ rows[$index].id }}</span>
          <input formControlName="name" />
          <button type="button" (click)="removeRow($index)">Remove</button>
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
        align-items: center;
      }
      input {
        flex: 1;
      }
      .toolbar {
        display: flex;
        gap: 8px;
        align-items: center;
        margin-bottom: 12px;
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

  private nextId = this.rows.length + 1;

  get buildCount(): number {
    return buildCount;
  }

  ngOnInit(): void {
    // ✅ Build controls ONCE — never inside the template.
    for (const row of this.rows) {
      this.form.push(this.createGroup(row.name));
    }
  }

  addRow(position: 'top' | 'bottom'): void {
    const id = this.nextId++;
    const row: Row = { id, name: `Row ${id}` };
    const group = this.createGroup(row.name);

    if (position === 'top') {
      this.rows.unshift(row);
      this.form.insert(0, group);
    } else {
      this.rows.push(row);
      this.form.push(group);
    }
  }

  removeRow(index: number): void {
    this.rows.splice(index, 1);
    this.form.removeAt(index);
  }

  private createGroup(name: string): RowGroup {
    buildCount++;
    return new FormGroup({
      name: new FormControl(name, { nonNullable: true })
    });
  }
}
