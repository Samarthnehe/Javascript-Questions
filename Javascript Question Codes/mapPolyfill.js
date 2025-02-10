// DIFFICULTY LEVEL: EASY

Array.prototype.myMap = function (callback) {
  // check if myMap is applied on an array
  if (!Array.isArray(this)) {
    throw new Error("Array.prototype.map can be applied only on array");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  // result is what we return in the end, as map returns an array
  const result = [];
  const array = this;
  // run through the array and for each element, run the callback and get the new value corresponding to that item.
  for (let i = 0; i < array.length; i++) {
    result[i] = callback(array[i], i);
  }
  return result;
};

const arr = [1, 2, 4];
const newArr = arr.myMap((item, index) => {
  return item * 2;
});
console.log(newArr); // [2,4,8]
