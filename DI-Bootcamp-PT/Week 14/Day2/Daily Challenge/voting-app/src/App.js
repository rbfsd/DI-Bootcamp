import React, { useState } from 'react';

const App = () => {
  
  const [languages, setLanguages] = useState([
  {name: "Php", votes: 0},
  {name: "Python", votes: 0},
  {name: "JavaSript", votes: 0},
  {name: "Java", votes: 0}
]);

const handleVote = (index) => {
  const updateLanguage = [...languages];
  updateLanguage[index].votes+= 1;
  setLanguages(updateLanguage);
  };
  return (
    <div>
      <h1>Programming Language Voting App</h1>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            {language.name}: {language.votes}
            <button onClick={() => handleVote(index)}>Vote</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default App;
