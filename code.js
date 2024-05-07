function depthFirstSearch(graph, startNode, targetNode) {
    if (startNode < 0 || startNode >= graph.length || targetNode < 0 || targetNode >= graph.length) {
        return [];
    }

    let path = [];
    let visit = new Array(graph.length).fill(false);
    
    if (DFS(graph, startNode, targetNode, visit, path)) {
        return path;
    } else {
        return [];
    }
}

function DFS(graph, start, target, visit, path) {
    visit[start] = true;
    path.push(start);

    if (start === target) {
        return true;
    }
    
    for (let i = 0; i < graph[start].length; i++) {
        let current = graph[start][i];
        if (!visit[current]) {
            if (DFS(graph, current, target, visit, path)) {
                return true;
            }
        }
    }
    path.pop();
    return false;
}