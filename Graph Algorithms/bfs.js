const bfs = (graph, source)=>{
    const qeue = [source]

    while(qeue > 0){
        const current = qeue.shift()
        console.log(current);
        for(let neighboor of graph[source]){
            qeue.push(neighboor)
        } 
    }
}

const graph = {
    a:['b', 'c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[],
}

bfs(graph, 'a')
