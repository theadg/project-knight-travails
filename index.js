const createBoard = (height, width) => {
  return Array.from({ length: height }, () =>
    Array.from({ length: width }, () => 0)
  );
};

const knightMoves = (start, end) => {
  // Create a 2d game board
  const board = createBoard(8, 8);

  // put the moves in an array so we can loop over it
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const queue = [[start]];

  // This is where we are going to put all the visited nodes
  //  Set = is a collection of distinct values
  const visited = new Set();

  while (queue.length > 0) {
    // get the first move out of the array
    const path = queue.shift();
    // Get the last position from the path
    const pos = path[path.length - 1];

    // If the position is the end position
    // AKA the we're at the desired position
    if (pos[0] === end[0] && pos[1] === end[1]) {
      // Return the path
      return path;
    }

    // Mark the position as visited
    visited.add(pos.toString());

    // Navigating through the array
    for (let move of moves) {
      // the new position
      // we destructured here
      let newX = pos[0] + move[0];
      let newY = pos[1] + move[1];

      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
        if (!visited.has(`${newX},${newY}`))
          queue.push(path.concat([[newX, newY]]));
      }
    }
  }
};

console.log(knightMoves([0, 0], [1, 2]));

console.log(knightMoves([3, 3], [4, 3]));
