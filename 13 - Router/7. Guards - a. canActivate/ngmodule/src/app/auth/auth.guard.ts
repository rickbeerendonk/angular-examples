/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { inject } from '@angular/core';
import { Router } from '@angular/router';

export function authGuard() {
  const router = inject(Router);
  const hasRights = false; // hardcoded
  if (!hasRights) {
    router.navigate(['/no-rights']);
  }
  return hasRights;
}
