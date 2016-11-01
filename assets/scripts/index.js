'use strict';

const authEvents = require('./auth/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  // loads sign up on page ready
  // $('#sign-up-modal').modal('show');

});
