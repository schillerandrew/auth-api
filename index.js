'use strict';

require('dotenv').config();
const app = require('./src/server.js');
const { db } = require('./src/auth/models');
const { start } = require('./src/server.js');

db.sync()
  .then(() => app.start(process.env.PORT || 3002))
  .catch(e => console.error('Could not start server', e.message));