import { Component } from '@angular/core';

import features from '../assets/features.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  feature1 = features.feature1;
}
