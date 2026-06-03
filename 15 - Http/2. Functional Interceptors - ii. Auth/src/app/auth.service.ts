/*! Copyright © 2026 Rick Beerendonk !*/

import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token = signal<string | null>('demo-token-abc123');

  getToken(): string | null {
    return this.token();
  }

  setToken(t: string | null) {
    this.token.set(t);
  }
}
