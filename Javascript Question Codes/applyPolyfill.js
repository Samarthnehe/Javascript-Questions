// DIFFICULTY LEVEL: MEDIUM

function printName(city, country) {
  console.log(`${this.firstName} ${this.lastName}, ${city} - ${country}`);
}

const myName = {
  firstName: "Samarth",
  lastName: "Nehe",
};

Function.prototype.myApply = function (context, args) {
  let currentContext = context || globalThis;
  let uniqueProp = Math.random(); //create a random key

  while (currentContext[uniqueProp] !== undefined) {
    //just in case key already exists, keep creating new key
    uniqueProp = Math.random();
  }
  currentContext[uniqueProp] = this;

  //now call the function with arguments passed to call. Now 'this' keyword inside the function will refer 'this' to the object.
  let result = currentContext[uniqueProp](...args);
  //after result delete the key
  delete currentContext[uniqueProp];
  return result;
};

printName.myApply(myName, ["Bangalore", "India"]);
