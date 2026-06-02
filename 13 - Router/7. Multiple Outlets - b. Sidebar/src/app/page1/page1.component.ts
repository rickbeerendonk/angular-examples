/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'page1',
  templateUrl: './page1.component.html'
})
export class Page1Component {
  private router = inject(Router);

  // router.navigate (without relativeTo) navigates from root,
  // generating /page1(sidebar:detail/id) — correct for root-level outlets.
  showDetails(id: number) {
    this.router.navigate([{ outlets: { sidebar: ['detail', id] } }]);
  }

  closeSidebar() {
    this.router.navigate([{ outlets: { sidebar: null } }]);
  }
}
