var productExceptSelf =(nums)=>{
    
    var prod = new Array(nums.length).fill(1);
    var n = nums.length;
    var prefix = 1, suffix = 1;
    for (let i = 0; i < n; i++) {
        prod[i]*=prefix;
        prefix*=nums[i];
        prod[n-i-1]*=suffix;
        suffix*=nums[n-i-1];
    }

    return prod;
};

nums = [1,2,3,4]
console.log(productExceptSelf(nums))