//EX 1

// //1
// let h1Js = document.querySelector("h1")
// console.log(h1Js)

// //2
// let artcileLastParagraphJs = document.querySelector("article")
// artcileLastParagraphJs.lastElementChild.remove()

// //3
// let h2Js = document.querySelector("h2")
// h2Js.addEventListener("click", changeBackgroundColorToRed)
// function changeBackgroundColorToRed(){
//     h2Js.style.backgroundColor = "red"
// }

// //4
// document.querySelector("h3").addEventListener("click", function(){
//     this.style.display = "none"
// })

// //5
// let butJs = document.createElement("button")
// artcileLastParagraphJs.appendChild(butJs)
// butJs.addEventListener("click", function(){
//     artcileLastParagraphJs.style.fontWeight = "900"
// })

// //6 (BONUS)
// h1Js.addEventListener("mouseover", function(){
//     let h1Js = document.querySelector("h1")
//     let size = Math.floor(Math.random() * 101)
//     this.style.fontSize = size + "px"
// })


//EX 2

// //1
// let formJs = document.querySelector("form")
// //console.log(formJs)

// //2
// let formFirstName = document.getElementById("fname")
// let formLastName = document.getElementById("lname")
// // console.log(formFirstName)
// // console.log(formLastName)

// //3
// let firstNameAttribute = document.getElementsByName("firstname")[0]
// let lastNameAttribute = document.getElementsByName("lastname")[0]
// // console.log(firstNameAttribute)
// // console.log(lastNameAttribute)

// //4
// document.getElementById("submit").addEventListener("click", sendMessage)
// function sendMessage(event) {
//     event.preventDefault()

//     let valueformfirstname = formFirstName.value
//     let valueformlastname = formLastName.value

//     let liJs1 = document.createElement("li")
//     let liJs2 = document.createElement("li")
//     let ulJs = document.querySelector("ul")
//     ulJs.append(liJs1)
//     ulJs.append(liJs2)

//     liJs1.innerHTML = "First name of the user: " + valueformfirstname
//     liJs2.innerHTML = "Last name of the user: " + valueformfirstname

// }

// //EX 3

// let allBoldItems
// function getBoldItems(){
//     let listBoldItems = document.querySelectorAll("strong")
//     allBoldItems = listBoldItems
// }
// //getBoldItems()

// function highlight(){
//     let listBoldItems = document.querySelectorAll("strong")
//     listBoldItems.forEach(function(item) {
//         item.style.color = "blue"
//     });
// }

// function returnItemsToDefault(){
//     let listBoldItems = document.querySelectorAll("strong")
//     listBoldItems.forEach(function(item) {
//         item.style.color = "black"
//     });
// }

// document.addEventListener("DOMContentLoaded", function() {
//     getBoldItems(); 

//     allBoldItems.forEach(function(item) {
//         item.addEventListener("mouseenter", function() {
//             this.style.color = "blue";
//         });

//         item.addEventListener("mouseout", function() {
//             this.style.color = "black";
//         });
//     });
// });

// //EX 4
// let radiusJs = document.getElementById("radius")
// let volumeJs = document.getElementById("volume")
// document.getElementById("submit").addEventListener("click", function(){
//     let valueRadiusJs = radiusJs.value
//     valueVolume = (4/3) * Math.PI * (valueRadiusJs * valueRadiusJs)
//     volumeJs.value = valueVolume.toFixed(2)
// })