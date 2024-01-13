// //1
// function alertAfterTwoSec(){
//     setTimeout(function(){
//          alert("Hey after 2 seconds")
//     }, 2000)
// }
// //alertAfterTwoSec()

// //2

// function helloAppearTwoSecond(){
//     setTimeout(function(){
//         let containerJs = document.getElementById("container")
//         let pJs = document.createElement("p")
//         let textJs = "Hello world"
//         pJs = textJs
//         containerJs.append(pJs)
//     },2000)
// }
// //helloAppearTwoSecond()

// //3 and 4
// function repeatHelloAllTwoSec(){
//    let counter = 0
//    let id = setInterval(function(){
//         let containerJs = document.getElementById("container")
//         let pJs = document.createElement("p")
//         let textJs = "  Hello world,    "
//         pJs.textContent = textJs
//         containerJs.appendChild(pJs)
//         counter++
//         if(counter > 5){
//             clearInterval(id)
//         }
//     },200)
//     // let btnClearJs = document.getElementById("clear")
//     // btnClearJs.addEventListener("click",function(){
//     //     clearInterval(id)
//     // })

// }
// repeatHelloAllTwoSec()




//EX 2

function myMove(){
    let position = 0
    let id = setInterval(function(){
        let yellowBox = document.getElementById("container")
        let redBox = document.getElementById("animate")
        position++
        redBox.style.left = position + "0px" // here we can delete the 0 to be slowly
    if(position == 35){//but if we remove the 0 in px we need to add in 350
        clearInterval(id)
    }
    }, 10)//play with this value for the fast
}
