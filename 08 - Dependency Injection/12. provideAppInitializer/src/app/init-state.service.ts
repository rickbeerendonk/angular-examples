/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class InitStateService {
  private readonly entries = signal<string[]>([]);
  readonly logs = this.entries.asReadonly();

  add(entry: string) {
    this.entries.update(current => [...current, entry]);
  }
}
