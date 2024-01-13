
let clickedColor = null;

let squareColor = document.querySelectorAll(".square")
squareColor.forEach(square =>{
    square.addEventListener("click", ()=>{
        let computedColor = window.getComputedStyle(square).getPropertyValue("background-color");
        clickedColor = computedColor
    })
})

let btnClear = document.getElementById("btn-clear")
btnClear.addEventListener("click", () => {
    const cells = document.querySelectorAll('.grid-cell')
    cells.forEach(cell => {
        cell.style.backgroundColor = ''
    })
})


document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("right-container");

    const gridSize = 16;
    
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        gridContainer.appendChild(cell);
        cell.addEventListener("click", function() {
            if (clickedColor) {
        cell.style.backgroundColor = clickedColor; 
            }
        });
        cell.addEventListener("mouseover", function() {
            if (clickedColor) {
        cell.style.backgroundColor = clickedColor; 
            }
        });
    }
});
