/**
 * Project Dependencies
 */
const { keypress } = require("./Dependencies/keypress");
const { initiateGrid } = require("./Utils/gridInit");
const { gridSize } = require("../config.json");


/**
 * Global Vars
*/
const WELCOME_MSG = 'Welcome to 2048 CMD Game!';
const GAMEOVER_MSG = 'Game Over!';
const WINNING_MSG = 'You Won! Continue to reach higher level';


/**
 * Listent for Keypress Event
*/
process.stdin.on("keypress", function (ch, key) {
  switch (key.name) {
    case "up":
      console.log("Up key");
      break;

    case "down":
      console.log("Down key");
      break;

    case "right":
      console.log("Right key");
      break;

    case "left":
      console.log("Left key");
      break;

    default:
      break;
  }

  /**
   * Exit on pressing 'q' key
  */
  if (key && key.name == "q") {
    process.exit();
  }
});


/**
 * Welcome Message
*/
console.log(WELCOME_MSG);
console.log();


/**
 * Initiate grid
*/
initiateGrid(gridSize);


/**
 * Game Result.
*/
console.log()
console.log(WINNING_MSG)