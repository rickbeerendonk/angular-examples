/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, inject } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl
} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private sanitizer = inject(DomSanitizer);

  dangerousUrl = 'javascript:alert("XSS")';
  trustedUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(
    this.dangerousUrl
  );

  dangerousVideoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
  trustedVideoUrl: SafeResourceUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
}
