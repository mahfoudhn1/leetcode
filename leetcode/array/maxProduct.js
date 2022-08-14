var maxProduct = (nums)=>{

    let maxProductvalue = 1
    let currentProduct = 1

    for(let i = 0; i< nums.length; i++){
        currentProduct = Math.max(currentProduct, currentProduct * nums[i])
        console.log(currentProduct * nums[i]);
        maxProductvalue = Math.max(maxProductvalue, currentProduct)
    }

    return maxProductvalue
};


nums = [2,3,-2,4]
console.log(maxProduct(nums));