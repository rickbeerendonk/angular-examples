/*! Copyright © 2026 Rick Beerendonk !*/

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  private cdRef = inject(ChangeDetectorRef);

  form = new FormGroup({
    name: new FormControl('')
  });

  setAlice() {
    // Runs outside Angular's event tracking (setTimeout) → CD is NOT scheduled
    // automatically. markForCheck() forces the view to update.
    setTimeout(() => {
      this.form.patchValue({ name: 'Alice' });
      this.cdRef.markForCheck(); // ✓ triggers CD
    }, 500);
  }

  setBob() {
    // Also runs outside Angular's event tracking, but without markForCheck().
    // Reactive Forms do NOT notify the zoneless scheduler, so the view will
    // stay out of sync until something else triggers CD.
    setTimeout(() => {
      this.form.patchValue({ name: 'Bob' }); // ✗ no CD notification
    }, 500);
  }
}
