const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    return (`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    return (`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};



const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let holder = sentence[i];
    if (holder !== " ") {
      if (results[holder] === undefined) {
        results[holder] = [i];
      } else results[holder].push(i);
    }
  }
  return results;
};



console.log(assertEqual(letterPositions("hello").h, [0]));
console.log(assertEqual(letterPositions("hello").e, [1]));
console.log(assertEqual(letterPositions("hello").l, [2, 3]));

