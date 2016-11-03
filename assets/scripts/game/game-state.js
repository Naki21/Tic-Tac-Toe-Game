'use strict';
const store = require('../store');





const changeTurn = function() {
  if (store.turn === "x" && store.game.over === false) {
    store.turn = "o";
    $('#banner').text("Os Move");
  } else if (store.game.over === false) {
    store.turn = "x";
    $('#banner').text("Xs Move");
  } else {
    $('.box').css('pointer-events', 'none');
    $('#banner').text(store.turn + "Wins!");
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
  if(store.game.over === true) {
  $('.box').css('pointer-events', 'none');

  }
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
