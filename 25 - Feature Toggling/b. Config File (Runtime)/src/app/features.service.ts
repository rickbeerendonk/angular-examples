/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

export interface Features {
  feature1: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  private http = inject(HttpClient);
  private baseUrl = 'features.json';

  features = toSignal(this.http.get<Features>(this.baseUrl), {
    initialValue: { feature1: false }
  });
}
