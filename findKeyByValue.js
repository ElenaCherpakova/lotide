const eqArrays = function(arr1, arr2) {
  if (arr1 !== arr2) {
    return false;
  } for (var i = 0; i < arr1; i++){
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
};

const assertEqual = function (arr1, arr2) {
  const result = eqArrays (arr1, arr2);
    if (result) {
      return (`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    } else {
      return (`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
}
}



const findKeyByValue = function(bestShow, value) {
  const keyGenre = Object.keys(bestShow); 
  for (let showName of keyGenre) {
    if (bestShow[showName] === value) return showName;
  }
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);