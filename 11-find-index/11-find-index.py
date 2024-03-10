def findIndex(nums, target):
    try:
        result = nums.index(target)
    except ValueError:
        result = -1
    return result
