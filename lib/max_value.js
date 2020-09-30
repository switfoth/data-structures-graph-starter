function maxValue(node, visited = new Set()) {
  if (!node) return null;
  let max = -Infinity;
  let stack = [node]; //b, c

  while (stack.length) {
    let currentNode = stack.shift();
    if (visited.has(currentNode.val)) continue;
    if (currentNode.val > max) max = currentNode.val;
    visited.add(currentNode.val);
    stack.push(...currentNode.neighbors);
  }
  return max;
}

module.exports = {
  maxValue,
};
