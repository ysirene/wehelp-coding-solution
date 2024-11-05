def checkArithmeticSequence(nums):
    nums.sort()
    difference = {nums[i] - nums[i+1] for i in range(len(nums)-1)}
    return len(difference) == 1
