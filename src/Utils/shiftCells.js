const config = require('../../config.json');
const { isValueNonEmpty } = require('../Utils/isValueNonEmpty');

module.exports = {
    shiftCells : function(endpoint, toMergePos, grid) {
        var moved = false;
        var endpointVal = grid[endpoint.l][endpoint.b];
        var toMergeVal = grid[toMergePos.l][toMergePos.b];

        var isEndPointEmpty = !isValueNonEmpty(endpointVal);
        var isMergeValFull = isValueNonEmpty(toMergeVal);

        if (isEndPointEmpty && isMergeValFull) {
            grid[toMergePos.l][toMergePos.b] = config.emptySymbol;
            grid[endpoint.l][endpoint.b] = toMergeVal;
            moved = true;
        }
        return moved;
    }
}