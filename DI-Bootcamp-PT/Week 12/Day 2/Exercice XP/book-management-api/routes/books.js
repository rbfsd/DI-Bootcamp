// routes/books.js

const express = require("express");
const router = express.Router();

// Sample in-memory database for storing books
const books = [];

// Get all books
router.get("/", (req, res) => {
  res.json(books);
});

// Add a new book
router.post("/", (req, res) => {
  const book = req.body;
  books.push(book);
  res.status(201).json(book);
});

// Update a book by ID
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books[index] = req.body;
    res.json(books[index]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Delete a book by ID
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    const deletedBook = books.splice(index, 1);
    res.json(deletedBook[0]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

module.exports = router;
