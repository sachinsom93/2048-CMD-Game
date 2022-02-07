const { isValueNonEmpty } = require('../Utils/isValueNonEmpty');
const { mergeCells } = require('../Utils/mergeCells');
const { shiftCells } = require('../Utils/shiftCells');
const config = require('../../config.json');



module.exports = {
    moveToRight : function (grid, gridSize, score) {
        var currCell;
        var moved = false;
        for (var length = 0; length < gridSize; length++) {

            // Initial Col Number
            var col = gridSize - 1;

            // Coordinates of curr and next cells
            currCell = {
                row: length,
                col: col
            };
            var nextCell = {
                row: length,
                col: col - 1
            };

            // Move to each col
            while (col > 0) {
                col--;

                // Curr and Next Cell values
                var currCellVal = grid[currCell.row][currCell.col];
                var nextCellVal = grid[nextCell.row][nextCell.col];

                // Check if both cells full
                var isCurrCellFull = isValueNonEmpty(currCellVal);
                var isNextCellFull = isValueNonEmpty(nextCellVal);

                // Merging and Shifting Cell
                if (isCurrCellFull && isNextCellFull) {
                    if (currCellVal == nextCellVal) {
                        mergeCells(currCell, nextCell, grid, score);    // Merge equal Cells

                        // Update Cells
                        currCell = {
                            row: length,
                            col: currCell.col - 1
                        };
                        moved = true;
                    } else {
                        grid[currCell.row][currCell.col - 1] = nextCellVal;     // Shift Curr to Next
                        if (currCell.col - 1 != nextCell.col) {
                            grid[nextCell.row][nextCell.col] = config.emptySymbol;
                        }

                        // Update Curr Cell
                        currCell = {
                            row: length,
                            col: currCell.col - 1
                        };
                    }
                } else {
                    let res = shiftCells(currCell, nextCell, grid);     // Shift Curr to Next Cell
                    moved = moved ? moved : res;
                }

                // Update Next Cell
                nextCell = {
                    row: length,
                    col: col - 1
                }
            }
        }
        return moved;
    }
}
