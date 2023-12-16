// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// For example, “The movie is not that bad, I like it”.
const sentence = "The movie is not that bad, I like it";
// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
const wordNot = sentence.search("not");
// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” (from the sentence variable)
const wordBad = sentence.search("bad");
// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// if (sentence.indexOf("not") < sentence.indexOf("bad")) {
//   console.log(sentence.replace("not that bad", "good"));
// }

if (wordNot === -1) {
  console.log(sentence);
} else if (wordNot < wordBad) {
  const firstPart = sentence.slice(0, wordNot);
  const secondPart = sentence.slice(wordBad + 3);
  console.log(firstPart + "good" + secondPart);
} else {
  console.log(sentence);
}
