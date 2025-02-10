// DIFFICULTY LEVEL: MEDIUM

function printName(city, country) {
  console.log(`${this.firstName} ${this.lastName}, ${city} - ${country}`);
}

const myName = {
  firstName: "Samarth",
  lastName: "Nehe",
};

Function.prototype.myCall = function (context, ...args) {
  let currentContext = context || globalThis;

  let randomProp = Math.random(); //create a random key

  while (currentContext[randomProp] !== undefined) {
    //just in case key already exists, keep creating new key
    randomProp = Math.random();
  }
  //assign the function to this random key (inside context object)
  currentContext[randomProp] = this;

  //now call the function with arguments passed to call. Now 'this' keyword inside the function will refer 'this' to the object.
  let result = currentContext[randomProp](...args);

  //after result delete the key
  delete currentContext[randomProp];
  return result;
};

printName.myCall(myName, "Bangalore", "India");
