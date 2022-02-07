const keypress = require('keypress');

// make `process.stdin` begin emitting "keypress" events
function initiateIO() {
    keypress(process.stdin);
    if(process.stdin.isTTY) process.stdin.setRawMode(true);
    process.stdin.resume();
}

initiateIO()

module.exports = {
    keypress
}