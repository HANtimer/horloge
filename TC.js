#!/usr/bin/env node
const readlineSync = require('readline-sync');

module.exports = {
  name: runInterval = function (minutes, interval, duration) { if (minutes === 0) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    if (readlineSync.keyInYN('do you want to start over again?')) {
      const newduration = duration;
      setTimeout(runInterval, interval, newduration - 1, interval, duration);
    } else {
      console.log("Time's up");
    } } else {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${minutes}mn left`);
      // calls runInterval after interval is elapsed with the updated parameters
    setTimeout(runInterval, interval, minutes - 1, interval, duration);
  } } };