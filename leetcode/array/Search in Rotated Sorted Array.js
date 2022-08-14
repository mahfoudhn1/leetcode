var search = (nums, target)=>{
    
    if(nums.length == 0 || nums == null) return -1;

    let left = 0;
    let right = nums.length-1;

    while(left< right){
        var mid = Math.floor((left+right)/2)
        if(target === nums[mid]) return mid
        if(nums[left] <= nums[mid]){
            if(nums[left] <= target && target <= nums[mid]) {
                right = mid - 1
            }
            else {
                left = mid + 1
            }
        }else{
            if(nums[mid] <= target &&  target <= nums[right]){
                left = mid + 1
            }
            else {
                right = mid - 1
            }

        }
    }
    return -1
};

nums = [4,5,6,7,0,1,2]

console.log(search(nums, 0));