const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');

const config = require('config');
const Joi = require('joi');
const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const helmet = require('helmet');
const morgan = require('morgan');
const courses = require('./routes/courses');
const home = require('./routes/home');

console.log(`NODE_ENV:${process.env.NODE_ENV}`);
console.log(`app:${app.get('env')}`);

// Pug
app.set('view engine','pug');
app.set('views','./views'); //default

app.use(express.json());
app.use(express.urlencoded({extended:true})); //key=value&key=value
app.use(express.static('public'));
app.use(helmet());
app.use('./api/courses',courses);
app.use('./',home);

// Environment 配置环境
if (app.get('env')==='development'){
    app.use(morgan('tiny'));
    console.log('Morgan enabled');
    startupDebugger('Morgan enabled');
}

// Db work...
dbDebugger('Connected to the database...');

// Configuration
console.log('Application Name: '+ config.get('name'));
console.log('Mail Server: '+ config.get('mail.host'));
//console.log('Mail Password: '+ config.get('mail.password'));

//Create custom middleware
app.use(logger);

app.use(function (req,res,next) {
    console.log('Authenticating...');
    next();
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port}...`));
