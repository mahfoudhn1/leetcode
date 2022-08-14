var maxArea = (height)=>{
    let i=0, area = 0 , j= height.length - 1
    
    while(i<j){
        let temp = (j-i) * Math.min(height[i], height[j])
        area = Math.max(area, temp)

        if(height[i]> height[j]){
            j-=1
        }else{
            i+=1
        }
    }
    return area
};

height = [1,8,6,2,5,4,8,3,7]

console.log(maxArea(height));