function breadthFirstSearch(startingNode, targetVal, visited = new Set()) {
  if (!startingNode) return null;

  let stack = [startingNode]; //b, c

  while (stack.length) {
    let node = stack.shift();
    if (node.val === targetVal) return node;
    if (visited.has(node.val)) continue;
    visited.add(node.val);
    stack.push(...node.neighbors);
  }
  return null;
}
//a: 'b', 'c'
//b: 'c', 'd'

module.exports = {
  breadthFirstSearch,
};
