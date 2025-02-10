// DIFFICULTY LEVEL: MEDIUM
// COMPANY TAGS: ZEPTO, INTUIT, ZETA

Array.prototype.myReduce = function (callback, initialValue) {
  if (!Array.isArray(this)) {
    throw new Error("Array.prototype.map can be applied only on array");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const array = this;
  let index = 0;
  let accumulator = initialValue; // accumulator starts with initial value

  if (!accumulator) {
    accumulator = array[0]; // if initialValue not given, the first element of array is taken as initial
    index = 1; //Now we iterate array from index 1
  }
  for (let i = index; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]); // update accumulator with the new value returned from callback.
  }

  return accumulator;
};

const arr = [1, 2, 4];

const newArr = arr.myReduce((accumulator, current) => {
  accumulator = accumulator + current;
  return accumulator;
}, 0);
console.log(newArr); // 7
