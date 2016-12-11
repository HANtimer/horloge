#!/usr/bin/env node

/**
 * Module dependencies
 */
const horloge = require('commander');
const chalk = require('chalk');
const readlineSync = require('readline-sync');

/**
 * Methods
 */
const runInterval = function (minutes, interval = process.env.HORLOGE_UNIT_VALUE, duration) {
  if (minutes === 0) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    if (readlineSync.keyInYN('do you want to start over again?')) {
      const newduration = duration;
      setTimeout(runInterval, interval, newduration - 1, interval, duration);
    } else {
      console.log("Time's up");
    }
  } else {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${minutes}mn left`);
    // calls runInterval after interval is elapsed with the updated parameters
    setTimeout(runInterval, interval, minutes - 1, interval, duration);
  }
};

/**
 * Interface
 */
const controls = {
  start(duration) {
    let minutes = duration;
    if (duration === undefined) {
      minutes = 25;
    } else if (minutes === '' || (minutes % 1) !== 0) {
      console.log(chalk.red.bold('<<<Please provide an integer value (ex. -> 5, 10, 12)>>>'));
      return;
    }
    runInterval(minutes, process.env.HORLOGE_UNIT_VALUE = 1000, duration);
  },
};

/**
 * Main
 */
horloge
  .command('start [duration]')
  .description('starts the horloge timer with a duration in minutes.')
  .action(controls.start);

horloge.parse(process.argv);
