'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

let player = 'X'

const onBoxClick = function (event) {
  const box = $(event.target)
  box.text(player)
  player = player === 'X' ? 'O' : 'X'
}

module.exports = {
  handleSignUp: handleSignUp,
  handleSignIn: handleSignIn,
  handlePasswordChange: handlePasswordChange,
  handleSignOut: handleSignOut,
  handleCreateGame: handleCreateGame,
  onBoxClick: onBoxClick
}
