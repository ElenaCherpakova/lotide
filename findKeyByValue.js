const assertEqual = function(actual, expected) {
  return (actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};


const findKeyByValue = function(bestShow, value) {
  const keyGenre = Object.keys(bestShow); // Object.keys function to help you easily search through all the object keys.
  for (let showName of keyGenre) {
    if (bestShow[showName] === value) return showName;
  }
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual((findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));