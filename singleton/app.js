// SINGLETON PATTERN - Manifestation of Module pattern.  Singleton object is an immediate anonymous function and can only return one instance of an object at the time.

// Repeated calls to the constructor would return same instance
// Maintains a private reference that nothing from the outside can access

// Uses - You want user object created at a time.  Login user, to prevent 2 users being created at once.

const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object("Object Instance!!!");
    return object;
  }
  return {
    getInstance: function () {
      // if not an instance
      if (!instance) {
        //then instance create instance
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Instantiate object
const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

// true because there is only allowed one instance
console.log(instanceA === instanceB);

console.log(instanceA);
