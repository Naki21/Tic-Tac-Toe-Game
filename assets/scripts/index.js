'use strict';

const authEvents = require('./auth/events.js');
const gameEvents = require('./game/game-events.js');
// On document ready
$(() => {
  authEvents.addHandlers();
  gameEvents.addGameHandlers();
  // loads sign up on page ready
  // $('#sign-up-modal').modal('show');

});
