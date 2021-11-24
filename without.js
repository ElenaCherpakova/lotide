const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1, arr2) === true ? "✅✅✅ " : "🛑🛑🛑");
};
const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!source.includes(itemsToRemove[i])) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};

console.log(without([1, 2, 3], [2]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


