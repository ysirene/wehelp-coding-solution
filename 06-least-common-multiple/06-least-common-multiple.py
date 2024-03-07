def findLCM(n1, n2):
    bigger_num = max(n1, n2)
    lcm = bigger_num
    while lcm % n1 != 0 or lcm % n2 != 0:
        lcm += bigger_num
    return lcm