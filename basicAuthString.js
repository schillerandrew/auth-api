'use strict';

let base64 = require('base-64');

let encodedAuthStr = `Basic ${base64.encode('user:password')}`;

console.log('encodedAuthStr', encodedAuthStr);