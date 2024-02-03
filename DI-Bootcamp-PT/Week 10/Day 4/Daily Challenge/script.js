// app.js
const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllButton = document.getElementById("deleteAll");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const searchTerm = searchInput.value;
  fetchGif(searchTerm);
});

deleteAllButton.addEventListener("click", function () {
  gifContainer.innerHTML = ""; // Clear all gifs
});

function fetchGif(searchTerm) {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = data.data.images.original.url;
      appendGif(imageUrl, searchTerm);
    })
    .catch((error) => console.error("Error fetching GIF:", error));
}

function appendGif(imageUrl, category) {
  const gifElement = document.createElement("div");
  gifElement.innerHTML = `
        <img src="${imageUrl}" alt="${category} GIF">
        <button class="deleteButton" onclick="deleteGif(this)">Delete</button>
    `;
  gifContainer.appendChild(gifElement);
}

function deleteGif(button) {
  const gifElement = button.parentElement;
  gifElement.remove();
}
