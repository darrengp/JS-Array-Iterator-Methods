// a space for your code along notes 🏄‍♀️

// Array Methods ////////-----------

let myFruits = ["banana", "mango", "apple", "pear", "strawberry", "rasberry"];

myFruits.push("blackberry");
console.log(myFruits);

////// foreach() /////// ------------------------- does not edit the original array
myFruits.forEach(function (fruit) {
  console.log(fruit);
});

/// map() ////////////// -------------------------- returns a new array mapped from the orinal one always needs a return statement

let myFavoriteFruit = myFruits.map(function (fruit) {
  return `One of my favortie fruit is ${fruit}`;
});

console.log(myFavoriteFruit);
