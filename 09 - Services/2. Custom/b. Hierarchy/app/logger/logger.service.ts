/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

export class LoggerService {
  private static nextId = 1;
  private id: number;

  constructor() {
    this.id = LoggerService.nextId++;
  }

  log(message: string): void {
    console.log(`Logger ${this.id}: ${message}`);
  }
}
