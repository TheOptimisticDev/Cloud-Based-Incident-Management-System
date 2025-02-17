// server.js (Express backend)
const express = require('express');
const cors = require('cors'); // Allow cross-origin requests
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Handle the root route ("/") if you want to serve a basic message
app.get('/', (req, res) => {
  res.send('Welcome to the Express API!');
});

// API route to get item details by ID
app.get('/api/items/:id', (req, res) => {
  const itemId = req.params.id;
  res.json({ itemId: itemId, name: `Item ${itemId}` });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
