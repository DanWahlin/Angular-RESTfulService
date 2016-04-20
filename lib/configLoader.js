'use strict';

var env = process.env.NODE_ENV || 'development';

console.log('Node environment: ' + env);
console.log('loading config.' + env + '.json');

module.exports = require('../config/config.' + env + '.json');