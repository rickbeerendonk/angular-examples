# provideHttpClient withInterceptors

This sample shows both modern and legacy interceptor registration in one app:

- Modern functional interceptors:
  - `provideHttpClient(withInterceptors([loggingInterceptor, cachingInterceptor]))`
- Legacy class-based interceptor:
  - `{ provide: HTTP_INTERCEPTORS, useClass: LegacyLoggingInterceptor, multi: true }`
  - Enabled through `withInterceptorsFromDi()`

## Run

```bash
npm install
npm start
```

## What to look for

1. Open the browser and click **Load Todo**.
2. Check the console for interceptor log order:
   - `[functional] request ...`
   - `[class] request ...`
   - `[class] response ...`
   - `[functional] response ...`
3. Click **Load Todo** again and verify caching behavior:
   - `[functional] cache hit ...`
   - No network call for the cached GET request.

## Source files

- `src/app/app.config.ts`
- `src/app/logging.interceptor.ts`
- `src/app/caching.interceptor.ts`
- `src/app/legacy-logging.interceptor.ts`
