def ffill(words):
    for i in range(1, len(words)):
        if words[i] == "":
            words[i] = words[i-1]
    return words
