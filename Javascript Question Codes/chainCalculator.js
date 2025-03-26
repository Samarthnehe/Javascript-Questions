class Calculator {
  constructor(value) {
    this.result = value;
  }
  add(value) {
    this.result += value;
    return this;
  }
  subtract(value) {
    this.result -= value;
    return this;
  }
  multiply(value) {
    this.result *= value;
    return this;
  }
  divide(value) {
    if (value === 0) throw "Division by zero is not allowed";
    this.result /= value;
    return this;
  }
  power(value) {
    this.result **= value;
    return this;
  }
  getResult() {
    return this.result;
  }
}

const calculator = new Calculator(10);
console.log(calculator.add(2).subtract(3).multiply(2).getResult());
// 18
