'use strict';
const store = require('../store');





const changeTurn = function() {
  if (store.turn === "x") {
    store.turn = "o";
  } else {
    store.turn = "x";
  }
};

// const checkWinner = function () {
//   if(store.game.over === true) {
//      = store.turn;
//   }
// }
const winRow = function(turn, board) {

  if(board[0] === turn && board[1] === turn && board[2] === turn) {
    console.log(store);
  } else if (board[3] === turn && board[4] === turn && board[5] === turn) {
    console.log(store);
  } else if (board[6] === turn && board[7] === turn && board[8] === turn) {
    console.log(store);
  }
};

const winCol = function(turn, board) {

  if(board[0] === turn && board[3] === turn && board[6] === turn) {
    console.log(store);
  } else if (board[1] === turn && board[4] === turn && board[7] === turn) {
    console.log(store);
  } else if (board[2] === turn && board[5] === turn && board[8] === turn) {
    console.log(store);
  }
};

const winX = function(turn, board) {

  if(board[0] === turn && board[4] === turn && board[8] === turn) {
    console.log(store);
  } else if (board[2] === turn && board[4] === turn && board[6] === turn) {
    console.log(store);
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
