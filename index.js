const { injectBabelPlugin } = require('react-app-rewired');

function rewireGlamorousDisplayname(config, env) {
  config = injectBabelPlugin('glamorous-displayname', config);
  return config;
}

module.exports = rewireGlamorousDisplayname;
