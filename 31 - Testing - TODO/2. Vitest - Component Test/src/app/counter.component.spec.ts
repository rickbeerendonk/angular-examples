/*! Copyright © 2026 Rick Beerendonk !*/

import { TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CounterComponent]
    });
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render initial count of 0', async () => {
    const fixture = TestBed.createComponent(CounterComponent);
    await fixture.whenStable();

    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('p')?.textContent).toContain('0');
  });

  it('should increment count when + is clicked', async () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const el = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    const incrementBtn = el.querySelectorAll('button')[0];
    incrementBtn.click();
    await fixture.whenStable();

    expect(el.querySelector('p')?.textContent).toContain('1');
  });

  it('should decrement count when - is clicked', async () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const el = fixture.nativeElement as HTMLElement;
    await fixture.whenStable();

    const incrementBtn = el.querySelectorAll('button')[0];
    const decrementBtn = el.querySelectorAll('button')[1];
    incrementBtn.click();
    await fixture.whenStable();
    decrementBtn.click();
    await fixture.whenStable();

    expect(el.querySelector('p')?.textContent).toContain('0');
  });
});
