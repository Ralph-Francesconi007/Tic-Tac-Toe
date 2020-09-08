'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const game = require('./../../../game/game')

let gameOver = false
let gameBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'

const handleSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const handleSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const handlePasswordChange = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.passwordChangeSuccess)
    .catch(ui.passwordChangeFailure)
}

const handleSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailed)
}

const handleCreateGame = function (event) {
  gameOver = false
  currentPlayer = 'X'
  gameBoard = ['', '', '', '', '', '', '', '', '']
  console.log(gameOver)
  api.createGame()
    .then(ui.createGameSuccess)
}

const handleGetGames = function (event) {
  api.getGames()
    .then(ui.getGamesSuccess)
}

module.exports = {
  handleSignUp: handleSignUp,
  handleSignIn: handleSignIn,
  handlePasswordChange: handlePasswordChange,
  handleSignOut: handleSignOut,
  handleCreateGame: handleCreateGame,
  handleGetGames: handleGetGames
}
