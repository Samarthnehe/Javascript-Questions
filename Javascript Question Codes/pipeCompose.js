// DIFFICULTY LEVEL: MEDIUM

const pipe =
  (...functions) =>
  /* value is the received argument */
  (value) => {
    /* reduce helps by doing the iteration over all functions stacking the result */
    return functions.reduce((currentValue, currentFunction) => {
      /* we return the current function, sending the current value to it */
      return currentFunction(currentValue);
    }, value);
  };

const compose =
  (...functions) =>
  /* value is the received argument */
  (value) => {
    /* reduce helps by doing the iteration over all functions stacking the result */
    return functions.reduceRight((currentValue, currentFunction) => {
      /* we return the current function, sending the current value to it */
      return currentFunction(currentValue);
    }, value);
  };
