'use strict';
const store = require('../store.js');


const success = (data) => {
  $("#messages").text("success");
  console.log(data);
};

const signInSuccess = (data) => {
  if (store.player_x === null){
    store.player_x = data.user;
debugger
  } else if (store.player_o === null) {
    store.player_o = data.user;
    debugger
  } else {
    console.log("2 players already logged in!");
  }
console.log(data);

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
