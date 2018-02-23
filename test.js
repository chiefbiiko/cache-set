var tape = require('tape')
var CacheSet = require('./index')

tape('self-clearing', function (t) {
  var cache = new CacheSet()
  cache.add(1000, 419)
  t.is(cache.size, 1, 'set set')
  setTimeout(function () {
    t.is(cache.size, 0, 'empty')
    t.end()
  }, 1001)
})

tape('iterables', function (t) {
  var cache = new CacheSet(419, [ 4, 1, 9 ])
  t.is(cache.size, 3, 'got three on it')
  setTimeout(function () {
    t.is(cache.size, 0, 'empty')
    t.end()
  }, 420)
})
