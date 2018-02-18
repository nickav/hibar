hibar
========================================

JavaScript's missing functions.


## Install

```bash
yarn add hibar
```

There are three ways of using it:

### Magically

Hibar supports the magic lodash-styled syntax:

```javascript
const _ = require('hibar')
console.log(_.clamp(0, 1, 2))
```

This will automagically call the right function. See [Performance](#performance)
if that's a concern.

### Manually

If you'd prefer not to override the base JavaScript classes, you can import
and invoke these methods manually:

```javascript
const { array } = require('hibar')
console.log(array.equals([1], [1]))
```

### Polyfill

```javascript
require('hibar/polyfill')
console.log(Math.clamp(0, 1, 2))
```

This will monkey-patch the base JavaScript classes. To see the full list of
them see [./lib/polyfill.js](./lib/polyfill.js).

Note: This approach is not reccommended because 1) it makes your code harder To
read and 2) it makes your code rely on the polyfill being called *before* any
of your other code is run.


## Performance

Note when using the magic `_` function, there is a slight performance hit for
using functions with colliding names in the library (e.g. `compact` is both an
array and an object function).

If you're doing some intense computation, you should manually import and invoke
the method directly (as described in the [Manually](#manually) section).

### Development

To publish a new version of the package, install [np][np] then run:

```bash
np
```

[prettier]: https://github.com/prettier/prettier
[np]: https://github.com/sindresorhus/np
[yarn-install]: https://yarnpkg.com/lang/en/docs/install/
