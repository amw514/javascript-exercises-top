const sumAll = function (min, max) {
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};
sumAll(1, 4);
// Do not edit below this line
module.exports = sumAll;
