const { isValueNonEmpty } = require('../Utils/isValueNonEmpty');
const { mergeCells } = require('../Utils/mergeCells');
const { shiftCells } = require('../Utils/shiftCells');
const config = require('../../config.json');

module.exports = {
    moveGridToLeft: function (matrix, gridSize) {
        var endpoint;
        var moved = false;
        for (var length = 0; length < gridSize; length++) {

            var breadth = 0;
            endpoint = {
                l: length,
                b: 0
            };

            var toMergePos = {
                l: length,
                b: breadth + 1
            };


            while (breadth < gridSize) {
                breadth++;
                var endpointVal = matrix[endpoint.l][endpoint.b];
                var toMergeVal = matrix[toMergePos.l][toMergePos.b];

                var isEndPointFull = isValueNonEmpty(endpointVal);
                var isMergeValFull = isValueNonEmpty(toMergeVal);

                if (isEndPointFull && isMergeValFull) {
                    if (endpointVal == toMergeVal) {
                        mergeCells(endpoint, toMergePos, matrix);
                        moved = true;
                    } else {
                        matrix[endpoint.l][endpoint.b + 1] = toMergeVal;
                        if (endpoint.b + 1 != toMergePos.b) {
                            matrix[toMergePos.l][toMergePos.b] = config.emptySymbol;
                        }
                    }
                    endpoint = {
                        l: length,
                        b: endpoint.b + 1
                    };
                } else {
                    let res = shiftCells(endpoint, toMergePos, matrix);
                    moved = moved ? moved : res;
                }

                toMergePos = {
                    l: length,
                    b: breadth + 1
                }
            }
        }
        return moved;
    }
}
