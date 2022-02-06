/**
 * Module for slidding all the zeros
 * to one side of matrix or grid.
*/

module.exports = {
    slide: function(grid, newGrid) {
        for(let row = 0; row < grid.length; row++) {
            let filledCount = 0;
            for(let col = 0; col < grid.length; col++) {
                if(grid[row][col]) {
                    newGrid[row][filledCount] = grid[row][col];
                    filledCount++;
                }
            }
        }
        return newGrid;
    }
}