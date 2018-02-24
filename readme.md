# cache-set

[![build status](http://img.shields.io/travis/chiefbiiko/cache-set.svg?style=flat)](http://travis-ci.org/chiefbiiko/cache-set) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/chiefbiiko/cache-set?branch=master&svg=true)](https://ci.appveyor.com/project/chiefbiiko/cache-set)

***

A minimal cache that actually just is a Set.

***

## Get it!

```
npm install --save cache-set
```

***

## Usage

``` js
var CacheSet = require('cache-set')
var cache = new CacheSet()

cache.add(27, 419) // time-to-live, value

console.log(cache, cache.size)

setTimeout(function () {
  console.log(cache, cache.size) // will be empty
}, 28)
```

***

## API

### `var cache = new CacheSet([ttl, iterable])`

Create a new `CacheSet` instance. If `iterable` is provided, and `ttl` is a number (time to live in ms), all passed items get added to the set during instantiation.

### `cache.add([ttl, ...items])`

Provide `ttl`, time to live in ms, and a variable number of items that will get deleted from the set at the end of their lifetime.

***

## License

[MIT](./license.md)
