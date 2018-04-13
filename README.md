# react-app-rewire-glamorous-displayname

Add [babel-plugin-glamorous-displayname](https://github.com/bernard-lin/babel-plugin-glamorous-displayname) to a [create-react-app](https://github.com/facebookincubator/create-react-app) app via [react-app-rewired](https://github.com/timarney/react-app-rewired).

## Installation

```sh
yarn add --dev react-app-rewire-glamorous-displayname
```

or

```sh
npm install --save-dev  react-app-rewire-glamorous-displayname
```

## Usage

```javascript
// config-overrides.js
const rewireGlamorousDisplayname = require('react-app-rewire-glamorous-displayname');

module.exports = function override (config, env) {
  config = rewireGlamorousDisplayname(config, env);
  // other rewires...
  return config;
}
```

or

```javascript
// config-overrides.js
const { compose } = require('react-app-rewired')
const rewireGlamorousDisplayname = require('react-app-rewire-glamorous-displayname');

module.exports = compose(
  rewireGlamorousDisplayname,
  // other rewires...
);
```
