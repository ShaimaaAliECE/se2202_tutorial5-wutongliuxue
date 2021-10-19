let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

let nextPlayerLabel = document.getElementById('next-lbl');
nextPlayerLabel.innerText = " " + nextPlayer;

// use the value stored in the nextPlayer variable to indicate who the next player is
//This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard()
{
    document.getElementById('c1').innerHTML = `<button id='cell_btn'> </button>`;
    document.getElementById('c2').innerHTML = `<button id='cell_btn'> </button>`;
    document.getElementById('c3').innerHTML = `<button id='cell_btn'> </button>`;

    document.getElementById('c4').innerHTML = `<button id='cell_btn'> </button>`;
    document.getElementById('c5').innerHTML = `<button id='cell_btn'> </button>`;
    document.getElementById('c6').innerHTML = `<button id='cell_btn'> </button>`;
    
    document.getElementById('c7').innerHTML = `<button id='cell_btn'> </button>`;
    document.getElementById('c8').innerHTML = `<button id='cell_btn'> </button>`;
    document.getElementById('c9').innerHTML = `<button id='cell_btn'> </button>`;

    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   
}

let btns = document.querySelectorAll('button');

for (let count=0; count<btns.length; count++)
{
    btns[count].addEventListener('click', (event) => {takeCell(event)});
}

function takeCell (event) {

    event.target.innerText = nextPlayer;
    event.target.disabled = true;

    if (nextPlayer == 'X'){
        nextPlayer = 'O';
    }
    else{
        nextPlayer = 'X';
    }

    nextPlayerLabel.innerText = " " + nextPlayer;

    if (isGameOver()) {

        let h1 = document.createElement("h1");
        let txtNode = document.createTextNode("Game Over!")

        h1.appendChild(txtNode);
        let gameOverLabel = document.getElementById('game-over-lbl');
        gameOverLabel.appendChild(h1);
    }
}

function isGameOver()
{
    let btns = document.querySelectorAll('button');
    let counter = 0;

    for (let count=0; count<btns.length; count++)
    {
        if (btns[count].disabled == true)
            counter++;
    }
    if (counter == btns.length){
        return true;
    }
    return false;
}