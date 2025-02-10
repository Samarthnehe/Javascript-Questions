function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    // If timeout is already created, clear it to cancel previous call 
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args); // Using spread to pass the arguments to the function
    }, delay);
  };
}
