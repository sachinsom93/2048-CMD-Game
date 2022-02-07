/**
 * Module to start the game.
*/

const { createGrid } = require('./createGrid');
const { fillRandomCell } = require('./fillRandomCell');

module.exports = {
    startGame: function(gridSize) {

        // Create Empty cell
        grid = createGrid(gridSize);

        // Fill Position with Random Num
        let haveEmptyCells = fillRandomCell(grid, gridSize);

        return grid;
    }
}