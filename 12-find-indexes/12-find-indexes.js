function findIndexes(nums, target) {
  let targetIndex = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      targetIndex.push(i);
    }
  }
  return targetIndex;
}
