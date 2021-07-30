
const gameBoard = document.querySelector('.game-board')
const squares = document.querySelectorAll('.square')
const width = 10;
const height = 5;

/*
Each tetrimino should have 4 rotations and they should be in the same index 
as their respective color in the array "tetriminoColors". A 1 in the array
indicates that square should be colored and a 0 indicates no color
*/
const iTetrimino = [
    [[0,0,0,0],
     [1,1,1,1],
     [0,0,0,0],
     [0,0,0,0]],

    [[0,0,1,0],
     [0,0,1,0],
     [0,0,1,0],
     [0,0,1,0]],

    [[0,0,0,0],
     [0,0,0,0],
     [1,1,1,1],
     [0,0,0,0]],

    [[0,1,0,0],
     [0,1,0,0],
     [0,1,0,0],
     [0,1,0,0]]
]
const jTetrimino = [
    [[0,1,0],
     [0,1,0],
     [1,1,0]],

    [[1,0,0],
     [1,1,1],
     [0,0,0]],

    [[0,1,1],
     [0,1,0],
     [0,1,0]],

    [[1,1,1],
     [0,0,1],
     [0,0,0]]
]
const lTetrimino = [
    [[0,1,0],
     [0,1,0],
     [0,1,1]],

    [[0,0,0],
     [1,1,1],
     [1,0,0]],

    [[1,1,0],
     [0,1,0],
     [0,1,0]],

    [[0,0,1],
     [1,1,1],
     [0,0,0]]    
]
const oTetrimino = [
    [[0,0,0,0],
     [0,1,1,0],
     [0,1,1,0],
     [0,0,0,0]],

    [[0,0,0,0],
     [0,1,1,0],
     [0,1,1,0],
     [0,0,0,0]],

    [[0,0,0,0],
     [0,1,1,0],
     [0,1,1,0],
     [0,0,0,0]],

    [[0,0,0,0],
     [0,1,1,0],
     [0,1,1,0],
     [0,0,0,0]]
]
const sTetrimino = [
    [[0,0,0],
     [0,1,1],
     [1,1,0]],

    [[1,0,0],
     [1,1,0],
     [0,1,0]],

    [[0,0,0],
     [0,1,1],
     [1,1,0]],

    [[1,0,0],
     [1,1,0],
     [0,1,0]]
]
const tTetrimino = [
    [[0,0,0],
     [1,1,1],
     [0,1,0]],

    [[0,1,0],
     [1,1,0],
     [0,1,0]],

    [[0,1,0],
     [1,1,1],
     [0,0,0]],

    [[0,1,0],
     [0,1,1],
     [0,1,0]]
]
const zTetrimino = [
    [[1,1,0],
     [0,1,1],
     [0,0,0]],

    [[0,0,1],
     [0,1,1],
     [0,1,0]],

    [[1,1,0],
     [0,1,1],
     [0,0,0]],

    [[0,0,1],
     [0,1,1],
     [0,1,0]]
]

const tetriminoes = [iTetrimino, jTetrimino, lTetrimino, oTetrimino, sTetrimino, tTetrimino, zTetrimino]
const tetriminoColors = {
    iTetrimino: 'cyan',
    jTetrimino: 'blue',
    lTetrimino: 'orange',
    oTetrimino: 'yellow',
    sTetrimino: 'green',
    tTetrimino: 'purple',
    zTetrimino: 'red'
}

// function to create (width * height)
function createGrid(width, height) {
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            let div = document.createElement('div')
            div.classList.add('square')
            gameBoard.appendChild(div)
        }
    }
}

document.addEventListener('DOMContentLoaded', createGrid(width, height))
console.log(tetriminoColors)
console.log('Working')