'use strict';
const store = require('../store');

const changeTurn = function() {
  if (store.turn === "x" && store.game.over === false) {
    store.turn = "X";
    $('#banner').text("O's Move");
  } else if (store.game.over === false) {
    store.turn = "X";
    $('#banner').text("X's Move");
  }
};


const winRow = function(turn, board) {

  if (board[0] === turn && board[1] === turn && board[2] === turn || board[3] === turn && board[4] === turn && board[5] === turn || board[6] === turn && board[7] === turn && board[8] === turn) {
    store.game.over = true;
    $('.box').css('pointer-events', 'none');
    $('#banner').text(store.turn + ' Wins!');
  }
};

const winCol = function(turn, board) {

  if (board[0] === turn && board[3] === turn && board[6] === turn || board[1] === turn && board[4] === turn && board[7] === turn || board[2] === turn && board[5] === turn && board[8] === turn) {
    store.game.over = true;
    $('.box').css('pointer-events', 'none');
    $('#banner').text(store.turn + ' Wins!');

  }
};

const winX = function(turn, board) {
  if (board[0] === turn && board[4] === turn && board[8] === turn || board[2] === turn && board[4] === turn && board[6] === turn) {
    store.game.over = true;
    $('.box').css('pointer-events', 'none');
    $('#banner').text(store.turn + ' Wins!');
  }
};

const checkCats = function(board) {
  if (board.every((cell) => cell !== '')) {
    store.game.over = true;
    $('.box').css('pointer-events', 'none');
    $('#banner').text('CATS!');
  }
};

const checkWin = function(turn, board) {
  winRow(turn, board);
  winCol(turn, board);
  winX(turn, board);
  checkCats(board);

};
const updateCell = function(index, turn) {
  store.game.cells[index] = turn;
  checkWin(turn, store.game.cells);
};

module.exports = {
  updateCell,
  changeTurn,
};
