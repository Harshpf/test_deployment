const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

// Root endpoint
router.get('/', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

// Second endpoint
router.get('/user', (req, res) => {
    res.json({ message: 'other are also working' });
});

app.use('/', router);

module.exports = serverless(app);
