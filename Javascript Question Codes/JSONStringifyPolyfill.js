// DIFFICULTY LEVEL: HARD
// COMPANY TAGS: AMAZON

function JSONStringify(value) {
  // Helper function to handle recursion
  function helper(value) {
    // Handle null and undefined
    if (value === null || value === undefined) {
      return "null";
    }

    // Handle primitives (strings, numbers, booleans)
    if (typeof value === "string") {
      return `"${value}"`;
    }
    if (typeof value === "number" || typeof value === "boolean") {
      return String(value);
    }

    // Handle arrays
    if (Array.isArray(value)) {
      let result = value.map(stringifyHelper).join(",");
      return `[${result}]`;
    }

    // Handle objects
    if (typeof value === "object") {
      // Prevent circular references by keeping track of already visited objects
      const seen = new Set();
      function handleObject(value) {
        if (value === null) return "null";
        if (seen.has(value)) return "{}"; // Circular reference case

        seen.add(value);

        const keys = Object.keys(value);
        const result = keys
          .map((key) => {
            const keyString = `"${key}"`; // Key must be a string enclosed in double quotes
            const valueString = helper(value[key]);
            return `${keyString}:${valueString}`;
          })
          .join(",");

        return `{${result}}`;
      }

      return handleObject(value);
    }

    // Handle any other types (functions, etc.)
    return undefined;
  }

  return helper(value);
}

console.log(
  JSONStringify({
    name: "Samarth",
    address: {
      city: "Bangalore",
    },
  })
);
{
  /* "name":"Samarth","address":{"city":"Bangalore"} */
}
