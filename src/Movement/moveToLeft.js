/**
 * This Module Move everything to left,
 * And merge only if two adjacent element
 * are equal.
 */

const { isValueNonEmpty } = require('../Utils/isValueNonEmpty');
const { mergeCells } = require('../Utils/mergeCells');
const { shiftCells } = require('../Utils/shiftCells');
const config = require('../../config.json');


module.exports = {
    moveGridToLeft: function (grid, gridSize, score) {
        var currentCell;
        var moved = false;
        for (var row = 0; row < gridSize; row++) {

            // Initial Col Number
            var col = 0;

            // Coordinates of curr and next cells
            currentCell = {
                row: row,
                col: 0
            };
            var nextCell = {
                row: row,
                col: col + 1
            };

            // Check to each row's each col
            while (col < gridSize) {
                col++;

                // Current and Next Cell values
                var currentCellVal = grid[currentCell.row][currentCell.col];
                var nextCellVal = grid[nextCell.row][nextCell.col];

                // Check if both cells are empty or not
                var isCurrCellFull = isValueNonEmpty(currentCellVal);
                var isNextCellFull = isValueNonEmpty(nextCellVal);

                // Merging and Shifting of Cells
                if (isCurrCellFull && isNextCellFull) {
                    if (currentCellVal == nextCellVal) {
                        mergeCells(currentCell, nextCell, grid, score);     // Merge cells with equal value
                        moved = true;
                    } else {
                        grid[currentCell.row][currentCell.col + 1] = nextCellVal;       // Changed Curr to next
                        if (currentCell.col + 1 != nextCell.col) {
                            grid[nextCell.row][nextCell.col] = config.emptySymbol;
                        }
                    }

                    // Update Curr Cell
                    currentCell = {
                        row: row,
                        col: currentCell.col + 1
                    };
                } else {
                    // Shift Current Cell to next Cell
                    let res = shiftCells(currentCell, nextCell, grid);
                    moved = moved ? moved : res;
                }

                // Update Next Cell
                nextCell = {
                    row: row,
                    col: col + 1
                }
            }
        }
        return moved;
    }
}
