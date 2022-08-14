const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    let visited = new Set([nodeA])
    let qeue = [[nodeA, 0]]

    while(qeue.length > 0){
        
        const [node, distance] = qeue.shift()

        if (node === nodeB) return distance
        
        for(let neighbor of graph[node]){
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                qeue.push([neighbor, distance+1])

            }
        }
    }
    return -1
};

const buildGraph = (edges)=>{
    let graph = {}
    for(let edge of edges){
        const [a, b] = edge

        if(!(a in graph)) graph[a] = []
        if(!(b in graph)) graph[b] = []

        graph[a].push(b)
        graph[b].push(a)
    }

    return graph

}

const edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];
console.log(shortestPath(edges, 'w', 'z'))