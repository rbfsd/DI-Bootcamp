import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);

  useEffect(() => {
    fetch("/superheroes.json")
      .then((response) => response.json())
      .then((data) => {
        setCards(shuffleArray(data));
      });
  }, []);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (id) => {
    if (clickedIds.includes(id)) {
      setCurrentScore(0);
      setClickedIds([]);
    } else {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      if (newScore > topScore) setTopScore(newScore);
      setClickedIds([...clickedIds, id]);
      setCards(shuffleArray(cards));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Superheroes Memory Game</h1>
        <nav>
          <ul>
            <li>Score: {currentScore}</li>
            <li>Top Score: {topScore}</li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="card-container">
          {cards.map((card) => (
            <div
              key={card.id}
              className="card"
              onClick={() => handleCardClick(card.id)}
            >
              <img src={`/${card.image}`} alt={card.name} />
              <p>{card.name}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
