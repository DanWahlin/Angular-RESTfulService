'use strict';

if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development';

var env = process.env.NODE_ENV;

console.log('Node environment: ' + env);
console.log('loading config.' + env + '.json');

module.exports = require('../config/config.' + env + '.json');