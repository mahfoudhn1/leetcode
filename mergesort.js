// helper
const merge = (leftArray, rightArray)=>{
    output = []
    leftIndex = 0;
    rightIndex = 0;
    while(leftIndex < leftArray.length && rightIndex < rightArray.length){
        if(leftArray[leftIndex] <= rightArray[rightIndex]){
            output.push(leftArray[leftIndex]);
            leftIndex++;
        }else{
            output.push(rightArray[rightIndex]);
            rightIndex++;    
        }
    }
    while(leftIndex < leftArray.length ){
        output.push(leftArray[leftIndex])
        leftIndex++;
    }
    while(rightIndex < rightArray.length){
        output.push(rightArray[rightIndex])
        rightIndex++;
    }
    return output
}

//recursive
const mergeSort = array=>{
    if (array.length <= 1) return array 
    const middIndex = Math.floor(array.length / 2)
    const leftArray = mergeSort(array.slice(0, middIndex))
    const rightArray = mergeSort(array.slice(middIndex))
    
    return merge(leftArray, rightArray)
    
   
}

const array = [3, 9, 2, 8, 11, 9, 15, 18, 6, 20]

console.log(mergeSort(array));