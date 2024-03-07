function findLCM(n1, n2) {
  let biggerNum = Math.max(n1, n2);
  let lcm = biggerNum;
  while (lcm % n1 !== 0 || lcm % n2 !== 0) {
    lcm += biggerNum;
  }
  return lcm;
}
