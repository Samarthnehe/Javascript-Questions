// DIFFICULTY LEVEL: MEDIUM
// COMPANY TAGS: MEESHO

const groupBy = (values, keyFinder) => {
  // use reduce to store value and return in the end
  return values.reduce((acc, curr) => {
    // if keyFinder is function, pass the value to it
    // if keyFinder is a property, access the property
    const key =
      typeof keyFinder === "function" ? keyFinder(curr) : curr[keyFinder];

    // aggregate values based on the keys
    if (!acc[key]) {
      acc[key] = [curr]; // if acc does not have key, map it to array with curr in it
    } else {
      acc[key] = [...acc[key], curr]; // else append curr to acc[key]
    }

    return acc; // return acc (object in this case) to next iteration
  }, {});
};

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(["one", "two", "three"], "length"));
