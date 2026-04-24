/*! Copyright © 2026 Rick Beerendonk !*/

// Same component as demo 2 — but tested with @testing-library/angular.
//
// Compare with counter.component.spec.ts in demo 2:
//   - No TestBed.configureTestingModule / createComponent — `render()` does it
//   - No querySelector — query the way users find things (role + name)
//   - No fixture.whenStable() — userEvent awaits stability for you

import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { CounterComponent } from './counter.component';

describe('CounterComponent (Testing Library)', () => {
  it('renders the initial count', async () => {
    await render(CounterComponent);

    expect(screen.getByText('Count: 0')).toBeTruthy();
  });

  it('increments when the user clicks +', async () => {
    await render(CounterComponent);
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: 'increment' }));

    expect(screen.getByText('Count: 1')).toBeTruthy();
  });

  it('decrements when the user clicks -', async () => {
    await render(CounterComponent);
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: 'increment' }));
    await user.click(screen.getByRole('button', { name: 'decrement' }));

    expect(screen.getByText('Count: 0')).toBeTruthy();
  });
});
