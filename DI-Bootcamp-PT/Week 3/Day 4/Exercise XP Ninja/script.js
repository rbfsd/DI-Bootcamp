// exercice 1
// Demander à l'utilisateur l'année de naissance de la première personne
let annee1 = prompt("Entrez l'année de naissance de la première personne :");

// Convertir la chaîne de caractères en nombre entier
annee1 = parseInt(annee1);

// Demander à l'utilisateur l'année de naissance de la deuxième personne
let annee2 = prompt("Entrez l'année de naissance de la deuxième personne :");

// Convertir la chaîne de caractères en nombre entier
annee2 = parseInt(annee2);

// Calculer la différence d'âge absolue
let differenceAge = Math.abs(annee2 - annee1);

// Déterminer l'année de naissance de la personne plus jeune
let anneeNaissancePlusJeune;
if (annee1 < annee2) {
  anneeNaissancePlusJeune = annee1;
} else {
  anneeNaissancePlusJeune = annee2;
}

// Calculer la date à laquelle la personne plus jeune a exactement la moitié de l'âge de la personne plus âgée
let moitieAgeAnnee = anneeNaissancePlusJeune + Math.floor(differenceAge / 2);

// Afficher le résultat
alert(
  "La date à laquelle la personne plus jeune a exactement la moitié de l'âge de la personne plus âgée est : " +
    moitieAgeAnnee
);

// exercice 2 Zip Codes

// ask the client for their zip code
let zipCode = prompt("please put your zip code");
// Zip codes consists of 5 numbers
zipCode.length === 5;
// Must only contain numbers
!isNaN(zipCode);
// Must not contain any whitespace (spaces)
zipCode.indexOf(" ") === -1;
// Must not be greater than 5 digits in length

if (zipCode.length === 5 && !isNaN(zipCode) && zipCode.indexOf(" ") === -1) {
  console.log("success");
} else {
  console.log("error !!!!!");
}

// exercice 3 Secret Word

let word = prompt("put a word");
// Delete all the vowels of the word and console.log the result.
