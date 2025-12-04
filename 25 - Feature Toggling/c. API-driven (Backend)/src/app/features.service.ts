/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

export interface Features {
  feature1: boolean;
  userId?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  private http = inject(HttpClient);

  // In production, this would be your API endpoint
  // For demo purposes, we're using a mock API endpoint
  private apiUrl = 'http://localhost:3000/api/features';

  // In a real app, you'd get userId from an auth service
  private userId = 'user-123';

  features = toSignal(
    this.http.get<Features>(`${this.apiUrl}?userId=${this.userId}`),
    {
      initialValue: { feature1: false }
    }
  );
}
