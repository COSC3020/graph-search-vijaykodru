function depthFirstSearch(graph, startNode, targetNode) {
    let path = [];
    let visit = [];
    if(graph.length === 0 || DFS(graph, startNode, targetNode, visit, path) === false){
        return [];
    }
    else{
        return path;
    }    
}

function DFS(graph, start, target, visit, path){
    if(start == target){
        visit.push(start);
        path.push(start);
        return true;
    }

    visit.push(start);
    path.push(start);

    for(let i = 0; i < graph[start].length; i++){
        let current = graph[start][i];
        if(visit.indexOf(current) === -1){
            if(DFS(graph, current, target, visit, path)){
                return true;
            }
        }
    }
    path.pop();
    return false;
}
