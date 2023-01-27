/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './page.component.html'
})
export class PageComponent {
  constructor(protected route: ActivatedRoute) {}
}
