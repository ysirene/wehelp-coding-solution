def findIndexes(nums, target):
    target_index = []
    for i in range(len(nums)):
        if nums[i] == target:
            target_index.append(i)
    return target_index
