function checkArithmeticSequence(nums) {
  const firstDifference = nums[0] - nums[1];
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] - nums[i + 1] !== firstDifference) {
      return false;
    }
  }
  return true;
}
