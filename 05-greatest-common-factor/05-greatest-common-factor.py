def findGCD(n1, n2):
    bigger_num = max(n1, n2)
    smaller_num = min(n1, n2)
    while bigger_num % smaller_num != 0:
        bigger_num, smaller_num = smaller_num, bigger_num % smaller_num
    return smaller_num