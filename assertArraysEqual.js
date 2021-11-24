const assertEqual = function(arr1, arr2) {
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
console.log(assertEqual([1, 2, 3], [1, 2, 3]));
