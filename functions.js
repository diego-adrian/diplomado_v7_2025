const MAIN_TAB = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

let cursor = 1;

const resetGame = () => {
    MAIN_TAB.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
            MAIN_TAB[rowIndex][colIndex] = null;
            const casilla = document.querySelector(`[data-row="${rowIndex}"][data-col="${colIndex}"]`);
            casilla.innerHTML = '';
        });
    })
};

const whoWin = (option, player) => {
    if (option) {
        console.info(`El jugador ${player} ha ganado!`);
        return;
    }
};


const checkWinner = (tablero) => {
    const checkRowOne = tablero[0].every(item => item === tablero[0][0]);
    whoWin(checkRowOne, tablero[0][0]);
    
    const checkRowTwo = tablero[1].every(item => item === tablero[1][0]);
    whoWin(checkRowTwo, tablero[1][0]);
    
    const checkRowThree = tablero[2].every(item => item === tablero[2][0]);
    whoWin(checkRowThree, tablero[2][0]);

    const colOne =  [tablero[0][0], tablero[1][0], tablero[2][0]];
    const checkColOne = colOne.every(item => item === tablero[0][0]);
    whoWin(checkColOne, tablero[0][0]);
    
    const colTwo =  [tablero[0][1], tablero[1][1], tablero[2][1]];
    const checkColTwo = colTwo.every(item => item === tablero[0][1]);
    whoWin(checkColTwo, tablero[0][1]);

    const colThree =  [tablero[0][2], tablero[1][2], tablero[2][2]];
    const checkColThree = colThree.every(item => item === tablero[0][2]);
    whoWin(checkColThree, tablero[0][2]);

    const diagonalOne = [tablero[0][0], tablero[1][1], tablero[2][2]];
    const checkDiagonalOne = diagonalOne.every(item => item === tablero[0][0]);
    whoWin(checkDiagonalOne, tablero[0][0]);

    const diagonalTwo = [tablero[0][2], tablero[1][1], tablero[2][0]];
    const checkDiagonalTwo = diagonalTwo.every(item => item === tablero[0][2]);
    whoWin(checkDiagonalTwo, tablero[0][2]);
};

window.addEventListener('DOMContentLoaded', function() {
    const btnReset = document.querySelector('#btnReset');
    btnReset.addEventListener('click', function() {
        resetGame();
    });
    const tablero = document.querySelectorAll('.casilla');
    tablero.forEach(casilla => {
        const columna = casilla.getAttribute('data-col');
        const fila = casilla.getAttribute('data-row');
        
        casilla.addEventListener('click', function () {
            MAIN_TAB[fila][columna] = cursor;
            casilla.innerHTML = cursor === 1 ? 'X' : 'O';
            cursor = cursor === 1 ? 0 : 1;

            const check = MAIN_TAB.flat(2);
            if (check.every(item => item !== null)) {
                checkWinner(MAIN_TAB);
            }
        })
    });
});