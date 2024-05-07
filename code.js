function depthFirstSearch(graph, startNode, targetNode) {
    let path = [];
    let visit = new Array(graph.length).fill(false);
    if (graph.length === 0 || DFS(graph, startNode, targetNode, visit, path) === false) {
        return [];
    } else {
        return path;
    }
}

function DFS(graph, start, target, visit, path) {
    if (start == target) {
        visit[start] = true;
        path.push(start);
        return true;
    }

    visit[start] = true;
    path.push(start);

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
