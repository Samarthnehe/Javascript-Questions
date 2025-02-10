// DIFFICULTY LEVEL: MEDIUM

function throttle(func, wait) {
  let flag = false; // flag to know if function is already called

  return function (...args) {
    if (!flag) {
      func(...args); // execute the function
      flag = true; // set the flag to true to prevent further execution

      setTimeout(() => {
        flag = false; // reset the flag after the specified wait time
      }, wait);
    }
  };
}
