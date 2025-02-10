// DIFFICULTY LEVEL: MEDIUM

function promiseAny(promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      return reject(new Error("The argument must be an array"));
    }

    let errors = [];
    let remaining = promises.length;

    if (remaining === 0) {
      return reject(new AggregateError("All promises were rejected", []));
    }

    promises.forEach(function (promise) {
      // run the promise, if it resolves, return resolve, else push decrease remaining count and push error to error array.
      Promise.resolve(promise).then(resolve, function (error) {
        errors.push(error);
        remaining -= 1;

        // If all promises are rejected, reject the final promise with an AggregateError
        if (remaining === 0) {
          reject(new AggregateError(errors, "All promises were rejected"));
        }
      });
    });
  });
}
