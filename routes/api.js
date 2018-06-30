require('dotenv').config();
const express = require('express');
const router = express.Router();

// GET Route - /api/
// loads initial page
router.get('/', (req, res) => {
  res.send('/api/ route hit');
});

// POST Route - /api/provision
// runs automation provision script
router.post('/provision', (req, res) => {
  res.send('/api/provision route hit');
});

module.exports = router;
