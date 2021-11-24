const eqArrays = function(arr1, arr2) {
  let i = arr1.length;
  if (i !== arr2.length) return false;
  while (i--) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));

