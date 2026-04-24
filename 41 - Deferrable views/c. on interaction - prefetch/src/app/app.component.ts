/*! Copyright © 2026 Rick Beerendonk !*/

import { Component } from '@angular/core';

import { CommentsComponent } from './comments.component';

@Component({
  selector: 'app-root',
  imports: [CommentsComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
