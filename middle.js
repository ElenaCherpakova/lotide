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



module.exports = middle;



