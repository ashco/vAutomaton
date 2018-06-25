require('dotenv').config();
const express = require('express');
const router = express.Router();

// GET Route - /api/provision
router.get('/provision', (req, res) => {
  res.send('Provision route hit!');
});

module.exports = router;
