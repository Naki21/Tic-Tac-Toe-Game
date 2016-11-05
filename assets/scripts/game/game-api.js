'use strict';
const config = require('../config');
const store = require('../store');

const createGame = () =>
$.ajax({
  url: config.host + "/games/",
  method: 'POST',
  game: {},
  headers: {
  Authorization: 'Token token=' + store.user.token,
  },
});

const updateBoard = (data) =>
$.ajax({
  url: config.host + "/games/" + store.game.id,
  method: 'PATCH',
  data,
  headers: {
  Authorization: 'Token token=' + store.user.token,
  },
});

const pullStat = function() {
return  $.ajax({
    url: config.host + "/games/",
    method: 'GET',
    headers: {
    Authorization: 'Token token=' + store.user.token,
    },
  });
};


module.exports = {
  createGame,
  updateBoard,
  pullStat,
};
