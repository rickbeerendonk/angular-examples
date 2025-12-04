/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nomatch',
  templateUrl: './nomatch.component.html'
})
export class NoMatchComponent {
  // Inject Router to access current URL information
  private router = inject(Router);

  // Get the attempted URL
  attemptedUrl = this.router.url;
}
