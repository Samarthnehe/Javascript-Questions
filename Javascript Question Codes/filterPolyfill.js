// DIFFICULTY LEVEL: EASY

Array.prototype.myFilter = function (callback, thisArg) {
  if (!Array.isArray(this)) {
    throw new Error("Array.prototype.map can be applied only on array");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  // The new array that has to be returned
  const result = [];
  const array = this;
  // Iterate the array and check for each element if the callback returns a true. If yes, then add it to result, else skip
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      result.push(array[i]);
    }
  }
  return result;
};

const arr = [1, 2, 4];
const newArr = arr.myFilter((item, index) => {
  return item < 3; // only elements less than 3 should be added to result
});
console.log(newArr); // [1,2]
