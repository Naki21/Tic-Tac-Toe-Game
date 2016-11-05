'use strict';
const store = require('../store.js');


const success = () => {
  $("#messages").text("success");
};

const signInSuccess = (data) => {
store.user = data.user;
};



const failure = () => {
  $("#messages").text("failure");
};

module.exports = {
  failure,
  success,
  signInSuccess,
};
