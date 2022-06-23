'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const handle500 = require('./error-handlers/500.js');
const handle404 = require('./error-handlers/404.js');
const logger = require('./middleware/logger.js');

const authRoutes = require('./auth/routes.js');
const v1Routes = require('./routes/v1.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

// Routes
app.use(authRoutes);

app.use('/api/v1', v1Routes);

// Catchalls
app.use(handle404);
app.use(handle500);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
