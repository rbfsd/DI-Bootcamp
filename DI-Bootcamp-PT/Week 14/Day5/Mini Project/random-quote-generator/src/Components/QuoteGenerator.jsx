import React, { useState } from "react";
import quotes from "./quotes";

const QuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());
  const [quoteColor, setQuoteColor] = useState(getRandomColor());
  const [buttonColor, setButtonColor] = useState(getRandomColor());

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const generateNewQuote = () => {
    let newQuote;
    do {
      newQuote = getRandomQuote();
    } while (newQuote.quote === currentQuote.quote);
    setCurrentQuote(newQuote);
    setBackgroundColor(getRandomColor());
    setQuoteColor(getRandomColor());
    setButtonColor(getRandomColor());
  };

  return (
    <body
      style={{
        backgroundColor: backgroundColor,
        padding: "20px",
        textAlign: "center",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ color: quoteColor }}>{currentQuote.quote}</h2>
      <p style={{ color: quoteColor, fontStyle: "italic" }}>
        - {currentQuote.author}
      </p>
      <button
        onClick={generateNewQuote}
        style={{
          backgroundColor: buttonColor,
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Générer une nouvelle citation
      </button>
    </body>
  );
};

export default QuoteGenerator;
