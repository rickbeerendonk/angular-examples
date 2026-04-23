/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, output } from '@angular/core';

@Component({
  selector: 'editor',
  template: `<button (click)="save()">Save</button>`
})
export class EditorComponent {
  // OutputEmitterRef<string> — no RxJS dependency
  saved = output<string>();

  save() {
    this.saved.emit('Draft saved');
  }
}
