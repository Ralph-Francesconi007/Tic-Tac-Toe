const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#create-user').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('sign-up failed')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#sign-in-message').text('You are signed in ' + response.user.email)
  $('#sign-in-message').trigger('reset')
  $('#create-game').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const signInFailure = function () {
  $('#sign-in-message').text('Could not sign in')
}

const passwordChangeSuccess = function (response) {
  $('#change-password-message').text('You have succesfully changed the password')
}

const passwordChangeFailure = function () {
  $('#change-password-message').text('Could not succesfully change the password')
}

const signOutSuccess = function (response) {
  $('#sign-out-message').text('Succesfully logged out')
  $('#create-game').hide()
}

const signOutFailed = function () {
  $('sign-out-message').text('could not sign out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordChangeSuccess,
  passwordChangeFailure,
  signOutSuccess,
  signOutFailed
}