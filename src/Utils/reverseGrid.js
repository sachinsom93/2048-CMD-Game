/**
 * Module for reversing cells.
*/

module.exports = {
    reverseGrid: function(grid) {
        for(let row = 0; row < grid.length; row++) {
            grid[row].reverse();
        }
        return grid;
    }
}