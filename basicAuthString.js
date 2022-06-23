'use strict';

let base64 = require('base-64');

let encodedAuthStr = `Basic ${base64.encode('andrew:andrew')}`;

console.log('encodedAuthStr', encodedAuthStr);