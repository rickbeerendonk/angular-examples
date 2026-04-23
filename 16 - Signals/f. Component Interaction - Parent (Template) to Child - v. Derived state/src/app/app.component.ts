/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { PriceComponent } from './price/price.component';

@Component({
  selector: 'app',
  imports: [PriceComponent],
  template: `
    <price-tag [price]="100" />
    <price-tag [price]="200" [tax]="0.09" />
  `
})
export class AppComponent {}
