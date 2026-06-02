# inject() options demo

This example shows the modern `inject()` options in Angular:

- `self: true`
- `skipSelf: true`
- `optional: true`

## Run

1. `npm install`
2. `npm start`

## Verify

- Parent and child logger IDs are different.
- `default` and `self` resolve to the child logger.
- `skipSelf` resolves to the parent logger.
- `optional` returns `null` when the token is not provided.
