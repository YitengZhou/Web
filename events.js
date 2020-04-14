"use strict";
const EventEmitter  = require('events'); //E需要大写因为是class

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged',function (arg) {
    console.log('Listener called',arg)
});
// Raise a event (move to logger)
// emitter.emit('messageLogged',{id:1,url:'http://'}); // Making a noise, produce - signalling
logger.log('message');