# Feature Toggling

## Hardcoded

Advantages

- Simple

Disadvantages:

- Not flexible, recompile needed

### Steps

1. Add boolean feature to `environment.ts` (and `environment.prod.ts`) file:

   ```ts
   export const environment = {
     feature1: true
   };
   ```

2. Import file where feature flag is needed:

   ```ts
   import { environment } from '../environments/environment';
   ```

3. Use feature flag:

   ```ts
   feature1 = environment.feature1;
   ```

## JSON file

Advantages

- Can be changed after compilation
- No separate HTTP call

Disadvantages:

- Downloaded with website

### Steps

1. Add JSON file (`features.json`) to assets folder:

   ```json
   {
     "feature1": true
   }
   ```

2. Instruct TypeScript compiler to handle JSON files. Update the `tsconfig.json`:

   ```ts
   {
     "compilerOptions": {
       "resolveJsonModule": true,
       "allowSyntheticDefaultImports": true
     }
   },
   ```

3. Import file where feature flag is needed:

   ```ts
   import features from '../assets/features.json';
   ```

4. Use feature flag:

   ```ts
   feature1 = features.feature1;
   ```

## HTTP Call

TODO
