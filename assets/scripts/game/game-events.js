'use strict';
const api = require('./game-api');
const ui = require('./game-ui');

const onNewGame = function (event) {

    event.preventDefault();
    api.createGame()
      .then(ui.success)
      .catch(ui.failure);
  };


  const addGameHandlers = () => {
    $('.new-game-button').on('submit', onNewGame);
  };

  module.exports = {
    addGameHandlers,
  };
