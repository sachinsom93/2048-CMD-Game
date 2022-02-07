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
        for (var col = 0; col < gridSize; col++) {

            // Initial Row Value
            var row = gridSize - 1;

            // Curr and Next Cells
            currCell = {
                row: row,
                col: col
            };
            var nextCell = {
                row: row - 1,
                col: col
            };


            // Go to each row
            while (row > 0) {

                // Get Curr and Next Cell values
                row--;
                var currCellVal = grid[currCell.row][currCell.col];
                var nextCellVal = grid[nextCell.row][nextCell.col];

                // Check if both cells are full
                var isCurrCellFull = isValueNonEmpty(currCellVal);
                var isNextCellFull = isValueNonEmpty(nextCellVal);

                // Merging and Shifting
                if (isCurrCellFull && isNextCellFull) {
                    if (currCellVal == nextCellVal) {
                        mergeCells(currCell, nextCell, grid, score);
                        moved = true;
                    } else {
                        grid[currCell.row - 1][currCell.col] = nextCellVal;
                        if (currCell.row - 1 != nextCell.row) {
                            grid[nextCell.row][nextCell.col] = config.emptySymbol;
                        }
                    }
                    currCell = {
                        row: currCell.row - 1,
                        col: col
                    };
                } else {
                    let res = shiftCells(currCell, nextCell, grid);
                    moved = moved ? moved : res;
                }

                nextCell = {
                    row: row - 1,
                    col: col
                }
            }
        }
        return moved;
    }
}