// DIFFICULTY LEVEL: MEDIUM

function flattenArray(depth = 1) {
  // Ensure `depth` is an integer, default to 1
  depth = Math.floor(depth);

  function flatten(arr, depth) {
    // Base case
    if (depth === 0) return arr;

    // Create a new array to hold the flattened values
    const result = [];

    // Loop through each element of the array
    arr.forEach((item) => {
      // If the item is an array and depth > 0, recursively flatten it
      if (Array.isArray(item) && depth > 0) {
        result.push(...flatten(item, depth - 1)); // Recursion
      } else {
        result.push(item); // else push item
      }
    });

    return result;
  }

  // Call the flatten function with the current array and specified depth
  return flatten(this, depth);
}

const arr = [1, 2, [3, 4, [5, 6]]];
console.log(flattenArray(arr, 1)); // [1, 2, 3, 4, [5, 6]]
console.log(flattenArray(arr, 2)); // [1, 2, 3, 4, 5, 6]
