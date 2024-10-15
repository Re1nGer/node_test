const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Simple Node.js API!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.get('/api/data', (req, res) => {
  res.json({ data: 'This is some sample data from the API.' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app; 