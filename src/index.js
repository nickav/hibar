const identity = require('./identity');

const libs = {
  array: require('./array'),
  fn: require('./fn'),
  identity,
  math: require('./math'),
  number: require('./number'),
  object: require('./object'),
  string: require('./string'),
};

const muxCreater = key => {
  const typeMapping = { function: 'fn' };

  return (...args) => {
    const type = identity.typeOf(args[0]);
    const libType = type in typeMapping ? typeMapping[type] : type;
    const dynamicLib = libs[libType] || {};

    return key in dynamicLib ? dynamicLib[key].apply(null, args) : undefined;
  };
};

const hibar = Object.entries(libs).reduce((memo, [key, lib]) => {
  Object.entries(libs[key]).forEach(([libKey, libFn]) => {
    memo[libKey] = libKey in memo ? muxCreater(libKey) : libFn;
  }, {});
  return memo;
}, {});

module.exports = { ...hibar, ...libs };
