import { Injectable, Inject } from '@angular/core';
import { API_ENDPOINT } from './api.token';

@Injectable()
export class DataService {
  constructor(@Inject(API_ENDPOINT) private apiEndpoint: string) {}

  fetchData(): void {
    console.log(`Fetching data from ${this.apiEndpoint}`);
    // Logic to fetch data
  }
}
