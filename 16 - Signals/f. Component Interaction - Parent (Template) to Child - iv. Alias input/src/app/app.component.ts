/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { CardComponent } from './card/card.component';

@Component({
  selector: 'app',
  imports: [CardComponent],
  template: `
    <card cardLabel="Buy Ticket" />
    <card [cardLabel]="'Order Now'" />
    <card />
  `
})
export class AppComponent {}
