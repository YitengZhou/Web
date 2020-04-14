"use strict";
const EventEmitter  = require('events');
var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message){
        // send an HTTP request
        console.log(message);
        // Raise a event
        this.emit('messageLogged',{id:1,url:'http://'}); // Making a noise, produce - signalling
    }
}
module.exports= Logger;