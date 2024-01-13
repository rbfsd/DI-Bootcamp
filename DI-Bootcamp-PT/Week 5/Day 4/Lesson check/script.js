//const timerID = setTimeout(incrementByOne, 200)
// function incrementByOne(){
    //     counter++
    //     console.log(counter)
    // }
    // const intervalID = setInterval(function(){
        //     incrementByOne()
        //     // if (counter === 10){
            //     //     clearInterval(intervalID)
            //     //     console.log("Cleared")
            //     // }
            // }, 1000)
// let counter = 0
//     const timerID = setTimeout(function(){
//     window.location.href = "https://google.com"
// }, 5000)

// const btnJs = document.getElementById("btn")
// btnJs.addEventListener("click", function(){
//     clearInterval(timerID)
//     console.log("finsh")
// })


// const btnStart = document.getElementById("btn-start")
// const btnClear = document.getElementById("btn-clear")
// btnStart.addEventListener("click", displaycount)
// btnClear.addEventListener("click", stopCount)
// let count = 10
// let id

// function displaycount(){
//     console.log(count)
//     count--
//     if(count >= 0){
//         id = setTimeout(displaycount, 1000);
//     }
// }  
// function stopCount(){
//     clearTimeout(id)
// }

// function showmessgae(){
//     let bodyJS = document.querySelector("body")
//     let h1JS = document.createElement("h1")
//     bodyJS.append(h1JS)
//     let textMessgae = "New text"
//     h1JS.textContent = textMessgae
// }
// const id = setInterval(showmessgae, 2000)

// clearInterval(id)

let count = 10
function countDown(){
    const id = setInterval(() =>{
        console.log(count)
        count--
        if(count<=0){
            clearInterval(id)
        }
    }, 1000)
}
countDown()