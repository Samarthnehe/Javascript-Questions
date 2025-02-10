// DIFFICULTY LEVEL: MEDIUM
// COMPANY TAGS: INTUIT

function flattenObject(obj, parent = "", result = {}) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parent ? `${parent}.${key}` : key; // Build the new key (path)
      if (typeof obj[key] === "object" && obj[key] !== null) {
        // If the value is an object, recurse deeper
        flattenObject(obj[key], newKey, result);
      } else {
        // Otherwise, assign the value to the new flattened key
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

const nestedObj = {
  name: "Samarth",
  address: {
    city: "Bangalore",
    pin: {
      code: "452012",
    },
  },
};

const flattenedObj = flattenObject(nestedObj);
console.log(flattenedObj);
/* {
  address.city: "Bangalore",
  address.pin.code: "452012",
  name: "Samarth"
} */
