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

const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 === 0) {
    return arr.slice(arr.length / 2 - 1, arr.length / 2 + 1)
  } else {
     let newArray = [];
     let middleNum = Math.round(arr.length /2)
     newArray.push(arr[middleNum -1]);
     return newArray;
  }
};


console.log(middle([1]))
console.log(middle([1, 2]))
console.log(middle([1, 2, 3]))
console.log(middle([1, 2, 3, 4, 5]))
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]

