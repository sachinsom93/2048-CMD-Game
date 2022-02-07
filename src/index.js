/**
 * Project Dependencies
 */
const { keypress } = require("./Dependencies/keypress");


/**
 * Project Utilities Function.
*/
const config = require('../config.json');
const { displayGrid } = require('./Utils/displayGrid');
const { fillRandomCell } = require('./Utils/fillRandomCell');
const { startGame } = require('./Utils/startGame');
const { moveGridToLeft } = require('./Movement/moveToLeft');
const { moveToRight }= require('./Movement/moveToRight');
const { moveToDown } = require('./Movement/moveToDown');
const { moveToUp } = require('./Movement/moveToUp');
const { gridSize } = require("../config.json");


/**
 * Global Vars
*/
const GRIDSIZE = gridSize;
const WELCOME_MSG = 'Welcome to 2048 CMD Game!';


/**
 * States of the game.
*/
var grid = startGame(GRIDSIZE);
var score = [0];
displayGrid(grid, score);

/**
 * Listent for Keypress Event.
*/
process.stdin.on("keypress", function (ch, key) {
  switch (key.name) {
    case "up":
      let movedUp = moveToUp(grid, GRIDSIZE, score);
      if(movedUp) {
        var haveEmptyCells = fillRandomCell(grid, GRIDSIZE);
        if(!haveEmptyCells) {
          console.log(config.overMsg);
          process.exit();
        }
      }
      displayGrid(grid, score);
      break;

    case "down":
      let movedDown = moveToDown(grid, GRIDSIZE, score);
      if(movedDown) {
        var haveEmptyCells = fillRandomCell(grid, GRIDSIZE);
        if(!haveEmptyCells) {
          console.log(config.overMsg);
          process.exit();
        }
      }
      displayGrid(grid, score);
      break;

    case "right":
      let movedRight = moveToRight(grid, GRIDSIZE, score);
      if(movedRight) {
        var haveEmptyCells = fillRandomCell(grid, GRIDSIZE);
        if(!haveEmptyCells) {
          console.log(config.overMsg);
          process.exit();
        }
      }
      displayGrid(grid, score);
      break;

    case "left":
      let movedLeft = moveGridToLeft(grid, GRIDSIZE, score);
      if(movedLeft) {
        var haveEmptyCells = fillRandomCell(grid, GRIDSIZE);
        if(!haveEmptyCells) {
          console.log(config.overMsg);
          process.exit();
        }
      }
      displayGrid(grid, score);
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