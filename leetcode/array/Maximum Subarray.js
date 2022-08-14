var maxSubArray = (nums)=>{
    
    let maxSum = -Infinity
    let currentSum = 0

    for(let i = 0; i < nums.length; i++){ 

        currentSum = Math.max(nums[i], currentSum + nums[i])
        
        maxSum = Math.max(currentSum, maxSum)
        
    }
    return maxSum

};

var nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums));