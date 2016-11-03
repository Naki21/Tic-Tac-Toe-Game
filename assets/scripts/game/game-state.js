'use strict';
const store = require('../store');





const changeTurn = function() {
  if (store.turn === "x") {
    store.turn = "o";
  } else {
    store.turn = "x";
  }
};

const winRow = function(turn, board) {

  if (board[0] === turn && board[1] === turn && board[2] === turn || board[3] === turn && board[4] === turn && board[5] === turn || board[6] === turn && board[7] === turn && board[8] === turn) {
    store.game.over = true;
  }
};

const winCol = function(turn, board) {

  if (board[0] === turn && board[3] === turn && board[6] === turn || board[1] === turn && board[4] === turn && board[7] === turn || board[2] === turn && board[5] === turn && board[8] === turn) {
    store.game.over = true;
  }
};

const winX = function(turn, board) {
  if (board[0] === turn && board[4] === turn && board[8] === turn || board[2] === turn && board[4] === turn && board[6] === turn) {
    store.game.over = true;
  }
};


const checkWin = function(turn, board) {
  winRow(turn, board);
  winCol(turn, board);
  winX(turn, board);
};

const updateCell = function(index, turn) {
  store.game.cells[index] = turn;
  checkWin(turn, store.game.cells);
};

module.exports = {
  checkWin,
  updateCell,
  changeTurn,
};
