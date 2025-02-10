// DIFFICULTY LEVEL: MEDIUM
// COMPANY TAGS: DREAM11, TEKION

const retryWithDelay = (promise, retries = 3) =>
  new Promise((resolve, reject) => {
    return promise()
      .then(resolve)
      .catch((reason) => {
        //if retries are left
        if (retries > 0) {
          console.log("Retrying...");
          return (
            //recursively call the same function to retry with max retries - 1
            retryWithDelay(promise, retries - 1, finalErr)
              .then(resolve)
              .catch(reject)
          );
        }

        // throw final error
        return reject("Retry failed");
      });
  });

function buggyPromise() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      return resolve("resolved");
    }
    return reject("rejected");
  });
}

retryWithDelay(buggyPromise, 3)
  .then((res) => console.log("Resolved", res))
  .catch((e) => console.error(e));
