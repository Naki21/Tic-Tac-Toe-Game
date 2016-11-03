'use strict';
const api = require('./game-api');
const ui = require('./game-ui');
const store = require('../store');
const states = require('./game-states');

const onNewGame = function (event) {
    event.preventDefault();
    api.createGame()
      .then(ui.success)
      .catch(ui.failure);
  };
const changeTurn = function () {
  if (store.turn === "x") {
    store.turn = "o";
  } else {
    store.turn = "x";
  }
};



const makeMove = function () {
    let data = {
  "game": {
    "cell": {
      "index": $(this).data("index"),
      "value": store.turn,
    },
    "over": false
  },
};
$(this).text(store.turn);
    api.updateBoard(data)
    .then(ui.moveSuccess)
    .catch(ui.failure);
    states.winRow(store.turn);
    changeTurn();
};




  const addGameHandlers = () => {
    $('.new-game-button').on('submit', onNewGame);
    $('.box').on('click', makeMove);
  };

  module.exports = {
    addGameHandlers,
  };
