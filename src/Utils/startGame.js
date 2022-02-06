/**
 * Module to start the game.
*/

const { createGrid } = require('./createGrid');
const { displayGrid } = require('./displayGrid');
const { fillRandomNum } = require('./filRandomNum');

module.exports = {
    startGame: function(gridSize) {

        // Create Empty cell
        grid = createGrid(gridSize);

        // Fill Position with Random Num
        grid = fillRandomNum(grid);

        // Again, Fill with Random Num
        grid = fillRandomNum(grid);

        // Display Grid
        displayGrid(grid);

        return grid;
    }
}