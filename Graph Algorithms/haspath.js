// const hasPath = (graph, src, dst)=>{
//     if(src === dst) return true;
    
//     for(let neighboor of graph[src]){
//        if( hasPath(graph, neighboor, dst) === true){
//         return true;
//        }
//     }
//     return false
// }

// const graph = {
//     f: ['g', 'i'],
//     g: ['h'],
//     h: [],
//     i: ['g', 'k'],
//     j: ['i'],
//     k: []
//   };

// console.log(hasPath(graph, 'f', 'k'));

// bfs

const hasPathBfs = (graph, src, dst)=>{

    let qeue = [src]

    while(qeue.length > 0){
        
        const current = qeue.shift();
        
        if(current === dst) return true;
        
        for(neighboor in graph[current]){
            qeue.push(neighboor)
        }
    }
    return false
}


const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };

console.log(hasPathBfs(graph, 'f', 'k'));