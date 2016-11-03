'use strict';
const store = require('../store.js');


const successNew = (data) => {
  store.game = data.game;
  $('#banner').text("X's Move");
};
const moveSuccess = (data) => {
  store.game = data.game;
};


const failure = (error) => {
  $("#messages").text("failure");
  console.error(error);
};

module.exports = {
  failure,
  successNew,
  moveSuccess
};
