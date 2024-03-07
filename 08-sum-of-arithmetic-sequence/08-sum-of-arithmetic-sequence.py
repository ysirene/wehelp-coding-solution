def sumOfArithmeticSequence(min, max, differ):
    n = (max-min) // differ + 1
    result = (min+(min+(differ*(n-1))))*n/2
    return result
