/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

export function authGuard() {
  const router = inject(Router);
  const authService = inject(AuthService);

  const isAuthenticated = authService.isLoggedIn();

  if (!isAuthenticated) {
    router.navigate(['/no-rights']);
  }

  return isAuthenticated;
}
