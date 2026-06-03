/*! Copyright © 2026 Rick Beerendonk !*/

import { HttpInterceptorFn, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const authHeader = req.headers.get('Authorization');
  const tokenPreview = authHeader
    ? ` [token: ${authHeader.slice(0, 20)}...]`
    : ' [no token]';
  console.log('→', req.method, req.url + tokenPreview);

  return next(req).pipe(
    tap(event => {
      if (event.type === HttpEventType.Response) {
        console.log('←', req.url, event.status);
      }
    })
  );
};
