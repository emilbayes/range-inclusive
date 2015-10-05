const test = require('tape')
const rangeInclusive = require('.')

test('single number', function (assert) {
  assert.deepEqual(rangeInclusive(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  assert.end()
})
test('range', function (assert) {
  assert.deepEqual(rangeInclusive(5, 7), [5, 6, 7])
  assert.end()
})
test('range, step size', function (assert) {
  assert.deepEqual(rangeInclusive(3, 9, 3), [3, 6, 9])
  assert.end()
})
test('negative range, step size', function (assert) {
  assert.deepEqual(rangeInclusive(7, 5, -1), [7, 6, 5])
  assert.end()
})
test('negative range, no output', function (assert) {
  assert.deepEqual(rangeInclusive(7, 5), [])
  assert.end()
})
test('single digit', function (assert) {
  assert.deepEqual(rangeInclusive(10, 10), [10])
  assert.end()
})
