import re


def checkPassword(s):
    pattern = '^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%])[A-Za-z0-9!@#$%]{8,16}$'
    result = re.match(pattern, s)
    return result is not None
