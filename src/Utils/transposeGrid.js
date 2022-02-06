/**
 * Module for transversing grid.
*/

const { createGrid } = require('./createGrid');

module.exports = {
    transposeGrid: function(grid) {
        let newGrid = createGrid(grid.length);
        for(let row = 0; row < grid.length; row++) {
            for(let col = 0; col < grid.length; col++) {
                newGrid[row][col] = grid[col][row];
            }
        }
        return newGrid;
    }
}