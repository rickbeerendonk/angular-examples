/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { Component } from '@angular/core';

@Component({
  selector: 'important-anchor',
  templateUrl: './important-anchor.component.html',
  inputs: ['href', 'rel', 'target', 'title']
})
export class ImportantAnchorComponent {
  href = '';
  rel = '';
  target = '';
  title = '';
}
