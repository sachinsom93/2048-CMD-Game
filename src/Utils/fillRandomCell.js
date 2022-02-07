/**
 * Module for filling random cell with 2 or 4.
*/

const { generateRandomNum } = require('./generateRandomNum');
const { getEmptyCells } = require('./getEmptyCells');

module.exports = {
    fillRandomCell: function (grid, gridSize) {

        // Get Empty Cells
        var emptySpacesFound = true;
        var emptySpaces = getEmptyCells(grid, gridSize);

        if (emptySpaces.length) {
            emptySpacesFound = true
        } else {
            emptySpacesFound = false;
            return emptySpacesFound;
        }

        // Choose empty cell randomly
        var randomPosition = generateRandomNum(0, emptySpaces.length -1);
        var position = emptySpaces[randomPosition];

        // Create Random Number 2 or 4
        var num = Math.random() > 0.5 ? 2 : 4;

        // Update Grid
        grid[position.l][position.b] = num;

        return emptySpacesFound;

    }
}
