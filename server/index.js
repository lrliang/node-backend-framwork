// config should be imported before importing any other file
const config = require('./config/config');
const app = require('./config/express');
require('./config/mongoose');

if (!module.parent) {
  // listen on port config.port
  app.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
  });
}

module.exports = app;
