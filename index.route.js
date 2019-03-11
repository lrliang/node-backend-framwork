
const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('health'));

// use glob to match *.route files
router.get('/*', (req, res) => res.send('Unkown Path!'));

module.exports = router;
