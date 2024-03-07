function findGCD(n1, n2) {
  let biggerNum = Math.max(n1, n2);
  let smallerNum = Math.min(n1, n2);
  while (biggerNum % smallerNum != 0) {
    [biggerNum, smallerNum] = [smallerNum, biggerNum % smallerNum];
  }
  return smallerNum;
}
