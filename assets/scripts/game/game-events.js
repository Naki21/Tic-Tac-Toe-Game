'use strict';
const api = require('./game-api');
const ui = require('./game-ui');
const store = require('../store');
const state = require('./game-state');

const onNewGame = function(event) {
  event.preventDefault();
  api.createGame()
    .then(ui.successNew)
    .catch(ui.failure);
};


const makeMove = function(index) {
  let data = {
    "game": {
      "cell": {
        "index": index,
        "value": store.turn,
      },
      "over": store.game.over,
    },
  };
  api.updateBoard(data)
    .then(ui.moveSuccess)
    .catch(ui.failure);
};

const updateBox = function () {
  $(this).text(store.turn);
  $(this).css('pointer-events', 'none');
  state.updateCell($(this).data("index"), store.turn);
  makeMove($(this).data("index"));
  state.changeTurn();
};



const addGameHandlers = () => {
  $('.new-game-button').on('submit', onNewGame);
  $('.box').on('click', updateBox);
};

module.exports = {
  addGameHandlers,
};
