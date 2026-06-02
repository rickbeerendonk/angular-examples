/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  private static nextId = 1;

  readonly id = LoggerService.nextId++;
}
