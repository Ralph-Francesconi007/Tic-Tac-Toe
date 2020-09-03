'use strict'

const ticEvents = require('./sign-in/events')
const gameEvents = require('../../game/game.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#create-game').hide()
  $('#game').hide()
  $('#sign-up').on('submit', ticEvents.handleSignUp)
  $('#sign-in').on('submit', ticEvents.handleSignIn)
  $('#change-password').on('submit', ticEvents.handlePasswordChange)
  $('#sign-out').on('submit', ticEvents.handleSignOut)
  $('#create-game').on('submit', ticEvents.handleCreateGame)
  $('#game').on('click', gameEvents.onBoxClick)
  $('#restart-game').on('submit', gameEvents.restartGame)
})
