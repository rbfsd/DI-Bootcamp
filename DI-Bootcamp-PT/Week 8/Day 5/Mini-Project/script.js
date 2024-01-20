// create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 3 ect…
const quotes = [
  {
    id: 0,
    author: "Hillel l'Ancien",
    quote: "Ce qui te déplaît, ne le fais pas à ton prochain.",
  },
  {
    id: 1,
    author: "Rabbi Akiva",
    quote:
      "Aime ton prochain comme toi-même : c'est là toute la Torah, le reste n'est que commentaire.",
  },
  {
    id: 2,
    author: "Rabbi Nachman de Breslev",
    quote: "Si tu veux changer le monde, commence par te changer toi-même.",
  },
];

let previousQuote;

function getRandomQuote() {
  let randomQuote;
  do {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  } while (randomQuote === previousQuote);

  previousQuote = randomQuote;
  return randomQuote;
}

document
  .getElementById("generate-quote")
  .addEventListener("click", function () {
    const quoteSection = document.getElementById("quote-section");
    const randomQuote = getRandomQuote();
    quoteSection.textContent = `${randomQuote.quote} - ${randomQuote.author}`;
  });

// Add these lines to script.js

document.getElementById("add-quote-btn").addEventListener("click", function () {
  const quoteInput = document.getElementById("quote-input").value;
  const authorInput = document.getElementById("author-input").value;

  if (quoteInput && authorInput) {
    const newQuote = {
      id: quotes.length,
      author: authorInput,
      quote: quoteInput,
      likes: 0,
    };

    quotes.push(newQuote);
    alert("Quote added successfully!");
  } else {
    alert("Both quote and author are required!");
  }
});

// Add these lines to script.js

document.getElementById("filter-btn").addEventListener("click", function () {
  const authorFilter = document.getElementById("author-filter").value;
  const filteredQuotes = quotes.filter(
    (quote) => quote.author === authorFilter
  );

  if (filteredQuotes.length > 0) {
    const quoteSection = document.getElementById("quote-section");
    let currentQuoteIndex = 0;

    function displayFilteredQuote(index) {
      const filteredQuote = filteredQuotes[index];
      quoteSection.textContent = `${filteredQuote.quote} - ${filteredQuote.author}`;
    }

    displayFilteredQuote(currentQuoteIndex);

    document.getElementById("quote-section").innerHTML = `
            ${filteredQuotes[currentQuoteIndex].quote} - ${filteredQuotes[currentQuoteIndex].author}
            <br>
            <button id="previous-btn">Previous</button>
            <button id="next-btn">Next</button>
        `;

    document
      .getElementById("previous-btn")
      .addEventListener("click", function () {
        currentQuoteIndex =
          (currentQuoteIndex - 1 + filteredQuotes.length) %
          filteredQuotes.length;
        displayFilteredQuote(currentQuoteIndex);
      });

    document.getElementById("next-btn").addEventListener("click", function () {
      currentQuoteIndex = (currentQuoteIndex + 1) % filteredQuotes.length;
      displayFilteredQuote(currentQuoteIndex);
    });
  } else {
    alert("No quotes found for the specified author.");
  }
});
