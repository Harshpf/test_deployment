const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

app.get('/api/user', (req, res) => {
    res.json({ message: 'other are also working' });
});

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

module.exports = serverless(app);