// DIFFICULTY LEVEL: MEDIUM
// COMPANY TAGS: TEKION, AGODA

function curry(fn) {
  const curried = (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...moreArgs) => curried(...args, ...moreArgs);
    }
  };
  return curried;
}
