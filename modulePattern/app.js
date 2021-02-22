// BASIC STRUCTURE

// // Iffy Module - runs right away
// (function() {
//   // Declare private variables and functions - meaning that you can't access them outside of the module

//   return {
//     // Declare public variables and functions
//   }
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function () {
// These modules are private
//   // let text = "Hello World";

//   const changeText = function () {
//     const element = document.querySelector("h1");
//     element.textContent = text;
//   };

//   // What we return is public and can be accessed outside of module
//   return {
//     callChangeText: function () {
//       changeText();
//       console.log(text);
//     },
//   };
// })();

// UICtrl.callChangeText();
// // UICtrl.changeText();

// console.log(UICtrl.text);

// REVEALING MODULE PATTERN - maps object literals to private functions that we want to reveal
// iffy function starts off as ()()     - and is a function that is invoked automatically
const ItemCtrl = (function () {
  // _data can be used since it is private
  let data = [];

  function add(item) {
    data.push(item);
    console.log("Item added....");
  }

  function get(id) {
    return data.find((item) => {
      //return item id if it is equal to the id
      return item.id === id;
    });
  }

  return {
    // This will reveal these methods (AKA the functions above)
    add: add,
    get: get,
  };
})();

ItemCtrl.add({ id: 1, name: "John" });
ItemCtrl.add({ id: 2, name: "Mark" });
console.log(ItemCtrl.get(2));
