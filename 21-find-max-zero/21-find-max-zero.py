"""
    @param nums:{[Integer]}
    @return :{Integer}
"""


def findMaxZero(nums):
    zero_lst = ''.join(map(str, nums)).split('1')
    return max(len(item) for item in zero_lst)


print(findMaxZero([0, 0, 0]))
