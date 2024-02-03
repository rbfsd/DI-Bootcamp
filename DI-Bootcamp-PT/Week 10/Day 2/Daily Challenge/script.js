// 1 frst Daily Challenge

function makeAllCaps (wordArray) {
    return new promise ((reslve, reject) => {
        const areAllStrings = wordArray.every(word => typeof === 'string');
        if (areAllStrings){
            const upperCaseWords = wordArray.map(word => word.toUpperCase());
            resolve(upperCaseWords);
            } else {
                reject('Not all elements in the array are strings');
            };
         });
  };

function sortWords(uppercasedArray) {
    return new promise ((resolve, reject) => {
        if (uppercasedArray.length > 4){
            const wordSorted = uppercasedArray.sort();
            resolve(wordSorted);
            } else {
                reject ('The input should contain at least 5 words')
             }
      })
  };


//   test function 

// Test 1: Catch block is executed
makeAllCaps([1, "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

// Test 2: Catch block is executed
makeAllCaps(["apple", "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

// Test 3: Console will show the uppercased and sorted array
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result)) // ["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error));


// 2nd Daily Challenge
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`


// function toJs() {
//     return new promise ((resolve, reject)  => {
//     const morseObj = JSON.parse (morse);

//     if (Object.keys(morseObj).length === 0){
//         reject('Morse JavaScript object is empty.');
//     } else {
//         // Résolution de la promesse avec l'objet morse
//         resolve(morseObj);
//     }
//     });
// }

// function toMorse (morseJS)

// Function to convert the morse json string to a morse javascript object
function toJs() {
    return new Promise((resolve, reject) => {
      try {
        const morseObj = JSON.parse(morse);
        if (Object.keys(morseObj).length === 0) {
          throw new Error("Morse object is empty");
        }
        resolve(morseObj);
      } catch (error) {
        reject(error);
      }
    });
  }
  
  // Function to translate a word or sentence to Morse code
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      try {
        const userInput = prompt("Enter a word or sentence:");
        const morseTranslation = [];
  
        for (const char of userInput.toLowerCase()) {
          if (char in morseJS) {
            morseTranslation.push(morseJS[char]);
          } else {
            throw new Error(`Character "${char}" not found in Morse object`);
          }
        }
  
        resolve(morseTranslation);
      } catch (error) {
        reject(error);
      }
    });
  }
  
  // Function to join the Morse code translation and display on the DOM
  function joinWords(morseTranslation) {
    const morseString = morseTranslation.join("<br>");
    document.getElementById("output").innerHTML = morseString;
  }
  
  // Chain the three functions
  toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.error(error));
  