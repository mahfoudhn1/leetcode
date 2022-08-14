const quicksort = (arr)=>{
    
    if (arr.length === 1){
        return arr
    }
    const pivot = arr[arr.length - 1]
    const leftArr = []
    const rightArr = []
    console.log(pivot);
    for (let i = 0; i < arr.length - 1; i++){
  
        if(arr[i] < pivot){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])

        }
    }
    if(leftArr.length > 0 && rightArr.length > 0){
        return [...quicksort(leftArr), pivot, ...quicksort(rightArr)]
    }
    else if(leftArr.length >0){
        return [...quicksort(leftArr), pivot]

    }
    else{
        return [pivot, ...quicksort(rightArr)]
    }

}

const array = [3, 70, 14, 87, 29, 1, 33, 23, 2, 89, 55] 

console.log(quicksort(array));
