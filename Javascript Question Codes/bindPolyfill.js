// DIFFICULTY LEVEL: MEDIUM
// COMPANY TAGS: RAZORPAY, AMAZON

function printName(city, country) {
  console.log(`${this.firstName} ${this.lastName}, ${city} - ${country}`);
}

const myName = {
  firstName: "Samarth",
  lastName: "Nehe",
};

Function.prototype.myBind = function (...args) {
  var callback = this;
  let bindArgs = args.splice(1);
  return function (...args2) {
    // Same implementation of call
    let currentContext = args[0]; // First arg becomes the context
    let uniqueProp = Math.random();

    while (currentContext[uniqueProp] !== undefined) {
      uniqueProp = Math.random();
    }

    currentContext[uniqueProp] = callback;
    //Call fn with remaining args & args provided to returned fn
    let result = currentContext[uniqueProp](...bindArgs, ...args2);

    delete currentContext[uniqueProp];
    return result;
  };
};

const bindFunction = printName.myBind(myName, "Bangalore");
bindFunction("India"); // "Samarth Nehe, Bangalore - India"
