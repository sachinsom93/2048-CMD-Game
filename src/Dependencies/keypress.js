const keypress = require('keypress');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
}
process.stdin.resume();

module.exports = {
    keypress
}