/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { CommonModule, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  imports: [CommonModule, SlicePipe],
  templateUrl: './greeting.component.html'
})
export class GreetingComponent {}
