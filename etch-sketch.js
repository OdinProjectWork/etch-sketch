const canvas = document.querySelector("#canvas");


const submit = document.querySelector("#submit");

let numSquares = 16;
let row;

function generateGrid(numSides){
    for(let i = 0;i<numSides;i++){
        row = document.createElement("div");
        row.className = "column";
        for(let j = 0;j < numSides; j++){
            let square = document.createElement("div");
            square.className = "square";
            square.id = (j+1) * (i+1);
            square.addEventListener("mouseover",function(e){
                let opaqMultiplier = .1;
                let hexOne = Math.round(Math.random() * 255);
                let hexTwo = Math.round(Math.random() * 255);
                let hexThree = Math.round(Math.random() * 255);
                square.style.backgroundColor = `rgb( ${hexOne}, ${hexTwo}, ${hexThree})`;
                square.style.background = "rgb(0 0 0 / 100%)";
            })
            row.appendChild(square);
        }
        canvas.appendChild(row);
    }
}



generateGrid(16);



submit.addEventListener("click",function(e){
    let userPrompt = prompt("How many squares would you like on each side?");
    numSquares = parseInt(userPrompt);

    let getCols = canvas.querySelectorAll(".column");

    getCols.forEach((col)=>{
        canvas.removeChild(col);
    })

    generateGrid(numSquares);


})

