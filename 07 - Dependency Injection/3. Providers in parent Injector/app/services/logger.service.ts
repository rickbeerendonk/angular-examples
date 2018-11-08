export class LoggerService {
  private static uniqueId: number = 0;

  private id: number;

  constructor() {
    this.id = ++LoggerService.uniqueId;
  }

  error(message?: any, ...optionalParams: any[]) {
    console.error(message, ...optionalParams, `[logger: ${this.id}]`);
  }

  info(message?: any, ...optionalParams: any[]) {
    console.info(message, ...optionalParams, `[logger: ${this.id}]`);
  }

  warn(message?: any, ...optionalParams: any[]) {
    console.warn(message, ...optionalParams, `[logger: ${this.id}]`);
  }
}
