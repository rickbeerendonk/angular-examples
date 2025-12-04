# Feature Toggling - API-driven (Backend)

This example demonstrates feature toggling with flags fetched from a backend API.

## Setup

1. Install server dependencies:

   ```bash
   cd server
   npm install
   cd ..
   ```

2. Start both the API server and Angular app:

   ```bash
   npm start
   ```

   Or start them separately:

   ```bash
   # Terminal 1 - API server
   npm run start:server

   # Terminal 2 - Angular app
   npm run start:client
   ```

## How it works

- The backend API (`server/server.js`) returns different feature flags based on userId
- The Angular app fetches flags from `http://localhost:3000/api/features?userId=user-123`
- Different users can have different feature flags enabled

## Try it

Change the `userId` in `features.service.ts`:

- `user-123` → feature1 is **enabled**
- `user-456` → feature1 is **disabled**

This simulates user-specific feature rollouts, A/B testing, or gradual rollouts.
