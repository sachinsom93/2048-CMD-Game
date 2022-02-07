/**
 * Module for displaying Grid.
*/

const chalk = require('chalk');
const config = require('../../config.json');

module.exports = {
    displayGrid: function(grid, score) {

        // Clear the previous logs
        console.log('\033c');

        // Current Score
        process.stdout.write('Your Score: ' +  score[0] + '\n\n');

        // Value of each cell
        for(let row = 0; row < grid.length; row++) {
            for(let col = 0; col < grid.length; col++) {
                process.stdout.write(" | " + chalk.blue(grid[row][col]));
                if(col == grid.length - 1) {
                    process.stdout.write(" |");
                }
            }
            process.stdout.write('\n');
        }
        process.stdout.write('\n');

        // Target Score
        process.stdout.write('Target Score: ' + config.winningScore + '\n\n');

        // Key Instructions
        process.stdout.write('Press 1 or left arrow key for ' + chalk.bold('left') + ' movement.\n')
        process.stdout.write('Press 2 or right arrow key for ' + chalk.bold('right') + ' movement.\n')
        process.stdout.write('Press 3 or up arrow key for ' + chalk.bold('up') + ' movement.\n')
        process.stdout.write('Press 4 or up down key for ' + chalk.bold('down') +  ' movement.\n')
    }
}