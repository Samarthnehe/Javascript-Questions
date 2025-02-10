// DIFFICULTY LEVEL: MEDIUM
// COMPANY TAGS: AMAZON

document.findByClass = function (requiredClass) {
  // This root will be your DOM body
  const root = this.body;

  function search(node) {
    // This is what will have all elements with required classname
    let result = [];
    // if class found append to result
    if (node.classList.contains(requiredClass)) {
      result.push(node);
    }

    // Iterate all children and do recursion for each element.
    for (let element of node.children) {
      result = result.concat(search(element));
    }
    // return the array in the end
    return result;
  }

  return search(root);
};
