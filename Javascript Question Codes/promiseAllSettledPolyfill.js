// DIFFICULTY LEVEL: MEDIUM
// COMPANY TAGS: TEKION

function promiseAllSettled(promises) {
  return new Promise(function (resolve) {
    if (!Array.isArray(promises)) {
      throw new TypeError("The argument must be an array");
    }

    const results = [];
    let completed = 0;
    const total = promises.length;

    if (total === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      // Wrap each promise in Promise.resolve() to ensure it can handle non-promise values
      Promise.resolve(promise)
        .then(
          (value) => {
            results[index] = { status: "fulfilled", value };
          },
          (reason) => {
            results[index] = { status: "rejected", reason };
          }
        )
        .finally(() => {
          completed += 1;
          if (completed === total) {
            resolve(results); // Resolve once all promises are settled
          }
        });
    });
  });
}
