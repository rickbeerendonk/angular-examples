/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Features {
  feature1: boolean = false;
}

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  private baseUrl: string = 'assets/features.json';

  constructor(private http: HttpClient) {}

  getFeatures(): Observable<Features> {
    return this.http.get(this.baseUrl) as Observable<Features>;
  }
}
