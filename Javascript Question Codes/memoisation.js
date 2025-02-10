// DIFFICULTY LEVEL: MEDIUM
// COMPANY TAGS: MYNTRA, AMAZON, TEKION

function memoiseFn(fn) {
  let cache = {};

  return function (...args) {
    const key = JSON.stringify(...args);
    if (!cache[key]) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
}
// some function that takes long time
function expensiveFn(a, b, c) {
  const value = a * b * c;

  let finalValue = 0;
  for (let i = 0; i < value; i++) {
    finalValue += i;
  }
  return finalValue;
}

const memoExpensiveFn = memoiseFn(expensiveFn);

const time1 = new Date();
console.log(memoExpensiveFn(100, 300, 200));
console.log("Time without memo", new Date() - time1); //47ms

const time2 = new Date();
console.log(memoExpensiveFn(100, 300, 200));
console.log("time after memoised", new Date() - time2); // 0ms (cache)
