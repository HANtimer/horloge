#!/usr/bin/env node
/**
 * Module dependencies
 */
const horloge = require('commander');
const chalk = require('chalk');
const tic = require('./TC');

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
    tic.name(minutes, 1000, duration);
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
