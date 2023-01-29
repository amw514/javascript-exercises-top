const sumAll = function (min, max) {
  let sum = 0;
  for (i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};
sumAll(2, 4);

// Do not edit below this line
module.exports = sumAll;
