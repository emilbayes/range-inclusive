`range-inclusive` [![Build Status][1]][2]
=============================================

> Generate a closed range of numbers `[a, b]` with step size `d`

Installation
------------

```bash
npm install range-inclusive
```

Usage
-----

```js
var rangeInclusive = require('range-inclusive')

rangeInclusive(10) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
rangeInclusive(3, 9, 3) // [3, 6, 9]
rangeInclusive(7, 5, -1) // [7, 6, 5]
```

License
-------

[ISC](LICENSE)

  [1]: https://travis-ci.org/emilbayes/range-inclusive.svg?branch=master
  [2]: https://travis-ci.org/emilbayes/range-inclusive
