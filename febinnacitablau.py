from multiprocessing.dummy import Array


def fib(n):
    table = [0]*(n+1)
    table[1] = 1
    i = 0
    
    for i in range(len(table) - 1):

        if i + 1 <= len(table) - 1:
            table[i + 1] += table[i]
            if i + 2 <= len(table) - 1:
                table[i + 2] += table[i]

            i += 1

    return table


print(fib(6))