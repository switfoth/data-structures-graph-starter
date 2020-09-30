function breadthFirstSearch(startingNode, targetVal, visited = new Set()) {
    if (!startingNode) return null;
    let stack = [startingNode]
    while(stack.length){
        let node = stack.pop()
        if(visited.has(targetVal)) return node
        visited.add(node.val)
        stack.push(...node.neighbors)
    }

}

module.exports = {
    breadthFirstSearch
};
