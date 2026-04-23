/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'price-tag',
  template: `
    <p>Price: {{ price() }}</p>
    <p>Tax: {{ tax() * 100 }}%</p>
    <p>Total: {{ total() }}</p>
  `
})
export class PriceComponent {
  price = input.required<number>();
  tax = input(0.21);
  total = computed(() => this.price() * (1 + this.tax()));
}
