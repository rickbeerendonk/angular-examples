/*! Copyright © 2026 Rick Beerendonk !*/

import { HttpInterceptorFn, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const start = Date.now();
  console.log('→', req.method, req.url);

  return next(req).pipe(
    tap(event => {
      if (event.type === HttpEventType.Response) {
        console.log('←', req.url, event.status, `${Date.now() - start}ms`);
      }
    })
  );
};
