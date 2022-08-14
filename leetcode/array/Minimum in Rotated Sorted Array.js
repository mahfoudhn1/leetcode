var findMin = (nums)=>{

    var start = 0
    var end  = nums.length - 1

    while(start < end){
        var mid = Math.floor((start + end)/2)
        if( nums[mid] < nums[mid - 1] ) return nums[mid]
        if(nums[mid] < nums[start] || nums[mid] < nums[end]){
            end = mid - 1
        }
        else{
            start = mid + 1
        }
    }
    return nums[start]
};

nums = [3,4,5,1,2]
// nums = [11,13,15,17]

console.log(findMin(nums));