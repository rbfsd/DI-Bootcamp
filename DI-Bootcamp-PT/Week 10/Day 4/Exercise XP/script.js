// exercice 1: Giphy API

const giphyApiUrl =
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(giphyApiUrl)
  .then((response) => {
    // check response (statut 200-299)
    if (!response.ok) {
      throw new Error(`Network error: ${response.statusText}`);
    }

    // convert the response in js object with JSON format
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
  });

//Exercise 2 : Giphy API

// exercice 3: async fnction

// Déclarer la fonction asynchrone
async function fetchData() {
  try {
    // Utiliser l'opérateur await pour attendre la réponse de la requête GET
    const response = await fetch("https://www.swapi.tech/api/starships/9/");

    // Vérifier le statut de la réponse
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    // Convertir la réponse en objet JSON
    const objectStarWars = await response.json();

    // Imprimer le résultat
    console.log(objectStarWars.result);
  } catch (error) {
    // Attraper et imprimer toute erreur survenue
    console.error("An error occurred:", error.message);
  }
}

// Appeler la fonction asynchrone
fetchData();

// Exercice 4

// Déclaration de la fonction resolveAfter2Seconds :

// La fonction resolveAfter2Seconds retourne une Promise qui se résout après un délai de 2 secondes en utilisant setTimeout.
// La résolution de la Promise se fait avec la chaîne de caractères 'resolved'.
// Déclaration de la fonction asynchrone asyncCall :

// Cette fonction est déclarée avec le mot-clé async, ce qui signifie qu'elle fonctionnera de manière asynchrone.
// À l'intérieur de la fonction, 'calling' est consigné dans la console.
// Elle utilise await pour attendre la résolution de la Promise retournée par la fonction resolveAfter2Seconds.
// Le résultat de la résolution est stocké dans la variable result.
// Enfin, le résultat est consigné dans la console.
// Invocation de la fonction asyncCall :

// La fonction asyncCall est invoquée à la fin.
// Voyons maintenant la séquence d'exécution :

// Lorsque asyncCall est invoquée, la première instruction console.log('calling') est exécutée immédiatement, affichant 'calling' dans la console.
// Ensuite, la fonction atteint let result = await resolveAfter2Seconds();. À ce stade, l'exécution est mise en pause pendant 2 secondes en raison de l'utilisation de await avec resolveAfter2Seconds.
// Pendant ces 2 secondes, le contrôle est renvoyé à la boucle d'événements, permettant à d'autres tâches synchrones ou asynchrones de s'exécuter.
// Après les 2 secondes, la Promise retournée par resolveAfter2Seconds est résolue, et la suite du code est exécutée. Le résultat de la résolution, c'est-à-dire 'resolved', est stocké dans la variable result.
// Enfin, la deuxième instruction console.log(result) est exécutée, affichant 'resolved' dans la console.
// Résultat attendu dans la console :

// Copy code
// calling
// resolved
// La logique clé ici est que l'utilisation de await dans une fonction asynchrone fait en sorte que l'exécution de cette fonction est mise en pause jusqu'à ce que la Promise soit résolue. Cela permet de traiter les tâches asynchrones de manière synchrone, ce qui améliore la lisibilité du code.
