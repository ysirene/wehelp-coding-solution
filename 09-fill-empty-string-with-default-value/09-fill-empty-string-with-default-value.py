def fill(words, value):
    result = [value if word == '' else word for word in words]
    return result
