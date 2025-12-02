/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: './page.component.html'
})
export class PageComponent {
  constructor(protected route: ActivatedRoute) {}
}
