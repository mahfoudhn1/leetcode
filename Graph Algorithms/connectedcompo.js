const connectedComponentsCount = (graph) => {

    let visited = new Set()
    let count = 0
    
    for(let node in graph){
        if(explor(graph, node, visited)===true){
            count+= 1
        }
    }
    return count
};
  
const explor = (graph, current, visited)=>{
    if(visited.has(String(current))) return false;
    visited.add(String(current))

    for(let neighboor of graph[current]){
        explor(graph, neighboor, visited)
    }
    return true
}

console.log(connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  }));
