/**
 * Module for shifting currCell to nextCell.
*/

// Module Dependencies
const config = require('../../config.json');
const { isValueNonEmpty } = require('../Utils/isValueNonEmpty');


module.exports = {
    shiftCells : function(currCell, nextCell, grid) {

        // Curr and next cell value
        var moved = false;
        var currCellVal = grid[currCell.row][currCell.col];
        var nextCellVal = grid[nextCell.row][nextCell.col];

        // Check if Curr Cell is Empty and Next is full
        var isCurrCellEmpty = !isValueNonEmpty(currCellVal);
        var isNextCellFull = isValueNonEmpty(nextCellVal);

        // Update Cells if Curr is empty and next is full
        if (isCurrCellEmpty && isNextCellFull) {

            // Update Next Cell
            grid[nextCell.row][nextCell.col] = config.emptySymbol;

            // Update Curr Cell
            grid[currCell.row][currCell.col] = nextCellVal;

            // Change Moved status
            moved = true;
        }
        return moved;
    }
}