const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post",
  },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const post = posts.find((p) => p.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

// POST /posts: Create a new blog post
app.post("/posts", (req, res) => {
  const newPost = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id: Update an existing blog post
app.put("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const postIndex = posts.findIndex((p) => p.id === postId);
  if (postIndex !== -1) {
    const updatedPost = {
      id: postId,
      title: req.body.title,
      content: req.body.content,
    };
    posts[postIndex] = updatedPost;
    res.json(updatedPost);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

// DELETE /posts/:id: Delete a blog post
app.delete("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const postIndex = posts.findIndex((p) => p.id === postId);
  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

// Error handling for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start the Express app
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
