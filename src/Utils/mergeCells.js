const config = require('../../config.json');

module.exports = {
    mergeCells: function (currCell, nextCell, grid, score) {
        var currCellVal = grid[currCell.row][currCell.col];
        var nextCellVal = grid[nextCell.row][nextCell.col];
        score[0] += Number(currCellVal) + Number(nextCellVal);
        grid[currCell.row][currCell.col] = currCellVal + nextCellVal;
        if (score[0] >= config.winningScore) {
            console.log(config.winMsg);
            process.exit();
        }
        grid[nextCell.row][nextCell.col] = config.emptySymbol;
    }
}
