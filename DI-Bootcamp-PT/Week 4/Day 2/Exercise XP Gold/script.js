// Write a program to check whether a string is blank or not.
function isBlank(str){
    return str.trim() === '';
}

console.log(isBlank('')); --> true
console.log(isBlank('abc')); --> false


// Write a JavaScript function to convert a string into an abbreviated form.
abbrev_name = function (str){
    var split_name = str.trim().split(" ");
    // Vérifier s'il y a plus d'un mot dans le tableau
    if(split_name.length > 1){
        return (split_name[0] + " " + split_name[1].charAt(0) + ".");
        }else{
            return split_name[0];
    }
}

console.log(abbrev_name("Robin Singh"));

// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
function swap (str){
    let newLetters =  '';
    for (let i=0; i<str.length;i++){
        if (str[i] == str[i].toLowerCase()) {
            newLetters += str[i].toUpperCase();
            } else {
                newLetters += str[i].toLowerCase();
            }
    }
    console.log(newLetters);
    return newLetters;
}

console.log('The Quick Brown Fox');

// Create a function that determines whether an argument is omnipresent for a given array.
function isOmnipresent(arr, arg){
    