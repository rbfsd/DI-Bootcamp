// server/server.js
const express = require("express");
const app = express();

// Define a GET route
app.get("/api/hello", (req, res) => {
  // Respond with JSON data
  res.json({ message: "Hello From Express" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
