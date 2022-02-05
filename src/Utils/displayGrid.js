/**
 * Module for displaying Grid.
*/
const chalk = require("chalk");
const { styledic } = require('./colors');

module.exports = {
    displayGrid: function(grid) {
        for(let row = 0; row < grid.length; row++) {
            for(let col = 0; col < grid.length; col++) {
                process.stdout.write(" | " + chalk.blue(grid[row][col]))
                if(col == grid.length - 1) {
                    process.stdout.write(" |")
                }
            }
            process.stdout.write('\n')
        }
    }
}