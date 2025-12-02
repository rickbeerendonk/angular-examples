import { Injectable, inject } from '@angular/core';
import { API_ENDPOINT } from './api.token';

@Injectable()
export class DataService {
  private apiEndpoint = inject(API_ENDPOINT);

  fetchData(): void {
    console.log(`Fetching data from ${this.apiEndpoint}`);
    // Logic to fetch data
  }
}
