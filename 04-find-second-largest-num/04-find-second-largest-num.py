def findSecond(nums):
    max_num = max(nums[0], nums[1])
    second_max_num = min(nums[0], nums[1])
    for i in range(2, len(nums)):
        if nums[i] > max_num:
            max_num, second_max_num = nums[i], max_num
        elif nums[i] < max_num and nums[i] > second_max_num:
            second_max_num = nums[i]
    return second_max_num