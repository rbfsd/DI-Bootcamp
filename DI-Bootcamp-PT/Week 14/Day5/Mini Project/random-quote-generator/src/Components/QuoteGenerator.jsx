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
    <div
      style={{
        backgroundColor: backgroundColor,
        width: "800px",
        height: "280px",
        padding: "20px",
        textAlign: "center",
        borderRadius: "10px",
        position: "relative", // Ajout de la propriété position
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Utilisation d'une div interne pour centrer le contenu */}
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
      </div>
    </div>
  );
};

export default QuoteGenerator;
