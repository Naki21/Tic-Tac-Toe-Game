'use strict';

const api = require('./game-api');
const ui = require('./game-ui');

const onNewGame = function (event) {

    let data = getFormFields(this);
    event.preventDefault();
    api.signUp(data)
      .then(ui.success)
      .catch(ui.failure);
      $('#sign-up-modal').modal('hide');
  };


module.exports = {
  onNewGame,
};
