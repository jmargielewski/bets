const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/decimalOddsLessThanTwo', { target: 'http://localhost:4000' }));
  app.use(proxy('/decimalOddsMoreThanTwo', { target: 'http://localhost:4000' }));
};
