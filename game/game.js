const api = require('../assets/scripts/sign-in/api')
const ui = require('../assets/scripts/sign-in/ui')
// Track board with javascript array
let gameBoard = ['', '', '', '', '', '', '', '', '']
// Don't let the users switch between X and O
let currentPlayer = 'X'
// To tell if the game is over or not
let gameOver = false
// Winning/tie/current players turn
const tieMessage = () => 'It looks like you guys had a tie, would you like to play again?'
const currentPlayerTurn = () => `It is ${currentPlayer}'s turn`
const spotTaken = () => 'Im sorry but that spot is taken, try again'
const winningMessage = () => `Congrats ${currentPlayer} you won! Would you like to play again?`

// Create win array for game
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8]
]
const onBoxClick = function (event) {
  const box = event.target
  if ((gameOver === false) && ($(box).text() !== 'X') && ($(box).text() !== 'O')) {
    const dataCell = $(box).attr('data-cell-index')
    gameBoard[dataCell] = currentPlayer
    $(box).text(currentPlayer)
    gameWin()
    gameTie()
    const data = {
      game: {
        cell: {
          index: dataCell,
          value: currentPlayer
        },
        over: gameOver
      }
    }
    api.updateGame(data)

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  }
}
// Game win function
const gameWin = function () {
  for (let i = 0; i < winningCombos.length; i++) {
    const arr = []
    const winCombo = winningCombos[i]
    arr.push(gameBoard[winCombo[0]])
    arr.push(gameBoard[winCombo[1]])
    arr.push(gameBoard[winCombo[2]])
    if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] !== '') {
      gameOver = true
      $('#player-win-message').text(winningMessage)
    }
  }
}

// Game tie function
const gameTie = function () {
  const gameSpot = gameBoard.includes('')
  if (gameSpot !== true && gameOver === false) {
    gameOver = true
    $('#player-tie-message').text(tieMessage)
  }
}

// restart the game function
const restartGame = function (event) {
  gameOver = false
  currentPlayer = 'X'
  gameBoard = ['', '', '', '', '', '', '', '']
  event.preventDefault()
  api.createGame()
    .then(ui.newGameMessage)
}

module.exports = {
  onBoxClick: onBoxClick,
  restartGame: restartGame
}
