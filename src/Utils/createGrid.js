/**
 * Module for initializing Game 2048 Grid.
*/

module.exports = {
    createGrid: function(gridSize) {
        const grid = [];

        // Create Array in each row
        for(let row = 0; row < gridSize; row++) {
            grid[row] = new Array(gridSize);
        }

        // Initiate Grid
        for(let row = 0; row < gridSize; row++) {
            for(let col = 0; col < gridSize; col++) {
                grid[row][col] = 'x';
            }
        }
        return grid;
    }
}