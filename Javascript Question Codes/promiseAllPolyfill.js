// DIFFICULTY LEVEL: MEDIUM
// COMPANY TAGS: ZEPTO, RAZORPAY

function promiseAll(promises) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) {
      return reject(new Error("The argument must be an array"));
    }

    const results = [];
    let completed = 0;
    const total = promises.length;

    if (total === 0) {
      resolve(results);
      return;
    }

    // Loop through all the promises
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        function (res) {
          results[index] = res; // Store the resolved value at the corresponding index
          completed += 1;

          if (completed === total) {
            resolve(results); // Resolve with all the results when all promises are resolved
          }
        },
        function (error) {
          reject(error); // If any promise is rejected, reject the entire Promise.all
        }
      );
    });
  });
}
