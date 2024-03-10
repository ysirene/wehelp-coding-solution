import re


def checkPassword(s):
    if len(s) < 8 or len(s) > 16:
        return False
    if not re.search(r'[A-Z]', s) or not re.search(r'[a-z]', s) \
            or not re.search(r'\d', s) or not re.search(r'[!@#$%]', s):
        return False
    if re.search(r'[^0-9a-zA-Z!@#$%]', s):
        return False
    return True
