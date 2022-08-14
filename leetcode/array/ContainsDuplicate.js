var containsDuplicate = (nums)=>{
    
    let value = new Set()

    for(let num of nums){
        if (value.has(num)) return true
        value.add(num)
    }
    return false
};

nums = [1,2,3,1]
console.log(containsDuplicate(nums));
