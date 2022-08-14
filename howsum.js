var twoSum = (nums, target, memo={})=> {
    let hash = new Map();
    for(let i=0; i<nums.length; i++){
        let num1 = nums[i]
        let num2 = target - num1

        if(hash.has(num2)){
            return [i, hash.get(num2)]
        }
        hash.set(num1, i)
    }

};


console.log(twoSum([3,2,4], 9));