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

### `var cache = new CacheSet([ttl, iterable][, willDelete(value, doDelete)])`

Create a new `CacheSet` instance. If `iterable` is provided all passed items get added to the set during instantiation, and deleted after `ttl`. If `willDelete` is a function it will be called as a cleanup hook before items are deleted from the set but after `ttl` has exceeded. Make sure to call the `doDelete` callback at the end of the `willDelete` hook to actually perform the deletion.

### `cache.add(ttl, ...itemsAndOptionalwillDeleteHook)`

Provide `ttl`, time to live in ms, and a variable number of items that will get deleted from the set at the end of their lifetime. If the last argument is a function it will be called as a cleanup hook before items are deleted from the set but after `ttl` has exceeded. Make sure to call the `doDelete` callback at the end of the `willDelete` hook to actually perform the deletion.

### `cache.find(predicate)`

Find a value in the set. Equivalent to `Array.prototype.find`.

### `cache.some(predicate)`

Check if any `predicate(value)` is truthy. Equivalent to `Array.prototype.some`.

### `cache.every(predicate)`

Check if all `predicate(value)` are truthy. Equivalent to `Array.prototype.every`.

***

## License

[MIT](./license.md)
