// DIFFICULTY LEVEL: HARD
// COMPANY TAGS: TEKION, LINKEDIN

function MyPromise(executor) {
  let onResolve;
  let onReject;
  let isFulfilled = false;
  let isRejected = false;
  let isCalled = false;
  let value;
  let error;

  function resolve(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === "function" && !isCalled) {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(err) {
    isRejected = true;
    error = err;
    if (typeof onReject === "function" && !isCalled) {
      onReject(erг);
      isCalled = true;
    }
  }

  this.then = function (thenHandler) {
    onResolve = thenHandler;
    if (!isCalled && isFulfilled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };

  this.catch = function (catchHandler) {
    onReject = catchHandler;
    if (!isCalled && isRejected) {
      onReject(error);
      isCalled = true;
    }
    return this;
  };
  executor(resolve, reject);
}
