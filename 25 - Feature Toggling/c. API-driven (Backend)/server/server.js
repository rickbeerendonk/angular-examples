/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mock feature flags database
const featureFlags = {
  'user-123': { feature1: true, userId: 'user-123' },
  'user-456': { feature1: false, userId: 'user-456' }
};

// API endpoint to get feature flags
app.get('/api/features', (req, res) => {
  const userId = req.query.userId || 'user-123';
  const features = featureFlags[userId] || { feature1: false, userId };

  console.log(`Fetching features for ${userId}:`, features);

  res.json(features);
});

app.listen(PORT, () => {
  console.log(`Feature toggle API running on http://localhost:${PORT}`);
  console.log(`Try: http://localhost:${PORT}/api/features?userId=user-123`);
});
