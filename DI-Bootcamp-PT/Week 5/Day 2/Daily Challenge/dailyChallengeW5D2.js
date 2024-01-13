let nounJs = document.getElementById("noun")
let adjectiveJs = document.getElementById("adjective")
let personJs = document.getElementById("person")
let verbJs = document.getElementById("verb")
let placeJs = document.getElementById("place")
let buttonJs = document.getElementById("lib-button")

buttonJs.addEventListener("click", sendMessage)
function sendMessage(event) {
    event.preventDefault()
    let valueNounJs = nounJs.value
    let valueAdjectiveJs = adjectiveJs.value
    let valuePersonJs = personJs.value
    let valueVerbJs = verbJs.value
    let valuePlaceJs = placeJs.value

    let sentence = "The "+ valueNounJs + " ran quickly through the " + valueAdjectiveJs + " forest, where the " +valuePersonJs+ " " + valueVerbJs + " happily near the "+ valuePlaceJs +" ."
    
    let generatedStroryJs = document.getElementById("story")
    let sentenceInHtml = document.createElement("p")
    
    sentenceInHtml.innerText = sentence
    generatedStroryJs.append(sentenceInHtml)
}


//Bonus
//first create a button
let formJs = document.querySelector("form")
let secondButtonJs = document.createElement("button")
formJs.append(secondButtonJs)
secondButtonJs.innerText = "Shuffle"
// //create 2 more sentence



//function
secondButtonJs.addEventListener("click", changeStroy)
function changeStroy(){
    let valueNounJs = nounJs.value
    let valueAdjectiveJs = adjectiveJs.value
    let valuePersonJs = personJs.value
    let valueVerbJs = verbJs.value
    let valuePlaceJs = placeJs.value

    let sentence2 =" After a long day, the " + valueAdjectiveJs + " " + valueNounJs + " "+ valueVerbJs + " " +" through the "+valuePlaceJs+" while thinking about " + valuePersonJs + " , who " + valueVerbJs + "."

    let generatedStroryJs = document.getElementById("story")
    let sentenceInHtml = document.createElement("p")
    
    sentenceInHtml.innerText = sentence2
    generatedStroryJs.append(sentenceInHtml)
}