function makeBoard(size) {
    let board = document.querySelector(".board");
    let box = board.querySelectorAll("div");
    box.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let numOfBoxes = size * size;
    for (let i = 0; i < numOfBoxes; i++) {
        let box = document.createElement("div");
        box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "pink";
        
    });
        box.style.backgroundColor = "grey";
        board.insertAdjacentElement("beforeend", box);
        };
    };

    makeBoard(16);

function changeSize (size) {
    if (size >= 2 && size <= 100) {
        makeBoard(size);
    } else {
        alert("too many squares")
    }
}    

function clearBoard() {
    let board = document.querySelector(".board");
    let box = board.querySelectorAll("div");
    box.forEach((div) => div.remove());
    size = prompt('What size board do you want?');
    changeSize(size);
    //makeBoard(size);
    };


//     box.addEventListener('mouseover', (event) => {
//         event.target.style.background = "pink";
//     });

// function changeSize(userInput) {
//     if(input >= 2 || input < 100) {
//     makeBoard(userInput);
//     } else {
//         console.log("too many squares")
//     };
// };
// };



// function createBox(x) {
//     for (let rows = 0; rows < x; rows++) {
//     for (let columns = 0; columns < x; columns++);
//     const gridSize = getElementById('grid').setAttribute("style", "width='660px", "height=660px");
//     const grid = document.getElementById('grid');
//             const box = document.createElement('div');
//             box.classList.add('box');
//             grid.appendChild(box);
//         };
//     };  

// const x = prompt(`Pick the amount of boxes you want, with a maximum of 100`);c
// createBox(10);

//You'll have to calculate the size of the cells 
//by deviding the numbers of cells with the container 
//size and then set that size in your cells.

// function boxSize() {
//     const gridSize = getElementById('grid').setAttribute("style", "width='660px", "height=660px");
//     const nOfBoxes = (x) * (x);
//     boxSize = gridSize / nOfBoxes;
// };
// boxSize();


// box.addEventListener('mouseover', (event) => {

//   event.target.style.background = "pink";



//   setTimeout(() => {
//     event.target.style.background = "";
//   }, 2500);
// }, false);
