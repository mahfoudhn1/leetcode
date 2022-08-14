def canConstruct(target, wordBank):
    table = [False]*(len(wordBank)+1)
    table[0] = True

    for i in range(len(table)):
        if table[i] == True:
            for word in wordBank:
                suffix = target.replace(word, '', 1)
                