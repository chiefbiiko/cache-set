const tape = require('tape')
const CacheSet = require('./index')

tape('self-clearing', t => {
  const cache = new CacheSet()
  cache.add(1000, 419)
  t.is(cache.size, 1, 'set set')
  setTimeout(() => {
    t.is(cache.size, 0, 'empty')
    t.end()
  }, 1001)
})

tape('iterables', t => {
  const cache = new CacheSet(419, [ 4, 1, 9 ])
  t.is(cache.size, 3, 'got three on it')
  setTimeout(() => {
    t.is(cache.size, 0, 'empty')
    t.end()
  }, 420)
})

tape('find', t => {
  const cache = new CacheSet(101, [ 4, 36, 44 ])
  const big = cache.find(v => v > 21)
  t.is(big, 36, 'found a number gt 21')
  t.end()
})

tape('willDelete cleanup hook', t => {
  t.plan(4)
  const cache = new CacheSet()
  cache.add(419, 'fraud', (value, doDelete) => {
    t.is(value, 'fraud', 'got the value passed in the willDelete hook')
    t.is(cache.size, 1, 'size 1 in willDelete hook')
    t.true(cache.has('fraud'), 'has "fraud" in willDelete hook')
    doDelete()
  })
  setTimeout(() => {
    t.is(cache.size, 0, 'size 0 once ttl exceeded')
  }, 500)
})
