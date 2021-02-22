// OBSERVER PATTERN

// Allows to subscribe and unsubscribe to certain events / functionality
// Used to notify the DOM of certain elements to be updated (ANGULAR JS)

function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function (fn) {
    // FIlter out from the list whatever matches the callback function.  If there is no match, the callback gets to stay on the list.  THe filter returns a new list and reassigns the list of observers
    this.observers = this.observers.filter(function (item) {
      if (item != fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function () {
    this.observers.forEach(function (item) {
      item.call();
    });
  },
};

// Instantiate new EventObserver object
const click = new EventObserver();

// Event Listeners
document.querySelector(".sub-ms").addEventListener("click", function () {
  click.subscribe(getCurMilliseconds);
});
document.querySelector(".unsub-ms").addEventListener("click", function () {
  click.unsubscribe(getCurMilliseconds);
});
document.querySelector(".sub-s").addEventListener("click", function () {
  click.subscribe(getCurSeconds);
});
document.querySelector(".unsub-ss").addEventListener("click", function () {
  click.unsubscribe(getCurSeconds);
});
document.querySelector(".fire").addEventListener("click", function () {
  // will actually call the fire function
  click.fire();
});

// Click Handler - works after first subscription to milliseconds (then i can get milliseconds)
const getCurMilliseconds = function () {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};
const getCurSeconds = function () {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
