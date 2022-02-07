/**
 * This Module Move everything to down,
 * And merge only if two adjacent element
 * are equal.
 */

// Module Dependecies
const { isValueNonEmpty } = require('../Utils/isValueNonEmpty');
const { mergeCells } = require('../Utils/mergeCells');
const { shiftCells } = require('../Utils/shiftCells');
const config = require('../../config.json');


module.exports = {
    moveToDown: function (grid, gridSize, score) {
        var currCell;
        var moved = false;
        for (var row = 0; row < gridSize; row++) {

            // Initial row number
            var row = gridSize - 1;

            // Coordinates of curr and next cells
            currCell = {
                row: row,
                col: row
            };
            var nextCell = {
                row: row - 1,
                col: row
            };

            // Check to each row's each col
            while (row > 0) {
                row--;

                // Current and Next Cell values
                var currCellVal = grid[currCell.row][currCell.col];
                var nextCellVal = grid[nextCell.row][nextCell.col];

                // Check if both cells are empty or not
                var isCurrCellFull = isValueNonEmpty(currCellVal);
                var isNextCellFull = isValueNonEmpty(nextCellVal);

                // Merging and Shifting of Cells
                if (isCurrCellFull && isNextCellFull) {
                    if (currCellVal == nextCellVal) {
                        mergeCells(currCell, nextCell, grid, score);        // Merge Cells with Equal values
                        moved = true;
                    } else {
                        grid[currCell.row - 1][currCell.col] = nextCellVal;     // Shift Curr to Next
                        if (currCell.row - 1 != nextCell.row) {
                            grid[nextCell.row][nextCell.col] = config.emptySymbol;
                        }
                    }

                    // Update Curr Cell
                    currCell = {
                        row: currCell.row - 1,
                        col: row
                    };
                } else {
                    // Shift Curr to Next
                    let res = shiftCells(currCell, nextCell, grid);
                    moved = moved ? moved : res;
                }

                // Update Next Cell
                nextCell = {
                    row: row - 1,
                    col: row
                }
            }
        }
        return moved;
    }
}

