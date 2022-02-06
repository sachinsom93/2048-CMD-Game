/**
 * Module for combining / merge cells.
*/

module.exports = {
    combineGrid: function(grid) {
        let combined = false;
        for(let row = 0; row < grid.length; row++) {
            for(let col = 0; col < grid.length-1; col++) {
                if(grid[row][col] && grid[row][col] === grid[row][col + 1]) {
                    grid[row][col] *= 2;
                    grid[row][col+1] = 0;
                    combined = true;
                    // NEED TO INCREASE SCORE
                }
            }
        }
        return {
            grid: grid,
            combined: combined
        }
    }
}