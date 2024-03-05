function findSecond(nums) {
  let maxNum = Math.max(nums[0], nums[1]);
  let secondMaxNum = Math.min(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > maxNum) {
      [maxNum, secondMaxNum] = [nums[i], maxNum];
    } else if (nums[i] < maxNum && nums[i] > secondMaxNum) {
      secondMaxNum = nums[i];
    }
  }
  return secondMaxNum;
}
