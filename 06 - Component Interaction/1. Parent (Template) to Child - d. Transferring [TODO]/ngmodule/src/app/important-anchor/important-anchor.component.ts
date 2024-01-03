/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { AfterViewInit, Component } from '@angular/core';

@Component({
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
