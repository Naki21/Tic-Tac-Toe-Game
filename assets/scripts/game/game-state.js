'use strict';
const store = require('../store');

let board = store.game.cells;

const winRow = function(turn) {
  if(board[0] === turn && board[1] === turn && board[2] === turn) {
    console.log(store);
  }
};
};


const checkWin = function() {
  let board = store.game.cells;
  const winConditions = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];

for (let i = 0; i < winConditions.length; i++) {

  if (board[winConditions[i]] === "x"){
    store.game.over = true;
    store.game.winner = "x";
  } else if (board[winConditions[i]] === "o") {
    store.game.over = true;
    store.game.winner = "o";
  } else {
  store.game.over = false;
    }
  }
};

module.exports = {
  winRow,
};
