const config = require('../../config.json');

module.exports = {
    isValueNonEmpty: function(val) {
        return val !== undefined && val !== "" && val !== config.emptySymbol;
    }
}