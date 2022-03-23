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
const { moveToRight } = require('./Movement/moveToRight');
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
console.log(WELCOME_MSG);
displayGrid(grid, score);



/**
 * Listen for Keypress Event.
 */
process.stdin.on("keypress", function(ch, key) {

    // Check for key or number chars existence
    if (!key && !ch) {
        console.log('Please Use the Arrow Keys.')
        return;
    }

    // Extract Key name
    let keyName = key ? key.name : ch;

    // Functions for each directions
    switch (keyName) {
        case "up":
        case "3":
            let movedUp = moveToUp(grid, GRIDSIZE, score);
            if (movedUp) {
                var haveEmptyCells = fillRandomCell(grid, GRIDSIZE);
                if (!haveEmptyCells) {
                    console.log(config.overMsg);
                    process.exit();
                }
            }
            displayGrid(grid, score);
            break;

        case "down":
        case "4":
            let movedDown = moveToDown(grid, GRIDSIZE, score);
            if (movedDown) {
                var haveEmptyCells = fillRandomCell(grid, GRIDSIZE);
                if (!haveEmptyCells) {
                    console.log(config.overMsg);
                    process.exit();
                }
            }
            displayGrid(grid, score);
            break;

        case "right":
        case "2":
            let movedRight = moveToRight(grid, GRIDSIZE, score);
            if (movedRight) {
                var haveEmptyCells = fillRandomCell(grid, GRIDSIZE);
                if (!haveEmptyCells) {
                    console.log(config.overMsg);
                    process.exit();
                }
            }
            displayGrid(grid, score);
            break;

        case "left":
        case "1":
            let movedLeft = moveGridToLeft(grid, GRIDSIZE, score);
            if (movedLeft) {
                var haveEmptyCells = fillRandomCell(grid, GRIDSIZE);
                if (!haveEmptyCells) {
                    console.log(config.overMsg);
                    process.exit();
                }
            }
            displayGrid(grid, score);
            break;

        default:
            console.log('Please use valid keys.')
            break;
    }

    /**
     * Exit on pressing 'q' key
     */
    if (key && key.name == "q") {
        process.exit();
    }
});