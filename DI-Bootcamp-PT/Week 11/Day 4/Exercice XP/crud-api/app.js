// app.js
const express = require("express");
const app = express();
const PORT = 5000;
const { fetchPosts } = require("./data/dataService");

app.get("/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log("Data has been successfully retrieved");
    res.json(posts);
  } catch (error) {
    res.status(500).send("Error retrieving posts");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
