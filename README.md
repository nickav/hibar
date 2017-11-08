hibar
========================================

JavaScript's missing functions.


## Install

```bash
yarn add hibar
```

There are two ways of using it:

### Polyfill

```javascript
require('hibar/polyfill')();
console.log(Math.clamp(0, 1, 2))
```

This will monkey-patch the base JavaScript classes. To see the full list of
them see [./lib/polyfill.js](./lib/polyfill.js).

### Manually

If you'd prefer not to override the base JavaScript classes, you can import
and invoke the methods manually:

```javascript
const array = require('hibar/array')
// const { array } = require('hibar')
console.log(array.equals([1], [1]))
```

Or

```javascript
const _ = require('hibar')
console.log(_.math.clamp(0, 1, 2))
```

### Development

To publish a new version of the package, install [np][np] then run:

```bash
np
```

[prettier]: https://github.com/prettier/prettier
[np]: https://github.com/sindresorhus/np
[yarn-install]: https://yarnpkg.com/lang/en/docs/install/
