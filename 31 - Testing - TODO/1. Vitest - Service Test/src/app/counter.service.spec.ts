/*! Copyright © 2026 Rick Beerendonk !*/

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    service = new CounterService();
  });

  it('should start at 0', () => {
    expect(service.count()).toBe(0);
  });

  it('should increment', () => {
    service.increment();
    expect(service.count()).toBe(1);
  });

  it('should increment multiple times', () => {
    service.increment();
    service.increment();
    service.increment();
    expect(service.count()).toBe(3);
  });

  it('should decrement', () => {
    service.increment();
    service.decrement();
    expect(service.count()).toBe(0);
  });

  it('should reset to 0', () => {
    service.increment();
    service.increment();
    service.reset();
    expect(service.count()).toBe(0);
  });
});
