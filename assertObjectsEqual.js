
const eqObjects = function(object1, object2) {
  const arr1 = Object.keys(object1);
  const arr2 = Object.keys(object2);

  if (arr1.length !== arr2.length){
    return false;
  }
  for (let key of arr1) {
    if (object1[key] !== object2[key]){
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)){
    return (`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }else {
    return (`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  };
}

console.log(assertObjectsEqual({ a: "1", b: "2" },{ b: 2, a: '1' })) //true

