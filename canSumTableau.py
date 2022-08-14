def canSum(target, numbers):
    table = [False]*(target+1)
    table[0] = True


    for i in range(len(table)):
        for num in numbers:
            if i + num < len(table): 
                table[i+num] = True
        i += 1
    print(table)
    return table[target]

print(canSum(7, [5, 3, 4]))