// DIFFICULTY LEVEL: MEDIUM

const originalSetTimeout = window.setTimeout; // actual setTimeout
let timeoutIds = [];

// re-write setTimeout
window.setTimeout = (callback, delay) => {
  const timerId = originalSetTimeout(callback, delay);
  timeoutIds.push(timerId);
  return timerId;
};

const clearAllTimeout = () => {
  timeoutIds.forEach((id) => window.clearTimeout(id));
};
