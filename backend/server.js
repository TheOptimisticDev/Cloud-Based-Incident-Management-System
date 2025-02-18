const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const incidents = [
  { id: 1, description: "Unauthorized access detected" },
  { id: 2, description: "Camera offline in Zone 3" },
];

// Define API routes
app.get("/api/incidents", (req, res) => {
  res.json(incidents);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
