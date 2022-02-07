const config = require('../../config.json');

module.exports = {
    mergeCells: function (endpoint, toMergePos, grid, score) {
        var endpointVal = grid[endpoint.l][endpoint.b];
        var toMergeVal = grid[toMergePos.l][toMergePos.b];
        score[0] += Number(endpointVal) + Number(toMergeVal);
        grid[endpoint.l][endpoint.b] = endpointVal + toMergeVal;
        if (score[0] >= config.winningScore) {
            console.log(config.winMsg);
            process.exit();
        }
        grid[toMergePos.l][toMergePos.b] = config.emptySymbol;
    }
}
