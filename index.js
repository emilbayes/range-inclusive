module.exports = function rangeInclusive (start, stop, step) {
  if (stop == null) {
    stop = start
    start = 1
  }
  if (step == null) step = 1

  var set = []
  for (; (stop - start) * step >= 0; start += step) set.push(start)

  return set
}
