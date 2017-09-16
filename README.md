hibar
========================================

JavaScript's missing functions.


## Installing

```bash
yarn add hibar
```

There are two ways of using it:

### Polyfill

```javascript
require('hibar').polyfill();
```

This will add methods to the base JavaScript classes. To see the full list of them see [./lib/polyfill.js](./lib/polyfill.js).

### Manually

```javascript
const array = require('hibar/array')
console.log(array.equals([1], [1]))
```

```javascript
const _ = require('hibar')
_.array.equals([1], [1])
_.math.clamp(0, 1, 2)
```

```javascript
const _ = require('hibar')
_.equals([1], [1])
_.clamp(0, 1, 2)
```

[prettier]: https://github.com/prettier/prettier
[yarn-install]: https://yarnpkg.com/lang/en/docs/install/
