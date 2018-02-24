var CacheSet = require('.')
var cache = new CacheSet()

cache.add(27, 419) // time-to-live, value

console.log(cache, cache.size)

setTimeout(function () {
  console.log(cache, cache.size) // will be empty
}, 28)
