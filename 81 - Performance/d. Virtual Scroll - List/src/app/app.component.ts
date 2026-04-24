/*! Copyright © 2026 Rick Beerendonk !*/

import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal
} from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  imports: [ScrollingModule],
  template: `
    <h1>Virtual scroll — {{ users().length }} rows</h1>
    <p>In DOM: {{ domRowCount() }} rows</p>

    <cdk-virtual-scroll-viewport itemSize="32" class="viewport">
      <div *cdkVirtualFor="let user of users(); trackBy: trackById" class="row">
        {{ user.id }} — {{ user.name }} &lt;{{ user.email }}&gt;
      </div>
    </cdk-virtual-scroll-viewport>
  `,
  styles: [
    `
      .viewport {
        height: 400px;
        width: 600px;
        border: 1px solid #ccc;
      }
      .row {
        height: 32px;
        line-height: 32px;
        padding: 0 8px;
        border-bottom: 1px solid #eee;
      }
    `
  ]
})
export class AppComponent {
  private host = inject(ElementRef<HTMLElement>);

  domRowCount = signal(0);

  users = signal<User[]>(
    Array.from({ length: 10_000 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`
    }))
  );

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const viewport = this.host.nativeElement.querySelector('.viewport');
      if (!viewport) return;

      const update = () => {
        this.domRowCount.set(viewport.querySelectorAll('.row').length);
      };

      const observer = new MutationObserver(update);
      observer.observe(viewport, { childList: true, subtree: true });
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  trackById(_index: number, user: User) {
    return user.id;
  }
}
