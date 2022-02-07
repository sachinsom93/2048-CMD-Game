/**
 * Module for merging curr and next cell,
 * in case of equal values.
*/

// Module Dependencies.
const config = require('../../config.json');


module.exports = {
    mergeCells: function (currCell, nextCell, grid, score) {

        // Get Curr and next Value
        var currCellVal = grid[currCell.row][currCell.col];
        var nextCellVal = grid[nextCell.row][nextCell.col];

        // Increase Score
        score[0] += Number(currCellVal) + Number(nextCellVal);

        // Update Curr Cell value
        grid[currCell.row][currCell.col] = currCellVal + nextCellVal;

        // Check for winning score
        if (score[0] >= config.winningScore) {
            console.log(config.winMsg);
            process.exit();
        }

        // Update next cell value.
        grid[nextCell.row][nextCell.col] = config.emptySymbol;
    }
}
