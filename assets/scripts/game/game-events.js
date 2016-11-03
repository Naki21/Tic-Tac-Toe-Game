'use strict';
const api = require('./game-api');
const ui = require('./game-ui');
const store = require('../store');
const state = require('./game-state');

const onNewGame = function(event) {
  event.preventDefault();
  api.createGame()
    .then(ui.success)
    .catch(ui.failure);
};

const changeTurn = function() {
  if (store.turn === "x") {
    store.turn = "o";
  } else {
    store.turn = "x";
  }
};


const makeMove = function() {
  let data = {
    "game": {
      "cell": {
        "index": $(this).data("index"),
        "value": store.turn,
      },
      "over": false
    },
  };
  api.updateBoard(data)
    .then(ui.moveSuccess)
    .catch(ui.failure)
    // changeTurn();
  ;

};
const updateCell = function() {
  store.game.cells = {
    index: $(this).data("index"),
    value: store.turn,
  };
  $(this).text(store.turn);
  state.checkWin(store.turn, store.game.cells);
  makeMove();
  debugger
};




const addGameHandlers = () => {
  $('.new-game-button').on('submit', onNewGame);
  $('.box').on('click', updateCell);
};

module.exports = {
  addGameHandlers,
};
