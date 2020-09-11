const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Sign-Up Failed. Please try again')
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#sign-in-message').text('You are Signed in ' + response.user.email)
  $('#message').html('')
  $('#sign-in').trigger('reset')
  $('#create-game').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out-message').html('')
}

const signInFailure = function () {
  $('#sign-in-message').text('Could not sign in. Please try again')
  $('#sign-in').trigger('reset')
}

const passwordChangeSuccess = function (response) {
  $('#change-password-message').text('You have succesfully changed the password')
  $('#change-password').trigger('reset')
}

const passwordChangeFailure = function () {
  $('#change-password-message').text('Could not succesfully change the password. Please try again')
  $('#change-password').trigger('reset')
}

const signOutSuccess = function (response) {
  $('#sign-out-message').text('Successfully logged out, Please Sign In')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-in-message').text('')
  $('#game').hide()
  $('#create-game').hide()
  $('#change-password').hide()
  $('#change-password-message').text('')
  $('#get-game').hide()
  $('#get-games').text('')
  $('#sign-out').hide()
}

const signOutFailed = function () {
  $('#sign-out-message').text('Could not sign out')
}

const createGameSuccess = function (response) {
  store.game = response.game
  $('.box').html('')
  $('#sign-in-message').html('')
  $('#change-password-message').html('')
  $('#player-win-message').text('')
  $('#player-tie-message').text('')
  $('#game').show()
  $('#get-games').html('')
  $('#get-game').show()
}

const createGameFailure = function () {
  $('#create-game').text('Could not load game succesfully')
}

const getGamesSuccess = function (response) {
  $('#get-games').text(`You have played ${response.games.length} games`)
  $('#get-game').hide()
}

const getGamesFailure = function () {
  $('#get-games').text('Could not load games')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordChangeSuccess,
  passwordChangeFailure,
  signOutSuccess,
  signOutFailed,
  createGameSuccess,
  createGameFailure,
  getGamesSuccess,
  getGamesFailure
}
