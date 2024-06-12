// src/Book.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./SearchBox";
import BookList from "./BookList";

const Book = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        .then((response) => {
          const sortedBooks = response.data.items.sort((a, b) => {
            const dateA = a.volumeInfo.publishedDate || "0";
            const dateB = b.volumeInfo.publishedDate || "0";
            return new Date(dateB) - new Date(dateA);
          });
          setBooks(sortedBooks);
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
        });
    }
  }, [searchTerm]);

  return (
    <div>
      <SearchBox searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <BookList books={books} />
    </div>
  );
};

export default Book;
