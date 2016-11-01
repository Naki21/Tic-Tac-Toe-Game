'use strict';

const authEvents = require('./auth/events.js');

// On document ready
$(() => {
  $('#sign-up-modal').modal('show');
  authEvents.addHandlers();
});
