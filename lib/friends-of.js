/**
 * In this file, you will implement the friendsOf function that will calculate
 * the group of friends that a person has a certain distance from them.
 *
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {string} name - The name of the person from where you will start your
 * search, never null or undefined
 * @param {number} distance - The distance away that you will traverse to find
 * the person's friends-of list, always a value greater than or equal to 1
 *
 * You will also need to implement a friendsOfRecursion function that will
 * recurse through your friends graph. friendsOf will call this.
 *
 * @param {string} name - the name of the person from where you will start
 * your search, never null or undefined.
 * @param {Object} adjacencyList - The adjacency list that describes the graph,
 * never null or undefined
 * @param {Set} visited - A list of all the graph nodes we have visited
 * @param {number} maxDistance - the maximum distance you want to recurse into
 * the graph, for example 1 should find immediate friends and 3 should find
 * immediate friends, friends of immediate friends, and friends of those friends
 * @param {number} currentDistance - the current distance we are at during our
 * recursion
 *
 * Hint: You can convert a Set into an Array using the `Array.from()` method.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
 *
 * Hint: refer to the documentation of Set on MDN here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

function friendsOfRecursion(
  name,
  adjacencyList,
  visited,
  maxDistance,
  currentDistance
) {
  throw new Error("Replace this error with your implementation.");
}

function friendsOf(adjacencyList, name, distance) {
  if (!adjacencyList[name]) return undefined;
  let result = [];

  let queue = [name];

  while (distance > 0) {
    let tempFriends = [];
    while (queue.length) {
      let friend = queue.shift();
      if (result.includes(friend)) continue;

      result.push(...adjacencyList[friend]);
      tempFriends.push(...adjacencyList[friend]);
      // console.log(queue.length);
    }
    if (!queue.length) {
      // console.log(distance);
      queue.push(...tempFriends);
      distance--;
    }
  }
  return result.filter((ele) => ele !== name);
}

/******************************************************************************
 * Do not change code beneath this line.
 */
try {
  exports.friendsOf = friendsOf;
} catch (e) {
  exports.friendsOf = () => {
    throw new Error("Cannot export friendsOf.");
  };
}

function friendsOf(adjacencyList, name, distance) {
  if (adjacencyList === {} || !(name in adjacencyList)) return undefined;
  let count = 0;
  const friends = new Set();
  friends.add(name);
  let queue = [name];
  while (count < distance) {
    let toAdd = [];
    while (queue.length) {
      let curr = queue.shift();
      adjacencyList[curr].forEach((friend) => {
        if (!friends.has(friend) && curr !== friend) {
          friends.add(friend);
          toAdd.push(friend);
        }
      });
    }
    count += 1;
    queue = [...toAdd];
    toAdd = [];
  }
  friends.delete(name);
  return Array.from(friends);
}
