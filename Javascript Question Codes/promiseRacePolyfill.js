// DIFFICULTY LEVEL: EASY

function promiseRace(promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("The argument must be an array"));
    }

    // Loop through all the promises
    promises.forEach(function (promise) {
      // Make sure that the promise is a valid promise-like object
      Promise.resolve(promise).then(resolve, reject);
    });
  });
}
