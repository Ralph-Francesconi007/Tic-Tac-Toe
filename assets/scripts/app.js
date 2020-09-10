'use strict'

const events = require('./sign-in/events')
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
  $('#restart-game').hide()
  $('#get-game').hide()
  $('#sign-up').on('submit', events.handleSignUp)
  $('#sign-in').on('submit', events.handleSignIn)
  $('#change-password').on('submit', events.handlePasswordChange)
  $('#sign-out').on('submit', events.handleSignOut)
  $('#create-game').on('click', gameEvents.handleCreateGame)
  $('#game').on('click', gameEvents.onBoxClick)
  $('#get-game').on('click', events.handleGetGames)
})
