console.log("Welcome to Tic Tac Toe Game")
let music = new Audio("music.mp3")
let audioTurn = new Audio("pressabutton.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

let board = ['','','','','','','','','']; //Represents the tic tac toe board                                                                                                                                                                                                                 let board = ['', '', '', '', '', '', '', '', '']; // Represents the tic-tac-toe board
let currentPlayer = 'X'; // Current player (X or O)
let gameStatus = 'In Progress'; // Game status (In Progress, X Wins, O Wins, Draw)

music.play();

// Function to handle cell clicks
function cellClicked(index) {
  if (gameStatus === 'In Progress' && board[index] === '') {
    board[index] = currentPlayer;
    updateBoard();
    checkWin();
    checkDraw();
    switchPlayer();
  }
}

// Function to update the board display
function updateBoard() {
  for (let i = 0; i < 9; i++) {
    document.getElementById('cell' + i).innerHTML = board[i];
  }
}

// Function to switch player after each move
function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  audioTurn.play();
  updateStatus();
}

// Function to check for a win
function checkWin() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];
  for (let condition of winConditions) {
    let [a, b, c] = condition;
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      gameStatus = currentPlayer + ' Wins';
      gameover.play();
      updateStatus();
      return;
    }
  }
}

// Function to print an image if the player wins
function printImageIfWinner() {
  if (checkWin(board, player)) {
      console.log("Player " + player + " wins!");
     // document.getElementById("excited.jpg").innerHTML = "<img src='excited.jpg' alt='Win!!!'>";
      let IMG=document.getElementsByClassName("imgbox").innerHTML = '<img src="excited.jpg" alt="" width="150">';
  } else {
      console.log("No winner yet.");
  }
}

// Function to check for a draw

function checkDraw() {
  if (!board.includes('')) {
    gameStatus = 'Draw';
    updateStatus();
  }
}

// Function to update game status
function updateStatus() {
  let statusMessage = '';
  if (gameStatus === 'In Progress') {
    statusMessage = 'Current Player: ' + currentPlayer;
  } else {
    statusMessage = gameStatus;
  }
  document.getElementById('status').innerHTML = statusMessage;
}

//function for reset game
function resetGame() {
  // Reset the game state variables
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameStatus = 'In Progress';
  isgameover = false;

  // Update the board display
  updateBoard();

  // Reset the status message
  updateStatus();

  // Reset any other game-related elements or effects (if needed)
}


