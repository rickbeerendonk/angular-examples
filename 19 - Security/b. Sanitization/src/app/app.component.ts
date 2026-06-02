/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html'
})
export class AppComponent {
  html = signal(
    '<b>Bold</b> <script>alert("XSS")</script> <img src="x" onerror="alert(\'XSS\')">'
  );
}
