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

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1;  //count if it's found
      } else {
        results[item] = 1; //doesn't count 
      }
    }
}
return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertArraysEqual(result1["Jason"], 1));
console.log(assertArraysEqual(result1["Karima"], undefined));
console.log(assertArraysEqual(result1["Fang"], 2));
console.log(assertArraysEqual(result1["Agouhanna"], undefined));