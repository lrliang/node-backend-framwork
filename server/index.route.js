const express = require('express');
const userRoutes = require('./user/user.route');

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('health'));

// mount user routes at /users
router.use('/users', userRoutes);

// use glob to match *.route files
router.get('/*', (req, res) => res.send('Unkown Path!'));

module.exports = router;
