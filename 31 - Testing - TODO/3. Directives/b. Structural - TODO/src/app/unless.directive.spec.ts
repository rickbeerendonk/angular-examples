/*! Copyright © 2026 Rick Beerendonk !*/

import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { UnlessDirective } from './unless.directive';

@Component({
  imports: [UnlessDirective],
  template: `<p *unless="condition()">Content</p>`
})
class TestComponent {
  condition = signal(false);
}

describe('UnlessDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent]
    });
  });

  it('should render the content when the condition is false', async () => {
    const fixture = TestBed.createComponent(TestComponent);
    await fixture.whenStable();

    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('p')?.textContent).toBe('Content');
  });

  it('should not render the content when the condition is true', async () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.componentInstance.condition.set(true);
    await fixture.whenStable();

    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('p')).toBeNull();
  });

  it('should toggle the content when the condition changes', async () => {
    const fixture = TestBed.createComponent(TestComponent);
    const el = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();
    expect(el.querySelector('p')?.textContent).toBe('Content');

    fixture.componentInstance.condition.set(true);
    await fixture.whenStable();
    expect(el.querySelector('p')).toBeNull();

    fixture.componentInstance.condition.set(false);
    await fixture.whenStable();
    expect(el.querySelector('p')?.textContent).toBe('Content');
  });
});
