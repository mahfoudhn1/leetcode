const dps = (graph, source) =>{
    const stack = [source]

    while(stack.length > 0){
        const current = stack.pop();
        console.log(current);
        for(let neighboor of graph[current]){
            stack.push(neighboor)
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


dps(graph, "a")


// recursiv
const dpsrec = (graph, source) =>{
    
    console.log(source);
    for(let neighboor of graph[source]){
        dps(graph, neighboor)
    }


}



dpsrec(graph, "a")