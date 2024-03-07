def sumOfArithmeticSequence(min, max, differ):
    result = 0
    for i in range(min, max+1, differ):
        result += i
    return result