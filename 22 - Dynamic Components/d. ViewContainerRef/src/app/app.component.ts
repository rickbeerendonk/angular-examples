/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, ViewContainerRef, viewChild } from '@angular/core';

import { ToastComponent } from './toast.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  container = viewChild.required('container', { read: ViewContainerRef });
  private nextId = 1;

  addToast() {
    const ref = this.container().createComponent(ToastComponent);
    const id = this.nextId++;
    ref.setInput('message', `Toast #${id}`);
    ref.instance.close.subscribe(() => ref.destroy());
  }

  clearAll() {
    this.container().clear();
  }
}
