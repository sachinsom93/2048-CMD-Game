const { generateRandomNum } = require('./generateRandomNum');
const { getEmptyCells } = require('./getEmptyCells');

module.exports = {
    fillRandomCell: function (grid, gridSize) {
        var emptySpacesFound = true;
        var emptySpaces = getEmptyCells(grid, gridSize);

        if (emptySpaces.length) {
            emptySpacesFound = true
        } else {
            emptySpacesFound = false;
            return emptySpacesFound;
        }

        var randomPosition = generateRandomNum(0, emptySpaces.length -1);
        var position = emptySpaces[randomPosition];

        var num = 2;
        var randomPosition2 = generateRandomNum(1, 2);
        if (randomPosition2 == 2) {
            num = 4;
        }

        grid[position.l][position.b] = num;
        return emptySpacesFound;

    }
}
