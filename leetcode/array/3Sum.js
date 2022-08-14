var threeSum = (nums)=>{
    var solutions = []; 
    let hash = new Map()
    if(nums.length < 3) return solutions;
    nums.sort(function(a, b){return a - b});
    
    for(let i = 0; i < nums.length; i++){
        if( nums[i] > 0) break;
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1
        let right = nums.length - 1

   
        while(left < right){
            let value = nums[i] + nums[left] + nums[right]
            if(value === 0){
                solutions.push([nums[i], nums[left], nums[right]])

                left+=1
                right -=1
                while(nums[left] === nums[left -1 ] && left < right) left+=1
                while(nums[right] === nums[right + 1 ] && left < right) right-=1

            }
            if(value > 0 ){
                right-=1
            }
            if(value < 0){
                left+= 1
            }
            while( nums[i] === nums[i-1] && left < right){
                left +=1
            }
        }
  
    }

    return solutions
};  

nums = [[0,0,0,0]]
numssorted  = [-4,-1,-1,0,1,2]
// console.log( );
// console.log(threeSum(nums));
console.log(threeSum(nums)); 