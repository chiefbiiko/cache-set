var tape = require('tape')
var CacheSet = require('./index')

tape('self-clearing', function (t) {
  var cache = new CacheSet({ maxSize: 1000, maxAge: 1000 })
  cache.add(419)
  t.is(cache.size, 1, 'set set')
  setTimeout(function () {
    t.true(cache.size === 0, 'empty')
    t.end()
  }, 1001)
})

tape('maxSize', function (t) {
  var cache = new CacheSet({ maxSize: 5, maxAge: 10000 })
  for (var i = 419; i > 0; i--) cache.add(i)
  t.is(cache.size, 5, 'still 5 items')
  t.end()
})
