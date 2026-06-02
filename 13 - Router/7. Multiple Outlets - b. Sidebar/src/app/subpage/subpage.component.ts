/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'subpage',
  templateUrl: './subpage.component.html'
})
export class SubpageComponent {
  private readonly route = inject(ActivatedRoute);

  // toSignal() handles subscription and cleanup automatically
  id = toSignal(this.route.paramMap.pipe(map(params => +params.get('id')!)));
}
