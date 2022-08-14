def howSum(target, numbers):

    table = [None]*(target+1)
    
    table[0] = []

    for i in range(len(table)):
        if table[i] != None:
            for num in numbers :
                if i + num < len(table): 
                    table[i + num] = [*table[i], num]
                    print(table)
            i+=1

    return table[target]


print(howSum(7, [5, 3, 4]))