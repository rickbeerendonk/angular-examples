/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private static uniqueId: number = 0;

  private readonly id: number;

  constructor() {
    this.id = ++LoggerService.uniqueId;
  }

  error(message?: any, ...optionalParams: any[]) {
    console.error(message, ...optionalParams, `[logger2: ${this.id}]`);
  }

  info(message?: any, ...optionalParams: any[]) {
    console.info(message, ...optionalParams, `[logger2: ${this.id}]`);
  }

  warn(message?: any, ...optionalParams: any[]) {
    console.warn(message, ...optionalParams, `[logger2: ${this.id}]`);
  }
}
