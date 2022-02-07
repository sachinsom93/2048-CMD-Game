/**
 * This module moves every cell to it's right
 * and, merge in case of eqaul cells and shifts.
*/


// Module Dependencies
const { isValueNonEmpty } = require('../Utils/isValueNonEmpty');
const { mergeCells } = require('../Utils/mergeCells');
const { shiftCells } = require('../Utils/shiftCells');
const config = require('../../config.json');


module.exports = {
    moveToUp: function (matrix, gridSize, score) {
        var currCell;
        var moved = false;
        for (var col = 0; col < gridSize; col++) {

            // Initial row number
            var row = 0;

            // Coordinates of Curr and Next Cell
            currCell = {
                row: row,
                col: col
            };
            var nextCell = {
                row: row + 1,
                col: col
            };

            // Go to each row
            while (row < gridSize) {

                // Change row to next row
                row++;

                // Get curr and next curr val
                var currCellVal = matrix[currCell.row][currCell.col];
                var nextCellVal = matrix[nextCell.row][nextCell.col];

                // Check if both cell full
                var isCurrCellFull = isValueNonEmpty(currCellVal);
                var isNextCellFull = isValueNonEmpty(nextCellVal);

                // Merging and Shifting
                if (isCurrCellFull && isNextCellFull) {
                    if (currCellVal == nextCellVal) {
                        mergeCells(currCell, nextCell, matrix, score);     // Merge equal Cells
                        moved = true;
                    } else {
                        matrix[currCell.row + 1][currCell.col] = nextCellVal;   // Shift Curr with Next
                        if (currCell.row + 1 != nextCell.row) {
                            matrix[nextCell.row][nextCell.col] = config.emptySymbol;
                        }
                    }

                    // Update Curr Cell
                    currCell = {
                        row: currCell.row + 1,
                        col: col
                    };
                } else {
                    let res = shiftCells(currCell, nextCell, matrix);   // Shift Curr with next Cell
                    moved = moved ? moved : res;
                }

                // Update next cell if possible
                if (row + 1 < gridSize) {
                    nextCell = {
                        row: row + 1,
                        col: col
                    }
                }
            }
        }
        return moved;
    }
}
