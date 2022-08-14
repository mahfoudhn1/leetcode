
# def canConstruct(target, wordBank, memo = {}):
#     if target in memo: return memo[target]
#     if target == '': return []
    
#     for word in wordBank:
#         if target.startswith(word):
#             suffix = target.replace(word, '', 1)

#             result = canConstruct(suffix, wordBank)
#             finalResult = [*result, word]
#             memo[target] = finalResult
#             return finalResult

#     memo[target] = False
#     return False





# print(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
# print(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
# print(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','eee','eeee','eeeee','eeeeee']))



def allConsutruct(target, wordBank, memo = {}):
    if target in memo: return memo[target]
    if target == '': return [[]]
    

    result = []
    for word in wordBank:
        if target.startswith(word):
            
            suffix = target.replace(word, '', 1)
            sufixway = allConsutruct(suffix, wordBank, memo)
            targetWays = list(map(lambda way: [word, *way],sufixway))  
            result.extend(targetWays)

    memo[target] = result
    return result

print(allConsutruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
print(allConsutruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
print(allConsutruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','eee','eeee','eeeee','eeeeee']))