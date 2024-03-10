function findMaxProduct(nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  return Math.max(nums.at(0) * nums.at(1), nums.at(-1) * nums.at(-2));
}
