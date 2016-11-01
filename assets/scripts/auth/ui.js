'use strict';
const store = require('../store.js');


const success = (data) => {
  $("#messages").text("success");
  console.log(data);
};

const signInSuccess = data => {
  store.user = data.user;
console.log(data);
debugger

};



const failure = (error) => {
  $("#messages").text("failure");
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
};
