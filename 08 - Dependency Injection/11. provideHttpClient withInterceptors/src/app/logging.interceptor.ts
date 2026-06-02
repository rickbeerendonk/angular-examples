/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.info('[functional] request', req.method, req.urlWithParams);

  return next(req).pipe(
    tap(() =>
      console.info('[functional] response', req.method, req.urlWithParams)
    )
  );
};
