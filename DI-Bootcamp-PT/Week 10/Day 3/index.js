// fetch() API

fetch(resource);

console.log(fetch("https://api.artic.edu/api/v1/artworks/4"));
// We receive:
// Promise {<pending>}
// [[PromiseState]] : "fulfilled"
// [[PromiseResult]] : Response

fetch(url) // passing the url of the API as a parameter
  .then(function () {
    // Handle the data from the API
  })
  .catch(function () {
    // Handle any errors
  });

// response.text() – read the response and return as text,
// response.json() – parse the response as JSON,
// response.formData() – return the response as FormData object,

console.log("Starting ...");

const displayArtwork = (art) => {
  const { title, artist_title: artist } = art.data;
  const paragraph = document.querySelector("#info-art");
  paragraph.textContent = `The painting is named 
    ${title} by the artist ${artist}`;
};

const displayError = (error) => {
  const paragraph = document.querySelector("#info-art");
  paragraph.textContent = `We have a problem ${error}`;
};

const getArtwork = () => {
  console.log("Working ...");
  fetch("https://api.artic.edu/api/v1/artworks/14572")
    .then((response) => {
      console.log(response);
      if (response.ok === true) {
        return response.json();
      } else {
        throw new Error("Wrong artwork");
      }
    })
    .then((obj) => {
      displayArtwork(obj);
    })
    .catch((error) => {
      displayError(error);
    });
  console.log("Work Done ...");
};

getArtwork();

// POST request

fetch(resource, options);
