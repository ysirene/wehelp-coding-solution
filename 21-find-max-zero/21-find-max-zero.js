/*
    @param nums:{[Integer]}
    @return :{Integer}
*/
function findMaxZero(nums) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count += 1;
    } else {
      count = 0;
    }
    if (count > max) {
      max = count;
    }
  }
  return max;
}

console.log(findMaxZero([0, 1, 0, 0, 0, 1, 0, 1]));
