function sumOfArithmeticSequence(min, max, differ) {
  let n = Math.floor((max - min) / differ) + 1;
  result = ((min + (min + differ * (n - 1))) * n) / 2;
  return result;
}
