/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { Component } from '@angular/core';

import { Features, FeaturesService } from './features.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private subscriber: any;
  public feature1 = false;

  constructor(featuresService: FeaturesService) {
    this.subscriber = featuresService
      .getFeatures()
      .subscribe((features: Features) => {
        this.feature1 = features.feature1;
      });
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
