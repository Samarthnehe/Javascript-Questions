// DIFFICULTY LEVEL: MEDIUM
// COMPANY TAGS: TEKION, LINKEDIN

class EventEmitter {
  subscriptions = new Map();
  subscribe(eventName, callback) {
    if (!this.subscriptions.has(eventName)) {
      // if eventName is not in the map, add it.
      this.subscriptions.set(eventName, new Set());
    }
    // retrieve the set mapped to this eventName
    const subscriptions = this.subscriptions.get(eventName);
    // create a object {callback: callback}
    const callbackObj = { callback };
    // add object to the set
    subscriptions.add(callbackObj);
    return {
      // because we should be able to do s1.release(), subscribe should return an object with release as a function
      release: () => {
        // delete callback from the set
        subscriptions.delete(callbackObj);
        // after deleting callback, if eventname set is empty, delete the eventName
        if (subscriptions.size === 0) {
          delete this.subscriptions.eventName;
        }
      },
    };
  }

  emit(eventName, ...args) {
    // retrieve the set from map using eventName
    const subscriptions = this.subscriptions.get(eventName);
    if (subscriptions) {
      // map through the set and call the callbacks with args.
      subscriptions.forEach((cbObj) => {
        cbObj.callback(...args);
      });
    }
  }
}
