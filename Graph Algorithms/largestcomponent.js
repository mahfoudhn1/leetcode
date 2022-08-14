const largestComponent = (graph) => {
    
    const visited = new Set()
    let logest = 0
    for(let node in graph){
        let size = explor(graph, node, visited)
        if (size> logest) logest = size
    }
    return logest
};

const explor =(graph, current, visited)=>{
    if(visited.has(String(current))) return 0

    visited.add(String(current))
    
    let size = 1
    for(let neighbor of graph[current]){
        size += explor(graph, neighbor, visited)
    }
    return size 
}

console.log(largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
  }));