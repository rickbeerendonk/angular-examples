/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, computed, inject } from '@angular/core';

import { FeaturesService } from './features.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private featuresService = inject(FeaturesService);

  feature1 = computed(() => this.featuresService.features().feature1);
}
