'use strict'
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_PREFIX: '"http://localhost:8090"',
  // API_PREFIX: '"http://10.7.192.215:8090"',
  TOKEN_NAME: '"access-token"'
});
