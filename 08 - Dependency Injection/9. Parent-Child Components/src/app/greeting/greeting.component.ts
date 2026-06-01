/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, inject } from '@angular/core';

import { AppComponent } from '../app.component';

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
  protected readonly appComponent = inject(AppComponent);
}
