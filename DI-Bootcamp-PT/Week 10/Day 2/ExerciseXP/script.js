// exercice 1: Comparaison

// Déclaration de la fonction compareToTen avec un paramètre num
function compareToTen(num) {
  // La fonction doit retourner une Promise
  return new Promise((resolve, reject) => {
    if (typeof num === "number") {
      setTimeout(() => {
        if (num > 10) {
          reject("Le nombre est supérieur à 10");
        } else {
          resolve("Le nombre est inférieur ou égal à 10");
        }
      }, 0);
    } else {
      // Reject if is not a number
      reject("Please put a valid number");
    }
  });
}

// Exemple
compareToTen(8)
  .then((resultat) => {
    // La Promise a été résolue avec succès, affichage du résultat
    console.log(resultat); // Sortie : Le nombre est inférieur ou égal à 10
  })
  .catch((erreur) => {
    // La Promise a été rejetée, affichage de l'erreur
    console.error(erreur); // Cette partie ne sera pas exécutée dans cet exemple
  });

//   exercice 2: Promises

// Create a promise that resolves itself in 4 seconds and returns a “success” string.
const promesseReussite = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 4000);
  });
};

// exercice 3: Resolve & Reject

const resolvedPromise = Promise.resolve(3);

resolvedPromise
  .then((result) => {
    console.log("Resolved:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const rejectedPromise = Promise.reject("Boo!");

rejectedPromise
  .then((result) => {
    console.log("Resolved:", result);
  })
  .catch((error) => {
    console.error("Error:", error); // Output: Error: Boo!
  });
