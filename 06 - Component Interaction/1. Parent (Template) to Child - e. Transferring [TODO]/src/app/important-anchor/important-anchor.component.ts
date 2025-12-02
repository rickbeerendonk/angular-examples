/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { AfterViewInit, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'important-anchor',
  templateUrl: './important-anchor.component.html'
})
export class ImportantAnchorComponent
  extends HTMLAnchorElement
  implements AfterViewInit
{
  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    console.log(this);
    //throw new Error('Method not implemented.');
  }
}
