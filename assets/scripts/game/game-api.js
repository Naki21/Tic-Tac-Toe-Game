'use strict';
const config = require('../config');
const store = require('../store');

const createGame = () =>
$.ajax({
  url: config.host + "/games/",
  method: 'POST',
  game: {},
  headers: {
  Authorization: 'Token token=' + store.player_x.token,
  },
});

const updateBoard = (data) =>
$.ajax({
  url: config.host + "/games/" + store.game.id,
  method: 'PATCH',
  data,
  headers: {
  Authorization: 'Token token=' + store.player_x.token,
  },
});

const pullStat = function(dat) {
return  $.ajax({
    url: config.host + "/games/" + dat.id,
    method: 'GET',
    headers: {
    Authorization: 'Token token=' + store.player_x.token,
    },
  });
};


module.exports = {
  createGame,
  updateBoard,
  pullStat,
};
