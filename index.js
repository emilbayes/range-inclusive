module.exports = function rangeInclusive (start, stop, stepSize) {
  if (stop == null) {
    stop = start
    start = 1
  }
  if (stepSize == null) stepSize = 1

  var steps = (stop - start) / stepSize

  var set = []
  for (var step = 0; step <= steps; step++) set.push(start + step * stepSize)

  return set
}
