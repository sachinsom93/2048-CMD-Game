const config = require('../../config.json');

module.exports = {
    getEmptyCells: function (grid, gridSize) {
        var emptySpaces = [];
        for (var row = 0; row < gridSize; row++) {
            for (var col = 0; col < gridSize; col++) {
                var cell = grid[row][col];
                if (cell == "" || cell == undefined || cell == config.emptySymbol) {
                    emptySpaces.push({
                        "l": row,
                        "b": col
                    });
                }
            }
        }
        return emptySpaces;
    }
}

