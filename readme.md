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
var cache = new CacheSet({ maxAge: 419, maxSize: 419 })

cache.add(419)

setTimeout(function () {
  console.log(cache.size) // will print 0
}, 420)
```

***

## API

### `new CacheSet(conf)`

Create a new `CacheSet` instance. `conf` is required and must have to numeric properties: `conf.maxAge` and `conf.maxSize`.

***

## License

[MIT](./license.md)
