const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays(arr1, arr2) === true ? "✅✅✅ " : "🛑🛑🛑");
};
const eqArrays = function(arr1, arr2) {
  if (arr1 !== arr2) return false;
  for (let i = 0; i < arr1; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
const countLetters = function(string) {
  const counts = {};
  for (const letter of string) {
    if (letter !== " ") {
      if (counts[letter]) {
        counts[letter] += 1;  // add it if the letter exist;
      } else {
        counts[letter] = 1; //create a letter if doesnt exist
      }
    }
  }
  return counts;
};

console.log(countLetters("lighthouse in the house"));
