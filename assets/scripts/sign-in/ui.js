const store = require('./../store')

const showSignUp = function () {
  $('#sign-up').show()
  $('#sign-in').hide()
  $('.button-sign-in').show()
  $('.button-sign-up').hide()
}

const signUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#sign-out-message').html('')
  $('#sign-up').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Sign-Up Failed. Please try again')
  $('#sign-out-message').html('')
  $('#sign-up').trigger('reset')
}

const showSignIn = function () {
  $('#sign-in').show()
  $('#sign-up').hide()
  $('.button-sign-up').show()
  $('.button-sign-in').hide()
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#sign-in-message').text('You are Signed in ' + response.user.email)
  $('#message').html('')
  $('#sign-in').trigger('reset')
  $('#create-game').show()
  $('.changePassButton').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out-message').html('')
  $('.button-sign-up').hide()
}

const signInFailure = function () {
  $('#sign-in-message').text('Could not sign in. Please try again')
  $('#sign-out-message').html('')
  $('#sign-in').trigger('reset')
}

const changePass = function () {
  $('#change-password').show()
  $('.changePassButton').hide()
}

const passwordChangeSuccess = function (response) {
  $('#change-password-message').text('You have succesfully changed the password.')
  $('#sign-in-message').html('')
  $('#change-password').hide()
  $('.changePassButton').show()
  $('#change-password').trigger('reset')
}

const passwordChangeFailure = function () {
  $('#change-password-message').text('Could not succesfully change the password. Please try again')
  $('#change-password').trigger('reset')
}

const signOutSuccess = function (response) {
  $('#sign-out-message').text('Successfully logged out, Please Sign In')
  $('.button-sign-in').show()
  $('.button-sign-up').show()
  $('#sign-in-message').text('')
  $('#game').hide()
  $('#create-game').hide()
  $('#change-password').hide()
  $('#change-password-message').text('')
  $('#get-game').hide()
  $('#get-games').text('')
  $('#sign-out').hide()
  $('.changePassButton').hide()
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
  showSignUp,
  signUpSuccess,
  signUpFailure,
  showSignIn,
  signInSuccess,
  signInFailure,
  changePass,
  passwordChangeSuccess,
  passwordChangeFailure,
  signOutSuccess,
  signOutFailed,
  createGameSuccess,
  createGameFailure,
  getGamesSuccess,
  getGamesFailure
}
