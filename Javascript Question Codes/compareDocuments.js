// DIFFICULTY LEVEL: HARD
// COMPANY TAGS: AMAZON, GOOGLE

const document1 = {
  name: "Samarth",
  age: 24,
  address: {
    city: "Bangalore",
  },
  phone: "6303897763",
  friends: {
    friend2: { name: "Rohit", age: 22 },
  },
  hobbies: ["Playing guitar"],
};
const document2 = {
  name: "Rohan",
  age: 24,
  address: {
    city: "Hyderabad",
  },
  phone: "8106788344",
  friends: {
    friend2: { name: "Rohit", age: 21 },
  },
  country: "Bharat",
};

function compareObjects(obj1, obj2) {
  const difference = {};
  const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
  const compareKeys = (key, obj1, obj2, parent) => {
    if (!(key in obj1)) {
      // Key added in obj2
      parent[key] = { to: obj2[key], from: "Empty" };
    } else if (!(key in obj2)) {
      // Key removed from obj1
      parent[key] = { from: obj1[key], to: "Empty" };
    } else if (
      typeof obj1[key] === "object" &&
      obj1[key] !== null &&
      typeof obj2[key] === "object" &&
      obj2[key] !== null
    ) {
      // Use recursion to compare values if object
      parent[key] = compareObjects(obj1[key], obj2[key]);
    } else if (obj1[key] !== obj2[key]) {
      parent[key] = { from: obj1[key], to: obj2[key] };
    }
  };
  keys.forEach((key) => compareKeys(key, obj1, obj2, difference));
  return difference;
}
