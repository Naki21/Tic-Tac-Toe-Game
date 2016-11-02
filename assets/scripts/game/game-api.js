'use strict';
const config = require('../config.js');
const store = require('../store');

const createGame = () =>
$.ajax({
  url: config.host + "/games",
  method: 'POST',
  game: {},
  headers: {
  Authorization: 'Token token=' + store.user.token,
  },
});


module.exports = {
  createGame
};
