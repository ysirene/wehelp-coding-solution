function checkPrime(n) {
  if (n == 1) {
    return false;
  }
  m = Math.min(n, Math.ceil(n ** 0.5) + 1);
  for (let i = 2; i < m; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
