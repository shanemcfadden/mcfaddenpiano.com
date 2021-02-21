export function isInRange(i, rangeStart, rangeEnd) {
  if (i < 0) return null;
  if (rangeStart <= rangeEnd) return i >= rangeStart && i <= rangeEnd;
  return i >= rangeStart || i <= rangeEnd;
}

export function relativeIndexDifference(i, j, arrLength) {
  return (i + arrLength - j) % arrLength;
}
