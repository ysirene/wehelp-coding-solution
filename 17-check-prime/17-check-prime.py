import math


def checkPrime(n):
    if n == 1:
        return False

    m = min(n, math.ceil(n ** 0.5) + 1)
    for i in range(2, m):
        if n % i == 0:
            return False

    return True
