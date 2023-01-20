/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'greeting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './greeting.component.html'
})
export class GreetingComponent {}
