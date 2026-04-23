/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: number;
  title: string;
  price: number;
}

@Component({
  selector: 'app',
  template: `
    <h1>Product #{{ productId() }}</h1>
    <button (click)="prev()">Prev</button>
    <button (click)="next()">Next</button>

    @if (productResource.isLoading()) {
      <p>Loading...</p>
    }
    @if (productResource.error()) {
      <p>Error: {{ productResource.error() }}</p>
    }
    @if (productResource.hasValue()) {
      <h2>{{ productResource.value()!.title }}</h2>
      <p>Price: {{ productResource.value()!.price }}</p>
    }
  `
})
export class AppComponent {
  private http = inject(HttpClient);

  productId = signal(1);

  productResource = rxResource<Product, { id: number }>({
    params: () => ({ id: this.productId() }),
    // Loader returns an Observable instead of a Promise
    stream: ({ params }) =>
      this.http.get<Product>(`https://fakestoreapi.com/products/${params.id}`)
  });

  prev() {
    this.productId.update(id => Math.max(1, id - 1));
  }

  next() {
    this.productId.update(id => id + 1);
  }
}
