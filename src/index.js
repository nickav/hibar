const identity = require('./identity');

const libs = {
  array: require('./array'),
  fn: require('./fn'),
  identity,
  math: require('./math'),
  number: require('./number'),
  object: require('./object'),
  string: require('./string')
};

function muxCreater(key) {
  return function muxer() {
    const type = identity.typeOf(arguments[0]);
    const mapping = { function: 'fn' };
    const libType = type in mapping ? mapping[type] : type;
    const dynamicLib = libs[libType] || {};

    return key in dynamicLib
      ? dynamicLib[key].apply(null, arguments)
      : undefined;
  };
}

const hibar = Object.entries(libs).reduce((memo, [key, lib]) => {
  Object.entries(libs[key]).forEach(([libKey, libFn]) => {
    memo[libKey] = libKey in memo ? muxCreater(libKey) : libFn;
  }, {});
  return memo;
}, {});

module.exports = Object.assign({}, hibar, libs);
