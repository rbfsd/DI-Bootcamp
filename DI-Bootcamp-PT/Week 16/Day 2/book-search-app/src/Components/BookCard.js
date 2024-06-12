// src/BookCard.js
import React from "react";

const BookCard = ({ book }) => {
  const { title, authors, publishedDate, imageLinks } = book.volumeInfo;

  return (
    <div className="book-card">
      {imageLinks && <img src={imageLinks.thumbnail} alt={title} />}
      <h2>{title}</h2>
      <h3>{authors && authors.join(", ")}</h3>
      <p>{publishedDate}</p>
    </div>
  );
};

export default BookCard;
