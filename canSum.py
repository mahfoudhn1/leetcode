
# def canSum(n, arr, memo = {}):
#     if n in memo: return memo[n] 
    
#     if n == 0: return True
   
#     if n < 0 : return False
    
#     for i in arr:
#         reminder = n - i 
#         if canSum(reminder, arr) == True:
#             memo[n] = True
#             return True

#     memo[n] = False
#     return False            


# print(canSum(7, [2,3]))
# print(canSum(7, [5, 3, 4, 7]))
# print(canSum(7, [2,4]))
# print(canSum(300, [7, 14]))

# howSum

def howSum(target, nums, memo={}):
    
    if target in memo: return memo[target]
    
    if target == 0 : return []

    if target < 0: return None

    for num in nums:
        reminder = target - num 
        reminderResult = howSum(reminder, nums, memo)
        if reminderResult != None :
            memo[target] = [*reminderResult, num]
            return memo[target]
    
    memo[target] = None
    return None

    
# print(howSum(7, [2,3]))
# print(howSum(7, [5, 3, 4, 7]))
# print(howSum(7, [2,4]))
print(howSum(300, [7, 14]))