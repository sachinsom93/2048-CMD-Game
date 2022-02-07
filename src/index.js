/**
 * Project Dependencies
 */
const { keypress } = require("./Dependencies/keypress");


/**
 * Project Utilities Function.
*/
const { gridSize } = require("../config.json");
const { slide }= require('./Utils/slide');
const { createGrid } = require('./Utils/createGrid');
const { displayGrid } = require('./Utils/displayGrid');
const { fillRandomCell } = require('./Utils/fillRandomCell');
const { startGame } = require('./Utils/startGame');
const { moveGridToLeft } = require('./Movement/moveToLeft');
const { moveToRight }= require('./Movement/moveToRight');
const { moveToDown } = require('./Movement/moveToDown');
const { moveToUp } = require('./Movement/moveToUp');


/**
 * Global Vars
*/
const GRIDSIZE = gridSize;
const WELCOME_MSG = 'Welcome to 2048 CMD Game!';
const GAMEOVER_MSG = 'Game Over!';
const WINNING_MSG = 'You Won! Continue to reach higher level';


/**
 * States of the game.
*/
var grid = startGame(GRIDSIZE);

/**
 * Listent for Keypress Event.
*/
process.stdin.on("keypress", function (ch, key) {
  switch (key.name) {
    case "up":
      let movedUp = moveToUp(grid, GRIDSIZE);
      if(movedUp) {
        var haveEmptyCells = fillRandomCell(grid, GRIDSIZE);
        if(!haveEmptyCells) {
          console.log(GAMEOVER_MSG);
          process.exit();
        }
      }
      displayGrid(grid);
      break;

    case "down":
      let movedDown = moveToDown(grid, GRIDSIZE);
      if(movedDown) {
        var haveEmptyCells = fillRandomCell(grid, GRIDSIZE);
        if(!haveEmptyCells) {
          console.log(GAMEOVER_MSG);
          process.exit();
        }
      }
      displayGrid(grid);
      break;

    case "right":
      let movedRight = moveToRight(grid, GRIDSIZE);
      if(movedRight) {
        var haveEmptyCells = fillRandomCell(grid, GRIDSIZE);
        if(!haveEmptyCells) {
          console.log(GAMEOVER_MSG);
          process.exit();
        }
      }
      displayGrid(grid);
      break;

    case "left":
      let movedLeft = moveGridToLeft(grid, GRIDSIZE);
      if(movedLeft) {
        var haveEmptyCells = fillRandomCell(grid, GRIDSIZE);
        if(!haveEmptyCells) {
          console.log(GAMEOVER_MSG);
          process.exit();
        }
      }
      displayGrid(grid);
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