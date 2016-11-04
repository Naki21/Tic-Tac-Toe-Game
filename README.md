Welcome to my Tic-Tac-Toe Game!

(Find it here)
https://naki21.github.io/tic-tac-toe-game/

It uses a variety of technologies. The main page is comprised of html, css, bootstrap and sass. The game mechanics rely heavily on jQuery.
The backend database is hosted on a rails server.
This allows for the user functions and for the storage of user and game information.

Below lists my general approach I took for this project.
 ![](https://lh3.googleusercontent.com/sw2uLei68RwIUQAX4hT2OLoC70JmQExFGHUYRGa6t-noSgoL_w5EabXfskXTcqWP3_y93OeztnxQwoOglnBxSjw7TyZUoScLVqDQs_sESm3NHeR2A-BmZhGNxyKhOOMH2r0UDCNeK4BVDDe0D5J8po21NoqR2_osvOMqT4Fiv9jh3I4gJApDuguwWy1H3FS83A4fFAhzwBNDBUfnpmeKVIU4zJ-lXNHaaw5leGxj62iswBO4k1ZBWXGTNKdV7U1W_mQuipRvgXlbttUc-U01dYdbO22hJrYKyiuYdNSjUQ3aTQsZK9Gjtoq8J1NpUt3MSvjJoTWV3cyQIG4I58QNSkihzZVouP-uN-MAgVV1t8NzQiMslCkJxC54NQBDnXsbY0F5CJ2Hk0hW6fOABFI0IZzPInjRiGO9GECuWfLeE8AxqvRXBik3i9ysTa1mulDweugDsf5oXeeu3jpQFyJu784qyO_RuTOM9O7HusY_46yvqC6S7Ci37J1uTGHMLtrLA28QADCM9bsOyzENG3bghgSyRvl3TsXrQ_tyRNfoJP-Fv9CsqsidkNHw5HE-8kybqimUeAAmiKG9up0DDR7SuIQ8lMe47D5LMihnKlcpLna9sQIh=w697-h938-no)

  - I plan on using an array (within the game object) which will determine the winner based on what idex in the array the player is taking up.

The game board will be an represented as an array indexed 0-8 with the first three indices bing row 1 the next three row 2 etc..

  - I will first make a basic html layout of the front end. I plan on working out all of the sign in/up/out processes first. Once I get that I will move onto game creation and game  play function requirements. Once I have the core complete I will move on to making the game look nice and the bonus.

USER STORIES:

  1) I am a new user and I want to sign up to play tic tac toe.

  2) I am an existing user and I want to sign in to play tic tac toe

  3) I am a signed in user and I wish to change my password

  4) I am a signed in user and I wish to sign out.

  5) I am a signed in user and I want to know whose turn it is.

  6) I am a competitive user and I want to know my game history.

  7) I am a online user and I wish to play with my friend online.


  -I will practice seperation of concerns using multiple file locations to seperate my code. (Files for API stuffs, for game locig stuff, for user storage stuff, etc..)

  I still have a few know bugs I need to work on:
As of 10/4/2016

  1) In adding some finishing CSS styling, my board now shifts the cells down whenever they are clicked.

  This is actually the only 'bug' I can think of the rest are stylistic things and grammer stuffs which I hope to change.
