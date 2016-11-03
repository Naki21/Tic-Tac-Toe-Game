'use strict';
const store = require('../store.js');


const successNew = (data) => {
  store.game = data.game;
  $('#banner').text("X's Move");
  $('.box').css('pointer-events', 'auto');
};
const moveSuccess = (data) => {
  store.game = data.game;
};

const failure = (error) => {
  $("#messages").text("failure");
  console.error(error);
};

const successStat = function(data){
  $('.stats-modal-body').text(JSON.stringify(data.game));
  console.log(data);
};

module.exports = {
  failure,
  successNew,
  moveSuccess,
  successStat,
};
