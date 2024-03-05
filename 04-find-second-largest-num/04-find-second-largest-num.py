def findSecond(nums):
    nums_set = set(nums)
    sorted_nums = sorted(list(nums_set), reverse=True)
    return sorted_nums[1]

print(findSecond([1, 3, 3, 2, 5, -2]))