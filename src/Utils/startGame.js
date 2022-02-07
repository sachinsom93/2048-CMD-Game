/**
 * Module to start the game.
*/

const { createGrid } = require('./createGrid');
const { fillRandomCell } = require('./fillRandomCell');

module.exports = {
    startGame: function(gridSize) {

        // Create Empty cell
        grid = createGrid(gridSize);

        // Fill two Position with 2 or 4
        fillRandomCell(grid, gridSize);
        fillRandomCell(grid, gridSize);

        return grid;
    }
}