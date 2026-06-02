/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './page.component.html'
})
export class PageComponent {
  protected readonly route = inject(ActivatedRoute);
}
