// exercice 1
// Ask the user which language they speak.
let lang = prompt("Which language do you speak?");
console.log(`The user speaks ${lang}`);
// Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”
let lowerCaseLanguage = lang.toLowerCase();
// Create a few conditions :
// If the user speaks French : display “Bonjour”
// If the user speaks English : display “Hello”
// If the user speaks Hebrew : display “Shalom”
// If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’

switch (lowerCaseLanguage) {
  case "french":
    alert("Bonjour");
    break;
  case "english":
    alert("Hello");
    break;
  case "hebrew":
    console.log("Shalom");
    break;
  default:
    alert("01110011 01101111 01110010 01110010 01111001");
}

// exercice 2
// Ask the user for their grade.
let grade = prompt("What is your current grade?");
// If the grade is bigger than 90, console.log “A”
// if it’s between 80 and 90, console.log “B”
// if it’s between 70 and 80, console.log “C”
// if it’s between 60 and 70, console.log “D”

if (grade > 90) {
  console.log("A");
} else if (grade >= 80 && grade <= 90) {
  console.log("B");
} else if (grade >= 70 && grade < 80) {
  console.log("C");
} else if (grade >= 60 && grade < 70) {
  console.log("D");
}

// exercice 3

// Prompt the user for a string. It must be a verb.
let strVerb = prompt("Please enter a verb in past tense.");
// If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
let strVerbLength = strVerb.length();

if (strVerbLength >= 3) {
  if (strVerb.slice(-"") !== "ing") {
    strVerb += "ing";
  } else {
    strVerb += "ly";
  }
}

alert("the result is : " + strVerb);
