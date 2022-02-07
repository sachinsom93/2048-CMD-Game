const { isValueNonEmpty } = require('../Utils/isValueNonEmpty');
const { mergeCells } = require('../Utils/mergeCells');
const { shiftCells } = require('../Utils/shiftCells');
const config = require('../../config.json');



module.exports = {
    moveToUp: function (matrix, gridSize, score) {
        var endpoint;
        var moved = false;
        for (var breadth = 0; breadth < gridSize; breadth++) {

            var length = 0;
            endpoint = {
                l: length,
                b: breadth
            };

            var toMergePos = {
                l: length + 1,
                b: breadth
            };


            while (length < gridSize) {
                length++;
                var endpointVal = matrix[endpoint.l][endpoint.b];
                var toMergeVal = matrix[toMergePos.l][toMergePos.b];

                var isEndPointFull = isValueNonEmpty(endpointVal);
                var isMergeValFull = isValueNonEmpty(toMergeVal);

                if (isEndPointFull && isMergeValFull) {
                    if (endpointVal == toMergeVal) {
                        mergeCells(endpoint, toMergePos, matrix, score);
                        moved = true;
                    } else {
                        matrix[endpoint.l + 1][endpoint.b] = toMergeVal;
                        if (endpoint.l + 1 != toMergePos.l) {
                            matrix[toMergePos.l][toMergePos.b] = config.emptySymbol;
                        }
                    }

                    endpoint = {
                        l: endpoint.l + 1,
                        b: breadth
                    };
                } else {
                    let res = shiftCells(endpoint, toMergePos, matrix);
                    moved = moved ? moved : res;
                }

                if (length + 1 < gridSize) {
                    toMergePos = {
                        l: length + 1,
                        b: breadth
                    }
                }

            }
        }
        return moved;
    }
}
