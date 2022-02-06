/**
 * Module to randomly add 2 or 4
 * to grid / matrix.
*/

module.exports = {
    fillRandomNum: function(grid) {
        let emptyCells = [];
        for(let row = 0; row < grid.length; row ++) {
            for(let col = 0; col < grid.length; col ++) {
                if(!grid[row][col]) {
                    emptyCells.push({
                        x: row,
                        y: col
                    })
                }
            }
        }
        if(emptyCells.length) {
            let emptyCell = emptyCells[Math.floor(Math.random() * grid.length)];
            let num = Math.random() > 0.5 ? 2 : 4;
            grid[emptyCell.x][emptyCell.y] = num;
        }
        return grid;
    }
}