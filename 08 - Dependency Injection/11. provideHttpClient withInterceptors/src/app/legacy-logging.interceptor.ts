/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LegacyLoggingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.info('[class] request', req.method, req.urlWithParams);

    return next
      .handle(req)
      .pipe(
        tap(() =>
          console.info('[class] response', req.method, req.urlWithParams)
        )
      );
  }
}
