const express = require("express");
const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simulate a database with an array
let books = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
  },
];

// GET /api/books: Return a list of all books
app.get("/api/books", (req, res) => {
  res.json(books);
});

// GET /api/books/:bookId: Return a specific book based on its id
app.get("/api/books/:bookId", (req, res) => {
  const bookId = parseInt(req.params.bookId, 10);
  const book = books.find((b) => b.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

// POST /api/books: Create a new book
app.post("/api/books", (req, res) => {
  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Start the Express app
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
