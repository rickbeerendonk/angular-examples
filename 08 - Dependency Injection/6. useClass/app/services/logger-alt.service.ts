/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Logger } from './logger';

export class LoggerAltService implements Logger {
  private static uniqueId: number = 0;

  private id: number;

  constructor() {
    this.id = ++LoggerAltService.uniqueId;
  }

  error(message?: any) {
    alert(`Error: ${message} [logger: ${this.id}]`);
  }

  info(message?: any) {
    alert(`Info: ${message} [logger: ${this.id}]`);
  }

  warn(message?: any) {
    alert(`Warn: ${message} [logger: ${this.id}]`);
  }
}
