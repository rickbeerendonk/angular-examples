/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'page1',
  templateUrl: './page1.component.html'
})
export class Page1Component {
  private router = inject(Router);

  // Example: programmatic navigation to named outlet
  showDetails(id: number) {
    this.router.navigate([{ outlets: { sidebar: ['detail', id] } }]);
  }
}
