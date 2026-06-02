# provideAppInitializer

This sample shows both initializer styles you will encounter in Angular codebases:

- Modern provider function:
  - `provideAppInitializer(() => ...)`
- Legacy token-based style:
  - `{ provide: APP_INITIALIZER, useFactory: ..., multi: true }`

Both initializers run before the root component renders.

## Run

```bash
npm install
npm start
```

## What to look for

1. Start the app and wait for first render.
2. Confirm the UI log contains all initialization steps:
   - `provideAppInitializer() started`
   - `provideAppInitializer() finished`
   - `APP_INITIALIZER started`
   - `APP_INITIALIZER finished`
3. Because both initializers are async, the app waits for completion before first paint.

## Source files

- `src/app/app.config.ts`
- `src/app/init-state.service.ts`
- `src/app/app.component.ts`
