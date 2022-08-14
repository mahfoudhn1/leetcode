class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

// const depthfirstvalue = (root)=>{
//     if (root === null) return [];
//     const stack = [root]
//     const results = []
//     while(stack.length > 0){
//         const current = stack.pop()
//         results.push(current.val)

//         if(current.right) stack.push(current.right)
//         if(current.left) stack.push(current.left)
//     }
//     return results;
// }




//recursion

// const depthfirstvalue = (root)=>{
//    if(root=== null) return []
//    const leftValues = depthfirstvalue(root.left)
//    const rightValues = depthfirstvalue(root.right)
   
//    return [root.val, ...rightValues, ...leftValues]
// }

// const a =new Node("a") 
// const b =new Node("b") 
// const c =new Node("c") 
// const d =new Node("d") 
// const e =new Node("e") 
// const f =new Node("f")

// a.right = b
// a.left = c
// b.right = d
// b.left = e
// c.left = f


// breadth first search 


// const breadthfirstvalues = (root)=>{
//     if(root === null) return []

//     const queue = [root]
//     const values = [] 
//     while(queue.length > 0){
        
//         const current = queue.shift()
        
//         values.push(current.val)
//         if(current.left) queue.push(current.left)

//         if(current.right) queue.push(current.right)
//     }
//     return values
// }

// console.log(breadthfirstvalues(a));

// looking for value 

// const breadthfirstvalues = (root)=>{
//     if(root === null) return false

//     const queue = [root]

//     while(queue.length > 0){
//         const current = queue.shift()
        

//         if(current.val == 'G'){
//             return true
//             break
//         }else{
//             if(current.right) queue.push(current.right)
//             if(current.left) queue.push(current.left)
                
//         }
//     }
//     return false
    
// }
// console.log(breadthfirstvalues(a));

//recursion


// const includedTree = (root, target)=>{
//     if(root === null) return false 

//     if(root.val == target) return true

//     return includedTree(root.left, target) || includedTree(root.right, target)
// }

// console.log(includedTree(a, "s"))




// const treeMinvalue = (root)=>{
//     const stack = [root]

//     let smalest = Infinity

//     while(stack.length > 0){

//         const current = stack.pop()
//         if(current.val < smalest ) smalest = current.val  
//         if(current.left !== null) stack.push(current.left)
//         if (current.right !== null) stack.push(current.right)
//     }
//     return smalest
// } 

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
//recursion 
// const treeMinvalue = (root)=>{
    
//     if(root === null) return Infinity
    
//     const leftValue = treeMinvalue(root.left)
//     const rightValue = treeMinvalue(root.right)
    
//     return Math.min(root.val, leftValue, rightValue)
// }


// console.log(treeMinvalue(a))

const maxPathsum = (root)=>{
    if(root === null) return -Infinity
    if(root.right === null && root.right === null) return root.val

    const maxValue = Math.max(maxPathsum(root.left), maxPathsum(root.right))
    return root.val + maxValue

}
console.log(maxPathsum(a));
