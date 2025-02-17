const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello!');
});

// Example route with a parameter
app.get('/items/:id', (req, res) => {
  const itemId = req.params.id;
  res.json({ itemId: itemId });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
