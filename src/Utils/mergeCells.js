const config = require('../../config.json');

module.exports = {
    mergeCells: function (endpoint, toMergePos, grid) {
        var endpointVal = grid[endpoint.l][endpoint.b];
        var toMergeVal = grid[toMergePos.l][toMergePos.b];
        var score = endpointVal + toMergeVal;
        grid[endpoint.l][endpoint.b] = score;
        if (score >= config.winningScore) {
            console.log(gameMessages.won);
        }
        grid[toMergePos.l][toMergePos.b] = config.emptySymbol;
    }
}
