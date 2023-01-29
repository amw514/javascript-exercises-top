const removeFromArray = function (array, num) {
  return array.filter((x) => x !== num);
};
removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
